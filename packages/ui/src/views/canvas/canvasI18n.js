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
    nodePurpose: 'Bu düğüm ne yapar?',
    nodeWhenToUse: 'Ne zaman kullanılır?',
    learnMore: 'Daha Fazla Gör',
    learnMoreSummary: 'Kısa özet',
    learnMoreGuide: 'Bunu nasıl düşünmelisin?',
    learnMoreExample: 'Basit örnek'
}

const TAB_META = [
    { label: 'LangChain', tooltip: 'Genel sohbet akışları, zincirler, araçlar ve model bağlantıları burada.' },
    { label: 'LlamaIndex', tooltip: 'RAG, veri sorgulama ve geri getirme odaklı düğümler burada.' },
    { label: 'Yardımcılar', tooltip: 'Değişken, koşul, not ve özel JS gibi destek düğümleri burada.' }
]

const CATEGORY_META = {
    Agents: { label: 'Ajanlar', tooltip: 'Karar veren ve gerektiğinde araç kullanan düğümler.' },
    Cache: { label: 'Önbellek', tooltip: 'Tekrar hesaplamayı azaltan geçici saklama düğümleri.' },
    Chains: { label: 'Zincirler', tooltip: 'Adımları belirli sırayla yürüten hazır akış parçaları.' },
    'Chat Models': { label: 'Sohbet Modelleri', tooltip: 'Sohbet yanıtı üreten model bağlantıları.' },
    'Document Loaders': { label: 'Belge Yükleyiciler', tooltip: 'Dosya veya kaynaktan içerik alan düğümler.' },
    Embeddings: { label: 'Gömme Modelleri', tooltip: 'Metni vektöre çeviren düğümler.' },
    Graph: { label: 'Graf Veritabanları', tooltip: 'Graf ilişkileriyle çalışan bağlantı düğümleri.' },
    LLMs: { label: 'Büyük Dil Modelleri', tooltip: 'Temel metin üretimi yapan model bağlantıları.' },
    Memory: { label: 'Hafıza', tooltip: 'Konuşma geçmişini ve bağlamı tutan düğümler.' },
    Moderation: { label: 'İçerik Denetimi', tooltip: 'Riskli içeriği filtreleyen güvenlik düğümleri.' },
    'Output Parsers': { label: 'Çıktı Ayrıştırıcıları', tooltip: 'Model çıktısını düzenli yapıya çeviren düğümler.' },
    Prompts: { label: 'İstem Şablonları', tooltip: 'Modele verilecek talimat metnini kuran düğümler.' },
    'Record Manager': { label: 'Kayıt Yöneticisi', tooltip: 'İndeksleme ve kayıt eşlemeyi yöneten düğümler.' },
    Retrievers: { label: 'Getiriciler', tooltip: 'En ilgili içerik parçalarını bulan düğümler.' },
    'Text Splitters': { label: 'Metin Bölücüler', tooltip: 'Uzun metni küçük parçalara ayıran düğümler.' },
    Tools: { label: 'Araçlar', tooltip: 'Modelin dış sistemlerle işlem yapmasını sağlayan düğümler.' },
    'Tools (MCP)': { label: 'MCP Araçları', tooltip: 'MCP ile harici araç ve sistemlere bağlanan düğümler.' },
    'Vector Stores': { label: 'Vektör Veritabanları', tooltip: 'Vektör saklama ve benzerlik araması yapan düğümler.' },
    Utilities: { label: 'Yardımcı Düğümler', tooltip: 'Akışta değişken, koşul ve not gibi destek adımları sağlar.' },
    Engine: { label: 'Motorlar', tooltip: 'Sorgu veya yanıt çalışma yöntemini belirleyen düğümler.' },
    'Response Synthesizer': { label: 'Yanıt Oluşturucu', tooltip: 'Parçalı bilgileri tek cevaba dönüştüren düğümler.' }
}

const BADGE_META = {
    DEPRECATING: 'Kullanımdan Kaldırılıyor'
}

const DEFAULT_LEARN_MORE = {
    learnMoreTitle: 'Bu düğüm hakkında hızlı rehber',
    learnMoreSummary: 'Bu düğüm, akış içinde belirli bir işi adım adım yürütür.',
    learnMoreBullets: [
        'Önce düğümün neyi dönüştürdüğünü netleştir.',
        'Girdi alanlarını küçük örnekle test et.',
        'Çıktıyı sonraki adımın beklediği formata göre ayarla.',
        'Bağlantı kurmadan önce zorunlu alanları doldur.',
        'Gereksiz karmaşıklık yerine tek amaca odaklan.',
        'Hata durumunda küçük veriyle tekrar dene.',
        'Aynı işi yapan başka düğümle karşılaştır.',
        'Üretim öncesi bir deneme akışı oluştur.',
        'Açıklama notu ekleyip ekip içinde anlaşılır tut.',
        'Sonucu kullanıcıya net bir dille sun.'
    ],
    learnMoreExample: 'Örnek: Önce girdi metnini hazırla, sonra bu düğümle işle ve çıktıyı bir sonraki adıma bağla.'
}

const NODE_META = {
    airtableAgent: {
        label: 'Airtable Ajanı',
        description: 'Airtable verisini doğal dille sorgular. Tablo verisiyle hızlı soru-cevap için kullanılır.',
        summary: 'Airtable tablosundaki veriyi okuyup uygun cevabı üretir.',
        whenToUse: 'Airtable kayıtlarını manuel filtrelemeden konuşarak sorgulamak istediğinde kullan.',
        learnMoreBullets: [
            'Önce doğru Airtable kaynağını bağla.',
            'Tablo alan adlarını kısa not et.',
            'Soru cümlesini iş dilinde sade yaz.',
            'Tarih ve sayı alanlarını net belirt.',
            'Filtre gerekiyorsa örnek bir soru dene.',
            'Büyük tabloda ilk sorguyu dar tut.',
            'Yanıtı ekip terimleriyle doğrula.',
            'Hatalı alan adında eşleme kontrolü yap.',
            'Aynı sorguyu farklı kayıtla test et.',
            'Sonucu bir rapor adımına bağla.'
        ],
        example: 'Örnek: “Bu ay açık fırsatları ve tutarlarını listele” sorusuyla satış tablosunu sorgula.'
    },
    csvAgent: {
        label: 'CSV Veri Ajanı',
        description: 'CSV dosyasını doğal dille sorgular. Dosya verisini hızlı analiz etmek için kullanılır.',
        summary: 'CSV içeriğini okuyup soruya uygun veri cevabı üretir.',
        whenToUse: 'CSV raporunu SQL yazmadan hızlıca analiz etmek istediğinde kullan.',
        learnMoreBullets: [
            'CSV başlıklarını kontrol ederek başla.',
            'Ayraç ve kodlama tipini doğrula.',
            'Soruyu satır/sütun diliyle sor.',
            'Önce küçük örnek dosya ile test et.',
            'Tarih alanlarında formatı sabitle.',
            'Eksik değerleri nasıl ele alacağını belirle.',
            'Toplam ve ortalama gibi istekleri açık yaz.',
            'Çıktıyı tablo veya özet olarak seç.',
            'Yanıtı kaynak satırlarla karşılaştır.',
            'Başarılı sorguyu şablon soru olarak sakla.'
        ],
        example: 'Örnek: “Son 30 gündeki en çok satan 5 ürünü adet ve ciroyla getir.”'
    },
    conversationalAgent: {
        label: 'Sohbet Ajanı',
        description: 'Sohbeti bağlamla sürdürür. Çok adımlı konuşma deneyimi kurmak için uygundur.',
        summary: 'Kullanıcıyla doğal diyalog yürütür ve önceki mesajları dikkate alır.',
        whenToUse: 'Asistanın tek soru değil devam eden konuşmayı yönetmesi gerektiğinde kullan.',
        learnMoreBullets: [
            'Ajanın konuşma tonunu başta belirle.',
            'Hangi konuda yetkili olduğunu sınırla.',
            'Uzun sohbetlerde özet stratejisi kur.',
            'Belirsiz soruda netleştirme sorusu ekle.',
            'Kritik cevaplar için kaynak adımı bağla.',
            'Yanıt uzunluğunu ürün ihtiyacına göre ayarla.',
            'Gereksiz tekrarları azaltacak kural ekle.',
            'Kullanıcı rolüne göre cevap seviyesini ayarla.',
            'Hata mesajlarını rehber dille yaz.',
            'Sohbet sonunda eylem önerisi sun.'
        ],
        example: 'Örnek: Destek botunda kullanıcıdan cihaz bilgisi alıp adım adım çözüm üret.'
    },
    openAIAssistant: {
        label: 'OpenAI Asistanı',
        description: 'OpenAI Assistant ile görev yürütür. Araç çağrısı gereken akışlarda tercih edilir.',
        summary: 'OpenAI Assistant yeteneklerini akış içine taşır.',
        whenToUse: 'Araç kullanımı, dosya analizi veya görev tabanlı asistan kurmak istediğinde kullan.',
        learnMoreBullets: [
            'Assistant rolünü net tanımla.',
            'Gerekli tool izinlerini başta belirle.',
            'Dosya girdisi varsa formatı kontrol et.',
            'Maliyet için model seçimini planla.',
            'Uzun görevleri alt adımlara böl.',
            'Beklenen çıktı tipini örnekle göster.',
            'Hata durumunda geri dönüş mesajı ekle.',
            'Kullanıcıdan eksik bilgi isteme kuralı koy.',
            'Sonucu doğrulama adımıyla bitir.',
            'Kritik işlemler için onay adımı bağla.'
        ],
        example: 'Örnek: “Bu PDF’ten 5 maddelik yönetici özeti hazırla ve aksiyon listesi çıkar.”'
    },
    toolAgent: {
        label: 'Araç Ajanı',
        description: 'Soruya göre uygun aracı çalıştırır. İşlem odaklı asistan senaryolarında kullanılır.',
        summary: 'Model, ihtiyaca göre doğru aracı seçip sonucu döndürür.',
        whenToUse: 'Sadece metin cevabı değil, dış sistemde işlem yapılması gerektiğinde kullan.',
        learnMoreBullets: [
            'Araç listesini gereksiz kalabalık yapma.',
            'Her araç için kısa amaç açıklaması ver.',
            'Yanlış araç çağrısına karşı sınır koy.',
            'Girdi doğrulamasını araç öncesi yap.',
            'Araç çıktısını kullanıcı diline çevir.',
            'Kritik araçlarda onay adımı ekle.',
            'Timeout durumunu kullanıcıya açık yaz.',
            'Araç hatasını gizleme, çözüm önerisi sun.',
            'Sonucu loglayıp tekrar kullanım için sakla.',
            'Araç seçim başarımını düzenli gözden geçir.'
        ],
        example: 'Örnek: “Takvimde yarın 14:00 için toplantı oluştur ve katılımcılara bilgi gönder.”'
    },
    xmlAgent: {
        label: 'XML Ajanı',
        description: 'XML verisini okuyup sorgular. Yapısal dosya verisinden anlamlı bilgi çıkarmak için kullanılır.',
        summary: 'XML alanlarını yorumlayıp soruya uygun sonuç üretir.',
        whenToUse: 'XML tabanlı entegrasyon veya arşiv verisini doğal dille sorgulamak istediğinde kullan.',
        learnMoreBullets: [
            'XML şema yapısını önce doğrula.',
            'Etiket adlarını örnekle belgele.',
            'Derin hiyerarşiyi küçük sorularla test et.',
            'Boş etiketleri nasıl ele alacağını belirle.',
            'Tekrarlayan düğümlerde filtre koşulu ekle.',
            'Namespace varsa açıkça tanımla.',
            'Tarih/sayı dönüşümlerini netleştir.',
            'Çıktıyı sade JSON/özet forma dönüştür.',
            'Sonucu örnek kayıtla karşılaştır.',
            'Üretimde hata logunu açık tut.'
        ],
        example: 'Örnek: “Sipariş XML dosyasında bu haftaki iptal edilen kayıtları getir.”'
    },
    reactAgent: {
        label: 'ReAct Ajanı',
        description: 'Düşünme ve eylem adımlarını birlikte yürütür. Araç seçimi gereken görevlerde etkilidir.',
        summary: 'Ajan, önce planlar sonra doğru adımı uygulayarak sonuca gider.',
        whenToUse: 'Çok adımlı karar, araştırma ve araç çağrısı bir arada gerektiğinde kullan.',
        learnMoreBullets: [
            'Görevi net bir hedefle başlat.',
            'Ajanın hangi araçları kullanacağını sınırla.',
            'Her adımda kısa ara sonuç üretmesini iste.',
            'Belirsiz durumda doğrulama sorusu ekle.',
            'Yanlış adımda geri dönüş kuralı tanımla.',
            'Araç çıktısını bağlama geri yazdır.',
            'Son kararı kaynakla desteklet.',
            'Maliyetli adımları minimumda tut.',
            'Uzun görevleri bölüm bölüm yürüt.',
            'Bitişte net aksiyon önerisi üret.'
        ],
        example: 'Örnek: “Yeni ürün lansmanı için pazar araştırması yap, en iyi 3 kanalı öner.”'
    },
    reactAgentforChatModels: {
        label: 'Chat Model ReAct Ajanı',
        description: 'Chat model ile ReAct mantığında karar verir. Araçlı sohbet ajanlarında kullanılır.',
        summary: 'Sohbet içinde düşünüp eylem seçerek sonuç üretir.',
        whenToUse: 'Chat model tabanlı ajanın adım adım karar almasını istediğinde kullan.',
        learnMoreBullets: DEFAULT_LEARN_MORE.learnMoreBullets,
        example: 'Örnek: Kullanıcı sorusuna göre önce web araması yapıp sonra kısa öneri döndür.'
    },
    reactAgentforLLMs: {
        label: 'LLM ReAct Ajanı',
        description: 'LLM tabanında ReAct adımlarını uygular. Klasik araçlı ajan akışlarında etkilidir.',
        summary: 'LLM ile planlama ve eylemi birlikte yönetir.',
        whenToUse: 'LLM odaklı ajanın araç seçerek ilerlemesini istediğinde kullan.',
        learnMoreBullets: DEFAULT_LEARN_MORE.learnMoreBullets,
        example: 'Örnek: Belgeleri tarayıp uygun aracı çağırarak rapor özeti üret.'
    },
    customFunction: {
        label: 'Özel JS Fonksiyonu',
        description: 'Özel JavaScript kodu çalıştırır. Akışta hazır düğüm yetmediğinde kullanılır.'
    },
    getVariable: {
        label: 'Değişkeni Getir',
        description: 'Daha önce kaydedilen değeri geri getirir. Tekrar hesaplamayı azaltır.'
    },
    setVariable: {
        label: 'Değişken Kaydet',
        description: 'Bir değeri akış boyunca saklar. Sonraki adımlarda tekrar kullanmanı sağlar.'
    },
    ifElseFunction: {
        label: 'Koşullu Dallanma',
        description: 'Koşula göre akışı ikiye ayırır. Karar noktalarını net yönetmek için kullanılır.'
    },
    stickyNote: {
        label: 'Not Kutusu',
        description: 'Akışa kısa hatırlatma notu ekler. Ekip içi açıklama bırakmak için kullanılır.'
    }
}

const CATEGORY_FALLBACKS = {
    Agents: {
        description: 'Bu düğüm bir ajan davranışı kurar ve göreve göre adım seçer.',
        whenToUse: 'Kullanıcının isteğine göre karar verip gerekirse araç çalıştırmak istediğinde kullan.'
    },
    Cache: {
        description: 'Bu düğüm sonucu geçici saklar ve tekrar hesaplamayı azaltır.',
        whenToUse: 'Aynı sorguyu sık çalıştırdığında yanıtı hızlandırmak için kullan.'
    },
    Chains: {
        description: 'Bu düğüm adımları belirli sırayla çalıştırır.',
        whenToUse: 'Sabit bir işlem sırasıyla ilerlemek istediğinde kullan.'
    },
    'Chat Models': {
        description: 'Bu düğüm sohbet üreten modeli akışa bağlar.',
        whenToUse: 'Kullanıcı sorularına doğal dilde yanıt üretmek istediğinde kullan.'
    },
    Utilities: {
        description: 'Bu düğüm akışta destekleyici teknik bir iş yapar.',
        whenToUse: 'Değişken tutma, koşul ayırma veya not ekleme gerektiğinde kullan.'
    }
}

export const getTabMeta = (index) => TAB_META[index] ?? { label: '', tooltip: '' }

const parseCategory = (category = '') => {
    const [rawCategory = '', badge = ''] = String(category).split(';')
    return { rawCategory, badge }
}

export const getCategoryDisplayName = (category = '') => {
    const { rawCategory } = parseCategory(category)
    return CATEGORY_META[rawCategory]?.label ?? rawCategory
}

export const getCategoryTooltip = (category = '') => {
    const { rawCategory } = parseCategory(category)
    return CATEGORY_META[rawCategory]?.tooltip ?? ''
}

export const getVisibleBadgeLabel = (badge) => {
    if (!badge) return ''
    return BADGE_META[badge] ?? badge
}

const getNodeMeta = (node) => {
    if (!node?.name) return null
    return NODE_META[node.name] ?? null
}

export const getLocalizedNodeLabel = (node) => {
    if (!node) return ''
    return getNodeMeta(node)?.label || node.label || node.name || 'Düğüm'
}

export const getLocalizedNodeDescription = (node) => {
    if (!node) return ''

    const meta = getNodeMeta(node)
    if (meta?.description) return meta.description

    const { rawCategory } = parseCategory(node.category)
    if (CATEGORY_FALLBACKS[rawCategory]?.description) return CATEGORY_FALLBACKS[rawCategory].description

    return node.description || node.label || 'Bu düğüm, akışta tek bir işi düzenli biçimde yürütür.'
}

export const getNodeWhenToUseText = (node) => {
    if (!node) return 'Akışta bu işi ayrı bir adımda yönetmek istediğinde kullan.'

    const meta = getNodeMeta(node)
    if (meta?.whenToUse) return meta.whenToUse

    const { rawCategory } = parseCategory(node.category)
    if (CATEGORY_FALLBACKS[rawCategory]?.whenToUse) return CATEGORY_FALLBACKS[rawCategory].whenToUse

    return 'Akışta bu işi ayrı bir adımda yönetmek istediğinde kullan.'
}

export const getNodeLearnMoreData = (node) => {
    const meta = getNodeMeta(node)
    const title = meta?.learnMoreTitle || `${getLocalizedNodeLabel(node)} için hızlı rehber`
    const summary = meta?.summary || DEFAULT_LEARN_MORE.learnMoreSummary
    const bullets =
        Array.isArray(meta?.learnMoreBullets) && meta.learnMoreBullets.length
            ? meta.learnMoreBullets.slice(0, 10)
            : DEFAULT_LEARN_MORE.learnMoreBullets
    const example = meta?.example || DEFAULT_LEARN_MORE.learnMoreExample

    return {
        title,
        summary,
        bullets,
        example,
        hasCustomContent: Boolean(meta?.summary || meta?.learnMoreBullets?.length || meta?.example)
    }
}

export const getSearchableText = (node) => {
    if (!node) return ''

    const learnMore = getNodeLearnMoreData(node)
    const { rawCategory } = parseCategory(node.category)

    return [
        node.name,
        node.label,
        node.description,
        node.category,
        rawCategory,
        getCategoryDisplayName(node.category),
        getLocalizedNodeLabel(node),
        getLocalizedNodeDescription(node),
        getNodeWhenToUseText(node),
        learnMore.title,
        learnMore.summary,
        ...(learnMore.bullets || []),
        learnMore.example
    ]
        .filter(Boolean)
        .join(' ')
}
