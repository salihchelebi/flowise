import { useEffect, useState, useCallback, useRef, useContext } from 'react'
import ReactFlow, { Controls, Background, useNodesState, useEdgesState } from 'reactflow'
import 'reactflow/dist/style.css'
import '@/views/canvas/index.css'

import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// material-ui
import { Toolbar, Box, AppBar, Tooltip } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import AgentFlowNode from './AgentFlowNode'
import AgentFlowEdge from './AgentFlowEdge'
import IterationNode from './IterationNode'
import MarketplaceCanvasHeader from '@/views/marketplaces/MarketplaceCanvasHeader'
import StickyNote from './StickyNote'
import EditNodeDialog from '@/views/agentflowsv2/EditNodeDialog'
import { flowContext } from '@/store/context/ReactFlowContext'

// icons
import { IconMagnetFilled, IconMagnetOff, IconArtboard, IconArtboardOff } from '@tabler/icons-react'

const nodeTypes = { agentFlow: AgentFlowNode, stickyNote: StickyNote, iteration: IterationNode }
const edgeTypes = { agentFlow: AgentFlowEdge }

// ==============================|| CANVAS ||============================== //

const MarketplaceCanvasV2 = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const customization = useSelector((state) => state.customization)

    const { state } = useLocation()
    const { flowData, name } = state

    // ==============================|| ReactFlow ||============================== //

    const [nodes, setNodes, onNodesChange] = useNodesState()
    const [edges, setEdges, onEdgesChange] = useEdgesState()
    const [editNodeDialogOpen, setEditNodeDialogOpen] = useState(false)
    const [editNodeDialogProps, setEditNodeDialogProps] = useState({})
    const [isSnappingEnabled, setIsSnappingEnabled] = useState(false)
    const [isBackgroundEnabled, setIsBackgroundEnabled] = useState(true)

    const reactFlowWrapper = useRef(null)
    const { setReactFlowInstance } = useContext(flowContext)

    // ==============================|| useEffect ||============================== //

    useEffect(() => {
        if (flowData) {
            const initialFlow = JSON.parse(flowData)
            setNodes(initialFlow.nodes || [])
            setEdges(initialFlow.edges || [])
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [flowData])

    const onChatflowCopy = (currentFlowData) => {
        const templateFlowData = JSON.stringify(currentFlowData)
        navigate('/v2/agentcanvas', { state: { templateFlowData } })
    }

    // eslint-disable-next-line
    const onNodeDoubleClick = useCallback((event, node) => {
        if (!node || !node.data) return

        if (node.data.name === 'stickyNoteAgentflow') {
            // not açma penceresi gösterilmez
        } else {
            const dialogProps = {
                data: node.data,
                inputParams: node.data.inputParams.filter((inputParam) => !inputParam.hidden),
                disabled: true
            }

            setEditNodeDialogProps(dialogProps)
            setEditNodeDialogOpen(true)
        }
    })

    return (
        <>
            <Box>
                <AppBar
                    enableColorOnDark
                    position='fixed'
                    color='inherit'
                    elevation={1}
                    sx={{
                        bgcolor: theme.palette.background.default
                    }}
                >
                    <Toolbar>
                        <MarketplaceCanvasHeader
                            flowName={name}
                            flowData={JSON.parse(flowData)}
                            onChatflowCopy={(currentFlowData) => onChatflowCopy(currentFlowData)}
                        />
                    </Toolbar>
                </AppBar>

                <Box sx={{ pt: '70px', height: '100vh', width: '100%' }}>
                    <div className='reactflow-parent-wrapper'>
                        <div className='reactflow-wrapper' ref={reactFlowWrapper}>
                            <ReactFlow
                                nodes={nodes}
                                edges={edges}
                                onNodesChange={onNodesChange}
                                onEdgesChange={onEdgesChange}
                                onNodeDoubleClick={onNodeDoubleClick}
                                onInit={setReactFlowInstance}
                                nodeTypes={nodeTypes}
                                edgeTypes={edgeTypes}
                                fitView
                                minZoom={0.1}
                                snapGrid={[25, 25]}
                                snapToGrid={isSnappingEnabled}
                            >
                                <Controls
                                    className={customization.isDarkMode ? 'dark-mode-controls' : ''}
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <Tooltip title={isSnappingEnabled ? 'Izgaraya hizalamayı kapat' : 'Izgaraya hizalamayı aç'} placement='top'>
                                        <button
                                            className='react-flow__controls-button react-flow__controls-interactive'
                                            onClick={() => {
                                                setIsSnappingEnabled(!isSnappingEnabled)
                                            }}
                                            title={isSnappingEnabled ? 'Izgaraya hizalamayı kapat' : 'Izgaraya hizalamayı aç'}
                                            aria-label={isSnappingEnabled ? 'Izgaraya hizalamayı kapat' : 'Izgaraya hizalamayı aç'}
                                        >
                                            {isSnappingEnabled ? <IconMagnetFilled /> : <IconMagnetOff />}
                                        </button>
                                    </Tooltip>

                                    <Tooltip title={isBackgroundEnabled ? 'Arka plan ızgarasını gizle' : 'Arka plan ızgarasını göster'} placement='top'>
                                        <button
                                            className='react-flow__controls-button react-flow__controls-interactive'
                                            onClick={() => {
                                                setIsBackgroundEnabled(!isBackgroundEnabled)
                                            }}
                                            title={isBackgroundEnabled ? 'Arka plan ızgarasını gizle' : 'Arka plan ızgarasını göster'}
                                            aria-label={isBackgroundEnabled ? 'Arka plan ızgarasını gizle' : 'Arka plan ızgarasını göster'}
                                        >
                                            {isBackgroundEnabled ? <IconArtboard /> : <IconArtboardOff />}
                                        </button>
                                    </Tooltip>
                                </Controls>

                                {isBackgroundEnabled && <Background color='#aaa' gap={16} />}

                                <EditNodeDialog
                                    show={editNodeDialogOpen}
                                    dialogProps={editNodeDialogProps}
                                    onCancel={() => setEditNodeDialogOpen(false)}
                                />
                            </ReactFlow>
                        </div>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default MarketplaceCanvasV2
