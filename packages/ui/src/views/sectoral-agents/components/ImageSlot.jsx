import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const ImageSlot = ({ label, caption, height = 320 }) => {
    const theme = useTheme()

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: height,
                borderRadius: 3,
                overflow: 'hidden',
                border: `1px solid ${theme.palette.grey[900]}25`,
                background: theme.palette.mode === 'dark'
                    ? 'radial-gradient(circle at top left, rgba(124,77,255,0.34), transparent 35%), radial-gradient(circle at bottom right, rgba(0,200,83,0.18), transparent 30%), linear-gradient(135deg, rgba(18,18,24,1) 0%, rgba(12,16,34,1) 100%)'
                    : 'radial-gradient(circle at top left, rgba(98,0,234,0.12), transparent 35%), radial-gradient(circle at bottom right, rgba(0,150,136,0.10), transparent 30%), linear-gradient(135deg, #fbfbff 0%, #eef4ff 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                    width: '88%',
                    maxWidth: 920,
                    aspectRatio: '16/9',
                    borderRadius: 3,
                    border: `1px solid ${theme.palette.primary.main}30`,
                    background: theme.palette.mode === 'dark'
                        ? 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)'
                        : 'linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(244,247,255,0.92) 100%)',
                    boxShadow: theme.palette.mode === 'dark'
                        ? '0 18px 50px rgba(0,0,0,0.35)'
                        : '0 18px 50px rgba(30,60,120,0.10)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    p: { xs: 2.5, md: 3.5 }
                }}
            >
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                height: { xs: 18, md: 22 },
                                borderRadius: 999,
                                background: index % 2 === 0 ? theme.palette.primary.main + '20' : theme.palette.secondary.main + '20'
                            }}
                        />
                    ))}
                </Box>

                <Box sx={{ textAlign: 'center', px: { xs: 1, md: 4 } }}>
                    <Typography variant='h2' sx={{ mb: 1.5 }}>
                        {label}
                    </Typography>
                    {caption ? (
                        <Typography variant='body2' sx={{ color: theme.palette.text.secondary }}>
                            {caption}
                        </Typography>
                    ) : null}
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', gap: 1.25 }}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                minHeight: { xs: 56, md: 74 },
                                borderRadius: 2,
                                background: theme.palette.mode === 'dark'
                                    ? 'rgba(255,255,255,0.05)'
                                    : 'rgba(60,90,160,0.08)'
                            }}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    )
}

export default ImageSlot
