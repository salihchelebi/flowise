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
    },
    iterations: {
        title: 'Yinelemeli Akış',
        description: 'Aynı adımı tekrar çalıştırır. Sonucu kademeli iyileştirmek istediğinde kullanılır.',
        purpose: 'Amaç: Tek sefer yerine tekrarlarla daha iyi sonuç üretmek.',
        bullets: ['Adımı tekrarlar', 'Her turda sonucu günceller', 'Koşula göre durur']
    },
    'simple rag': {
        title: 'Basit RAG',
        description: 'Belgeden ilgili parçayı bulur ve cevap üretir. Hızlı bilgi tabanı denemeleri için uygundur.',
        purpose: 'Amaç: Belgelerden destekli, hızlı soru-cevap akışı kurmak.',
        bullets: ['Belgeyi tarar', 'İlgili içeriği getirir', 'Cevabı metinle destekler']
    },
    'sql agent': {
        title: 'SQL Ajanı',
        description: 'Veritabanını doğal dille sorgular. Tablo verisinden hızlı içgörü almak için kullanılır.',
        purpose: 'Amaç: SQL bilgisini azaltıp veriye soru sorarak erişmek.',
        bullets: ['Sorgu niyetini anlar', 'SQL üretir', 'Sonucu anlaşılır döner'],
        usecases: ['Data Analysis']
    },
    'structured output': {
        title: 'Yapısal Çıktı',
        description: 'Model cevabını belirli bir şemada döndürür. Tutarlı çıktı gereken entegrasyonlarda kullanılır.',
        purpose: 'Amaç: Serbest metin yerine düzenli ve parse edilebilir çıktı üretmek.',
        bullets: ['Şema uygular', 'Alanları doğrular', 'Tutarlı format döner']
    },
    'supervisor worker': {
        title: 'Yönetici-Çalışan Ajan',
        description: 'Bir yönetici ajan işi alt ajanlara dağıtır. Çok adımlı ve bölünebilir görevlerde uygundur.',
        purpose: 'Amaç: Karmaşık işi parçalayıp paralel şekilde yürütmek.',
        bullets: ['Görevi böler', 'Alt ajanlara dağıtır', 'Sonuçları birleştirir'],
        usecases: ['Multi-Agent']
    },
    translator: {
        title: 'Çeviri Asistanı',
        description: 'Metni hedef dile çevirir. Çok dilli destek ve içerik üretiminde kullanılır.',
        purpose: 'Amaç: Metni doğru bağlamla hedef dile çevirmek.',
        bullets: ['Kaynak dili okur', 'Hedef dile çevirir', 'Anlamı korur']
    },
    'workplace chat': {
        title: 'İş Yeri Sohbeti',
        description: 'Ekip içi bilgiyle sohbet eden bir asistan sunar. Kurum içi soru-cevap senaryolarında kullanılır.',
        purpose: 'Amaç: İş süreçlerinde hızlı, bağlama uygun yanıt vermek.',
        bullets: ['Kurumsal içeriği kullanır', 'Sohbet yanıtı üretir', 'Bağlamı korur']
    },
    'advanced structured output parser': {
        title: 'Gelişmiş Yapısal Çıktı Ayrıştırıcı',
        description: 'Karmaşık model çıktısını kurallı formata çevirir. Otomasyon adımlarına temiz veri vermek için kullanılır.',
        purpose: 'Amaç: Dağınık metni güvenli şekilde yapılandırılmış veriye dönüştürmek.',
        bullets: ['Formatı denetler', 'Alanları ayrıştırır', 'Hata riskini azaltır']
    },
    'context chat engine': {
        title: 'Bağlamlı Sohbet Motoru',
        description: 'Sohbeti önceki bağlamla sürdürür. Uzun konuşmalarda tutarlı cevap için uygundur.',
        purpose: 'Amaç: Konuşmanın geçmişini koruyarak daha doğru yanıt üretmek.',
        bullets: ['Bağlamı taşır', 'Sohbeti sürdürür', 'Kopuk yanıtı azaltır']
    },
    'conversation chain': {
        title: 'Konuşma Zinciri',
        description: 'Sohbet adımlarını sırayla yürütür. Basit diyalog akışları için uygun bir başlangıçtır.',
        purpose: 'Amaç: Sıralı konuşma mantığıyla temel asistan akışı kurmak.',
        bullets: ['Adımları sıraya koyar', 'Yanıtı üretir', 'Akışı sade tutar']
    },
    'conversational agent': {
        title: 'Sohbet Ajanı',
        description: 'Araç kullanabilen sohbet ajanı kurar. Soruya göre aksiyon alması gereken senaryolarda kullanılır.',
        purpose: 'Amaç: Sohbeti sadece cevaplamak değil, gerektiğinde işlem de yaptırmak.',
        bullets: ['Niyeti anlar', 'Gerekirse araç çağırır', 'Sonucu sohbetle döner']
    },
    'conversational retrieval qa chain': {
        title: 'Konuşmalı Getirme Soru-Cevap Zinciri',
        description: 'Sohbet geçmişiyle belge getirmeyi birleştirir. Belgeli konuşma asistanları için uygundur.',
        purpose: 'Amaç: Soru-cevapta hem bağlamı hem kaynak metni birlikte kullanmak.',
        bullets: ['Geçmişi dikkate alır', 'İlgili belgeyi getirir', 'Kaynaklı yanıt üretir']
    },
    'csv agent': {
        title: 'CSV Ajanı',
        description: 'CSV dosyasını doğal dille sorgular. Tablo verisini hızlı analiz etmek için kullanılır.',
        purpose: 'Amaç: CSV verisinden teknik sorgu yazmadan bilgi almak.',
        bullets: ['CSV okur', 'Soruyu tabloya çevirir', 'Sonucu özetler']
    },
    'github docs qna': {
        title: 'GitHub Doküman Soru-Cevap',
        description: 'GitHub dokümanlarını kaynak alıp soru cevaplar. Teknik dökümantasyon destek botları için uygundur.',
        purpose: 'Amaç: GitHub dokümanlarını arayıp hızlı teknik yanıt üretmek.',
        bullets: ['Dokümanı indeksler', 'İlgili bölümü bulur', 'Kaynaklı cevap verir']
    },
    'huggingface llm chain': {
        title: 'HuggingFace LLM Zinciri',
        description: 'HuggingFace modelleriyle metin akışı kurar. Açık model tabanlı prototiplerde kullanılır.',
        purpose: 'Amaç: HuggingFace modelini hazır zincirle hızlıca çalıştırmak.',
        bullets: ['Modele bağlanır', 'İstemi işler', 'Çıktıyı akışa taşır']
    },
    'image generation': {
        title: 'Görsel Üretimi',
        description: 'Metin isteminden görsel üretir. Kreatif içerik ve hızlı mockup üretiminde kullanılır.',
        purpose: 'Amaç: Metin açıklamasını görsel çıktıya dönüştürmek.',
        bullets: ['İstemi alır', 'Görsel üretir', 'Çıktıyı paylaşır']
    },
    'input moderation': {
        title: 'Girdi Denetimi',
        description: 'Kullanıcı girdisini güvenlik kurallarına göre filtreler. Riskli içerik kontrolünde kullanılır.',
        purpose: 'Amaç: Uygunsuz girdiyi erkenden yakalayıp akışı güvenli tutmak.',
        bullets: ['Girdiyi tarar', 'Risk seviyesini belirler', 'Gerekirse engeller']
    },
    'list output parser': {
        title: 'Liste Çıktı Ayrıştırıcı',
        description: 'Model çıktısını liste formatına çevirir. Maddeli çıktılar gerektiğinde kullanılır.',
        purpose: 'Amaç: Dağınık metni düzenli listeye dönüştürmek.',
        bullets: ['Metni parçalar', 'Listeye çevirir', 'Formatı korur']
    },
    'llm chain': {
        title: 'LLM Zinciri',
        description: 'Temel LLM adımlarını birbirine bağlar. Hızlı prototip ve standart metin görevleri için uygundur.',
        purpose: 'Amaç: LLM tabanlı basit ama esnek bir akış kurmak.',
        bullets: ['İstemi işler', 'Modelden cevap alır', 'Adımları zincirler']
    },
    'local qna': {
        title: 'Yerel Soru-Cevap',
        description: 'Yerel içerik üzerinden soru cevaplar. İnternete çıkmadan kurum içi kullanımda tercih edilir.',
        purpose: 'Amaç: Yerel veriyle güvenli soru-cevap deneyimi sunmak.',
        bullets: ['Yerel içeriği kullanır', 'Soruya göre bilgi bulur', 'Cevap üretir']
    },
    'multiple documents qna': {
        title: 'Çoklu Belge Soru-Cevap',
        description: 'Birden fazla belgeyi birlikte sorgular. Dağınık kaynaklardan tek cevap üretmek için uygundur.',
        purpose: 'Amaç: Farklı belgelerden ilgili bilgiyi birleştirip cevaplamak.',
        bullets: ['Birden çok kaynağı tarar', 'İlgili parçaları toplar', 'Tek yanıt üretir']
    },
    'openai assistant': {
        title: 'OpenAI Asistanı',
        description: 'OpenAI Assistant akışını hazır şekilde kurar. Araç kullanan görev odaklı asistanlarda kullanılır.',
        purpose: 'Amaç: OpenAI Assistant yetenekleriyle hızlı asistan oluşturmak.',
        bullets: ['Assistant yapılandırır', 'Araç çağırır', 'Görev sonucunu döner']
    },
    'openapi yaml agent': {
        title: 'OpenAPI YAML Ajanı',
        description: 'OpenAPI YAML tanımından API ile konuşan ajan kurar. Endpoint tabanlı otomasyonlarda kullanılır.',
        purpose: 'Amaç: API dokümanından otomatik işlem yapan ajan oluşturmak.',
        bullets: ['YAML şemasını okur', 'Uygun endpoint seçer', 'İstek gönderir']
    },
    'prompt chaining': {
        title: 'İstem Zincirleme',
        description: 'Bir istemin çıktısını sonraki isteme taşır. Adım adım düşünme gereken görevlerde uygundur.',
        purpose: 'Amaç: Karmaşık görevi küçük istem adımlarına bölmek.',
        bullets: ['Adımları ayırır', 'Çıktıyı sonraki adıma taşır', 'Süreç kontrolünü artırır']
    },
    'query engine': {
        title: 'Sorgu Motoru',
        description: 'Veri kaynağı üzerinde doğal dille sorgu çalıştırır. Bilgi erişim odaklı asistanlarda kullanılır.',
        purpose: 'Amaç: Kullanıcı sorusunu veri sorgusuna dönüştürmek.',
        bullets: ['Sorguyu yorumlar', 'Kaynağı tarar', 'Sonucu döner']
    },
    'react agent': {
        title: 'ReAct Ajanı',
        description: 'Düşünme ve eylem adımlarını birlikte yürütür. Araç kullanımına karar veren ajanlarda uygundur.',
        purpose: 'Amaç: Adım adım düşünüp doğru aracı doğru zamanda kullanmak.',
        bullets: ['Plan yapar', 'Araç seçer', 'Sonucu değerlendirir']
    },
    'replicate llm': {
        title: 'Replicate LLM',
        description: 'Replicate üzerindeki modeli akışa bağlar. Alternatif model sağlayıcı denemelerinde kullanılır.',
        purpose: 'Amaç: Replicate modelini hızlıca üretim akışına dahil etmek.',
        bullets: ['Modele bağlanır', 'İstemi gönderir', 'Çıktıyı alır']
    },
    'simple chat engine': {
        title: 'Basit Sohbet Motoru',
        description: 'Hafif ve hızlı sohbet akışı kurar. İlk prototipler ve düşük karmaşıklık için uygundur.',
        purpose: 'Amaç: En kısa yoldan çalışan sohbet deneyimi sunmak.',
        bullets: ['Sohbet başlatır', 'Yanıt üretir', 'Yapıyı sade tutar']
    },
    'sql db chain': {
        title: 'SQL Veritabanı Zinciri',
        description: 'SQL veritabanı üzerinde zincir tabanlı sorgu akışı kurar. Raporlama görevlerinde kullanılır.',
        purpose: 'Amaç: SQL verisinden adım adım güvenli cevap üretmek.',
        bullets: ['Sorguyu oluşturur', 'Veritabanını okur', 'Sonucu özetler']
    },
    'subquestion query engine': {
        title: 'Alt Soru Sorgu Motoru',
        description: 'Büyük soruyu küçük sorulara böler. Karmaşık sorularda daha net cevap üretmek için uygundur.',
        purpose: 'Amaç: Zor soruları alt parçalara bölüp daha doğru sonuç almak.',
        bullets: ['Soruyu böler', 'Alt sorguları çalıştırır', 'Cevapları birleştirir']
    },
    'tool agent': {
        title: 'Araç Ajanı',
        description: 'Soruya göre uygun aracı çalıştırır. İşlem yapması gereken yardımcı asistanlar için uygundur.',
        purpose: 'Amaç: Modelin dış araçlarla aktif işlem yapmasını sağlamak.',
        bullets: ['İhtiyacı belirler', 'Aracı çağırır', 'Sonucu döner']
    },
    'add hubspot contact': {
        title: 'HubSpot Kişisi Ekle',
        description: 'HubSpot hesabına yeni kişi kaydı açar. CRM otomasyonlarında kullanılır.',
        purpose: 'Amaç: HubSpot kişi ekleme adımını akıştan otomatikleştirmek.',
        bullets: ['Kişi bilgisini alır', 'HubSpot kaydı oluşturur', 'Sonucu bildirir']
    },
    'create airtable record': {
        title: 'Airtable Kayıt Oluştur',
        description: 'Airtable tablosuna yeni satır ekler. Form veya olay temelli veri kaydında kullanılır.',
        purpose: 'Amaç: Airtable kayıt eklemeyi manuel işlemden kurtarmak.',
        bullets: ['Alanları hazırlar', 'Kayıt ekler', 'Sonucu doğrular']
    },
    'get current datetime': {
        title: 'Güncel Tarih ve Saat',
        description: 'Anlık tarih-saat bilgisini üretir. Zaman damgası gereken akışlarda kullanılır.',
        purpose: 'Amaç: Akışa doğru zaman bilgisini güvenli şekilde eklemek.',
        bullets: ['Tarihi alır', 'Saati alır', 'Çıktıyı paylaşır']
    },
    'get stock mover': {
        title: 'Hisse Hareketlerini Getir',
        description: 'Piyasadaki güçlü yükseliş/düşüş verisini getirir. Finans izleme akışlarında kullanılır.',
        purpose: 'Amaç: Güncel piyasa hareketlerini hızlıca görünür yapmak.',
        bullets: ['Piyasa verisini çeker', 'Hareketli hisseleri listeler', 'Özet üretir']
    },
    'make webhook': {
        title: 'Webhook Gönder',
        description: 'Belirlenen adrese webhook çağrısı yapar. Sistemler arası tetikleme için kullanılır.',
        purpose: 'Amaç: Harici sistemi olay anında otomatik tetiklemek.',
        bullets: ['Payload hazırlar', 'Webhook çağırır', 'Yanıtı döner']
    },
    'perplexity ai search': {
        title: 'Perplexity AI Arama',
        description: 'Perplexity ile web araması yapar. Hızlı kaynak taraması gereken görevlerde uygundur.',
        purpose: 'Amaç: Perplexity arama sonucunu akışa bağlamak.',
        bullets: ['Sorguyu gönderir', 'Web sonucunu toplar', 'Özet çıkarır']
    },
    'print or export text document': {
        title: 'Metni Yazdır veya Dışa Aktar',
        description: 'Metin çıktısını yazdırır ya da dışa aktarır. Rapor paylaşım adımlarında kullanılır.',
        purpose: 'Amaç: Üretilen metni kalıcı ve paylaşılabilir hale getirmek.',
        bullets: ['Metni hazırlar', 'Yazdırır veya dışa aktarır', 'Paylaşımı kolaylaştırır']
    },
    'send discord message': {
        title: 'Discord Mesajı Gönder',
        description: 'Discord kanalına otomatik mesaj yollar. Uyarı ve bildirim akışlarında kullanılır.',
        purpose: 'Amaç: Discord üzerinden anlık ekip bildirimi yapmak.',
        bullets: ['Mesajı oluşturur', 'Kanala yollar', 'Durumu bildirir']
    },
    'send slack message': {
        title: 'Slack Mesajı Gönder',
        description: 'Slack kanalına otomatik mesaj gönderir. Operasyon ve destek bildirimlerinde kullanılır.',
        purpose: 'Amaç: Slack iletişimini akıştan otomatik yürütmek.',
        bullets: ['Mesajı üretir', 'Kanalı hedefler', 'Gönderimi tamamlar']
    },
    'send teams message': {
        title: 'Teams Mesajı Gönder',
        description: 'Teams kanalına otomatik mesaj gönderir. Kurumsal bildirim senaryolarında uygundur.',
        purpose: 'Amaç: Teams üzerinden düzenli ve hızlı bilgilendirme yapmak.',
        bullets: ['İçeriği hazırlar', 'Mesajı gönderir', 'Sonucu döner']
    },
    'sendgrid email': {
        title: 'SendGrid E-Posta Gönder',
        description: 'SendGrid ile e-posta yollar. İşlem bildirimleri ve otomatik e-posta akışlarında kullanılır.',
        purpose: 'Amaç: E-posta gönderimini akıştan güvenli biçimde otomatikleştirmek.',
        bullets: ['E-posta içeriği hazırlar', 'SendGrid ile gönderir', 'Durumu raporlar']
    },
    'spider web scraper': {
        title: 'Spider Web Kazıyıcı',
        description: 'Belirli sayfaları kazıyıp içerik toplar. Kaynak metni toplama senaryolarında kullanılır.',
        purpose: 'Amaç: Web içeriğini düzenli biçimde toplamak.',
        bullets: ['URL tarar', 'Metni çıkarır', 'İşlenebilir veri üretir']
    },
    'spider web search & scrape': {
        title: 'Spider Web Arama ve Kazıma',
        description: 'Önce webde arama yapar, sonra bulunan sayfaları kazır. Geniş kaynak toplama işlerinde uygundur.',
        purpose: 'Amaç: Arama ve içerik toplama adımlarını tek akışta birleştirmek.',
        bullets: ['Webde arar', 'Uygun sayfaları seçer', 'İçeriği kazır']
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

    if (template?.templateName || template?.name) return 'Bu şablon, seçtiğin görevi hazır bir akışla başlatmanı sağlar.'

    return 'Bu içerik, hazır bir yapı örneği sunar.'
}

const getFallbackPurpose = (template) => {
    if (template?.type === 'Tool') return 'Amaç: Aracı hızlıca denemek ve kendi akışına uyarlamak.'
    return 'Amaç: Şablonu açıp ihtiyacına göre düzenlemek.'
}

const getFallbackBullets = (template) => {
    if (template?.type === 'Tool') return ['Aracı tanıtır', 'Kullanımı gösterir', 'İçe aktarmayı kolaylaştırır']
    return ['Hazır yapıyı gösterir', 'Akış adımlarını özetler', 'Uyarlama için başlangıç sunar']
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
