import { useNavigate } from 'react-router-dom'

// material-ui
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ViewHeader from '@/layout/MainLayout/ViewHeader'
import ImageSlot from '@/views/sectoral-agents/components/ImageSlot'
import { sectorCards } from '@/views/sectoral-agents/sectoralAgentsData'

const quickRoutes = [
    {
        title: 'Sohbet Akışları',
        description: 'Mini SEO motorlarını burada kurarsın. Tek iş yapan akışlar, büyük sistemi temiz tutar.',
        route: '/chatflows',
        cta: 'Aç'
    },
    {
        title: 'Ajan Akışları',
        description: 'Büyük orkestrasyonu burada kurarsın. Rol bazlı ajanlar ve karar zinciri burada görünür olur.',
        route: '/agentflows',
        cta: 'Aç'
    },
    {
        title: 'Doküman Depoları',
        description: 'SOP, rakip sayfa, sitemap ve SEO kural setlerini tek merkezde toplarsın.',
        route: '/document-stores',
        cta: 'Aç'
    }
]

const SectoralAgents = () => {
    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <MainCard>
            <Stack flexDirection='column' sx={{ gap: 3 }}>
                <ViewHeader
                    title='Sektörel Ajanlar'
                    description='Her sektörü aynı genel metinle boğmak yerine, işi o sektörün gerçek operasyonuna göre anlatan ve doğru ürün yüzeylerine götüren rehber sayfalar.'
                />

                <Box
                    sx={{
                        p: { xs: 2.25, md: 3.5 },
                        borderRadius: 3,
                        border: `1px solid ${theme.palette.grey[900]}25`,
                        background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, rgba(103,58,183,0.18) 0%, rgba(33,150,243,0.06) 100%)'
                            : 'linear-gradient(135deg, rgba(103,58,183,0.08) 0%, rgba(33,150,243,0.04) 100%)'
                    }}
                >
                    <Stack sx={{ gap: 2.5 }}>
                        <Chip
                            label='İlk canlı senaryo hazır'
                            color='primary'
                            size='small'
                            sx={{ width: 'fit-content', borderRadius: 999 }}
                        />
                        <Stack
                            sx={{
                                gap: 3,
                                alignItems: { xs: 'flex-start', lg: 'center' },
                                justifyContent: 'space-between',
                                flexDirection: { xs: 'column', lg: 'row' }
                            }}
                        >
                            <Box sx={{ maxWidth: 820 }}>
                                <Typography variant='h1' sx={{ mb: 1.5 }}>
                                    SEO Mühendisi için gerçek sistem senaryosu hazır.
                                </Typography>
                                <Typography variant='body1' sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                                    Büyük SEO projelerinde sorun içerik yazmak değil, operasyonu yönetmektir. Bu alan, kullanıcıyı
                                    boş genellemelerle değil; sektörün gerçek iş akışına göre doğru ürün yüzeylerine götürür.
                                </Typography>

                                <Stack direction='row' flexWrap='wrap' sx={{ gap: 1.25 }}>
                                    <Button variant='contained' sx={{ borderRadius: 2 }} onClick={() => navigate('/sectoral-agents/seo-engineer')}>
                                        SEO sistemi nasıl kurulur, gör
                                    </Button>
                                    <Button variant='outlined' sx={{ borderRadius: 2 }} onClick={() => navigate('/agentflows')}>
                                        Ajan Akışlarına Git
                                    </Button>
                                </Stack>
                            </Box>

                            <Box sx={{ width: '100%', maxWidth: 480 }}>
                                <ImageSlot
                                    label='SEO Mühendisi'
                                    caption='Büyük SEO operasyonunu ajan sistemine çeviren açılış yüzeyi'
                                    height={280}
                                />
                            </Box>
                        </Stack>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', xl: '1.25fr 0.75fr' },
                        gap: 2
                    }}
                >
                    <Card
                        sx={{
                            border: `1px solid ${theme.palette.grey[900]}25`,
                            borderRadius: 3
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Stack sx={{ gap: 2 }}>
                                <Typography variant='h3'>Neden bu alan var?</Typography>
                                <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                    Çünkü kullanıcıya sadece “ajan kur” demek yetmez. Hangi sektörde, hangi ürün yüzeyiyle, hangi sırayla,
                                    hangi fayda için ilerleyeceğini çok açık anlatmak gerekir.
                                </Typography>
                                <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                    İlk dikey senaryo SEO Mühendisi için hazırlandı. Alt sayfa, Flowise içindeki gerçek ürün alanlarını
                                    kullanarak büyük bir SEO operasyonunun nasıl sistemleştirileceğini adım adım anlatır.
                                </Typography>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card
                        sx={{
                            border: `1px solid ${theme.palette.grey[900]}25`,
                            borderRadius: 3
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Stack sx={{ gap: 1.5 }}>
                                <Typography variant='h3'>Hızlı Yönlendirme</Typography>
                                {quickRoutes.map((item) => (
                                    <Box
                                        key={item.title}
                                        sx={{
                                            p: 1.75,
                                            borderRadius: 2,
                                            backgroundColor: theme.palette.grey[500] + '10'
                                        }}
                                    >
                                        <Typography variant='subtitle1' sx={{ mb: 0.5 }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant='body2' sx={{ color: theme.palette.text.secondary, mb: 1.25 }}>
                                            {item.description}
                                        </Typography>
                                        <Button size='small' variant='text' onClick={() => navigate(item.route)}>
                                            {item.cta}
                                        </Button>
                                    </Box>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' },
                        gap: 2
                    }}
                >
                    {sectorCards.map((sector) => (
                        <Card
                            key={sector.slug}
                            sx={{
                                border: `1px solid ${theme.palette.grey[900]}25`,
                                borderRadius: 3,
                                height: '100%'
                            }}
                        >
                            <CardContent sx={{ p: 3, height: '100%' }}>
                                <Stack sx={{ gap: 2, height: '100%' }}>
                                    <Stack direction='row' justifyContent='space-between' alignItems='flex-start' sx={{ gap: 1.5 }}>
                                        <Box>
                                            <Typography variant='overline' sx={{ letterSpacing: 0.4, color: theme.palette.primary.main }}>
                                                {sector.kicker}
                                            </Typography>
                                            <Typography variant='h3'>{sector.title}</Typography>
                                        </Box>
                                        <Chip
                                            label={sector.status === 'active' ? 'Canlı Senaryo' : 'Yakında'}
                                            size='small'
                                            color={sector.status === 'active' ? 'primary' : 'default'}
                                        />
                                    </Stack>

                                    <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                        {sector.description}
                                    </Typography>

                                    <Box component='ul' sx={{ pl: 2.25, m: 0 }}>
                                        {sector.bullets.map((bullet) => (
                                            <Typography
                                                component='li'
                                                variant='body2'
                                                key={bullet}
                                                sx={{ color: theme.palette.text.secondary, mb: 0.75 }}
                                            >
                                                {bullet}
                                            </Typography>
                                        ))}
                                    </Box>

                                    <Box sx={{ mt: 'auto', pt: 1 }}>
                                        <Button
                                            fullWidth
                                            variant={sector.status === 'active' ? 'contained' : 'outlined'}
                                            disabled={!sector.route}
                                            sx={{ borderRadius: 2 }}
                                            onClick={() => sector.route && navigate(sector.route)}
                                        >
                                            {sector.cta}
                                        </Button>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Stack>
        </MainCard>
    )
}

export default SectoralAgents
