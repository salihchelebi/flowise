import { useNavigate } from 'react-router-dom'
import { Box, Button, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded'
import { getNetlifyLiteTexts } from './texts'
import { SECTORS } from './sectors'

const LANDING_IMAGES = {
    logo: { src: '/images/nissai-operasyon-kontrolu-logo.jpg', alt: 'NISSAI operasyon kontrolü logosu' },
    hero: { src: '/images/nissai-operasyon-paneli-hero.jpg', alt: 'NISSAI operasyon paneli ana görünümü' }
}

const heroBullets = [
    'Saatler süren işi dakikalara indir',
    'Daha fazla personel almadan daha fazla işi yönet',
    'Dağınıklığı bırak, kontrolü geri al'
]

const faqs = [
    { q: 'Kurulum ağır mı?', a: 'Hayır. Yapı hızlı açılacak şekilde tasarlandı.' },
    { q: 'Küçük ekipte anlamlı olur mu?', a: 'Evet. Küçük ve orta ekipte etki hızla görünür.' }
]

export default function LandingPage() {
    const navigate = useNavigate()
    const t = getNetlifyLiteTexts()

    return (
        <Box sx={{ background: '#fff', minHeight: '100vh' }}>
            <Container maxWidth='lg' sx={{ py: 6 }}>
                <Stack spacing={5}>
                    <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' alignItems='center'>
                        <Stack direction='row' spacing={1.5} alignItems='center'>
                            <Box component='img' src={LANDING_IMAGES.logo.src} alt={LANDING_IMAGES.logo.alt} sx={{ width: 44, height: 44, borderRadius: 2 }} />
                            <Typography sx={{ fontSize: 28, fontWeight: 900 }}>NISSAI</Typography>
                        </Stack>
                        <Button variant='contained' endIcon={<ArrowForwardRoundedIcon />} onClick={() => navigate('/netlify-lite/login')}>
                            {t.loginButton || 'YÖNETİCİ GİRİŞİ'}
                        </Button>
                    </Stack>

                    <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: '1px solid #e2e8f0' }}>
                        <Grid container spacing={3} alignItems='center'>
                            <Grid item xs={12} md={6}>
                                <Typography sx={{ fontWeight: 900, fontSize: { xs: '2rem', md: '3rem' }, lineHeight: 1.1 }}>
                                    Dağınık operasyon yüzünden müşteri kaçırmayı bırak.
                                </Typography>
                                <Stack spacing={1.2} mt={2.5}>
                                    {heroBullets.map((item) => (
                                        <Stack key={item} direction='row' spacing={1} alignItems='center'>
                                            <CheckCircleRoundedIcon color='primary' />
                                            <Typography>{item}</Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box component='img' src={LANDING_IMAGES.hero.src} alt={LANDING_IMAGES.hero.alt} sx={{ width: '100%', borderRadius: 3 }} />
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper elevation={0} sx={{ p: 3, borderRadius: 4, border: '1px solid #e2e8f0' }}>
                        <Stack direction='row' spacing={1} alignItems='center'>
                            <ShieldRoundedIcon color='success' />
                            <Typography sx={{ fontWeight: 800 }}>Sektör Mimarisi</Typography>
                        </Stack>
                        <Grid container spacing={2} mt={1}>
                            {SECTORS.slice(0, 6).map((sector) => (
                                <Grid item xs={12} md={6} key={sector.key}>
                                    <Chip label={sector.title} variant={sector.active ? 'filled' : 'outlined'} onClick={() => sector.active && navigate(`/netlify-lite/sektor/${sector.key}`)} />
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>

                    <Grid container spacing={2}>
                        {faqs.map((faq) => (
                            <Grid item xs={12} md={6} key={faq.q}>
                                <Paper elevation={0} sx={{ p: 2.5, borderRadius: 3, border: '1px solid #e2e8f0' }}>
                                    <Typography sx={{ fontWeight: 800 }}>{faq.q}</Typography>
                                    <Typography sx={{ color: '#475569', mt: 1 }}>{faq.a}</Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}
