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
    useTheme
} from '@mui/material'
import { IconShare, IconTrash } from '@tabler/icons-react'
import { PermissionIconButton } from '@/ui-component/button/RBACButtons'

const BADGE_LABELS = {
    POPULAR: 'Çok Kullanılan',
    NEW: 'Yeni',
    DEPRECATED: 'Eski'
}

const TYPE_LABELS = {
    Chatflow: 'Sohbet Akışı',
    Agentflow: 'Ajan Akışı',
    AgentflowV2: 'Gelişmiş Ajan Akışı',
    Tool: 'Hazır Araç'
}

const FRAMEWORK_LABELS = {
    Langchain: 'LangChain',
    LlamaIndex: 'LlamaIndex'
}

const USECASE_LABELS = {
    'Customer Support': 'Müşteri Desteği',
    'Customer Service': 'Müşteri Hizmeti',
    Sales: 'Satış',
    Marketing: 'Pazarlama',
    Education: 'Eğitim',
    Healthcare: 'Sağlık',
    Finance: 'Finans',
    Ecommerce: 'E-Ticaret',
    'E-Commerce': 'E-Ticaret',
    HR: 'İnsan Kaynakları',
    Research: 'Araştırma',
    'Data Analysis': 'Veri Analizi',
    'Document QnA': 'Belge Soru Cevap',
    'Question Answering': 'Soru Cevap',
    'Lead Generation': 'Müşteri Adayı Toplama',
    Productivity: 'Verimlilik',
    Automation: 'Otomasyon'
}

const getBadgeLabel = (value) => BADGE_LABELS[value] || value
const getTypeLabel = (value) => TYPE_LABELS[value] || value
const getFrameworkLabel = (value) => FRAMEWORK_LABELS[value] || value
const getUsecaseLabel = (value) => USECASE_LABELS[value] || value

const getReadableDescription = (row) => {
    if (row.description && row.description.trim()) return row.description

    if (row.type === 'Tool') {
        return 'Hazır bir araç yapısını inceleyip kendi kullanımına göre ekleyebilirsin.'
    }

    if (row.type === 'AgentflowV2') {
        return 'Bu gelişmiş ajan akışını açıp adımlarını inceleyebilir, sonra kendi alanına kopyalayabilirsin.'
    }

    return 'Bu hazır akışı açıp nasıl çalıştığını inceleyebilir, sonra kendi ihtiyacına göre kullanabilirsin.'
}

const getTemplateTooltipText = (row) => {
    const parts = [
        `${row.templateName || row.name || 'Hazır Şablon'}`,
        getReadableDescription(row),
        `Tür: ${getTypeLabel(row.type)}`
    ]

    if (row.usecases?.length) {
        parts.push(`Kullanım alanı: ${row.usecases.map(getUsecaseLabel).slice(0, 4).join(', ')}`)
    }

    parts.push('Tıklayınca önce önizleme açılır. Sonra istersen şablonu kendi alanına kopyalayıp düzenleyebilirsin.')

    return parts.join('\n\n')
}

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
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
                                <StyledTableCell>
                                    <Skeleton variant='text' />
                                </StyledTableCell>
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
                                .map((row, index) => (
                                    <StyledTableRow key={index}>
                                        <StyledTableCell>
                                            <Tooltip title={<Typography sx={{ whiteSpace: 'pre-line' }}>{getTemplateTooltipText(row)}</Typography>} placement='top' arrow>
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
                                                    <Button onClick={() => openTemplate(row)} sx={{ textAlign: 'left' }}>
                                                        {row.templateName || row.name}
                                                    </Button>
                                                </Typography>
                                            </Tooltip>
                                        </StyledTableCell>

                                        <StyledTableCell>
                                            <Typography>{getTypeLabel(row.type)}</Typography>
                                        </StyledTableCell>

                                        <StyledTableCell>
                                            <Typography sx={{ overflowWrap: 'break-word', whiteSpace: 'pre-line' }}>
                                                {getReadableDescription(row)}
                                            </Typography>
                                        </StyledTableCell>

                                        <StyledTableCell>
                                            <Stack flexDirection='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
                                                {row.framework &&
                                                    row.framework.length > 0 &&
                                                    row.framework.map((item, itemIndex) => (
                                                        <Chip
                                                            variant='outlined'
                                                            key={itemIndex}
                                                            size='small'
                                                            label={getFrameworkLabel(item)}
                                                            style={{ marginRight: 3, marginBottom: 3 }}
                                                        />
                                                    ))}
                                            </Stack>
                                        </StyledTableCell>

                                        <StyledTableCell>
                                            <Stack flexDirection='row' sx={{ gap: 1, flexWrap: 'wrap' }}>
                                                {row.usecases &&
                                                    row.usecases.length > 0 &&
                                                    row.usecases.map((usecase, usecaseIndex) => (
                                                        <Chip
                                                            variant='outlined'
                                                            key={usecaseIndex}
                                                            size='small'
                                                            label={getUsecaseLabel(usecase)}
                                                            style={{ marginRight: 3, marginBottom: 3 }}
                                                        />
                                                    ))}
                                            </Stack>
                                        </StyledTableCell>

                                        <StyledTableCell>
                                            <Typography>
                                                {row.badge &&
                                                    row.badge.split(';').map((tag, tagIndex) => (
                                                        <Chip
                                                            color={
                                                                tag === 'POPULAR'
                                                                    ? 'primary'
                                                                    : tag === 'DEPRECATED'
                                                                    ? 'warning'
                                                                    : 'error'
                                                            }
                                                            key={tagIndex}
                                                            size='small'
                                                            label={getBadgeLabel(tag)}
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
                                                            onClick={() => onShare(row)}
                                                        >
                                                            <IconShare />
                                                        </PermissionIconButton>
                                                    )}
                                                    {onDelete && (
                                                        <PermissionIconButton
                                                            permissionId={'templates:custom-delete'}
                                                            title='Sil'
                                                            color='error'
                                                            onClick={() => onDelete(row)}
                                                        >
                                                            <IconTrash />
                                                        </PermissionIconButton>
                                                    )}
                                                </>
                                            )}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
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
