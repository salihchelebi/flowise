import * as React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

// material-ui
import {
    Box,
    Stack,
    Badge,
    ToggleButton,
    InputLabel,
    FormControl,
    Select,
    OutlinedInput,
    Checkbox,
    ListItemText,
    Skeleton,
    FormControlLabel,
    ToggleButtonGroup,
    MenuItem,
    Button,
    Tabs,
    Autocomplete,
    TextField,
    Chip,
    Tooltip,
    Typography
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { IconLayoutGrid, IconList, IconX } from '@tabler/icons-react'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ItemCard from '@/ui-component/cards/ItemCard'
import WorkflowEmptySVG from '@/assets/images/workflow_empty.svg'
import ToolDialog from '@/views/tools/ToolDialog'
import { MarketplaceTable } from '@/ui-component/table/MarketplaceTable'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ErrorBoundary from '@/ErrorBoundary'
import { TabPanel } from '@/ui-component/tabs/TabPanel'
import { closeSnackbar as closeSnackbarAction, enqueueSnackbar as enqueueSnackbarAction } from '@/store/actions'
import ConfirmDialog from '@/ui-component/dialog/ConfirmDialog'
import { PermissionTab } from '@/ui-component/button/RBACButtons'
import { Available } from '@/ui-component/rbac/available'
import ShareWithWorkspaceDialog from '@/ui-component/dialog/ShareWithWorkspaceDialog'

// API
import marketplacesApi from '@/api/marketplaces'

// Hooks
import useApi from '@/hooks/useApi'
import useConfirm from '@/hooks/useConfirm'
import { useAuth } from '@/hooks/useAuth'

// Utils
import useNotifier from '@/utils/useNotifier'
import {
    getMarketplaceBadgeLabel,
    getMarketplaceFrameworkLabel,
    getMarketplaceTemplateDisplayData,
    getMarketplaceTooltipData,
    getMarketplaceTypeLabel,
    getMarketplaceUsecaseLabel
} from '@/utils/translateMarketplaceTemplates'

// const
import { baseURL, AGENTFLOW_ICONS } from '@/store/constant'
import { gridSpacing } from '@/store/constant'
import { useError } from '@/store/context/ErrorContext'

const badges = ['POPULAR', 'NEW']
const types = ['Chatflow', 'AgentflowV2', 'Tool']
const framework = ['Langchain', 'LlamaIndex']
const MenuProps = {
    PaperProps: {
        style: {
            width: 220
        }
    }
}

const getSelectStyles = (borderColor, isDarkMode) => ({
    '& .MuiOutlinedInput-notchedOutline': {
        borderRadius: 2,
        borderColor: borderColor
    },
    '& .MuiSvgIcon-root': {
        color: isDarkMode ? '#fff' : 'inherit'
    }
})

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

const renderTemplateTooltip = (template, theme) => {
    const tooltipData = getMarketplaceTooltipData(template)

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

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                <Chip size='small' label={`Tür: ${tooltipData.type}`} />
                {tooltipData.usecases.slice(0, 2).map((item, index) => (
                    <Chip key={index} size='small' variant='outlined' label={item} />
                ))}
            </Box>

            <Box
                sx={{
                    px: 1.25,
                    py: 1,
                    borderRadius: 2,
                    backgroundColor: theme.palette.primary.main + '10',
                    border: `1px solid ${theme.palette.primary.main}25`
                }}
            >
                <Typography variant='caption' sx={{ fontWeight: 700, letterSpacing: 0.2 }}>
                    {tooltipData.actionLine}
                </Typography>
            </Box>
        </Box>
    )
}

// ==============================|| Marketplace ||============================== //

const Marketplace = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useNotifier()

    const theme = useTheme()
    const { error, setError } = useError()

    const [isLoading, setLoading] = useState(true)
    const [images, setImages] = useState({})
    const [icons, setIcons] = useState({})
    const [usecases, setUsecases] = useState([])
    const [eligibleUsecases, setEligibleUsecases] = useState([])
    const [selectedUsecases, setSelectedUsecases] = useState([])

    const [showToolDialog, setShowToolDialog] = useState(false)
    const [toolDialogProps, setToolDialogProps] = useState({})

    const getAllTemplatesMarketplacesApi = useApi(marketplacesApi.getAllTemplatesFromMarketplaces)

    const [view, setView] = React.useState(localStorage.getItem('mpDisplayStyle') || 'card')
    const [search, setSearch] = useState('')
    const [badgeFilter, setBadgeFilter] = useState([])
    const [typeFilter, setTypeFilter] = useState([])
    const [frameworkFilter, setFrameworkFilter] = useState([])

    const getAllCustomTemplatesApi = useApi(marketplacesApi.getAllCustomTemplates)
    const [activeTabValue, setActiveTabValue] = useState(0)
    const [templateImages, setTemplateImages] = useState({})
    const [templateIcons, setTemplateIcons] = useState({})
    const [templateUsecases, setTemplateUsecases] = useState([])
    const [eligibleTemplateUsecases, setEligibleTemplateUsecases] = useState([])
    const [selectedTemplateUsecases, setSelectedTemplateUsecases] = useState([])
    const enqueueSnackbar = (...args) => dispatch(enqueueSnackbarAction(...args))
    const closeSnackbar = (...args) => dispatch(closeSnackbarAction(...args))
    const { confirm } = useConfirm()
    const { hasPermission } = useAuth()

    const [showShareTemplateDialog, setShowShareTemplateDialog] = useState(false)
    const [shareTemplateDialogProps, setShareTemplateDialogProps] = useState({})

    const share = (template) => {
        const dialogProps = {
            type: 'EDIT',
            cancelButtonName: 'İptal',
            confirmButtonName: 'Paylaş',
            data: {
                id: template.id,
                name: template.name,
                title: 'Özel Şablonu Paylaş',
                itemType: 'custom_template'
            }
        }
        setShareTemplateDialogProps(dialogProps)
        setShowShareTemplateDialog(true)
    }

    const handleTabChange = (event, newValue) => {
        if (newValue === 1 && !getAllCustomTemplatesApi.data) {
            getAllCustomTemplatesApi.request()
        }
        setActiveTabValue(newValue)
    }

    const clearAllUsecases = () => {
        if (activeTabValue === 0) setSelectedUsecases([])
        else setSelectedTemplateUsecases([])
    }

    const handleBadgeFilterChange = (event) => {
        const {
            target: { value }
        } = event
        setBadgeFilter(typeof value === 'string' ? value.split(',') : value)
        const data = activeTabValue === 0 ? getAllTemplatesMarketplacesApi.data : getAllCustomTemplatesApi.data
        getEligibleUsecases(data, {
            typeFilter,
            badgeFilter: typeof value === 'string' ? value.split(',') : value,
            frameworkFilter,
            search
        })
    }

    const handleTypeFilterChange = (event) => {
        const {
            target: { value }
        } = event
        setTypeFilter(typeof value === 'string' ? value.split(',') : value)
        const data = activeTabValue === 0 ? getAllTemplatesMarketplacesApi.data : getAllCustomTemplatesApi.data
        getEligibleUsecases(data, {
            typeFilter: typeof value === 'string' ? value.split(',') : value,
            badgeFilter,
            frameworkFilter,
            search
        })
    }

    const handleFrameworkFilterChange = (event) => {
        const {
            target: { value }
        } = event
        setFrameworkFilter(typeof value === 'string' ? value.split(',') : value)
        const data = activeTabValue === 0 ? getAllTemplatesMarketplacesApi.data : getAllCustomTemplatesApi.data
        getEligibleUsecases(data, {
            typeFilter,
            badgeFilter,
            frameworkFilter: typeof value === 'string' ? value.split(',') : value,
            search
        })
    }

    const handleViewChange = (event, nextView) => {
        if (nextView === null) return
        localStorage.setItem('mpDisplayStyle', nextView)
        setView(nextView)
    }

    const onSearchChange = (event) => {
        setSearch(event.target.value)
        const data = activeTabValue === 0 ? getAllTemplatesMarketplacesApi.data : getAllCustomTemplatesApi.data
        getEligibleUsecases(data, { typeFilter, badgeFilter, frameworkFilter, search: event.target.value })
    }

    const onDeleteCustomTemplate = async (template) => {
        const confirmPayload = {
            title: 'Sil',
            description: `Özel Şablon ${template.name} silinsin mi?`,
            confirmButtonName: 'Sil',
            cancelButtonName: 'İptal'
        }
        const isConfirmed = await confirm(confirmPayload)

        if (isConfirmed) {
            try {
                const deleteResp = await marketplacesApi.deleteCustomTemplate(template.id)
                if (deleteResp.data) {
                    enqueueSnackbar({
                        message: 'Özel şablon başarıyla silindi!',
                        options: {
                            key: new Date().getTime() + Math.random(),
                            variant: 'success',
                            action: (key) => (
                                <Button style={{ color: 'white' }} onClick={() => closeSnackbar(key)}>
                                    <IconX />
                                </Button>
                            )
                        }
                    })
                    getAllCustomTemplatesApi.request()
                }
            } catch (err) {
                enqueueSnackbar({
                    message: `Özel şablon silinemedi: ${typeof err.response.data === 'object' ? err.response.data.message : err.response.data}`,
                    options: {
                        key: new Date().getTime() + Math.random(),
                        variant: 'error',
                        persist: true,
                        action: (key) => (
                            <Button style={{ color: 'white' }} onClick={() => closeSnackbar(key)}>
                                <IconX />
                            </Button>
                        )
                    }
                })
            }
        }
    }

    function filterFlows(data) {
        const display = getMarketplaceTemplateDisplayData(data)
        const haystack = [
            data.categories ? data.categories.join(',') : '',
            data.templateName || '',
            data.name || '',
            data.description || '',
            display.displayTitle || '',
            display.displayDescription || '',
            display.displayPurpose || '',
            (display.displayBullets || []).join(' '),
            (display.displayUsecases || []).join(' ')
        ]
            .join(' ')
            .toLowerCase()

        return haystack.indexOf(search.toLowerCase()) > -1
    }

    function filterByBadge(data) {
        return badgeFilter.length > 0 ? badgeFilter.includes(data.badge) : true
    }

    function filterByType(data) {
        return typeFilter.length > 0 ? typeFilter.includes(data.type) : true
    }

    function filterByFramework(data) {
        return frameworkFilter.length > 0 ? (data.framework || []).some((item) => frameworkFilter.includes(item)) : true
    }

    function filterByUsecases(data) {
        if (activeTabValue === 0) {
            return selectedUsecases.length > 0 ? (data.usecases || []).some((item) => selectedUsecases.includes(item)) : true
        }
        return selectedTemplateUsecases.length > 0
            ? (data.usecases || []).some((item) => selectedTemplateUsecases.includes(item))
            : true
    }

    const getEligibleUsecases = (data, filter) => {
        if (!data) return

        let filteredData = data
        if (filter.badgeFilter.length > 0) filteredData = filteredData.filter((item) => filter.badgeFilter.includes(item.badge))
        if (filter.typeFilter.length > 0) filteredData = filteredData.filter((item) => filter.typeFilter.includes(item.type))
        if (filter.frameworkFilter.length > 0) {
            filteredData = filteredData.filter((item) => (item.framework || []).some((fw) => filter.frameworkFilter.includes(fw)))
        }
        if (filter.search) {
            filteredData = filteredData.filter((item) => filterFlows(item))
        }

        const uc = []
        for (let i = 0; i < filteredData.length; i += 1) {
            if (filteredData[i].flowData && Array.isArray(filteredData[i].usecases)) {
                uc.push(...filteredData[i].usecases)
            }
        }

        if (activeTabValue === 0) setEligibleUsecases(Array.from(new Set(uc)).sort())
        else setEligibleTemplateUsecases(Array.from(new Set(uc)).sort())
    }

    const onUseTemplate = (selectedTool) => {
        const display = getMarketplaceTemplateDisplayData(selectedTool)
        const dialogProp = {
            title: display.displayTitle || 'Yeni Araç Ekle',
            type: 'IMPORT',
            cancelButtonName: 'İptal',
            confirmButtonName: 'Ekle',
            data: display
        }
        setToolDialogProps(dialogProp)
        setShowToolDialog(true)
    }

    const goToTool = (selectedTool) => {
        const display = getMarketplaceTemplateDisplayData(selectedTool)
        const dialogProp = {
            title: display.displayTitle || selectedTool.templateName,
            type: 'TEMPLATE',
            data: display
        }
        setToolDialogProps(dialogProp)
        setShowToolDialog(true)
    }

    const goToCanvas = (selectedChatflow) => {
        if (selectedChatflow.type === 'AgentflowV2') {
            navigate(`/v2/marketplace/${selectedChatflow.id}`, { state: selectedChatflow })
        } else {
            navigate(`/marketplace/${selectedChatflow.id}`, { state: selectedChatflow })
        }
    }

    useEffect(() => {
        if (hasPermission('templates:marketplace')) {
            getAllTemplatesMarketplacesApi.request()
        } else if (hasPermission('templates:custom')) {
            setActiveTabValue(1)
            getAllCustomTemplatesApi.request()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        setLoading(getAllTemplatesMarketplacesApi.loading)
    }, [getAllTemplatesMarketplacesApi.loading])

    useEffect(() => {
        if (getAllTemplatesMarketplacesApi.data) {
            try {
                const flows = getAllTemplatesMarketplacesApi.data
                const uc = []
                const nextImages = {}
                const nextIcons = {}

                for (let i = 0; i < flows.length; i += 1) {
                    if (flows[i].flowData) {
                        const flowData = JSON.parse(flows[i].flowData)
                        uc.push(...(flows[i].usecases || []))
                        const nodes = flowData.nodes || []
                        nextImages[flows[i].id] = []
                        nextIcons[flows[i].id] = []

                        for (let j = 0; j < nodes.length; j += 1) {
                            if (nodes[j].data.name === 'stickyNote' || nodes[j].data.name === 'stickyNoteAgentflow') continue

                            const foundIcon = AGENTFLOW_ICONS.find((icon) => icon.name === nodes[j].data.name)
                            if (foundIcon) {
                                nextIcons[flows[i].id].push(foundIcon)
                            } else {
                                const imageSrc = `${baseURL}/api/v1/node-icon/${nodes[j].data.name}`
                                if (!nextImages[flows[i].id].some((img) => img.imageSrc === imageSrc)) {
                                    nextImages[flows[i].id].push({
                                        imageSrc,
                                        label: nodes[j].data.name
                                    })
                                }
                            }
                        }
                    }
                }

                setImages(nextImages)
                setIcons(nextIcons)
                setUsecases(Array.from(new Set(uc)).sort())
                setEligibleUsecases(Array.from(new Set(uc)).sort())
            } catch (e) {
                console.error(e)
            }
        }
    }, [getAllTemplatesMarketplacesApi.data])

    useEffect(() => {
        if (getAllTemplatesMarketplacesApi.error && setError) {
            setError(getAllTemplatesMarketplacesApi.error)
        }
    }, [getAllTemplatesMarketplacesApi.error, setError])

    useEffect(() => {
        setLoading(getAllCustomTemplatesApi.loading)
    }, [getAllCustomTemplatesApi.loading])

    useEffect(() => {
        if (getAllCustomTemplatesApi.data) {
            try {
                const flows = getAllCustomTemplatesApi.data
                const uc = []
                const tImages = {}
                const tIcons = {}

                for (let i = 0; i < flows.length; i += 1) {
                    if (flows[i].flowData) {
                        const flowData = JSON.parse(flows[i].flowData)
                        uc.push(...(flows[i].usecases || []))
                        if (flows[i].framework) {
                            flows[i].framework = [flows[i].framework] || []
                        }

                        const nodes = flowData.nodes || []
                        tImages[flows[i].id] = []
                        tIcons[flows[i].id] = []

                        for (let j = 0; j < nodes.length; j += 1) {
                            const foundIcon = AGENTFLOW_ICONS.find((icon) => icon.name === nodes[j].data.name)
                            if (foundIcon) {
                                tIcons[flows[i].id].push(foundIcon)
                            } else {
                                const imageSrc = `${baseURL}/api/v1/node-icon/${nodes[j].data.name}`
                                if (!tImages[flows[i].id].includes(imageSrc)) {
                                    tImages[flows[i].id].push(imageSrc)
                                }
                            }
                        }
                    }
                }

                setTemplateImages(tImages)
                setTemplateIcons(tIcons)
                setTemplateUsecases(Array.from(new Set(uc)).sort())
                setEligibleTemplateUsecases(Array.from(new Set(uc)).sort())
            } catch (e) {
                console.error(e)
            }
        }
    }, [getAllCustomTemplatesApi.data])

    useEffect(() => {
        if (getAllCustomTemplatesApi.error && setError) {
            setError(getAllCustomTemplatesApi.error)
        }
    }, [getAllCustomTemplatesApi.error, setError])

    return (
        <>
            <MainCard>
                {error ? (
                    <ErrorBoundary error={error} />
                ) : (
                    <Stack flexDirection='column'>
                        <ViewHeader
                            filters={
                                <>
                                    <FormControl
                                        sx={{
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'end',
                                            minWidth: 160
                                        }}
                                    >
                                        <InputLabel size='small' id='filter-badge-label'>
                                            Durum Etiketi
                                        </InputLabel>
                                        <Select
                                            labelId='filter-badge-label'
                                            id='filter-badge-checkbox'
                                            size='small'
                                            multiple
                                            value={badgeFilter}
                                            onChange={handleBadgeFilterChange}
                                            input={<OutlinedInput label='Durum Etiketi' />}
                                            renderValue={(selected) => selected.map(getMarketplaceBadgeLabel).join(', ')}
                                            MenuProps={MenuProps}
                                            sx={getSelectStyles(theme.palette.grey[900] + 25, theme?.customization?.isDarkMode)}
                                        >
                                            {badges.map((name) => (
                                                <MenuItem key={name} value={name} sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
                                                    <Checkbox checked={badgeFilter.indexOf(name) > -1} sx={{ p: 0 }} />
                                                    <ListItemText primary={getMarketplaceBadgeLabel(name)} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl
                                        sx={{
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'end',
                                            minWidth: 170
                                        }}
                                    >
                                        <InputLabel size='small' id='type-badge-label'>
                                            Şablon Türü
                                        </InputLabel>
                                        <Select
                                            size='small'
                                            labelId='type-badge-label'
                                            id='type-badge-checkbox'
                                            multiple
                                            value={typeFilter}
                                            onChange={handleTypeFilterChange}
                                            input={<OutlinedInput label='Şablon Türü' />}
                                            renderValue={(selected) => selected.map(getMarketplaceTypeLabel).join(', ')}
                                            MenuProps={MenuProps}
                                            sx={getSelectStyles(theme.palette.grey[900] + 25, theme?.customization?.isDarkMode)}
                                        >
                                            {types.map((name) => (
                                                <MenuItem key={name} value={name} sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
                                                    <Checkbox checked={typeFilter.indexOf(name) > -1} sx={{ p: 0 }} />
                                                    <ListItemText primary={getMarketplaceTypeLabel(name)} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>

                                    <FormControl
                                        sx={{
                                            borderRadius: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'end',
                                            minWidth: 150
                                        }}
                                    >
                                        <InputLabel size='small' id='type-fw-label'>
                                            Altyapı
                                        </InputLabel>
                                        <Select
                                            size='small'
                                            labelId='type-fw-label'
                                            id='type-fw-checkbox'
                                            multiple
                                            value={frameworkFilter}
                                            onChange={handleFrameworkFilterChange}
                                            input={<OutlinedInput label='Altyapı' />}
                                            renderValue={(selected) => selected.map(getMarketplaceFrameworkLabel).join(', ')}
                                            MenuProps={MenuProps}
                                            sx={getSelectStyles(theme.palette.grey[900] + 25, theme?.customization?.isDarkMode)}
                                        >
                                            {framework.map((name) => (
                                                <MenuItem key={name} value={name} sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1 }}>
                                                    <Checkbox checked={frameworkFilter.indexOf(name) > -1} sx={{ p: 0 }} />
                                                    <ListItemText primary={getMarketplaceFrameworkLabel(name)} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </>
                            }
                            onSearchChange={onSearchChange}
                            search={true}
                            searchPlaceholder='Şablon adı, açıklama veya içindeki adımlarda ara'
                            title='Hazır Ajan ve Akış Şablonları'
                            description='Hazır yapıları açın, ne işe yaradığını görün ve kendi ihtiyacınıza göre düzenleyin.'
                        >
                            <ToggleButtonGroup
                                sx={{ borderRadius: 2, height: '100%' }}
                                value={view}
                                color='primary'
                                exclusive
                                onChange={handleViewChange}
                            >
                                <ToggleButton
                                    sx={{
                                        borderColor: theme.palette.grey[900] + 25,
                                        borderRadius: 2,
                                        color: theme?.customization?.isDarkMode ? 'white' : 'inherit'
                                    }}
                                    variant='contained'
                                    value='card'
                                    title='Kart Görünümü'
                                >
                                    <IconLayoutGrid />
                                </ToggleButton>
                                <ToggleButton
                                    sx={{
                                        borderColor: theme.palette.grey[900] + 25,
                                        borderRadius: 2,
                                        color: theme?.customization?.isDarkMode ? 'white' : 'inherit'
                                    }}
                                    variant='contained'
                                    value='list'
                                    title='Liste Görünümü'
                                >
                                    <IconList />
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </ViewHeader>

                        {hasPermission('templates:marketplace') && hasPermission('templates:custom') && (
                            <Stack direction='row' justifyContent='space-between' sx={{ mb: 2 }}>
                                <Tabs value={activeTabValue} onChange={handleTabChange} textColor='primary' aria-label='tabs'>
                                    <PermissionTab permissionId='templates:marketplace' value={0} label='Hazır Topluluk Şablonları' />
                                    <PermissionTab permissionId='templates:custom' value={1} label='Benim Kaydettiklerim' />
                                </Tabs>

                                <Autocomplete
                                    id='useCases'
                                    multiple
                                    size='small'
                                    options={activeTabValue === 0 ? usecases : templateUsecases}
                                    value={activeTabValue === 0 ? selectedUsecases : selectedTemplateUsecases}
                                    onChange={(_, newValue) => {
                                        if (activeTabValue === 0) setSelectedUsecases(newValue)
                                        else setSelectedTemplateUsecases(newValue)
                                    }}
                                    disableCloseOnSelect
                                    getOptionLabel={(option) => getMarketplaceUsecaseLabel(option)}
                                    isOptionEqualToValue={(option, value) => option === value}
                                    renderOption={(props, option, { selected }) => {
                                        const currentEligible = activeTabValue === 0 ? eligibleUsecases : eligibleTemplateUsecases
                                        const isDisabled = currentEligible.length > 0 && !currentEligible.includes(option)

                                        return (
                                            <li {...props} style={{ pointerEvents: isDisabled ? 'none' : 'auto' }}>
                                                <Checkbox checked={selected} color='success' disabled={isDisabled} />
                                                <ListItemText primary={getMarketplaceUsecaseLabel(option)} />
                                            </li>
                                        )
                                    }}
                                    renderInput={(params) => <TextField {...params} label='Ne İçin Kullanılır' />}
                                    sx={{ width: 340 }}
                                    limitTags={2}
                                    renderTags={(value, getTagProps) => {
                                        const totalTags = value.length
                                        const limitTags = 2

                                        return (
                                            <>
                                                {value.slice(0, limitTags).map((option, index) => (
                                                    <Chip
                                                        {...getTagProps({ index })}
                                                        key={index}
                                                        label={getMarketplaceUsecaseLabel(option)}
                                                        sx={{
                                                            height: 24,
                                                            '& .MuiSvgIcon-root': {
                                                                fontSize: 16,
                                                                background: 'None'
                                                            }
                                                        }}
                                                    />
                                                ))}

                                                {totalTags > limitTags && (
                                                    <Tooltip
                                                        title={
                                                            <ol style={{ paddingLeft: '20px' }}>
                                                                {value.slice(limitTags).map((item, i) => (
                                                                    <li key={i}>{getMarketplaceUsecaseLabel(item)}</li>
                                                                ))}
                                                            </ol>
                                                        }
                                                        placement='top'
                                                    >
                                                        <span style={{ cursor: 'help', fontSize: 13, alignSelf: 'center' }}>
                                                            +{totalTags - limitTags} tane daha
                                                        </span>
                                                    </Tooltip>
                                                )}
                                            </>
                                        )
                                    }}
                                    slotProps={{
                                        paper: {
                                            sx: {
                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)'
                                            }
                                        }
                                    }}
                                />
                            </Stack>
                        )}

                        <Available permission='templates:marketplace'>
                            <TabPanel value={activeTabValue} index={0}>
                                {!view || view === 'card' ? (
                                    <>
                                        {isLoading ? (
                                            <Box display='grid' gridTemplateColumns='repeat(3, 1fr)' gap={gridSpacing}>
                                                <Skeleton variant='rounded' height={220} />
                                                <Skeleton variant='rounded' height={220} />
                                                <Skeleton variant='rounded' height={220} />
                                            </Box>
                                        ) : (
                                            <Box display='grid' gridTemplateColumns='repeat(3, 1fr)' gap={gridSpacing}>
                                                {getAllTemplatesMarketplacesApi.data
                                                    ?.filter(filterByBadge)
                                                    .filter(filterByType)
                                                    .filter(filterFlows)
                                                    .filter(filterByFramework)
                                                    .filter(filterByUsecases)
                                                    .map((data, index) => {
                                                        const displayData = getMarketplaceTemplateDisplayData(data)

                                                        return (
                                                            <Box key={index}>
                                                                {displayData.badge ? (
                                                                    <Badge
                                                                        sx={{
                                                                            width: '100%',
                                                                            height: '100%',
                                                                            '& .MuiBadge-badge': {
                                                                                right: 20
                                                                            }
                                                                        }}
                                                                        badgeContent={displayData.displayBadge}
                                                                        color={displayData.badge === 'POPULAR' ? 'primary' : 'error'}
                                                                    >
                                                                        <Tooltip
                                                                            title={renderTemplateTooltip(displayData, theme)}
                                                                            placement='top'
                                                                            arrow
                                                                            {...getTooltipStyleProps(theme)}
                                                                        >
                                                                            <Box>
                                                                                {(displayData.type === 'Chatflow' ||
                                                                                    displayData.type === 'Agentflow' ||
                                                                                    displayData.type === 'AgentflowV2') && (
                                                                                    <ItemCard
                                                                                        onClick={() => goToCanvas(displayData)}
                                                                                        data={displayData}
                                                                                        images={images[displayData.id]}
                                                                                        icons={icons[displayData.id]}
                                                                                    />
                                                                                )}
                                                                                {displayData.type === 'Tool' && (
                                                                                    <ItemCard data={displayData} onClick={() => goToTool(displayData)} />
                                                                                )}
                                                                            </Box>
                                                                        </Tooltip>
                                                                    </Badge>
                                                                ) : (
                                                                    <Tooltip
                                                                        title={renderTemplateTooltip(displayData, theme)}
                                                                        placement='top'
                                                                        arrow
                                                                        {...getTooltipStyleProps(theme)}
                                                                    >
                                                                        <Box>
                                                                            {(displayData.type === 'Chatflow' ||
                                                                                displayData.type === 'Agentflow' ||
                                                                                displayData.type === 'AgentflowV2') && (
                                                                                <ItemCard
                                                                                    onClick={() => goToCanvas(displayData)}
                                                                                    data={displayData}
                                                                                    images={images[displayData.id]}
                                                                                    icons={icons[displayData.id]}
                                                                                />
                                                                            )}
                                                                            {displayData.type === 'Tool' && (
                                                                                <ItemCard data={displayData} onClick={() => goToTool(displayData)} />
                                                                            )}
                                                                        </Box>
                                                                    </Tooltip>
                                                                )}
                                                            </Box>
                                                        )
                                                    })}
                                            </Box>
                                        )}
                                    </>
                                ) : (
                                    <MarketplaceTable
                                        data={getAllTemplatesMarketplacesApi.data}
                                        filterFunction={filterFlows}
                                        filterByType={filterByType}
                                        filterByBadge={filterByBadge}
                                        filterByFramework={filterByFramework}
                                        filterByUsecases={filterByUsecases}
                                        goToTool={goToTool}
                                        goToCanvas={goToCanvas}
                                        isLoading={isLoading}
                                    />
                                )}

                                {!isLoading && (!getAllTemplatesMarketplacesApi.data || getAllTemplatesMarketplacesApi.data.length === 0) && (
                                    <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                        <Box sx={{ p: 2, height: 'auto' }}>
                                            <img
                                                style={{ objectFit: 'cover', height: '25vh', width: 'auto' }}
                                                src={WorkflowEmptySVG}
                                                alt='WorkflowEmptySVG'
                                            />
                                        </Box>
                                        <div>Henüz hazır topluluk şablonu bulunmuyor</div>
                                    </Stack>
                                )}
                            </TabPanel>
                        </Available>

                        <Available permission='templates:custom'>
                            <TabPanel value={activeTabValue} index={1}>
                                <Stack direction='row' sx={{ gap: 2, my: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                                    {templateUsecases.map((usecase, index) => (
                                        <FormControlLabel
                                            key={index}
                                            size='small'
                                            control={
                                                <Checkbox
                                                    disabled={
                                                        eligibleTemplateUsecases.length === 0
                                                            ? true
                                                            : !eligibleTemplateUsecases.includes(usecase)
                                                    }
                                                    color='success'
                                                    checked={selectedTemplateUsecases.includes(usecase)}
                                                    onChange={(event) => {
                                                        setSelectedTemplateUsecases(
                                                            event.target.checked
                                                                ? [...selectedTemplateUsecases, usecase]
                                                                : selectedTemplateUsecases.filter((item) => item !== usecase)
                                                        )
                                                    }}
                                                />
                                            }
                                            label={getMarketplaceUsecaseLabel(usecase)}
                                        />
                                    ))}
                                </Stack>

                                {selectedTemplateUsecases.length > 0 && (
                                    <Button
                                        sx={{ width: 'max-content', mb: 2, borderRadius: '20px' }}
                                        variant='outlined'
                                        onClick={() => clearAllUsecases()}
                                        startIcon={<IconX />}
                                    >
                                        Tümünü Temizle
                                    </Button>
                                )}

                                {!view || view === 'card' ? (
                                    <>
                                        {isLoading ? (
                                            <Box display='grid' gridTemplateColumns='repeat(3, 1fr)' gap={gridSpacing}>
                                                <Skeleton variant='rounded' height={220} />
                                                <Skeleton variant='rounded' height={220} />
                                                <Skeleton variant='rounded' height={220} />
                                            </Box>
                                        ) : (
                                            <Box display='grid' gridTemplateColumns='repeat(3, 1fr)' gap={gridSpacing}>
                                                {getAllCustomTemplatesApi.data
                                                    ?.filter(filterByBadge)
                                                    .filter(filterByType)
                                                    .filter(filterFlows)
                                                    .filter(filterByFramework)
                                                    .filter(filterByUsecases)
                                                    .map((data, index) => {
                                                        const displayData = getMarketplaceTemplateDisplayData(data)

                                                        return (
                                                            <Box key={index}>
                                                                {displayData.badge ? (
                                                                    <Badge
                                                                        sx={{
                                                                            width: '100%',
                                                                            height: '100%',
                                                                            '& .MuiBadge-badge': {
                                                                                right: 20
                                                                            }
                                                                        }}
                                                                        badgeContent={displayData.displayBadge}
                                                                        color={displayData.badge === 'POPULAR' ? 'primary' : 'error'}
                                                                    >
                                                                        <Tooltip
                                                                            title={renderTemplateTooltip(displayData, theme)}
                                                                            placement='top'
                                                                            arrow
                                                                            {...getTooltipStyleProps(theme)}
                                                                        >
                                                                            <Box>
                                                                                {(displayData.type === 'Chatflow' ||
                                                                                    displayData.type === 'Agentflow' ||
                                                                                    displayData.type === 'AgentflowV2') && (
                                                                                    <ItemCard
                                                                                        onClick={() => goToCanvas(displayData)}
                                                                                        data={displayData}
                                                                                        images={templateImages[displayData.id]}
                                                                                        icons={templateIcons[displayData.id]}
                                                                                    />
                                                                                )}
                                                                                {displayData.type === 'Tool' && (
                                                                                    <ItemCard data={displayData} onClick={() => goToTool(displayData)} />
                                                                                )}
                                                                            </Box>
                                                                        </Tooltip>
                                                                    </Badge>
                                                                ) : (
                                                                    <Tooltip
                                                                        title={renderTemplateTooltip(displayData, theme)}
                                                                        placement='top'
                                                                        arrow
                                                                        {...getTooltipStyleProps(theme)}
                                                                    >
                                                                        <Box>
                                                                            {(displayData.type === 'Chatflow' ||
                                                                                displayData.type === 'Agentflow' ||
                                                                                displayData.type === 'AgentflowV2') && (
                                                                                <ItemCard
                                                                                    onClick={() => goToCanvas(displayData)}
                                                                                    data={displayData}
                                                                                    images={templateImages[displayData.id]}
                                                                                    icons={templateIcons[displayData.id]}
                                                                                />
                                                                            )}
                                                                            {displayData.type === 'Tool' && (
                                                                                <ItemCard data={displayData} onClick={() => goToTool(displayData)} />
                                                                            )}
                                                                        </Box>
                                                                    </Tooltip>
                                                                )}
                                                            </Box>
                                                        )
                                                    })}
                                            </Box>
                                        )}
                                    </>
                                ) : (
                                    <MarketplaceTable
                                        data={getAllCustomTemplatesApi.data}
                                        filterFunction={filterFlows}
                                        filterByType={filterByType}
                                        filterByBadge={filterByBadge}
                                        filterByFramework={filterByFramework}
                                        filterByUsecases={filterByUsecases}
                                        goToTool={goToTool}
                                        goToCanvas={goToCanvas}
                                        isLoading={isLoading}
                                        onDelete={hasPermission('templates:custom-delete') ? onDeleteCustomTemplate : null}
                                        onShare={hasPermission('templates:custom-share') ? share : null}
                                    />
                                )}

                                {!isLoading && (!getAllCustomTemplatesApi.data || getAllCustomTemplatesApi.data.length === 0) && (
                                    <Stack sx={{ alignItems: 'center', justifyContent: 'center' }} flexDirection='column'>
                                        <Box sx={{ p: 2, height: 'auto' }}>
                                            <img
                                                style={{ objectFit: 'cover', height: '25vh', width: 'auto' }}
                                                src={WorkflowEmptySVG}
                                                alt='WorkflowEmptySVG'
                                            />
                                        </Box>
                                        <div>Henüz kaydedilmiş özel şablon bulunmuyor</div>
                                    </Stack>
                                )}
                            </TabPanel>
                        </Available>
                    </Stack>
                )}
            </MainCard>

            <ToolDialog
                show={showToolDialog}
                dialogProps={toolDialogProps}
                onCancel={() => setShowToolDialog(false)}
                onConfirm={() => setShowToolDialog(false)}
                onUseTemplate={(tool) => onUseTemplate(tool)}
            />

            {showShareTemplateDialog && (
                <ShareWithWorkspaceDialog
                    show={showShareTemplateDialog}
                    dialogProps={shareTemplateDialogProps}
                    onCancel={() => setShowShareTemplateDialog(false)}
                    setError={setError}
                />
            )}

            <ConfirmDialog />
        </>
    )
}

export default Marketplace
