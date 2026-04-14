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
    Documents: 'Belgeler',
    'Documents QnA': 'Belgelerden Soru Cevap',
    'Reflective Agent': 'Cevabını Kendi Kontrol Eden Ajan',
    Productivity: 'Verimlilik',
    Automation: 'Otomasyon',
    API: 'API Entegrasyonu',
    'Web Search': 'Web Arama',
    Email: 'E-Posta',
    'Human Approval': 'İnsan Onayı',
    'Human in the Loop': 'İnsan Onaylı Akış',
    'Multi Agent': 'Çoklu Ajan',
    'Multi-Agent': 'Çoklu Ajan',
    Support: 'Destek'
}

const TEMPLATE_TRANSLATIONS = {
    'agentic rag': {
        title: 'Belgelerle Akıllı Soru Cevap Ajanı',
        description: 'Bu şablon, belge içinden bilgi bulur, cevap üretir ve verdiği cevabı tekrar kontrol eder.',
        purpose: 'Amaç: Belgelere dayalı daha doğru ve kontrollü cevap üretmek.',
        bullets: [
            'Belgeleri tarar',
            'Soruyla ilgili bilgiyi bulur',
            'İlk cevabı üretir',
            'Cevabını tekrar kontrol eder',
            'Daha güvenilir sonuç vermeye çalışır'
        ],
        usecases: ['Documents QnA', 'Reflective Agent']
    },
    'agents handoff': {
        title: 'Görev Devreden Ajan Sistemi',
        description: 'Bu şablon, gelen işi tek bir ajanda tutmaz; uygun ajana devrederek ilerler.',
        purpose: 'Amaç: Farklı görevleri doğru ajana yönlendirip süreci daha düzenli yürütmek.',
        bullets: [
            'İsteği anlar',
            'Görevi uygun ajana devreder',
            'Farklı senaryolara göre yol değiştirir',
            'Destek akışlarını bölerek yönetir',
            'İşi daha düzenli ilerletir'
        ],
        usecases: ['Customer Support', 'Multi-Agent']
    },
    'deep research with multi-turn conversations': {
        title: 'Çok Adımlı Derin Araştırma Ajanı',
        description: 'Bu şablon, tek cevapta durmaz; birkaç tur düşünerek araştırma yapar ve sonucu toparlar.',
        purpose: 'Amaç: Geniş bir konuyu adım adım araştırıp daha dolu bir sonuç üretmek.',
        bullets: [
            'Konuyu parçalara ayırır',
            'Birden fazla adımda araştırma yapar',
            'Ara sonuçları toplar',
            'Bulduklarını birleştirir',
            'Daha kapsamlı bir cevap hazırlar'
        ],
        usecases: ['Research', 'Web Search']
    },
    'deep research with subagents': {
        title: 'Alt Ajanlarla Derin Araştırma',
        description: 'Bu şablon, büyük bir araştırma işini küçük parçalara ayırır ve alt ajanlarla birlikte yürütür.',
        purpose: 'Amaç: Zor araştırma işlerini bölerek daha hızlı ve düzenli ilerlemek.',
        bullets: [
            'Büyük işi küçük görevlere ayırır',
            'Alt ajanlara görev dağıtır',
            'Her ajan kendi bölümünü inceler',
            'Sonuçları tek yerde toplar',
            'Araştırmayı daha sistemli hale getirir'
        ],
        usecases: ['Research', 'Multi-Agent']
    },
    'human in the loop': {
        title: 'İnsan Onaylı Akış',
        description: 'Bu şablon, yapay zekânın tek başına karar vermesini engeller; kritik noktada senden onay ister.',
        purpose: 'Amaç: Kontrolü tamamen yapay zekâya bırakmadan güvenli bir akış kurmak.',
        bullets: [
            'İlk taslağı hazırlar',
            'Gerekli yerde insan onayı ister',
            'Düzeltme alır',
            'Onay sonrası devam eder',
            'Kritik adımlarda kontrolü sende tutar'
        ],
        usecases: ['Human Approval', 'Email']
    },
    'interacting with api': {
        title: 'API ile Konuşan Ajan',
        description: 'Bu şablon, dış servislerle bağlantı kurar ve veriyi akışın parçası haline getirir.',
        purpose: 'Amaç: Harici sistemlerden veri almak veya onlara işlem göndermek.',
        bullets: [
            'API isteği gönderir',
            'Dönen veriyi okur',
            'Veriyi akış içinde kullanır',
            'Dış servislerle bağlantı kurar',
            'Otomasyonu güçlendirir'
        ],
        usecases: ['API', 'Automation']
    }
}

const ACTION_LINE = 'TIKLA + ÖNİZLE + KOPYALA + DÜZENLE'

const normalizeText = (value) =>
    String(value || '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, ' ')

const prettifyText = (value) => {
    if (!value) return ''

    const spaced = String(value)
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .trim()

    return spaced.charAt(0).toUpperCase() + spaced.slice(1)
}

export const getMarketplaceBadgeLabel = (value) => BADGE_LABELS[value] || value
export const getMarketplaceTypeLabel = (value) => TYPE_LABELS[value] || value
export const getMarketplaceFrameworkLabel = (value) => FRAMEWORK_LABELS[value] || value
export const getMarketplaceUsecaseLabel = (value) => USECASE_LABELS[value] || prettifyText(value)

const getTemplateKey = (template) => normalizeText(template?.templateName || template?.name || '')

const getFallbackDescription = (template) => {
    if (template?.description?.trim()) return template.description.trim()

    if (template?.type === 'Tool') {
        return 'Bu şablon, hazır bir aracın nasıl kullanılabileceğini gösterir.'
    }

    if (template?.type === 'AgentflowV2') {
        return 'Bu şablon, gelişmiş bir ajan akışının nasıl kurulduğunu gösterir.'
    }

    if (template?.type === 'Agentflow') {
        return 'Bu şablon, görevleri adım adım yürüten bir ajan yapısını gösterir.'
    }

    return 'Bu şablon, hazır bir akışın nasıl çalıştığını gösterir.'
}

const getFallbackPurpose = (template) => {
    if (template?.type === 'Tool') {
        return 'Amaç: Hazır bir aracı sisteme ekleyip doğru yerde kullanmak.'
    }

    if (template?.type === 'AgentflowV2') {
        return 'Amaç: Birden fazla adımı olan daha gelişmiş bir ajan akışının mantığını görmek.'
    }

    if (template?.type === 'Agentflow') {
        return 'Amaç: Görevleri belli bir sırayla yürüten ajan mantığını kullanmak.'
    }

    return 'Amaç: Hazır akışı açıp mantığını görmek ve kendi ihtiyacına göre uyarlamak.'
}

const getFallbackBullets = (template) => {
    if (template?.type === 'Tool') {
        return ['Aracı gösterir', 'Ne işe yaradığını anlatır', 'İçe aktarmaya hazır hale getirir']
    }

    if (template?.type === 'AgentflowV2') {
        return ['Akışı gösterir', 'Adımları birbirine bağlar', 'Gelişmiş ajan mantığını örnekler']
    }

    if (template?.type === 'Agentflow') {
        return ['Görev akışını gösterir', 'Karar adımlarını örnekler', 'Ajan mantığını açıklar']
    }

    return ['Hazır yapıyı gösterir', 'Akış mantığını örnekler', 'Kendi sürümünü hazırlamana yardım eder']
}

const getTranslatedTemplateEntry = (template) => TEMPLATE_TRANSLATIONS[getTemplateKey(template)] || null

export const getMarketplaceTemplateDisplayData = (template) => {
    const translation = getTranslatedTemplateEntry(template)
    const title = translation?.title || template?.templateName || template?.name || 'Hazır Şablon'
    const description = translation?.description || getFallbackDescription(template)
    const purpose = translation?.purpose || getFallbackPurpose(template)
    const bullets = (translation?.bullets || getFallbackBullets(template)).slice(0, 5)
    const usecases = (translation?.usecases || template?.usecases || []).map(getMarketplaceUsecaseLabel)
    const frameworks = Array.isArray(template?.framework)
        ? template.framework.map(getMarketplaceFrameworkLabel)
        : template?.framework
        ? [getMarketplaceFrameworkLabel(template.framework)]
        : []
    const badge = getMarketplaceBadgeLabel(template?.badge)
    const type = getMarketplaceTypeLabel(template?.type)

    return {
        ...template,
        displayTitle: title,
        displayDescription: description,
        displayPurpose: purpose,
        displayBullets: bullets,
        displayActionLine: ACTION_LINE,
        displayUsecases: usecases,
        displayFrameworks: frameworks,
        displayBadge: badge,
        displayType: type
    }
}

export const getMarketplaceTooltipData = (template) => {
    const display = getMarketplaceTemplateDisplayData(template)

    return {
        title: display.displayTitle,
        description: display.displayDescription,
        purpose: display.displayPurpose,
        bullets: display.displayBullets,
        actionLine: display.displayActionLine,
        usecases: display.displayUsecases,
        type: display.displayType
    }
}
