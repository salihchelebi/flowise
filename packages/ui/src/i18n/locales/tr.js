const tr = {
    common: {
        language: 'Dil',
        turkish: 'Türkçe',
        english: 'English',
        itemsPerPage: 'Sayfa başına öğe:',
        itemsRange: '{start}-{end} / {total} öğe',
        state: 'Durum',
        startDate: 'Başlangıç tarihi',
        endDate: 'Bitiş tarihi',
        sessionId: 'Oturum Kimliği',
        name: 'Ad',
        lastUpdated: 'Son Güncelleme',
        created: 'Oluşturulma',
        keyName: 'Anahtar Adı',
        permissions: 'İzinler',
        usage: 'Kullanım',
        updated: 'Güncellendi',
        more: 'Daha Fazla'
    },
    menu: {
        chatflows: 'Sohbet Akışları',
        agentflows: 'Ajan Akışları',
        executions: 'Çalıştırmalar',
        assistants: 'Asistanlar',
        marketplaces: 'Pazaryeri',
        tools: 'Araçlar',
        credentials: 'Kimlik Bilgileri',
        variables: 'Değişkenler',
        apiKeys: 'API Anahtarları',
        documentStores: 'Doküman Depoları'
    },
    pages: {
        chatflows: { title: 'Sohbet Akışları', description: 'Tek ajanlı sistemler, sohbet botları ve basit LLM akışları oluştur' },
        agentflows: { title: 'Ajan Akışları', description: 'Çok ajanlı sistemler, iş akışı orkestrasyonu' },
        executions: { title: 'Ajan Çalıştırmaları', description: 'Ajan akışı çalıştırmalarını izle ve yönet' },
        assistants: {
            title: 'Asistanlar',
            description: 'Kullanıcı sorularına talimatlar, araçlar ve dosyalarla yanıt veren sohbet asistanları'
        },
        marketplaces: { title: 'Pazaryeri', description: 'Hazır şablonları keşfet ve kullan' },
        tools: { title: 'Araçlar', description: "Ajanın işlem yapmak için kullanabileceği harici işlevler veya API'ler" },
        credentials: {
            title: 'Kimlik Bilgileri',
            description: 'Üçüncü taraf entegrasyonlar için API anahtarları, tokenlar ve gizli bilgiler'
        },
        variables: { title: 'Değişkenler', description: 'Genel değişkenleri oluştur ve yönet' },
        apikeys: { title: 'API Anahtarları', description: 'Flowise API ve SDK kimlik doğrulama anahtarları' },
        docstore: { title: 'Doküman Deposu', description: 'LLM erişimi (RAG) için doküman depola ve güncelle' }
    },
    buttons: {
        addNew: 'Yeni Ekle',
        create: 'Oluştur',
        load: 'Yükle',
        addCredential: 'Kimlik Bilgisi Ekle',
        addVariable: 'Değişken Ekle',
        createKey: 'Anahtar Oluştur',
        howToUse: 'Nasıl Kullanılır',
        apply: 'Uygula',
        reset: 'Sıfırla',
        clearAll: 'Tümünü Temizle'
    },
    placeholders: {
        searchNameOrCategory: 'Ad veya kategori ara [ Ctrl',
        searchTools: 'Araç ara [ Ctrl + F ]',
        searchCredentials: 'Kimlik bilgisi ara [ Ctrl + F ]',
        searchVariables: 'Değişken ara [ Ctrl + F ]',
        searchApiKeys: 'API anahtarı ara [ Ctrl + F ]',
        searchMarketplace: 'Ad/Açıklama/Düğüm Ara [ Ctrl + F ]'
    },
    emptyStates: {
        noChatflows: 'Henüz sohbet akışı yok',
        noAgents: 'Henüz ajan yok',
        noExecutions: 'Henüz çalıştırma yok',
        noTools: 'Henüz araç oluşturulmadı',
        noCredentials: 'Henüz kimlik bilgisi yok',
        noApiKeys: 'Henüz API anahtarı yok',
        noVariables: 'Henüz değişken yok',
        noDocumentStores: 'Henüz doküman deposu oluşturulmadı',
        noMarketplace: 'Henüz pazaryeri yok',
        noSavedCustomTemplates: 'Henüz kayıtlı özel şablon yok'
    },
    marketplace: {
        tag: 'Etiket',
        type: 'Tür',
        framework: 'Çatı',
        communityTemplates: 'Topluluk Şablonları',
        myTemplates: 'Şablonlarım',
        usecases: 'Kullanım Alanları',
        table: {
            name: 'Ad',
            type: 'Tür',
            description: 'Açıklama',
            framework: 'Çatı',
            usecases: 'Kullanım Alanları',
            badges: 'Etiketler',
            sharedTemplate: 'Paylaşılan Şablon',
            share: 'Paylaş',
            delete: 'Sil'
        },
        templates: {
            'Agentic RAG': {
                name: 'Agentic RAG',
                description: 'AgentflowV2 kullanan, dokümanlar üzerinde kendi kendini düzelten soru-cevap yaklaşımı'
            },
            'Agents Handoff': {
                name: 'Ajan Devri',
                description: 'Senaryoya göre görevleri farklı ajanlara devredebilen müşteri destek ajanı'
            },
            'Deep Research With Multi-turn Conversations': {
                name: 'Çok Turlu Konuşmalarla Derin Araştırma',
                description:
                    "Web araması yapan, bulguları sentezleyen ve iyi yapılandırılmış white paper'lar üreten çok turlu ajan konuşmalarına dayalı derin araştırma sistemi"
            },
            'Deep Research With Subagents': {
                name: 'Alt Ajanlarla Derin Araştırma',
                description:
                    'Karmaşık sorguları parçalayan, görevleri alt ajanlara dağıtan ve bulguları ayrıntılı raporlarda birleştiren çok ajanlı sistem.'
            },
            'Human In The Loop': {
                name: 'İnsan Onaylı Akış',
                description: 'Kullanıcı girdisiyle e-posta yanıtını sürdürebilen veya iyileştirebilen insan onaylı ajan'
            },
            'Interacting With API': {
                name: 'API ile Etkileşim',
                description: "API'lerle etkileşime geçen ajanların farklı kullanım biçimleri"
            },
            Iterations: {
                name: 'Yinelemeler',
                description: 'Bir öğe listesi üzerinde yineleme yapıp her öğe için işlem gerçekleştiren ajan'
            },
            'Simple RAG': { name: 'Basit RAG', description: 'Doküman deposundan bilgi çekip soruları yanıtlayan temel RAG ajanı' },
            'SQL Agent': { name: 'SQL Ajanı', description: 'Veritabanı üzerinde soru-cevap yapabilen ajan' },
            'Structured Output': { name: 'Yapılandırılmış Çıktı', description: "LLM'den yapılandırılmış çıktı döndür" },
            'Supervisor Worker': {
                name: 'Süpervizör Çalışan',
                description: 'Adımları planlayan ve kullanıcı sorgusuna göre görevleri çalışan ajanlara dağıtan hiyerarşik süpervizör ajan'
            },
            Translator: { name: 'Çevirmen', description: 'Metni bir dilden diğerine çevir' },
            'Workplace Chat': {
                name: 'Workplace Sohbeti',
                description: 'Slack ve Teams gibi Workplace kanallarına AI yanıtları gönderebilen ajan'
            },
            'Advanced Structured Output Parser': {
                name: 'Gelişmiş Yapılandırılmış Çıktı Ayrıştırıcı',
                description: 'Yanıtı Zod şemasında tanımlanan JSON yapısında döndür'
            },
            'Context Chat Engine': {
                name: 'Bağlam Sohbet Motoru',
                description: 'Önceki konuşmaları hatırlayarak, getirilen dokümanlara dayanıp soru yanıtla'
            },
            'Conversation Chain': {
                name: 'Konuşma Zinciri',
                description: 'Yerleşik hafızalı temel konuşma zinciri örneği - ChatGPT gibi çalışır'
            },
            'Conversational Agent': {
                name: 'Konuşkan Ajan',
                description: 'Yanıt üretmek için araçlar ve sohbet modeli kullanan konuşma ajanı'
            },
            'Conversational Retrieval QA Chain': {
                name: 'Konuşmalı Getirim Soru-Cevap Zinciri',
                description: 'Benzerlik araması için Mistral ve FAISS kullanan RAG tabanlı doküman soru-cevap akışı'
            },
            'CSV Agent': { name: 'CSV Ajanı', description: 'CSV verisini analiz et ve özetle' },
            'Github Docs QnA': { name: 'Github Doküman Soru-Cevap', description: 'RAG kullanan Github doküman soru-cevap akışı' },
            'HuggingFace LLM Chain': {
                name: 'HuggingFace LLM Zinciri',
                description: 'falcon-7b-instruct modeli üzerinde HuggingFace Inference API kullanan basit LLM zinciri'
            },
            'Image Generation': {
                name: 'Görsel Üretimi',
                description: 'Replicate Stability metinden görsel üreten model ile görsel oluştur'
            },
            'Input Moderation': {
                name: 'Girdi Moderasyonu',
                description: 'Zararlı çıktı üretebilecek metni algıla ve dil modeline gönderilmesini engelle'
            },
            'List Output Parser': { name: 'Liste Çıktı Ayrıştırıcı', description: 'Yanıtı metin yerine liste (array) olarak döndür' },
            'LLM Chain': {
                name: 'LLM Zinciri',
                description: 'Prompt şablonu ve LLM modeliyle durumsuz (hafızasız) temel LLM zinciri örneği'
            },
            'Local QnA': {
                name: 'Yerel Soru-Cevap',
                description: 'Ollama yerel LLM, LocalAI embedding modeli ve Faiss yerel vektör deposu kullanan soru-cevap zinciri'
            },
            'Multiple Documents QnA': {
                name: 'Çoklu Doküman Soru-Cevap',
                description: 'İlgili Retriever araçlarıyla birden fazla kaynaktan yanıt getirebilen araç ajanı'
            },
            'OpenAI Assistant': {
                name: 'OpenAI Asistanı',
                description: 'Kullanıcı sorularını yanıtlamak için talimatlar, modeller, araçlar ve bilgi kullanan OpenAI asistanı'
            },
            'OpenAPI YAML Agent': {
                name: 'OpenAPI YAML Ajanı',
                description:
                    "Verilen OpenAPI YAML dosyasına göre hangi API'nin çağrılacağını otomatik belirleyen ve konuşmadan url ile istek gövdesi üreten ajan"
            },
            'Prompt Chaining': {
                name: 'Prompt Zincirleme',
                description: 'Bir zincirin çıktısını başka bir zincir için prompt olarak kullan'
            },
            'Query Engine': {
                name: 'Sorgu Motoru',
                description: 'LlamaIndex kullanarak verin üzerinde soru yanıtlamak için tasarlanmış durumsuz sorgu motoru'
            },
            'ReAct Agent': {
                name: 'ReAct Ajanı',
                description: 'Hangi eylemi yapacağını belirlemek için ReAct (Reason + Act) mantığı kullanan ajan'
            },
            'Replicate LLM': { name: 'Replicate LLM', description: "LLMChain ile Llama 13b v2 modeli çalıştıran Replicate API'yi kullan" },
            'Simple Chat Engine': {
                name: 'Basit Sohbet Motoru',
                description: 'LlamaIndex kullanan ileri geri konuşmaları yöneten basit sohbet motoru'
            },
            'SQL DB Chain': { name: 'SQL VT Zinciri', description: 'SQL veritabanı üzerinde soruları yanıtla' },
            'SubQuestion Query Engine': {
                name: 'Alt Soru Sorgu Motoru',
                description: 'Sorguyu ilgili her veri kaynağı için alt sorulara böler, sonra sonuçları tek yanıtta birleştirir'
            },
            'Tool Agent': { name: 'Araç Ajanı', description: 'Yanıt üretmek için araçlar ve fonksiyon çağırabilen LLM kullanan ajan' }
        }
    },
    assistants: {
        custom: {
            title: 'Özel Asistan',
            description: 'Seçtiğin LLM ile özel asistan oluştur'
        },
        openai: {
            title: 'OpenAI Asistanı',
            description: 'Bu seçenek kullanımdan kaldırılıyor; bunun yerine Özel Asistan kullan.'
        },
        deprecating: 'Kaldırılıyor'
    }
}

export default tr
