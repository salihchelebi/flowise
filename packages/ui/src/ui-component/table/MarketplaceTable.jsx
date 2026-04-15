import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { styled } from '@mui/material/styles'
import { tableCellClasses } from '@mui/material/TableCell'
import {
    Button,
    Chip,
    Paper,
    Skeleton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Stack,
    Tooltip,
    Box,
    useTheme
} from '@mui/material'
import { IconShare, IconTrash } from '@tabler/icons-react'
import { PermissionIconButton } from '@/ui-component/button/RBACButtons'
import {
    getMarketplaceBadgeLabel,
    getMarketplaceTemplateDisplayData,
    getMarketplaceTooltipData
} from '@/utils/translateMarketplaceTemplates'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderColor: theme.palette.grey[900] + 25,
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.grey[900]
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        height: 64
    }
}))

const StyledTableRow = styled(TableRow)(() => ({
    '&:last-child td, &:last-child th': {
        border: 0
    }
}))

const getTooltipStyleProps = (theme) => ({
    componentsProps: {
        tooltip: {
            sx: {
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                border: `1px solid ${theme.palette.grey[900]}22`,
                borderRadius: 2,
                boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
                p: 2,
                maxWidth: 390
            }
        },
        arrow: {
            sx: {
                color: theme.palette.background.paper
            }
        }
    }
})

const renderRowTooltip = (row) => {
    const tooltipData = getMarketplaceTooltipData(row)

    return (
        <Box sx={{ maxWidth: 360 }}>
            <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 1 }}>
                {tooltipData.title}
            </Typography>
            <Typography variant='body2' sx={{ mb: 1 }}>
                {tooltipData.description}
            </Typography>
            <Typography variant='caption' sx={{ display: 'block', color: 'text.secondary', mb: 1 }}>
                {tooltipData.purpose}
            </Typography>
            <Box component='ul' sx={{ pl: 2.25, my: 0, mb: 1.5 }}>
                {tooltipData.bullets.map((item, index) => (
                    <Typography component='li' variant='body2' key={index} sx={{ mb: 0.5 }}>
                        {item}
                    </Typography>
                ))}
            </Box>
            <Typography variant='caption' sx={{ fontWeight: 700 }}>
                {tooltipData.actionLine}
            </Typography>
        </Box>
    )
}

export const MarketplaceTable = ({
    data,
    filterFunction,
    filterByBadge,
    filterByType,
    filterByFramework,
    filterByUsecases,
    goToCanvas,
    goToTool,
    isLoading,
    onDelete,
    onShare
}) => {
    const theme = useTheme()
    const customization = useSelector((state) => state.customization)

    const openTemplate = (selectedTemplate) => {
        if (selectedTemplate.flowData) {
            goToCanvas(selectedTemplate)
        } else {
            goToTool(selectedTemplate)
        }
    }

    return (
        <TableContainer sx={{ border: 1, borderColor: theme.palette.grey[900] + 25, borderRadius: 2 }} component={Paper}>
            <Table sx={{ minWidth: 650 }} size='small' aria-label='marketplace table'>
                <TableHead
                    sx={{
                        backgroundColor: customization.isDarkMode ? theme.palette.common.black : theme.palette.grey[100],
                        height: 56
                    }}
                >
                    <TableRow>
                        <StyledTableCell sx={{ minWidth: '170px' }} component='th' scope='row'>
                            Şablon Adı
                        </StyledTableCell>
                        <StyledTableCell sx={{ minWidth: '130px' }} component='th' scope='row'>
                            Tür
                        </StyledTableCell>
                        <StyledTableCell>Ne Yapar</StyledTableCell>
                        <StyledTableCell sx={{ minWidth: '120px' }}>Altyapı</StyledTableCell>
                        <StyledTableCell sx={{ minWidth: '140px' }}>Ne İçin Kullanılır</StyledTableCell>
                        <StyledTableCell>Etiketler</StyledTableCell>
                        <StyledTableCell sx={{ minWidth: '120px' }} component='th' scope='row'>
                            İşlemler
                        </StyledTableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {isLoading ? (
                        <>
                            <StyledTableRow>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                                <StyledTableCell><Skeleton variant='text' /></StyledTableCell>
                            </StyledTableRow>
                        </>
                    ) : (
                        <>
                            {data
                                ?.filter(filterByBadge)
                                .filter(filterByType)
                                .filter(filterFunction)
                                .filter(filterByFramework)
                                .filter(filterByUsecases)
                                .map((row, index) => {
                                    const display = getMarketplaceTemplateDisplayData(row)
                                    return (
                                        <StyledTableRow key={index}>
                                            <StyledTableCell>
                                                <Tooltip title={renderRowTooltip(display)} placement='top' arrow {...getTooltipStyleProps(theme)}>
                                                    <Typography
                                                        sx={{
                                                            display: '-webkit-box',
                                                            fontSize: 14,
                                                            fontWeight: 500,
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: 'vertical',
                                                            textOverflow: 'ellipsis',
                                                            overflow: 'hidden'
                                                        }}
                                                    >
                                                        <Button onClick={() => openTemplate(display)} sx={{ textAlign: 'left' }}>
                                                            {display.displayTitle}
                                                        </Button>
                                                    </Typography>
                                                </Tooltip>
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <Typography>{display.displayType}</Typography>
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <Typography sx={{ overflowWrap: 'break-word', whiteSpace: 'pre-line' }}>
                                                    {display.displayDescription}
                                                </Typography>
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <Stack flexDirection='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
                                                    {display.displayFrameworks.map((item, itemIndex) => (
                                                        <Chip variant='outlined' key={itemIndex} size='small' label={item} style={{ marginRight: 3, marginBottom: 3 }} />
                                                    ))}
                                                </Stack>
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <Stack flexDirection='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
                                                    {display.displayUsecases.map((usecase, usecaseIndex) => (
                                                        <Chip variant='outlined' key={usecaseIndex} size='small' label={usecase} style={{ marginRight: 3, marginBottom: 3 }} />
                                                    ))}
                                                </Stack>
                                            </StyledTableCell>

                                            <StyledTableCell>
                                                <Typography>
                                                    {row.badge &&
                                                        row.badge.split(';').map((tag, tagIndex) => (
                                                            <Chip
                                                                color={tag === 'POPULAR' ? 'primary' : tag === 'DEPRECATED' ? 'warning' : 'error'}
                                                                key={tagIndex}
                                                                size='small'
                                                                label={getMarketplaceBadgeLabel(tag)}
                                                                style={{ marginRight: 5, marginBottom: 5 }}
                                                            />
                                                        ))}
                                                </Typography>
                                            </StyledTableCell>

                                            <StyledTableCell colSpan={row.shared ? 2 : undefined}>
                                                {row.shared ? (
                                                    <Typography>Paylaşılan Şablon</Typography>
                                                ) : (
                                                    <>
                                                        {onShare && (
                                                            <PermissionIconButton
                                                                display={'feat:workspaces'}
                                                                permissionId={'templates:custom-share'}
                                                                title='Paylaş'
                                                                color='primary'
                                                                onClick={() => onShare(display)}
                                                            >
                                                                <IconShare />
                                                            </PermissionIconButton>
                                                        )}
                                                        {onDelete && (
                                                            <PermissionIconButton
                                                                permissionId={'templates:custom-delete'}
                                                                title='Sil'
                                                                color='error'
                                                                onClick={() => onDelete(display)}
                                                            >
                                                                <IconTrash />
                                                            </PermissionIconButton>
                                                        )}
                                                    </>
                                                )}
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    )
                                })}
                        </>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

MarketplaceTable.propTypes = {
    data: PropTypes.array,
    filterFunction: PropTypes.func,
    filterByBadge: PropTypes.func,
    filterByType: PropTypes.func,
    filterByFramework: PropTypes.func,
    filterByUsecases: PropTypes.func,
    goToTool: PropTypes.func,
    goToCanvas: PropTypes.func,
    isLoading: PropTypes.bool,
    onDelete: PropTypes.func,
    onShare: PropTypes.func
}
