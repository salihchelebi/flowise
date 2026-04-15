import { flatten } from 'lodash'
import { type StructuredTool } from '@langchain/core/tools'
import { DataSource } from 'typeorm'
import { getVars, handleEscapeCharacters, executeJavaScriptCode, createCodeExecutionSandbox } from '../../../src/utils'
import { ICommonObject, IDatabaseEntity, INode, INodeData, INodeOutputsValue, INodeParams } from '../../../src/Interface'

class CustomFunction_Utilities implements INode {
    label: string
    name: string
    version: number
    description: string
    type: string
    icon: string
    category: string
    tags: string[]
    baseClasses: string[]
    inputs: INodeParams[]
    outputs: INodeOutputsValue[]

    constructor() {
        this.label = 'Özel JS Fonksiyonu'
        this.name = 'customFunction'
        this.version = 3.0
        this.type = 'CustomFunction'
        this.icon = 'customfunction.svg'
        this.category = 'Utilities'
        this.description = `Akış içinde özel JavaScript kodu çalıştırır`
        this.baseClasses = [this.type, 'Utilities']
        this.tags = ['Utilities']
        this.inputs = [
            {
                label: 'Girdi Değişkenleri',
                name: 'functionInputVariables',
                description: 'Değişkenleri fonksiyon içinde $ önekiyle kullan. Örn: $var',
                type: 'json',
                optional: true,
                acceptVariable: true,
                list: true
            },
            {
                label: 'Fonksiyon Adı',
                name: 'functionName',
                type: 'string',
                optional: true,
                placeholder: 'Fonksiyonum'
            },
            {
                label: 'Ek Araçlar',
                description: 'Araçları fonksiyonda $tools.{tool_name}.invoke(args) ile çağır',
                name: 'tools',
                type: 'Tool',
                list: true,
                optional: true
            },
            {
                label: 'JavaScript Fonksiyonu',
                name: 'javascriptFunction',
                type: 'code'
            }
        ]
        this.outputs = [
            {
                label: 'Çıktı',
                name: 'output',
                baseClasses: ['string', 'number', 'boolean', 'json', 'array']
            },
            {
                label: 'Bitiş Düğümü',
                name: 'EndingNode',
                baseClasses: [this.type]
            }
        ]
    }

    async init(nodeData: INodeData, input: string, options: ICommonObject): Promise<any> {
        const isEndingNode = nodeData?.outputs?.output === 'EndingNode'
        if (isEndingNode && !options.isRun) return // prevent running both init and run twice

        const javascriptFunction = nodeData.inputs?.javascriptFunction as string
        const functionInputVariablesRaw = nodeData.inputs?.functionInputVariables
        const appDataSource = options.appDataSource as DataSource
        const databaseEntities = options.databaseEntities as IDatabaseEntity
        const tools = Object.fromEntries((flatten(nodeData.inputs?.tools) as StructuredTool[])?.map((tool) => [tool.name, tool]) ?? [])

        const variables = await getVars(appDataSource, databaseEntities, nodeData, options)
        const flow = {
            input,
            chatflowId: options.chatflowid,
            sessionId: options.sessionId,
            chatId: options.chatId,
            rawOutput: options.postProcessing?.rawOutput || '',
            chatHistory: options.postProcessing?.chatHistory || [],
            sourceDocuments: options.postProcessing?.sourceDocuments,
            usedTools: options.postProcessing?.usedTools,
            artifacts: options.postProcessing?.artifacts,
            fileAnnotations: options.postProcessing?.fileAnnotations
        }

        let inputVars: ICommonObject = {}
        if (functionInputVariablesRaw) {
            try {
                inputVars =
                    typeof functionInputVariablesRaw === 'object' ? functionInputVariablesRaw : JSON.parse(functionInputVariablesRaw)
            } catch (exception) {
                throw new Error('Invalid JSON in the Custom Function Input Variables: ' + exception)
            }
        }

        // Some values might be a stringified JSON, parse it
        for (const key in inputVars) {
            let value = inputVars[key]
            if (typeof value === 'string') {
                value = handleEscapeCharacters(value, true)
                if (value.startsWith('{') && value.endsWith('}')) {
                    try {
                        value = JSON.parse(value)
                    } catch (e) {
                        // ignore
                    }
                }
                inputVars[key] = value
            }
        }

        // Create additional sandbox variables
        const additionalSandbox: ICommonObject = {
            $tools: tools
        }

        // Add input variables to sandbox
        if (Object.keys(inputVars).length) {
            for (const item in inputVars) {
                additionalSandbox[`$${item}`] = inputVars[item]
            }
        }

        const sandbox = createCodeExecutionSandbox(input, variables, flow, additionalSandbox)

        try {
            const response = await executeJavaScriptCode(javascriptFunction, sandbox)

            if (typeof response === 'string' && !isEndingNode) {
                return handleEscapeCharacters(response, false)
            }
            return response
        } catch (e) {
            throw new Error(e)
        }
    }

    async run(nodeData: INodeData, input: string, options: ICommonObject): Promise<string> {
        return await this.init(nodeData, input, { ...options, isRun: true })
    }
}

module.exports = { nodeClass: CustomFunction_Utilities }
