import { createContext, useContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import en from './locales/en'
import tr from './locales/tr'

const STORAGE_KEY = 'flowise-language'
const DEFAULT_LANGUAGE = 'tr'
const SUPPORTED_LANGUAGES = ['tr', 'en']

const dict = { tr, en }

const getValueByPath = (obj, path) => path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj)

const interpolate = (value, params = {}) => {
    if (typeof value !== 'string') return value
    return value.replace(/\{(\w+)\}/g, (_, key) => (params[key] ?? `{${key}}`))
}

const getInitialLanguage = () => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED_LANGUAGES.includes(stored)) return stored

    return DEFAULT_LANGUAGE
}

const LanguageContext = createContext({
    language: DEFAULT_LANGUAGE,
    setLanguage: () => {},
    t: (key) => key,
    translateMarketplace: (template) => template
})

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(getInitialLanguage)

    const setLanguage = (nextLanguage) => {
        const safe = SUPPORTED_LANGUAGES.includes(nextLanguage) ? nextLanguage : DEFAULT_LANGUAGE
        setLanguageState(safe)
        localStorage.setItem(STORAGE_KEY, safe)
    }

    const t = (key, params) => {
        const current = getValueByPath(dict[language], key)
        if (current !== undefined) return interpolate(current, params)
        const fallback = getValueByPath(dict.en, key)
        if (fallback !== undefined) return interpolate(fallback, params)
        return key
    }

    const translateMarketplace = (template) => {
        const templateName = template?.templateName
        if (!templateName) return template
        const entry = t(`marketplace.templates.${templateName}`)
        if (!entry || typeof entry !== 'object') return template
        return {
            ...template,
            templateName: entry.name || template.templateName,
            description: entry.description || template.description,
            usecases: (template.usecases || []).map((usecase) => {
                const translatedUsecase = t(`marketplace.usecasesMap.${usecase}`)
                return translatedUsecase === `marketplace.usecasesMap.${usecase}` ? usecase : translatedUsecase
            })
        }
    }

    const value = useMemo(() => ({ language, setLanguage, t, translateMarketplace }), [language])

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

LanguageProvider.propTypes = {
    children: PropTypes.node
}

export const useLanguage = () => useContext(LanguageContext)
