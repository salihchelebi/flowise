import { useNavigate } from 'react-router-dom'

// material-ui
import { Box, Button, Card, CardContent, Chip, Divider, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ImageSlot from '@/views/sectoral-agents/components/ImageSlot'
import { seoEngineerPage } from '@/views/sectoral-agents/sectoralAgentsData'

const SeoEngineer = () => {
    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <MainCard>
            <Stack flexDirection='column' sx={{ gap: 3 }}>
                <Box
                    sx={{
                        p: { xs: 2.5, md: 4 },
                        borderRadius: 3,
                        border: `1px solid ${theme.palette.grey[900]}25`,
                        background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, rgba(124,77,255,0.20) 0%, rgba(0,188,212,0.08) 45%, rgba(0,0,0,0) 100%)'
                            : 'linear-gradient(135deg, rgba(124,77,255,0.08) 0%, rgba(0,188,212,0.04) 45%, rgba(255,255,255,0) 100%)'
                    }}
                >
                    <Stack
                        sx={{
                            gap: 3,
                            flexDirection: { xs: 'column', xl: 'row' },
                            alignItems: { xs: 'stretch', xl: 'center' },
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ maxWidth: 860 }}>
                            <Chip
                                label={seoEngineerPage.hero.badge}
                                color='primary'
                                size='small'
                                sx={{ mb: 2, borderRadius: 999 }}
                            />
                            <Typography variant='h1' sx={{ mb: 1.5 }}>
                                {seoEngineerPage.hero.title}
                            </Typography>
                            <Typography variant='body1' sx={{ color: theme.palette.text.secondary, maxWidth: 780, mb: 2.25 }}>
                                {seoEngineerPage.hero.subtitle}
                            </Typography>

                            <Stack direction='row' flexWrap='wrap' sx={{ gap: 1.25, mb: 2 }}>
                                <Button
                                    variant='contained'
                                    sx={{ borderRadius: 2 }}
                                    onClick={() => navigate(seoEngineerPage.hero.primaryCta.route)}
                                >
                                    {seoEngineerPage.hero.primaryCta.label}
                                </Button>
                                <Button
                                    variant='outlined'
                                    sx={{ borderRadius: 2 }}
                                    onClick={() => navigate(seoEngineerPage.hero.secondaryCta.route)}
                                >
                                    {seoEngineerPage.hero.secondaryCta.label}
                                </Button>
                            </Stack>

                            <Stack direction='row' flexWrap='wrap' sx={{ gap: 1 }}>
                                {seoEngineerPage.hero.supportLine.map((item) => (
                                    <Chip key={item} label={item} size='small' variant='outlined' />
                                ))}
                            </Stack>
                        </Box>

                        <Box sx={{ width: '100%', maxWidth: 520 }}>
                            <ImageSlot
                                label='lp1 hero alanı'
                                caption='Resim eklendiğinde bu alan premium hero görseline dönüşecek'
                                height={330}
                            />
                        </Box>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 2
                    }}
                >
                    {seoEngineerPage.metrics.map((item) => (
                        <Card
                            key={item.value}
                            sx={{
                                border: `1px solid ${theme.palette.grey[900]}25`,
                                borderRadius: 3
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant='overline' sx={{ color: theme.palette.primary.main }}>
                                    {item.label}
                                </Typography>
                                <Typography variant='h2' sx={{ mb: 1 }}>
                                    {item.value}
                                </Typography>
                                <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                    {item.help}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', xl: '1fr 1fr' },
                        gap: 2
                    }}
                >
                    <Card sx={{ border: `1px solid ${theme.palette.grey[900]}25`, borderRadius: 3 }}>
                        <CardContent sx={{ p: 3 }}>
                            <Stack sx={{ gap: 1.75 }}>
                                <Typography variant='h3'>Büyük sorun burada başlıyor</Typography>
                                {seoEngineerPage.painPoints.map((item) => (
                                    <Typography key={item} variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                        {item}
                                    </Typography>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ border: `1px solid ${theme.palette.grey[900]}25`, borderRadius: 3 }}>
                        <CardContent sx={{ p: 3 }}>
                            <Stack sx={{ gap: 1.75 }}>
                                <Typography variant='h3'>Bu sistem neyi değiştirir?</Typography>
                                {seoEngineerPage.promises.map((item) => (
                                    <Typography key={item} variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                        {item}
                                    </Typography>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>

                <Card sx={{ border: `1px solid ${theme.palette.grey[900]}25`, borderRadius: 3 }}>
                    <CardContent sx={{ p: 3 }}>
                        <Stack sx={{ gap: 2.25 }}>
                            <Typography variant='h2'>Bu sistem SEO işini tek büyük görev olarak değil, yönetilebilir ajan işlerine böler</Typography>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(4, 1fr)' },
                                    gap: 1.5
                                }}
                            >
                                {seoEngineerPage.mechanism.map((item) => (
                                    <Box
                                        key={item}
                                        sx={{
                                            p: 2,
                                            borderRadius: 2,
                                            backgroundColor: theme.palette.grey[500] + '10'
                                        }}
                                    >
                                        <Typography variant='body2'>{item}</Typography>
                                    </Box>
                                ))}
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', xl: '1.15fr 0.85fr' },
                        gap: 2
                    }}
                >
                    <Card sx={{ border: `1px solid ${theme.palette.grey[900]}25`, borderRadius: 3 }}>
                        <CardContent sx={{ p: 3 }}>
                            <Stack sx={{ gap: 2 }}>
                                <Typography variant='h2'>SEO mühendisi için en doğru ürün akışı</Typography>
                                <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                    Buradaki mantık şudur: küçük işi ayrı motor yap, büyük orkestrasyonu ayrı yönet, bilgiyi tek merkezde topla,
                                    çalıştırmaları izle ve sistemi tekrar tekrar düzelt.
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
                                        gap: 2
                                    }}
                                >
                                    {seoEngineerPage.routeJourney.map((item) => (
                                        <Card
                                            key={item.route}
                                            variant='outlined'
                                            sx={{
                                                borderRadius: 2.5,
                                                borderColor: theme.palette.grey[900] + '25',
                                                height: '100%'
                                            }}
                                        >
                                            <CardContent sx={{ p: 2.5 }}>
                                                <Stack sx={{ gap: 1.25, height: '100%' }}>
                                                    <Chip label={item.route} size='small' color='primary' sx={{ width: 'fit-content' }} />
                                                    <Typography variant='h4'>{item.title}</Typography>
                                                    <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                                        {item.description}
                                                    </Typography>

                                                    <Box component='ul' sx={{ pl: 2.25, m: 0 }}>
                                                        {item.bullets.map((bullet) => (
                                                            <Typography
                                                                component='li'
                                                                key={bullet}
                                                                variant='body2'
                                                                sx={{ color: theme.palette.text.secondary, mb: 0.75 }}
                                                            >
                                                                {bullet}
                                                            </Typography>
                                                        ))}
                                                    </Box>

                                                    <Box sx={{ mt: 'auto', pt: 1 }}>
                                                        <Button
                                                            size='small'
                                                            variant='text'
                                                            onClick={() => item.route.startsWith('/') ? navigate(item.route) : null}
                                                        >
                                                            {item.ctaLabel}
                                                        </Button>
                                                    </Box>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Stack sx={{ gap: 2 }}>
                        <ImageSlot label='lp3 route haritası' caption='Chatflows + tools + variables + document stores + executions' height={280} />
                        <ImageSlot label='lp6 canvas görünümü' caption='Araştırma -> brief -> QA -> linkleme -> export zinciri' height={280} />
                    </Stack>
                </Box>

                <Card sx={{ border: `1px solid ${theme.palette.grey[900]}25`, borderRadius: 3 }}>
                    <CardContent sx={{ p: 3 }}>
                        <Stack sx={{ gap: 2.25 }}>
                            <Typography variant='h2'>{seoEngineerPage.findlawCase.title}</Typography>
                            <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                {seoEngineerPage.findlawCase.subtitle}
                            </Typography>

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', lg: '0.9fr 1.1fr' },
                                    gap: 2
                                }}
                            >
                                <Card
                                    variant='outlined'
                                    sx={{ borderRadius: 2.5, borderColor: theme.palette.grey[900] + '25' }}
                                >
                                    <CardContent sx={{ p: 2.5 }}>
                                        <Typography variant='h4' sx={{ mb: 1.5 }}>
                                            Bu projede çoğalan şeyler
                                        </Typography>
                                        <Box component='ul' sx={{ pl: 2.25, m: 0 }}>
                                            {seoEngineerPage.findlawCase.pageTypes.map((item) => (
                                                <Typography
                                                    component='li'
                                                    key={item}
                                                    variant='body2'
                                                    sx={{ color: theme.palette.text.secondary, mb: 0.75 }}
                                                >
                                                    {item}
                                                </Typography>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>

                                <Stack sx={{ gap: 1.25 }}>
                                    {seoEngineerPage.findlawCase.stages.map((stage) => (
                                        <Box
                                            key={stage.title}
                                            sx={{
                                                p: 2,
                                                borderRadius: 2.5,
                                                backgroundColor: theme.palette.grey[500] + '10'
                                            }}
                                        >
                                            <Typography variant='subtitle1' sx={{ mb: 0.5 }}>
                                                {stage.title}
                                            </Typography>
                                            <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                                {stage.detail}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>

                            <Box
                                sx={{
                                    p: 2.25,
                                    borderRadius: 2.5,
                                    border: `1px solid ${theme.palette.primary.main}30`,
                                    backgroundColor: theme.palette.primary.main + '08'
                                }}
                            >
                                <Typography variant='body1'>{seoEngineerPage.findlawCase.close}</Typography>
                            </Box>
                        </Stack>
                    </CardContent>
                </Card>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', xl: '1fr 1fr' },
                        gap: 2
                    }}
                >
                    <Card sx={{ border: `1px solid ${theme.palette.grey[900]}25`, borderRadius: 3 }}>
                        <CardContent sx={{ p: 3 }}>
                            <Stack sx={{ gap: 2 }}>
                                <Typography variant='h2'>Bu sayfada kullanılacak görseller</Typography>
                                <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                    Sen görselleri sonradan üreteceksin. Bu paket şu an görsel zorunlu kılmıyor. Görsel gelene kadar CSS
                                    tabanlı placeholder gösteriyor.
                                </Typography>
                                <Divider />
                                <Stack sx={{ gap: 1.25 }}>
                                    {seoEngineerPage.imageSpecs.map((item) => (
                                        <Box
                                            key={item.file}
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                gap: 2,
                                                p: 1.5,
                                                borderRadius: 2,
                                                backgroundColor: theme.palette.grey[500] + '10'
                                            }}
                                        >
                                            <Typography variant='body2'>{item.file}</Typography>
                                            <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                                {item.size} - {item.usage}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ border: `1px solid ${theme.palette.grey[900]}25`, borderRadius: 3 }}>
                        <CardContent sx={{ p: 3 }}>
                            <Stack sx={{ gap: 2 }}>
                                <Typography variant='h2'>Sık sorulan kritik sorular</Typography>
                                {seoEngineerPage.faq.map((item) => (
                                    <Box key={item.q}>
                                        <Typography variant='subtitle1' sx={{ mb: 0.5 }}>
                                            {item.q}
                                        </Typography>
                                        <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                            {item.a}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>

                <Box
                    sx={{
                        p: { xs: 2.5, md: 3.5 },
                        borderRadius: 3,
                        border: `1px solid ${theme.palette.grey[900]}25`,
                        background: theme.palette.mode === 'dark'
                            ? 'linear-gradient(135deg, rgba(0,188,212,0.12) 0%, rgba(124,77,255,0.18) 100%)'
                            : 'linear-gradient(135deg, rgba(0,188,212,0.05) 0%, rgba(124,77,255,0.07) 100%)'
                    }}
                >
                    <Stack
                        sx={{
                            gap: 2,
                            alignItems: { xs: 'flex-start', lg: 'center' },
                            justifyContent: 'space-between',
                            flexDirection: { xs: 'column', lg: 'row' }
                        }}
                    >
                        <Box sx={{ maxWidth: 780 }}>
                            <Typography variant='h2' sx={{ mb: 1 }}>
                                Tek tek sayfa yetiştirmeye çalışma. Sistemi kur. Akışı kur. Ajanları çalıştır.
                            </Typography>
                            <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                Bir SEO mühendisi için gerçek ölçek burada başlar: daha fazla insan eklemek değil, daha iyi orkestrasyon
                                kurmak.
                            </Typography>
                        </Box>

                        <Stack direction='row' flexWrap='wrap' sx={{ gap: 1.25 }}>
                            <Button variant='contained' sx={{ borderRadius: 2 }} onClick={() => navigate('/chatflows')}>
                                Mini Motorları Kur
                            </Button>
                            <Button variant='outlined' sx={{ borderRadius: 2 }} onClick={() => navigate('/agentflows')}>
                                Büyük Akışı Aç
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </MainCard>
    )
}

export default SeoEngineer
