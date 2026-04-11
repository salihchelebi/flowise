import { FormControl, MenuItem, Select } from '@mui/material'
import { useLanguage } from '@/i18n/LanguageContext'

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage()

    return (
        <FormControl size='small' sx={{ minWidth: 110, mr: 1 }}>
            <Select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <MenuItem value='tr'>Türkçe</MenuItem>
                <MenuItem value='en'>English</MenuItem>
            </Select>
        </FormControl>
    )
}

export default LanguageSwitcher
