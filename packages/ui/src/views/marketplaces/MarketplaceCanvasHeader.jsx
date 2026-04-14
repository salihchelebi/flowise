import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

// material-ui
import { useTheme } from '@mui/material/styles'
import { Avatar, Box, ButtonBase, Typography, Stack, Tooltip } from '@mui/material'
import { StyledButton } from '@/ui-component/button/StyledButton'

// icons
import { IconCopy, IconChevronLeft } from '@tabler/icons-react'
import { Available } from '@/ui-component/rbac/available'

// ==============================|| CANVAS HEADER ||============================== //

const MarketplaceCanvasHeader = ({ flowName, flowData, onChatflowCopy }) => {
    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <>
            <Box>
                <Tooltip title='Geri Dön' placement='bottom'>
                    <ButtonBase sx={{ borderRadius: '50%' }}>
                        <Avatar
                            variant='rounded'
                            sx={{
                                ...theme.typography.commonAvatar,
                                ...theme.typography.mediumAvatar,
                                transition: 'all .2s ease-in-out',
                                background: theme.palette.secondary.light,
                                color: theme.palette.secondary.dark,
                                '&:hover': {
                                    background: theme.palette.secondary.dark,
                                    color: theme.palette.secondary.light
                                }
                            }}
                            color='inherit'
                            onClick={() => navigate(-1)}
                        >
                            <IconChevronLeft stroke={1.5} size='1.3rem' />
                        </Avatar>
                    </ButtonBase>
                </Tooltip>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
                <Stack flexDirection='row'>
                    <Typography
                        sx={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            ml: 2
                        }}
                    >
                        {flowName}
                    </Typography>
                </Stack>
            </Box>

            <Available permission={'chatflows:create,agentflows.create'}>
                <Box>
                    <Tooltip title='Bu şablonu kendi çalışma alanına kopyalayıp düzenlemeye başla' placement='bottom'>
                        <span>
                            <StyledButton
                                color='secondary'
                                variant='contained'
                                title='Bu Şablonu Kopyala ve Düzenle'
                                onClick={() => onChatflowCopy(flowData)}
                                startIcon={<IconCopy />}
                            >
                                Bu Şablonu Kullan
                            </StyledButton>
                        </span>
                    </Tooltip>
                </Box>
            </Available>
        </>
    )
}

MarketplaceCanvasHeader.propTypes = {
    flowName: PropTypes.string,
    flowData: PropTypes.object,
    onChatflowCopy: PropTypes.func
}

export default MarketplaceCanvasHeader
