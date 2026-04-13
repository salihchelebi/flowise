import { useNavigate } from 'react-router-dom'

// material-ui
import { Box, Button, Card, CardContent, Chip, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

// project imports
import MainCard from '@/ui-component/cards/MainCard'
import ViewHeader from '@/layout/MainLayout/ViewHeader'

const quickActions = [
    {
        title: 'Hazır Şablonlarla Başla',
        description: 'Hazır akışları ve örnek yapıları inceleyerek hızlı başlangıç yapın.',
        buttonText: 'Pazaryerini Aç',
        route: '/marketplaces'
    },
    {
        title: 'Ajan Akışlarını Aç',
        description: 'Mevcut ajan akışlarını görüntüleyin, düzenleyin veya yeni bir yapı kurun.',
        buttonText: 'Ajan Akışlarına Git',
        route: '/agentflows'
    },
    {
        title: 'Araçlarını Yönet',
        description: 'Ajanların kullanacağı araçları, API bağlantılarını ve yardımcı işlevleri düzenleyin.',
        buttonText: 'Araçları Aç',
        route: '/tools'
    }
]

const sectors = [
    {
        title: 'Emlak',
        description: 'Portföy toplama, müşteri karşılama, ön bilgi alma ve randevu yönlendirme için uygundur.',
        tags: ['Portföy Toplama', 'Müşteri Ön Eleme', 'Randevu']
    },
    {
        title: 'Hukuk',
        description: 'İlk başvuru toplama, dosya ön sınıflandırma ve danışan yönlendirme süreçlerinde kullanılabilir.',
        tags: ['Başvuru Toplama', 'Ön Sınıflandırma', 'Yönlendirme']
    },
    {
        title: 'Sağlık',
        description: 'Hasta ön bilgi toplama, sık soruları yanıtlama ve hizmet yönlendirme süreçlerine uygundur.',
        tags: ['Ön Bilgi', 'SSS', 'Hizmet Yönlendirme']
    },
    {
        title: 'Eğitim',
        description: 'Öğrenci bilgilendirme, kayıt öncesi yönlendirme ve program tanıtımı için kullanılabilir.',
        tags: ['Bilgilendirme', 'Kayıt Öncesi', 'Program Tanıtımı']
    },
    {
        title: 'E-ticaret',
        description: 'Ürün önerme, sipariş öncesi soru cevap ve satış destek süreçleri için uygundur.',
        tags: ['Ürün Önerisi', 'Satış Destek', 'Sipariş Öncesi']
    },
    {
        title: 'Müşteri Destek',
        description: 'Talep karşılama, konu sınıflandırma ve uygun akışa yönlendirme için güçlü bir başlangıç sunar.',
        tags: ['Talep Alma', 'Sınıflandırma', 'Destek Akışı']
    }
]

const steps = [
    'Sektörünü seç.',
    'Hazır şablon veya ajan akışıyla başla.',
    'Gerekli araçları ve veri bağlantılarını ekle.',
    'Test ederek çıktıyı doğrula.',
    'Kaydet, düzenle ve yayına hazır hale getir.'
]

const SectoralAgents = () => {
    const theme = useTheme()
    const navigate = useNavigate()

    return (
        <MainCard>
            <Stack flexDirection='column' sx={{ gap: 3 }}>
                <ViewHeader
                    title='Sektörel Ajanlar'
                    description='Hazır sektör şablonlarıyla, Türkçe yönlendirmelerle ve adım adım ilerleyerek ajan tasarlayın.'
                />

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: 2
                    }}
                >
                    {quickActions.map((item) => (
                        <Card
                            key={item.title}
                            sx={{
                                border: 1,
                                borderColor: theme.palette.grey[900] + 25,
                                borderRadius: 2,
                                height: '100%'
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Stack sx={{ gap: 2 }}>
                                    <Typography variant='h3'>{item.title}</Typography>
                                    <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                        {item.description}
                                    </Typography>
                                    <Box>
                                        <Button variant='contained' sx={{ borderRadius: 2 }} onClick={() => navigate(item.route)}>
                                            {item.buttonText}
                                        </Button>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    ))}
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
                        gap: 2
                    }}
                >
                    <Card
                        sx={{
                            border: 1,
                            borderColor: theme.palette.grey[900] + 25,
                            borderRadius: 2
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Stack sx={{ gap: 2 }}>
                                <Typography variant='h3'>Başlamak İçin Sektör Seç</Typography>
                                <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                    Bu alan, ileride sürükle bırak destekli sektörel ajan kurucusunun başlangıç ekranı olarak kullanılacaktır.
                                    Şimdilik mevcut Flowise altyapısına uyumlu biçimde sizi doğru yüzeylere yönlendirir.
                                </Typography>

                                <Box
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                                        gap: 2
                                    }}
                                >
                                    {sectors.map((sector) => (
                                        <Card
                                            key={sector.title}
                                            variant='outlined'
                                            sx={{
                                                borderRadius: 2,
                                                borderColor: theme.palette.grey[900] + 25
                                            }}
                                        >
                                            <CardContent sx={{ p: 2.5 }}>
                                                <Stack sx={{ gap: 1.5 }}>
                                                    <Typography variant='h4'>{sector.title}</Typography>
                                                    <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                                        {sector.description}
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                        {sector.tags.map((tag) => (
                                                            <Chip key={tag} label={tag} size='small' />
                                                        ))}
                                                    </Box>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card
                        sx={{
                            border: 1,
                            borderColor: theme.palette.grey[900] + 25,
                            borderRadius: 2
                        }}
                    >
                        <CardContent sx={{ p: 3 }}>
                            <Stack sx={{ gap: 2 }}>
                                <Typography variant='h3'>Adım Adım Yol Haritası</Typography>
                                <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                    İlk sürümde amaç, kullanıcıyı kaybolmadan doğru akışa taşımaktır.
                                </Typography>

                                <Stack sx={{ gap: 1.5 }}>
                                    {steps.map((step, index) => (
                                        <Box
                                            key={step}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: 1.5,
                                                p: 1.5,
                                                borderRadius: 2,
                                                backgroundColor: theme.palette.grey[500] + '10'
                                            }}
                                        >
                                            <Chip label={`${index + 1}`} size='small' color='primary' />
                                            <Typography variant='body2'>{step}</Typography>
                                        </Box>
                                    ))}
                                </Stack>

                                <Box
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        background: theme.palette.primary.main + '10',
                                        border: `1px solid ${theme.palette.primary.main}25`
                                    }}
                                >
                                    <Typography variant='subtitle2' sx={{ mb: 1 }}>
                                        Not
                                    </Typography>
                                    <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                                        Sonraki aşamada bu ekran; sektör seçimi, tooltipli yönlendirme, hazır bloklar ve daha kolay ajan
                                        kurgulama deneyimiyle genişletilecektir.
                                    </Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>
                </Box>
            </Stack>
        </MainCard>
    )
}

export default SectoralAgents
