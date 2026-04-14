import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

// material-ui
import { styled } from '@mui/material/styles'
import { Box, Grid, Tooltip, Typography, useTheme } from '@mui/material'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import MoreItemsTooltip from '../tooltip/MoreItemsTooltip'

const CardWrapper = styled(MainCard)(({ theme }) => ({
    background: theme.palette.card.main,
    color: theme.darkTextPrimary,
    overflow: 'auto',
    position: 'relative',
    boxShadow: '0 2px 14px 0 rgb(32 40 45 / 8%)',
    cursor: 'pointer',
    '&:hover': {
        background: theme.palette.card.hover,
        boxShadow: '0 2px 14px 0 rgb(32 40 45 / 20%)'
    },
    height: '100%',
    minHeight: '160px',
    maxHeight: '300px',
    width: '100%',
    overflowWrap: 'break-word',
    whiteSpace: 'pre-line'
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

const prettifyNodeLabel = (label) => {
    if (!label) return ''

    if (NODE_LABELS[label]) return NODE_LABELS[label]

    const spaced = label
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .trim()

    return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

const getCardDescription = (data) => {
    if (data.description && data.description.trim()) return data.description

    if (data.type === 'Tool') {
        return 'Hazır bir araç yapısını inceleyip kendi kullanımına göre ekleyebilirsin.'
    }

    if (data.type === 'AgentflowV2') {
        return 'Bu gelişmiş ajan akışını açıp adımlarını inceleyebilir, sonra kendi çalışma alanına kopyalayabilirsin.'
    }

    return 'Bu hazır akışı açıp nasıl çalıştığını inceleyebilir, sonra kendi ihtiyacına göre kullanabilirsin.'
}

// ===========================|| CONTRACT CARD ||=========================== //

const ItemCard = ({ data, images, icons, onClick }) => {
    const theme = useTheme()
    const customization = useSelector((state) => state.customization)

    const title = data.templateName || data.name
    const description = getCardDescription(data)

    return (
        <CardWrapper content={false} onClick={onClick} sx={{ border: 1, borderColor: theme.palette.grey[900] + 25, borderRadius: 2 }}>
            <Box sx={{ height: '100%', p: 2.25 }}>
                <Grid container justifyContent='space-between' direction='column' sx={{ height: '100%', gap: 3 }}>
                    <Box display='flex' flexDirection='column' sx={{ width: '100%' }}>
                        <div
                            style={{
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                overflow: 'hidden'
                            }}
                        >
                            {data.iconSrc && (
                                <div
                                    style={{
                                        width: 35,
                                        height: 35,
                                        display: 'flex',
                                        flexShrink: 0,
                                        marginRight: 10,
                                        borderRadius: '50%',
                                        backgroundImage: `url(${data.iconSrc})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center center'
                                    }}
                                ></div>
                            )}

                            {!data.iconSrc && data.color && (
                                <div
                                    style={{
                                        width: 35,
                                        height: 35,
                                        display: 'flex',
                                        flexShrink: 0,
                                        marginRight: 10,
                                        borderRadius: '50%',
                                        background: data.color
                                    }}
                                ></div>
                            )}

                            <Tooltip title={title || ''} placement='top'>
                                <Typography
                                    sx={{
                                        display: '-webkit-box',
                                        fontSize: '1.25rem',
                                        fontWeight: 500,
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {title}
                                </Typography>
                            </Tooltip>
                        </div>

                        {description && (
                            <Tooltip title={description} placement='top'>
                                <span
                                    style={{
                                        display: '-webkit-box',
                                        marginTop: 10,
                                        overflowWrap: 'break-word',
                                        WebkitLineClamp: 3,
                                        WebkitBoxOrient: 'vertical',
                                        textOverflow: 'ellipsis',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {description}
                                </span>
                            </Tooltip>
                        )}
                    </Box>

                    {(images?.length > 0 || icons?.length > 0) && (
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'start',
                                gap: 1
                            }}
                        >
                            {[
                                ...(images || []).map((img) => ({
                                    type: 'image',
                                    src: img.imageSrc,
                                    label: prettifyNodeLabel(img.label)
                                })),
                                ...(icons || []).map((ic) => ({
                                    type: 'icon',
                                    icon: ic.icon,
                                    color: ic.color,
                                    label: prettifyNodeLabel(ic.name)
                                }))
                            ]
                                .slice(0, 3)
                                .map((item, index) => (
                                    <Tooltip key={item.src || index} title={item.label} placement='top'>
                                        {item.type === 'image' ? (
                                            <Box
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: '50%',
                                                    backgroundColor: customization.isDarkMode
                                                        ? theme.palette.common.white
                                                        : theme.palette.grey[300] + 75
                                                }}
                                            >
                                                <img
                                                    style={{ width: '100%', height: '100%', padding: 5, objectFit: 'contain' }}
                                                    alt=''
                                                    src={item.src}
                                                />
                                            </Box>
                                        ) : (
                                            <div
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <item.icon size={25} color={item.color} />
                                            </div>
                                        )}
                                    </Tooltip>
                                ))}

                            {(images?.length || 0) + (icons?.length || 0) > 3 && (
                                <MoreItemsTooltip
                                    images={[
                                        ...(images?.slice(3) || []).map((img) => ({
                                            ...img,
                                            label: prettifyNodeLabel(img.label)
                                        })),
                                        ...(icons?.slice(Math.max(0, 3 - (images?.length || 0))) || []).map((ic) => ({
                                            label: prettifyNodeLabel(ic.name)
                                        }))
                                    ]}
                                >
                                    <Typography
                                        sx={{
                                            alignItems: 'center',
                                            display: 'flex',
                                            fontSize: '.9rem',
                                            fontWeight: 200
                                        }}
                                    >
                                        + {(images?.length || 0) + (icons?.length || 0) - 3} bileşen daha
                                    </Typography>
                                </MoreItemsTooltip>
                            )}
                        </Box>
                    )}
                </Grid>
            </Box>
        </CardWrapper>
    )
}

ItemCard.propTypes = {
    data: PropTypes.object,
    images: PropTypes.array,
    icons: PropTypes.array,
    onClick: PropTypes.func
}

export default ItemCard
