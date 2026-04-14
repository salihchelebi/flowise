import PropTypes from 'prop-types'
import { useState } from 'react'

// material-ui
import { styled, useTheme } from '@mui/material/styles'
import { Box, Typography, Divider, Button, Tooltip } from '@mui/material'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import NodeInputHandler from '@/views/canvas/NodeInputHandler'
import NodeOutputHandler from '@/views/canvas/NodeOutputHandler'
import AdditionalParamsDialog from '@/ui-component/dialog/AdditionalParamsDialog'

// const
import { baseURL } from '@/store/constant'
import LlamaindexPNG from '@/assets/images/llamaindex.png'

const CardWrapper = styled(MainCard)(({ theme }) => ({
    background: theme.palette.card.main,
    color: theme.darkTextPrimary,
    border: 'solid 1px',
    borderColor: theme.palette.primary[200] + 75,
    width: '300px',
    height: 'auto',
    padding: '10px',
    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
    '&:hover': {
        borderColor: theme.palette.primary.main
    }
}))

const NODE_LABELS = {
    chatOpenAI: 'OpenAI Sohbet Modeli',
    chatAnthropic: 'Anthropic Sohbet Modeli',
    chatGoogleGenerativeAI: 'Google Sohbet Modeli',
    openAI: 'OpenAI Modeli',
    promptTemplate: 'Komut Şablonu',
    chatPromptTemplate: 'Sohbet Komut Şablonu',
    conversationChain: 'Konuşma Akışı',
    llmChain: 'Model Çalışma Adımı',
    conversationalRetrievalQAChain: 'Bilgi Tabanlı Soru Cevap Akışı',
    retrievalQAChain: 'Bilgi Getirerek Cevap Üretme',
    vectorStoreRetriever: 'Bilgi Deposu Arayıcısı',
    bufferMemory: 'Kısa Süreli Konuşma Hafızası',
    bufferWindowMemory: 'Yakın Mesaj Hafızası',
    conversationSummaryMemory: 'Özet Hafıza',
    documentStore: 'Belge Deposu',
    customTool: 'Özel Araç',
    agent: 'Ajan',
    toolAgent: 'Araç Kullanan Ajan',
    openAIToolAgent: 'OpenAI Araç Ajanı',
    supervisor: 'Yönetici Ajan',
    worker: 'Görev Ajanı',
    http: 'İnternet İsteği',
    calculator: 'Hesaplayıcı',
    ifElseFunction: 'Koşul Kontrolü',
    stickyNote: 'Not',
    stickyNoteAgentflow: 'Not'
}

const prettifyLabel = (label) => {
    if (!label) return ''

    if (NODE_LABELS[label]) return NODE_LABELS[label]

    const spaced = label
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .trim()

    return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

const getNodeHelperText = (data) => {
    const rawName = data?.name || ''
    const rawLabel = data?.label || ''
    const key = rawName || rawLabel

    const helpers = {
        chatOpenAI: 'Bu adım, yapay zekadan cevap almak için kullanılır.',
        chatAnthropic: 'Bu adım, Anthropic modelinden cevap almak için kullanılır.',
        chatGoogleGenerativeAI: 'Bu adım, Google modelinden cevap almak için kullanılır.',
        openAI: 'Bu adım, OpenAI modelini akış içinde çalıştırır.',
        promptTemplate: 'Bu adım, modele verilecek komut metnini düzenler.',
        chatPromptTemplate: 'Bu adım, sohbet biçiminde komut hazırlamak için kullanılır.',
        conversationChain: 'Bu adım, kullanıcıyla konuşmayı belli bir sıraya göre yürütür.',
        llmChain: 'Bu adım, modelin belirli bir işi yapması için kullanılır.',
        conversationalRetrievalQAChain: 'Bu adım, bilgi deposundan veri bulup buna göre cevap üretir.',
        retrievalQAChain: 'Bu adım, ilgili bilgiyi getirip cevap oluşturur.',
        vectorStoreRetriever: 'Bu adım, kayıtlı bilgiler içinden en ilgili olanları bulur.',
        bufferMemory: 'Bu adım, kısa süreli konuşma geçmişini hatırlamak için kullanılır.',
        bufferWindowMemory: 'Bu adım, sadece son mesajları hafızada tutar.',
        conversationSummaryMemory: 'Bu adım, uzun konuşmayı özetleyerek hafızayı daha verimli kullanır.',
        documentStore: 'Bu adım, belge tabanlı bilgi kaynağıyla çalışır.',
        customTool: 'Bu adım, özel bir aracı akış içinde kullanır.',
        agent: 'Bu adım, kendi başına karar verebilen bir ajan çalıştırır.',
        toolAgent: 'Bu adım, gerektiğinde araç kullanabilen bir ajan çalıştırır.',
        openAIToolAgent: 'Bu adım, OpenAI destekli ve araç kullanabilen bir ajan çalıştırır.',
        supervisor: 'Bu adım, diğer ajanları yöneten ana karar vericidir.',
        worker: 'Bu adım, verilen görevi yerine getiren yardımcı ajandır.',
        http: 'Bu adım, başka bir servise internet isteği gönderir.',
        calculator: 'Bu adım, basit hesaplamaları yapar.',
        ifElseFunction: 'Bu adım, koşula göre hangi yoldan devam edileceğini belirler.',
        stickyNote: 'Bu alan sadece açıklama notu içindir.',
        stickyNoteAgentflow: 'Bu alan sadece açıklama notu içindir.'
    }

    return helpers[key] || `${prettifyLabel(rawLabel || rawName)} adımı burada nasıl bir görev yapıldığını gösterir.`
}

// ===========================|| CANVAS NODE ||=========================== //

const MarketplaceCanvasNode = ({ data }) => {
    const theme = useTheme()

    const [showDialog, setShowDialog] = useState(false)
    const [dialogProps, setDialogProps] = useState({})

    const onDialogClicked = () => {
        const nextDialogProps = {
            data,
            inputParams: data.inputParams.filter((param) => param.additionalParams),
            disabled: true,
            confirmButtonName: 'Kaydet',
            cancelButtonName: 'Vazgeç'
        }
        setDialogProps(nextDialogProps)
        setShowDialog(true)
    }

    const displayLabel = prettifyLabel(data.label || data.name)
    const helperText = getNodeHelperText(data)

    return (
        <>
            <CardWrapper
                content={false}
                sx={{
                    padding: 0,
                    borderColor: data.selected ? theme.palette.primary.main : theme.palette.text.secondary
                }}
                border={false}
            >
                <Box>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Box style={{ width: 50, marginRight: 10, padding: 5 }}>
                            <div
                                style={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.largeAvatar,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    cursor: 'grab'
                                }}
                            >
                                <img
                                    style={{ width: '100%', height: '100%', padding: 5, objectFit: 'contain' }}
                                    src={`${baseURL}/api/v1/node-icon/${data.name}`}
                                    alt='Node'
                                />
                            </div>
                        </Box>

                        <Box>
                            <Tooltip title={helperText} placement='top' arrow>
                                <Typography
                                    sx={{
                                        fontSize: '1rem',
                                        fontWeight: 500
                                    }}
                                >
                                    {displayLabel}
                                </Typography>
                            </Tooltip>
                        </Box>

                        <div style={{ flexGrow: 1 }}></div>

                        {data.tags && data.tags.includes('LlamaIndex') && (
                            <div
                                style={{
                                    borderRadius: '50%',
                                    padding: 15
                                }}
                            >
                                <Tooltip title='Bu adım LlamaIndex altyapısını kullanır.' placement='top' arrow>
                                    <img
                                        style={{ width: '25px', height: '25px', borderRadius: '50%', objectFit: 'contain' }}
                                        src={LlamaindexPNG}
                                        alt='LlamaIndex'
                                    />
                                </Tooltip>
                            </div>
                        )}
                    </div>

                    <Box sx={{ px: 2, pb: 1 }}>
                        <Typography variant='caption' sx={{ color: theme.palette.text.secondary }}>
                            {helperText}
                        </Typography>
                    </Box>

                    {(data.inputAnchors.length > 0 || data.inputParams.length > 0) && (
                        <>
                            <Divider />
                            <Box sx={{ background: theme.palette.asyncSelect.main, p: 1 }}>
                                <Typography
                                    sx={{
                                        fontWeight: 500,
                                        textAlign: 'center'
                                    }}
                                >
                                    Girdiler
                                </Typography>
                            </Box>
                            <Divider />
                        </>
                    )}

                    {data.inputAnchors.map((inputAnchor, index) => (
                        <NodeInputHandler disabled={true} key={index} inputAnchor={inputAnchor} data={data} />
                    ))}

                    {data.inputParams
                        .filter((inputParam) => inputParam.display !== false)
                        .map((inputParam, index) => (
                            <NodeInputHandler disabled={true} key={index} inputParam={inputParam} data={data} />
                        ))}

                    {data.inputParams.find((param) => param.additionalParams) && (
                        <div
                            style={{
                                textAlign: 'center',
                                marginTop:
                                    data.inputParams.filter((param) => param.additionalParams).length ===
                                    data.inputParams.length + data.inputAnchors.length
                                        ? 20
                                        : 0
                            }}
                        >
                            <Button sx={{ borderRadius: 25, width: '90%', mb: 2 }} variant='outlined' onClick={onDialogClicked}>
                                Ek Ayarları Gör
                            </Button>
                        </div>
                    )}

                    <Divider />
                    <Box sx={{ background: theme.palette.asyncSelect.main, p: 1 }}>
                        <Typography
                            sx={{
                                fontWeight: 500,
                                textAlign: 'center'
                            }}
                        >
                            Çıktı
                        </Typography>
                    </Box>
                    <Divider />

                    {data.outputAnchors.map((outputAnchor, index) => (
                        <NodeOutputHandler disabled={true} key={index} outputAnchor={outputAnchor} data={data} />
                    ))}
                </Box>
            </CardWrapper>

            <AdditionalParamsDialog show={showDialog} dialogProps={dialogProps} onCancel={() => setShowDialog(false)} />
        </>
    )
}

MarketplaceCanvasNode.propTypes = {
    data: PropTypes.object
}

export default MarketplaceCanvasNode
