const STATIC_TEXT = {
    addNodes: 'Düğüm Ekle',
    addNode: 'Düğüm ekle',
    searchNodes: 'Düğümlerde ara',
    searchHint: 'İpucu: düğüm adı, kategori veya yapmak istediğin işi yazarak ara.',
    clearSearch: 'Aramayı temizle',
    generateAgentflow: 'Ajan akışı üret',
    generateAgentflowTitle: 'Ne oluşturmak istiyorsun?',
    generateAgentflowDescription:
        'Aşağıya ne kurmak istediğini yaz. Sistem uygun bir agentflow iskeleti üretsin. Sonrasında her düğümün giriş alanlarını ihtiyacına göre doldurabilirsin.'
}

const TAB_META = {
    0: {
        label: 'LangChain',
        tooltip: 'Genel sohbet akışları, veri bağlama ve araç kullanımında en sık kullanılan düğümler burada.'
    },
    1: {
        label: 'LlamaIndex',
        tooltip: 'RAG, özel veri sorgulama ve gelişmiş geri getirme odaklı düğümler burada.'
    },
    2: {
        label: 'Yardımcılar',
        tooltip: 'Koşul, değişken, not ve özel JavaScript gibi destek düğümleri burada.'
    }
}

const CATEGORY_META = {
    Agents: {
        label: 'Ajanlar',
        tooltip: 'Karar veren ve gerektiğinde araç kullanan akıllı düğümler.'
    },
    Cache: {
        label: 'Önbellek',
        tooltip: 'Aynı işlemi tekrar tekrar hesaplamamak için ara sonuçları geçici olarak saklar.'
    },
    Chains: {
        label: 'Zincirler',
        tooltip: 'Birden fazla adımı hazır mantıkla sıralı şekilde çalıştıran düğümler.'
    },
    'Chat Models': {
        label: 'Sohbet Modelleri',
        tooltip: 'Sohbet yanıtı üreten model bağlantıları.'
    },
    'Document Loaders': {
        label: 'Belge Yükleyiciler',
        tooltip: 'Dosya, link veya dış kaynaktan içerik içeri alan düğümler.'
    },
    Embeddings: {
        label: 'Gömme Modelleri',
        tooltip: 'Metni vektöre çevirir. Anlamsal arama ve benzerlik için kullanılır.'
    },
    Engine: {
        label: 'Motorlar',
        tooltip: 'Sorgunun veya sohbetin nasıl çalışacağını belirleyen düğümler.'
    },
    Graph: {
        label: 'Graf Veritabanları',
        tooltip: 'İlişki ağı şeklindeki verilerle çalışmak için kullanılan bağlantılar.'
    },
    LLMs: {
        label: 'Büyük Dil Modelleri',
        tooltip: 'Temel metin üretimi yapan model bağlantıları.'
    },
    Memory: {
        label: 'Hafıza',
        tooltip: 'Konuşma veya işlem geçmişini tutar. Bağlam kaybolmasın diye kullanılır.'
    },
    Moderation: {
        label: 'İçerik Denetimi',
        tooltip: 'Riskli veya uygunsuz girdi ve çıktıları süzen düğümler.'
    },
    'Output Parsers': {
        label: 'Çıktı Ayrıştırıcıları',
        tooltip: 'Model cevabını JSON, liste veya düzenli veri yapısına çevirir.'
    },
    Prompts: {
        label: 'İstem Şablonları',
        tooltip: 'Modele verilecek talimat metnini kurar ve düzenler.'
    },
    'Record Manager': {
        label: 'Kayıt Yöneticisi',
        tooltip: 'İndeksleme ve içerik eşleme kayıtlarını takip eder.'
    },
    'Response Synthesizer': {
        label: 'Yanıt Oluşturucu',
        tooltip: 'Birden çok parçadan gelen bilgiyi tek ve tutarlı cevaba dönüştürür.'
    },
    Retrievers: {
        label: 'Getiriciler',
        tooltip: 'En ilgili belge veya içerik parçalarını bulur.'
    },
    'Text Splitters': {
        label: 'Metin Bölücüler',
        tooltip: 'Uzun metinleri daha küçük ve yönetilebilir parçalara ayırır.'
    },
    Tools: {
        label: 'Araçlar',
        tooltip: 'Modelin web, hesaplama, dosya veya servis işlemleri yapmasını sağlar.'
    },
    'Tools (MCP)': {
        label: 'MCP Araçları',
        tooltip: 'MCP üzerinden harici araç ve sistemlere bağlanan düğümler.'
    },
    Utilities: {
        label: 'Yardımcı Düğümler',
        tooltip: 'Koşul, değişken, not ve özel JavaScript gibi destek amaçlı düğümler.'
    },
    'Vector Stores': {
        label: 'Vektör Veritabanları',
        tooltip: 'Vektörleri saklar ve benzerlik araması yapar. RAG altyapısında kullanılır.'
    }
}

const SPECIFIC_NODE_META = {
    customFunction: {
        label: 'Özel JS Fonksiyonu',
        description: 'Kendi JavaScript kodunu çalıştırır. Akışta özel işlem gerektiğinde kullanılır.'
    },
    getVariable: {
        label: 'Değişkeni Getir',
        description: 'Daha önce kaydedilmiş bir değeri geri alır. Aynı sonucu yeniden üretmemek için kullanılır.'
    },
    setVariable: {
        label: 'Değişken Kaydet',
        description: 'Bir değeri akış içinde saklar. Sonraki adımlarda tekrar kullanmak için uygundur.'
    },
    ifElseFunction: {
        label: 'Koşullu Dallanma',
        description: 'Bir koşula göre akışı iki farklı yola ayırır. Karar vermen gereken yerlerde kullanılır.'
    },
    stickyNote: {
        label: 'Not Kutusu',
        description: 'Akışın içine kısa açıklama notu ekler. Kendine veya ekibine hatırlatma bırakmak için kullanılır.'
    },
    stickyNoteAgentflow: {
        label: 'Not Kutusu',
        description: 'Ajan akışının içine kısa açıklama notu ekler. Akışı daha okunur hale getirmek için kullanılır.'
    }
}

const buildGenericDescription = (node) => {
    const label = node?.label || node?.name || 'Bu düğüm'
    const category = (node?.category || '').split(';')[0]

    switch (category) {
        case 'Agents':
            return `${label} bir ajan düğümüdür. Karar verip araç kullanması gereken akışlarda kullanılır.`
        case 'Cache':
            return `${label} sonucu geçici olarak saklar. Aynı işlemi tekrar çalıştırmamak için kullanılır.`
        case 'Chains':
            return `${label} bir zincir düğümüdür. Birkaç adımı hazır mantıkla art arda çalıştırmak istediğinde kullanılır.`
        case 'Chat Models':
            return `${label} sohbet modeli bağlantısıdır. Model seçip konuşma yanıtı üretmek istediğinde kullanılır.`
        case 'Document Loaders':
            return `${label} dış kaynaktan içerik içeri alır. Dosya, web sayfası veya veri kaynağı bağlamak için kullanılır.`
        case 'Embeddings':
            return `${label} metni vektöre çevirir. Anlamsal arama ve benzerlik bulma işlerinde kullanılır.`
        case 'Engine':
            return `${label} sorgu veya sohbet çalışma biçimini belirler. Yanıt üretme mantığını kontrol etmek için kullanılır.`
        case 'Graph':
            return `${label} graf veritabanı bağlantısıdır. İlişkisel düğüm-ağ yapılarıyla çalışırken kullanılır.`
        case 'LLMs':
            return `${label} temel dil modeli bağlantısıdır. Metin üretimi ve tamamlama işlerinde kullanılır.`
        case 'Memory':
            return `${label} geçmiş bilgiyi tutar. Sohbetin bağlamı kaybolmasın diye kullanılır.`
        case 'Moderation':
            return `${label} içerik denetimi yapar. Riskli veya uygunsuz içeriği filtrelemek için kullanılır.`
        case 'Output Parsers':
            return `${label} model cevabını düzenli çıktıya çevirir. JSON, liste veya yapılandırılmış çıktı istediğinde kullanılır.`
        case 'Prompts':
            return `${label} istem metnini kurar. Modele verilecek talimatı düzenlemek için kullanılır.`
        case 'Record Manager':
            return `${label} kayıt takibini yönetir. Tekrarlı indeksleme ve içerik eşleme işlerinde kullanılır.`
        case 'Response Synthesizer':
            return `${label} parçalı sonuçları tek cevaba toplar. Birden çok kaynaktan gelen bilgiyi birleştirmek için kullanılır.`
        case 'Retrievers':
            return `${label} en ilgili içeriği bulur. Bilgiyi belge havuzundan çekmek istediğinde kullanılır.`
        case 'Text Splitters':
            return `${label} uzun metni parçalara böler. Belgeleri indekslemeden önce kullanılır.`
        case 'Tools':
            return `${label} dış araç çağırır. Hesaplama, web, dosya veya servis işlemleri gerektiğinde kullanılır.`
        case 'Tools (MCP)':
            return `${label} MCP üzerinden araç bağlar. Harici sistemlerle standart araç bağlantısı kurmak için kullanılır.`
        case 'Utilities':
            return `${label} yardımcı bir düğümdür. Akış mantığını desteklemek için kullanılır.`
        case 'Vector Stores':
            return `${label} vektör verisini saklar. Benzerlik araması ve RAG altyapısında kullanılır.`
        default:
            return node?.description || `${label} düğümüdür. Akışında belirli bir işi yerine getirmek için kullanılır.`
    }
}

export const getCanvasStaticText = () => STATIC_TEXT

export const getCanvasTabMeta = (tabIndex) => TAB_META[tabIndex] || { label: 'Sekme', tooltip: '' }

export const getCanvasCategoryMeta = (category) => {
    const cleanCategory = (category || '').split(';')[0]
    return CATEGORY_META[cleanCategory] || { label: cleanCategory, tooltip: '' }
}

export const getCanvasNodeMeta = (node) => {
    const specific = SPECIFIC_NODE_META[node?.name] || {}
    const label = specific.label || node?.label || node?.name || ''
    const description = specific.description || buildGenericDescription(node)

    return {
        label,
        description,
        tooltip: description
    }
}
