// DELILX [1][5][6]: Bu dosya sadece görünür metin eşleme ve güvenli fallback için pure helper içerir.

const canvasStaticTextMap = {
    addNodesTitle: 'Düğüm Ekle',
    searchNodesPlaceholder: 'Düğümlerde ara',
    clearSearch: 'Aramayı temizle',
    addNodeFab: 'Düğüm ekle',
    generateAgentflowFab: 'Ajan akışı üret',
    agentflowDialogTitle: 'Ne oluşturmak istiyorsun?',
    agentflowDialogDescription:
        'İstediğin akışı kısa bir komutla anlat. Sistem önce iskelet bir akış üretir; ardından her düğümün alanlarını sen doldurarak tamamlayabilirsin.',
    searchHint: 'İpucu: düğüm adı, kategori veya yapmak istediğin işi yazarak ara.',
    duplicate: 'Kopyala',
    delete: 'Sil',
    info: 'Bilgi',
    inputs: 'Girdiler',
    output: 'Çıktı',
    additionalParameters: 'Ek Ayarlar',
    inputsTooltip: 'Bu düğümün kullandığı alanlar',
    outputTooltip: 'Bu düğümün ürettiği sonuç',
    documentation: 'Dokümantasyon',
    openDocumentation: 'Dokümantasyonu aç',
    version: 'sürüm',
    whatDoesThisNodeDo: 'Bu düğüm ne işe yarar?',
    whenToUseThisNode: 'Ne zaman kullanılır?'
}

const tabMetaMap = {
    LangChain: {
        label: 'LangChain',
        tooltip: 'Genel akış, model ve araç düğümleri için ana sekme.'
    },
    LlamaIndex: {
        label: 'LlamaIndex',
        tooltip: 'RAG ve veri sorgulama odaklı düğümleri içerir.'
    },
    Utilities: {
        label: 'Utilities',
        tooltip: 'Koşul, değişken, not ve özel JS yardımcı düğümleri.'
    }
}

const categoryMetaMap = {
    Agents: { label: 'Ajanlar', tooltip: 'Amaç odaklı ajan akışları kurmak için kullanılır.' },
    Chains: { label: 'Zincirler', tooltip: 'Adım adım çalışan işlem zincirleri oluşturur.' },
    'Chat Models': { label: 'Sohbet Modelleri', tooltip: 'Sohbet tabanlı LLM sağlayıcıları.' },
    'Document Loaders': { label: 'Belge Yükleyiciler', tooltip: 'Dosya ve içerik kaynaklarını akışa alır.' },
    Embeddings: { label: 'Gömme Modelleri', tooltip: 'Metni vektöre dönüştürerek aramayı güçlendirir.' },
    Graph: { label: 'Graf Veritabanları', tooltip: 'İlişkisel veri grafı ile sorgulama yapar.' },
    LLMs: { label: 'Büyük Dil Modelleri', tooltip: 'Metin üretiminde kullanılan temel modeller.' },
    Memory: { label: 'Hafıza', tooltip: 'Konuşma geçmişi ve bağlam saklama düğümleri.' },
    Moderation: { label: 'İçerik Denetimi', tooltip: 'İçerik güvenlik ve uygunluk kontrolleri.' },
    'Output Parsers': { label: 'Çıktı Ayrıştırıcıları', tooltip: 'Model çıktısını yapılandırılmış hale getirir.' },
    Prompts: { label: 'İstem Şablonları', tooltip: 'Modele verilecek istemleri düzenler.' },
    'Record Manager': { label: 'Kayıt Yöneticisi', tooltip: 'Kayıt tutma ve güncelleme süreçlerini yönetir.' },
    Retrievers: { label: 'Getiriciler', tooltip: 'Bilgiyi depolardan bulup getirir.' },
    'Text Splitters': { label: 'Metin Bölücüler', tooltip: 'Uzun metinleri uygun parçalara ayırır.' },
    Tools: { label: 'Araçlar', tooltip: 'Modelin çağırabileceği araç işlevleri.' },
    'Tools (MCP)': { label: 'MCP Araçları', tooltip: 'MCP tabanlı harici araç bağlantıları.' },
    'Vector Stores': { label: 'Vektör Veritabanları', tooltip: 'Vektör verilerini saklar ve arar.' },
    Engine: { label: 'Motorlar', tooltip: 'Akışın yürütme motorunu belirler.' },
    'Response Synthesizer': { label: 'Yanıt Oluşturucu', tooltip: 'Parçalı cevapları tek yanıtta birleştirir.' },
    Utilities: { label: 'Yardımcı Düğümler', tooltip: 'Koşul, değişken, not ve özel işlev düğümleri.' }
}

const nodeLabelMap = {
    customFunction: 'Özel JS Fonksiyonu',
    getVariable: 'Değişkeni Getir',
    setVariable: 'Değişken Kaydet',
    ifElseFunction: 'Koşullu Dallanma',
    stickyNote: 'Not Kutusu'
}

const nodeDescriptionMap = {
    customFunction: 'JavaScript ile kendi küçük işlem adımını yazıp akışa eklemeni sağlar.',
    getVariable: 'Akışta daha önce kaydedilen bir değişkeni geri çağırır ve kullanır.',
    setVariable: 'Akış içinde kullanacağın bir değeri değişken olarak kaydeder.',
    ifElseFunction: 'Koşula göre akışı iki farklı yoldan birine yönlendirir.',
    stickyNote: 'Akışa açıklama notu ekleyerek görsel olarak düzen sağlamana yardımcı olur.'
}

const categoryDescriptionMap = {
    Agents: 'Bir hedefe ulaşmak için birden fazla adımı otomatik planlayan ajan düğümleri.',
    Chains: 'İşlemleri sırayla yürüten temel akış adımları.',
    'Chat Models': 'Sohbet tarzı yanıt üreten model bağlantıları.',
    'Document Loaders': 'Dosya, URL veya metin kaynaklarını akışa alan düğümler.',
    Embeddings: 'Metni benzerlik araması için sayısal vektöre çeviren düğümler.',
    Graph: 'İlişkisel veri yapılarında gezinme ve sorgulama düğümleri.',
    LLMs: 'Genel amaçlı metin üretimi için kullanılan dil modeli düğümleri.',
    Memory: 'Konuşma ve durum bilgisini hatırlatmak için kullanılan düğümler.',
    Moderation: 'Uygunsuz içerikleri tespit etmeye yardımcı olan güvenlik düğümleri.',
    'Output Parsers': 'Model çıktısını JSON veya belirli şemaya dönüştürür.',
    Prompts: 'Model talimatlarını hazır şablonlarla düzenler.',
    'Record Manager': 'Kayıtları eşleme, güncelleme ve yönetme işlemleri.',
    Retrievers: 'Gerekli bilgiyi veri kaynaklarından hızlıca getiren düğümler.',
    'Text Splitters': 'Büyük metinleri uygun parçalara ayırarak işlemeyi kolaylaştırır.',
    Tools: 'Modelin harici işlem yaptırması için kullandığı araç düğümleri.',
    'Tools (MCP)': 'MCP protokolü ile bağlı araç servislerini çalıştırır.',
    'Vector Stores': 'Vektör verilerini depolayıp benzerlik sorgusu yapar.',
    Engine: 'Akış çalışma şeklini belirleyen yürütme motoru düğümleri.',
    'Response Synthesizer': 'Birden fazla cevabı anlaşılır tek yanıta dönüştürür.',
    Utilities: 'Akışı düzenlemek için yardımcı kontrol ve not düğümleri.'
}

const warningTextMap = {
    'Node outdated': 'Düğüm güncel değil',
    'Node version': 'Düğüm sürümü',
    outdated: 'güncel değil',
    'Update to latest version': 'En güncel sürüme yükselt',
    'This node will be deprecated in the next release. Change to a new node tagged with NEW':
        'Bu düğüm bir sonraki sürümde kaldırılacak. NEW etiketli yeni bir düğüme geçin.',
    deprecated: 'kullanımdan kaldırılacak'
}

export const getCanvasStaticText = (key) => canvasStaticTextMap[key] || ''

export const getCanvasTabMeta = (tabName) => tabMetaMap[tabName] || { label: tabName, tooltip: tabName }

export const getCanvasCategoryMeta = (category) => {
    const baseCategory = (category || '').split(';')[0].trim()
    return categoryMetaMap[baseCategory] || { label: baseCategory, tooltip: baseCategory }
}

const getCategoryDescription = (category, fallbackDescription = '') => {
    const description = categoryDescriptionMap[(category || '').split(';')[0].trim()]
    return description || fallbackDescription || ''
}

export const getCanvasNodeMeta = (node = {}, options = {}) => {
    const fallbackDescription = options.fallbackDescription ?? node.description ?? ''
    const label = nodeLabelMap[node.name] || node.label || node.name || ''
    const description = nodeDescriptionMap[node.name] || getCategoryDescription(node.category, fallbackDescription)

    return {
        label,
        description
    }
}

export const getCanvasWarningMessage = (message = '') => {
    let localized = `${message}`
    Object.keys(warningTextMap).forEach((source) => {
        localized = localized.replaceAll(source, warningTextMap[source])
    })
    return localized
}

export const getCanvasSearchText = (node = {}) => {
    const nodeMeta = getCanvasNodeMeta(node, { fallbackDescription: node.description })
    const categoryMeta = getCanvasCategoryMeta(node.category)

    return [node.name, node.label, node.description, nodeMeta.label, nodeMeta.description, node.category, categoryMeta.label]
        .filter(Boolean)
        .join(' ')
}
