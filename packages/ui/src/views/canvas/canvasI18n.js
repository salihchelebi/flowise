export const canvasUIText = {
    addNodesTitle: 'Düğüm Ekle',
    searchPlaceholder: 'Düğümlerde ara',
    clearSearch: 'Aramayı temizle',
    addNode: 'Düğüm ekle',
    generateAgentflow: 'Ajan akışı üret',
    generationDialogTitle: 'Ne oluşturmak istiyorsun?',
    generationDialogDescription:
        'Ajan akışı üretmek için isteğini yaz. Sonuç modele göre değişebilir. Düğümler ve bağlantılar üretilir, giriş alanlarını sen doldurursun.',
    searchHint: 'İpucu: düğüm adı, kategori veya yapmak istediğin işi yazarak ara.',
    duplicate: 'Kopyala',
    delete: 'Sil',
    info: 'Bilgi',
    inputs: 'Girdiler',
    inputsTooltip: 'Bu düğümün kullandığı giriş alanları',
    output: 'Çıktı',
    outputTooltip: 'Bu düğümün ürettiği sonuç',
    additionalSettings: 'Ek Ayarlar',
    additionalSettingsTooltip: 'İleri seviye seçenekleri buradan açabilirsin',
    documentation: 'Dokümantasyon',
    openDocumentation: 'Dokümantasyonu aç',
    version: 'sürüm',
    authorPrefix: 'Yazar',
    nodePurpose: 'Bu düğüm ne işe yarar?',
    nodeWhenToUse: 'Ne zaman kullanılır?'
}

const tabMeta = [
    {
        label: 'LangChain',
        tooltip: 'Genel sohbet akışları, zincirler, araçlar ve model bağlantıları burada.'
    },
    {
        label: 'LlamaIndex',
        tooltip: 'RAG, veri sorgulama ve geri getirme odaklı düğümler burada.'
    },
    {
        label: 'Yardımcılar',
        tooltip: 'Değişken, koşul, not ve özel JS gibi destek düğümleri burada.'
    }
]

const categoryMeta = {
    Agents: {
        label: 'Ajanlar',
        tooltip: 'Karar verebilen ve gerektiğinde araç kullanan düğümler.'
    },
    Cache: {
        label: 'Önbellek',
        tooltip: 'Sonuçları tekrar hesaplamamak için geçici saklama düğümleri.'
    },
    Chains: {
        label: 'Zincirler',
        tooltip: 'Birkaç adımı sırayla çalıştıran hazır akış parçaları.'
    },
    'Chat Models': {
        label: 'Sohbet Modelleri',
        tooltip: 'Sohbet yanıtı üreten model bağlantıları.'
    },
    'Document Loaders': {
        label: 'Belge Yükleyiciler',
        tooltip: 'Dosya veya kaynaktan içerik içeri alan düğümler.'
    },
    Embeddings: {
        label: 'Gömme Modelleri',
        tooltip: 'Metni vektöre çeviren düğümler.'
    },
    Graph: {
        label: 'Graf Veritabanları',
        tooltip: 'İlişkisel ağ verileriyle çalışan bağlantılar.'
    },
    LLMs: {
        label: 'Büyük Dil Modelleri',
        tooltip: 'Temel metin üretimi yapan model bağlantıları.'
    },
    Memory: {
        label: 'Hafıza',
        tooltip: 'Geçmiş konuşma veya bağlamı tutan düğümler.'
    },
    Moderation: {
        label: 'İçerik Denetimi',
        tooltip: 'Uygunsuz veya riskli içeriği filtreleyen düğümler.'
    },
    'Output Parsers': {
        label: 'Çıktı Ayrıştırıcıları',
        tooltip: 'Model çıktısını daha düzenli forma çeviren düğümler.'
    },
    Prompts: {
        label: 'İstem Şablonları',
        tooltip: 'Modele verilecek talimat metnini kuran düğümler.'
    },
    'Record Manager': {
        label: 'Kayıt Yöneticisi',
        tooltip: 'İndeksleme ve kayıt eşleme takibini yöneten düğümler.'
    },
    Retrievers: {
        label: 'Getiriciler',
        tooltip: 'En ilgili içerik parçalarını bulan düğümler.'
    },
    'Text Splitters': {
        label: 'Metin Bölücüler',
        tooltip: 'Uzun metni küçük parçalara ayıran düğümler.'
    },
    Tools: {
        label: 'Araçlar',
        tooltip: 'Modelin dış işlem yapmasını sağlayan düğümler.'
    },
    'Tools (MCP)': {
        label: 'MCP Araçları',
        tooltip: 'MCP üzerinden harici araç ve sistemlere bağlanan düğümler.'
    },
    'Vector Stores': {
        label: 'Vektör Veritabanları',
        tooltip: 'Vektör saklama ve benzerlik araması yapan düğümler.'
    },
    Utilities: {
        label: 'Yardımcı Düğümler',
        tooltip: 'Akışta değişken, koşul ve not gibi destek adımları sağlar.'
    },
    Engine: {
        label: 'Motorlar',
        tooltip: 'Sorgu veya yanıt çalışma mantığını belirleyen düğümler.'
    },
    'Response Synthesizer': {
        label: 'Yanıt Oluşturucu',
        tooltip: 'Parçalı bilgileri tek cevaba dönüştüren düğümler.'
    }
}

const badgeMeta = {
    DEPRECATING: 'Kullanımdan Kaldırılıyor'
}

const nodeMeta = {
    customFunction: {
        label: 'Özel JS Fonksiyonu',
        description: 'Kendi JavaScript kodunu çalıştırır. Akışta özel işlem gerektiğinde kullanılır.'
    },
    getVariable: {
        label: 'Değişkeni Getir',
        description: 'Daha önce kaydedilmiş bir değeri geri alır. Aynı sonucu tekrar üretmeden kullanırsın.'
    },
    setVariable: {
        label: 'Değişken Kaydet',
        description: 'Bir değeri akış içinde saklar. Sonraki adımlarda yeniden kullanırsın.'
    },
    ifElseFunction: {
        label: 'Koşullu Dallanma',
        description: 'Koşula göre akışı iki farklı yola ayırır. Karar noktalarında kullanılır.'
    },
    stickyNote: {
        label: 'Not Kutusu',
        description: 'Akışın içine kısa açıklama notu ekler. Kendine veya ekibine hatırlatma bırakır.'
    },
    csvAgent: {
        label: 'CSV Veri Ajanı',
        description: 'CSV dosyasındaki verilerle soru cevaplar. Dosya içeriğini doğal dille sorgularken kullanılır.'
    },
    conversationalAgent: {
        label: 'Sohbet Ajanı',
        description: 'Genel amaçlı sohbet akışları için adımları yönetir. Çok adımlı diyaloglarda uygundur.'
    },
    openAIAssistant: {
        label: 'OpenAI Asistanı',
        description: 'OpenAI Assistant API ile görev yürütür. Araç seçimi gereken akışlarda tercih edilir.'
    }
}

const categoryFallbackDescription = {
    Agents: 'Bu düğüm araç kullanabilen bir ajan adımıdır. Karar vermesi gereken akışlarda kullanılır.',
    Cache: 'Bu düğüm sonuçları geçici olarak saklar. Aynı işlemi daha hızlı tekrar çalıştırmak için uygundur.',
    Chains: 'Bu düğüm adımları sıralı şekilde çalıştırır. Hazır bir akış parçasına ihtiyaç duyduğunda kullanılır.',
    'Chat Models': 'Bu düğüm sohbet modeli bağlantısı kurar. Kullanıcıya yanıt üretmek istediğinde kullanılır.',
    Utilities: 'Bu düğüm akışta yardımcı bir işlem yapar. Değişken, koşul veya not yönetimi için uygundur.'
}

export const getTabMeta = (index) => tabMeta[index] ?? { label: '', tooltip: '' }

const parseCategory = (category = '') => {
    const [rawCategory, badge] = category.split(';')
    return { rawCategory, badge }
}

export const getCategoryDisplayName = (category = '') => {
    const { rawCategory } = parseCategory(category)
    return categoryMeta[rawCategory]?.label ?? rawCategory
}

export const getCategoryTooltip = (category = '') => {
    const { rawCategory } = parseCategory(category)
    return categoryMeta[rawCategory]?.tooltip ?? ''
}

export const getVisibleBadgeLabel = (badge) => {
    if (!badge) return ''
    return badgeMeta[badge] ?? badge
}

export const getLocalizedNodeLabel = (node) => {
    if (!node) return ''
    const byName = nodeMeta[node.name]?.label
    if (byName) return byName
    return node.label || node.name || 'Node'
}

export const getLocalizedNodeDescription = (node) => {
    if (!node) return ''
    const byName = nodeMeta[node.name]?.description
    if (byName) return byName
    const byCategory = categoryFallbackDescription[node.category]
    if (byCategory) return byCategory
    return node.description || node.label || 'Bu düğüm akışta bir adım çalıştırır.'
}

export const getSearchableText = (node) => {
    if (!node) return ''
    const categoryName = getCategoryDisplayName(node.category)
    return [
        node.name,
        node.label,
        node.description,
        node.category,
        getLocalizedNodeLabel(node),
        getLocalizedNodeDescription(node),
        categoryName
    ]
        .filter(Boolean)
        .join(' ')
}

export const getNodeWhenToUseText = (node) => {
    if (!node) return 'Akışta ilgili işlemi net şekilde ayırmak istediğinde kullanılır.'
    if (node.category && categoryMeta[node.category]?.tooltip) return categoryMeta[node.category].tooltip
    return 'Akışta ilgili işlemi net şekilde ayırmak istediğinde kullanılır.'
}
