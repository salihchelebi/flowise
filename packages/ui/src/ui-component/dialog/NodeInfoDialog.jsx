import { createPortal } from 'react-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

// Material
import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import { TableViewOnly } from '@/ui-component/table/Table'
import { IconBook2 } from '@tabler/icons-react'
import { useTheme } from '@mui/material/styles'

// Store
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
import { baseURL, AGENTFLOW_ICONS } from '@/store/constant'

// API
import configApi from '@/api/config'
import useApi from '@/hooks/useApi'
import {
    canvasUIText,
    getLocalizedNodeDescription,
    getLocalizedNodeLabel,
    getNodeLearnMoreData,
    getNodeWhenToUseText,
    getVisibleBadgeLabel
} from '@/views/canvas/canvasI18n'

const NodeInfoDialog = ({ show, dialogProps, onCancel }) => {
    const portalElement = document.getElementById('portal')
    const dispatch = useDispatch()
    const theme = useTheme()

    const getNodeConfigApi = useApi(configApi.getNodeConfig)
    const nodeData = dialogProps?.data
    const tags = Array.isArray(nodeData?.tags) ? nodeData.tags : []
    const learnMoreData = getNodeLearnMoreData(nodeData)

    const renderIcon = (node) => {
        const foundIcon = AGENTFLOW_ICONS.find((icon) => icon.name === node.name)

        if (!foundIcon) return null
        return <foundIcon.icon size={24} color={'white'} />
    }

    useEffect(() => {
        if (nodeData) {
            getNodeConfigApi.request(nodeData)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nodeData])

    useEffect(() => {
        if (show) dispatch({ type: SHOW_CANVAS_DIALOG })
        else dispatch({ type: HIDE_CANVAS_DIALOG })
        return () => dispatch({ type: HIDE_CANVAS_DIALOG })
    }, [show, dispatch])

    const component = show ? (
        <Dialog
            onClose={onCancel}
            open={show}
            fullWidth
            maxWidth='md'
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
        >
            <DialogTitle sx={{ fontSize: '1rem' }} id='alert-dialog-title'>
                {nodeData && nodeData.name && nodeData.label && (
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {nodeData.color && !nodeData.icon ? (
                            <div
                                style={{
                                    ...theme.typography.commonAvatar,
                                    ...theme.typography.largeAvatar,
                                    borderRadius: '15px',
                                    backgroundColor: nodeData.color,
                                    cursor: 'grab',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    background: nodeData.color,
                                    marginRight: 10
                                }}
                            >
                                {renderIcon(nodeData)}
                            </div>
                        ) : (
                            <div
                                style={{
                                    width: 50,
                                    height: 50,
                                    marginRight: 10,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    flexShrink: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        padding: 7,
                                        borderRadius: '50%',
                                        objectFit: 'contain'
                                    }}
                                    alt={nodeData.name}
                                    src={`${baseURL}/api/v1/node-icon/${nodeData.name}`}
                                />
                            </div>
                        )}
                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
                            {getLocalizedNodeLabel(nodeData)}
                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        width: 'max-content',
                                        borderRadius: 15,
                                        background: 'rgb(254,252,191)',
                                        padding: 5,
                                        paddingLeft: 10,
                                        paddingRight: 10,
                                        marginTop: 5,
                                        marginBottom: 5
                                    }}
                                >
                                    <span style={{ color: 'rgb(116,66,16)', fontSize: '0.825rem' }}>{nodeData.id}</span>
                                </div>
                                {nodeData.version && (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: 'max-content',
                                            borderRadius: 15,
                                            background: '#e9edc9',
                                            padding: 5,
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            marginTop: 5,
                                            marginLeft: 10,
                                            marginBottom: 5
                                        }}
                                    >
                                        <span style={{ color: '#606c38', fontSize: '0.825rem' }}>
                                            {canvasUIText.version} {nodeData.version}
                                        </span>
                                    </div>
                                )}
                                {nodeData.badge && (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            width: 'max-content',
                                            borderRadius: 15,
                                            background: nodeData.badge === 'DEPRECATING' ? '#ffe57f' : '#52b69a',
                                            padding: 5,
                                            paddingLeft: 10,
                                            paddingRight: 10,
                                            marginTop: 5,
                                            marginLeft: 10,
                                            marginBottom: 5
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: nodeData.badge !== 'DEPRECATING' ? 'white' : 'inherit',
                                                fontSize: '0.825rem'
                                            }}
                                        >
                                            {getVisibleBadgeLabel(nodeData.badge)}
                                        </span>
                                    </div>
                                )}
                                {tags.length > 0 &&
                                    tags.map((tag, index) => (
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                width: 'max-content',
                                                borderRadius: 15,
                                                background: '#cae9ff',
                                                padding: 5,
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                marginTop: 5,
                                                marginLeft: 10,
                                                marginBottom: 5
                                            }}
                                            key={index}
                                        >
                                            <span
                                                style={{
                                                    color: '#023e7d',
                                                    fontSize: '0.825rem'
                                                }}
                                            >
                                                {tag.toLowerCase()}
                                            </span>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div style={{ flex: 1 }}></div>
                        {nodeData.documentation && (
                            <Button
                                variant='outlined'
                                color='primary'
                                title={canvasUIText.openDocumentation}
                                onClick={() => {
                                    window.open(nodeData.documentation, '_blank', 'noopener,noreferrer')
                                }}
                                startIcon={<IconBook2 />}
                            >
                                {canvasUIText.documentation}
                            </Button>
                        )}
                    </div>
                )}
            </DialogTitle>
            <DialogContent>
                {nodeData && (
                    <div
                        style={{
                            padding: 10,
                            marginBottom: 10
                        }}
                    >
                        <div style={{ fontWeight: 600, marginBottom: 4 }}>{canvasUIText.nodePurpose}</div>
                        <span>{getLocalizedNodeDescription(nodeData)}</span>
                        <div style={{ fontWeight: 600, marginTop: 10, marginBottom: 4 }}>{canvasUIText.nodeWhenToUse}</div>
                        <span>{getNodeWhenToUseText(nodeData)}</span>
                        {learnMoreData && (
                            <>
                                <div style={{ fontWeight: 600, marginTop: 10, marginBottom: 4 }}>{canvasUIText.learnMoreSummary}</div>
                                <span>{learnMoreData.summary}</span>
                                <div style={{ fontWeight: 600, marginTop: 10, marginBottom: 4 }}>{canvasUIText.learnMoreGuide}</div>
                                <ul style={{ marginTop: 0, marginBottom: 8, paddingLeft: 20 }}>
                                    {learnMoreData.bullets.map((bullet, index) => (
                                        <li key={index} style={{ marginBottom: 4 }}>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <div style={{ fontWeight: 600, marginTop: 10, marginBottom: 4 }}>{canvasUIText.learnMoreExample}</div>
                                <span>{learnMoreData.example}</span>
                            </>
                        )}
                    </div>
                )}
                {getNodeConfigApi.data && getNodeConfigApi.data.length > 0 && (
                    <TableViewOnly
                        rows={getNodeConfigApi.data.map((obj) => {
                            // eslint-disable-next-line
                            const { node, nodeId, ...rest } = obj
                            return rest
                        })}
                        columns={Object.keys(getNodeConfigApi.data[0]).slice(-3)}
                    />
                )}
            </DialogContent>
        </Dialog>
    ) : null

    return createPortal(component, portalElement)
}

NodeInfoDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func
}

export default NodeInfoDialog
