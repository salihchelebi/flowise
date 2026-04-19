export const sectorCards = [
    {
        slug: 'seo-engineer',
        title: 'SEO Mühendisi',
        kicker: 'Büyük SEO operasyonunu ajan sistemine çevir',
        description:
            'Cluster planı, brief üretimi, teknik kontrol, iç linkleme, kalite denetimi ve revizyon döngüsünü tek tek insan takibiyle değil; rollere ayrılmış ajanlarla yönetmek isteyen ekipler için tasarlandı.',
        bullets: [
            'Programmatic ve büyük ölçekli SEO işleri',
            'Çok sayfalı hukuk, dizin, şehir ve hizmet siteleri',
            'Teknik SEO + içerik + QA birlikte ilerleyen operasyonlar'
        ],
        cta: 'SEO sistemi nasıl kurulur, gör',
        route: '/sectoral-agents/seo-engineer',
        status: 'active'
    },
    {
        slug: 'legal-intake',
        title: 'Hukuk Danışan Akışı',
        kicker: 'Yakında',
        description:
            'İlk başvuru toplama, dosya ön sınıflandırma ve yönlendirme odaklı sektörel ajan kurgusu.',
        bullets: ['Başvuru toplama', 'Ön sınıflandırma', 'Yönlendirme akışı'],
        cta: 'Hazırlanıyor',
        route: '',
        status: 'soon'
    },
    {
        slug: 'real-estate',
        title: 'Emlak Operasyon Akışı',
        kicker: 'Yakında',
        description:
            'Portföy karşılama, müşteri ön eleme, bilgi toplama ve yönlendirme odaklı ajan kurgusu.',
        bullets: ['Portföy toplama', 'Ön eleme', 'Randevu yönlendirme'],
        cta: 'Hazırlanıyor',
        route: '',
        status: 'soon'
    }
]

export const seoEngineerPage = {
    hero: {
        badge: 'SEO Mühendisi Senaryosu',
        title: 'SEO projelerini tek tek yönetme. Sistemi kur, ajanlar çalışsın.',
        subtitle:
            'Büyük hukuk dizinleri, şehir sayfaları, practice area kümeleri, entity haritaları ve tekrar eden teknik kontroller için tek tek koşturmak yerine; işi ajanlara bölen, akışları görünür yapan ve kaliteyi tekrar tekrar ölçen bir düzen kur.',
        primaryCta: {
            label: 'Sohbet Akışlarına Git',
            route: '/chatflows'
        },
        secondaryCta: {
            label: 'Ajan Akışlarını Aç',
            route: '/agentflows'
        },
        supportLine: [
            'Mini SEO motorlarını kur',
            'Büyük ajan akışını tasarla',
            'Araçları bağla',
            'Çalıştırmaları izle',
            'Zayıf yeri yeniden düzelt'
        ]
    },
    metrics: [
        { label: '10', value: 'ürün yüzeyi', help: 'Tek bir SEO operasyonunu kurmak için kullanacağın ana alanlar' },
        { label: '5+', value: 'uzman rol', help: 'Strateji, brief, QA, linkleme ve teknik kontrol için ayrılmış yardımcılar' },
        { label: '1', value: 'merkezi sistem', help: 'Değişkenler, dokümanlar, araçlar ve akışlar tek çatı altında' }
    ],
    promises: [
        'Tek prompt çöplüğü kurmazsın; her işi ayrı akışa bölersin.',
        'Aynı sistemi farklı şehir, ülke, niyet ve sayfa tipine uyarlarsın.',
        'İçerik üretmekle kalmaz; kontrol, revizyon ve ölçüm döngüsü kurarsın.',
        'Büyüdükçe kaos artmaz; orkestrasyon güçlenir.'
    ],
    painPoints: [
        '50 sayfa yönetmek başka, 5.000 sayfa yönetmek başka.',
        'Sorun sadece içerik yazmak değildir; hangi sayfa tipi, hangi intent, hangi entity, hangi brief standardı sorunu da birlikte gelir.',
        'Teknik SEO, içerik planı, iç linkleme, kalite kontrol ve tekrar üretim aynı anda yürütülmediğinde ekip şişer ama sistem kurulmaz.'
    ],
    mechanism: [
        'Bir ajan araştırır.',
        'Bir ajan cluster çıkarır.',
        'Bir ajan brief üretir.',
        'Bir ajan taslak ve schema önerir.',
        'Bir ajan iç link fırsatlarını çıkarır.',
        'Bir ajan kalite denetimi yapar.',
        'Bir ajan çalıştırma raporlarını okur ve revizyon listesi üretir.'
    ],
    routeJourney: [
        {
            route: '/chatflows',
            title: 'Mini SEO motorlarını burada kur',
            description:
                'Keyword grouping, intent ayırma, title/meta önerisi, schema çıkarımı, entity extraction ve outline üretimi gibi küçük ama kritik işleri ayrı akışlara böl.',
            bullets: [
                'Tek iş yapan net akışlar kur',
                'Her akışın giriş ve çıkışını görünür tut',
                'Aynı mini motoru farklı projelerde tekrar kullan'
            ],
            ctaLabel: 'Sohbet Akışlarını Aç'
        },
        {
            route: '/canvas',
            title: 'Akışı görsel olarak burada kur',
            description:
                'Prompt, model, retriever, koşul, tool ve variable bağlantılarını soyut değil; görünür şekilde birbirine bağla.',
            bullets: [
                'Girdi nereden geliyor, net gör',
                'Hangi adım ne üretiyor, karıştırma',
                'Karar noktalarını elle tutulur hale getir'
            ],
            ctaLabel: 'Canvas Mantığını Gör'
        },
        {
            route: '/executions',
            title: 'Çalıştırmaları burada izle',
            description:
                'Hangi akış ne üretti, hangi adım saçmaladı, nerede kalite düştü ve neyin yeniden denenmesi gerekiyor; buradan takip et.',
            bullets: [
                'Başarılı ve zayıf koşuları ayır',
                'Revizyon gereken noktayı hızlı bul',
                'Sadece üretme değil, sonuç izleme düzeni kur'
            ],
            ctaLabel: 'Çalıştırmaları Aç'
        },
        {
            route: '/assistants',
            title: 'Uzman rollerini burada ayır',
            description:
                'SEO Strateji Asistanı, Technical SEO Analyst, Brief Architect, Internal Linking Assistant ve QA Assistant gibi rolleri ayrı ayrı tanımla.',
            bullets: [
                'Rol karışıklığını azalt',
                'Her yardımcıya net görev ver',
                'Aynı işi yapan tek mega asistan kurma'
            ],
            ctaLabel: 'Asistanları Aç'
        },
        {
            route: '/marketplaces',
            title: 'Hazır başlangıç iskeletlerini burada aç',
            description:
                'Sıfırdan başlamak zorunda değilsin. Şablon, hazır blok veya başlangıç yapısı kullan; sonra kendi sistemine göre özelleştir.',
            bullets: [
                'Başlangıç süresini kısalt',
                'Hazır yapıyı kopyala, geliştir',
                'Deneme maliyetini düşür'
            ],
            ctaLabel: 'Pazaryerlerini Aç'
        },
        {
            route: '/tools',
            title: 'Ajanların iş yapmasını burada sağla',
            description:
                'Araç yoksa ajan sadece konuşur. SERP çekme, sitemap okuma, içerik kıyaslama, schema doğrulama ve dış sistemden veri alma gibi işleri buradan aç.',
            bullets: [
                'Konuşan ajan değil, iş yapan ajan kur',
                'Dış veri kaynaklarını bağla',
                'Teknik kontrolleri otomasyona bağla'
            ],
            ctaLabel: 'Araçları Aç'
        },
        {
            route: '/credentials',
            title: 'API anahtarlarını güvenli burada tut',
            description:
                'OpenAI, Tavily, Firecrawl, DataForSEO, Ahrefs ya da başka servis anahtarlarını sağa sola yapıştırma. Güvenli yönet ve kontrollü kullandır.',
            bullets: [
                'Anahtar dağınıklığını bitir',
                'Kim hangi kaynağı kullanıyor, kontrol et',
                'Ajan erişimini düzenli tut'
            ],
            ctaLabel: 'Kimlik Bilgilerini Aç'
        },
        {
            route: '/variables',
            title: 'Projeyi değişkenleştir',
            description:
                'target_country, city, practice_area, page_type, author_tone, compliance_rule ve no_go_terms gibi alanları bir kere tanımla; sistemi tekrar tekrar baştan kurma.',
            bullets: [
                'Aynı yapıyı farklı projeye taşı',
                'Şehir ve niyet değişse de sistemi bozma',
                'Kopyala-yapıştır kaosunu azalt'
            ],
            ctaLabel: 'Değişkenleri Aç'
        },
        {
            route: '/apikey',
            title: 'Erişimi burada kontrol et',
            description:
                'Flow’larını gelişi güzel açıkta bırakma. Hangi akışı kim çağıracak, agency iç tool’ları nasıl korunacak, bunu burada yönet.',
            bullets: [
                'İç akışları güvenli çağır',
                'Müşteri veya ekip bazlı erişim ayır',
                'Otomasyon çağrılarını kontrollü yürüt'
            ],
            ctaLabel: 'API Anahtarlarını Aç'
        },
        {
            route: '/document-stores',
            title: 'Dağınık SEO bilgisini burada merkezileştir',
            description:
                'Rakip sayfalar, sitemap export’ları, SOP belgeleri, editoryal kurallar, eski içerik arşivi, entity listeleri ve GSC verilerini tek merkezde topla.',
            bullets: [
                'Ajanların dağınık dosya peşinde koşmasını engelle',
                'Bilgi tekrarını azalt',
                'Büyük projede ortak bilgi hafızası kur'
            ],
            ctaLabel: 'Doküman Depolarını Aç'
        }
    ],
    findlawCase: {
        title: 'Düşün: FindLaw benzeri dev bir hukuk dizininin SEO’sunu yönetiyorsun',
        subtitle:
            'On binlerce URL var. Şehir sayfaları, eyalet sayfaları, practice area sayfaları, avukat profil sayfaları, soru-cevap içerikleri ve bilgi rehberleri aynı sistem içinde büyüyor.',
        pageTypes: [
            'Şehir sayfaları',
            'Eyalet sayfaları',
            'Practice area sayfaları',
            'Avukat profil sayfaları',
            'Soru-cevap sayfaları',
            'Karşılaştırma ve rehber içerikler'
        ],
        stages: [
            {
                title: '1. Bilgiyi topla',
                detail: 'Rakip sayfaları, mevcut site içeriklerini, SOP belgelerini, location listelerini ve eski içerik arşivini document store içine yükle.'
            },
            {
                title: '2. Değişken sistemini kur',
                detail: 'state, city, practice area, intent, page type, tone, compliance rule ve internal linking rule gibi alanları sabitle.'
            },
            {
                title: '3. Mikro SEO motorlarını çıkar',
                detail: 'Keyword grouping, intent separation, entity extraction, outline generation, schema suggestion ve internal linking önerilerini ayrı mini akışlara böl.'
            },
            {
                title: '4. Büyük ajan akışını kur',
                detail: 'Araştırma -> sınıflandırma -> brief -> taslak -> QA -> linkleme -> export zincirini tek bir görünür operasyon sistemine çevir.'
            },
            {
                title: '5. Sonucu izle ve düzelt',
                detail: 'Çalıştırmalar ve kalite çıktıları üzerinden saçmalayan akışı bul, prompt ya da araç katmanında düzelt, tekrar çalıştır.'
            }
        ],
        close:
            'Yani artık her state sayfasını tek tek düşünmezsin. Sistemi kurarsın. Ajanlar sayfa tipini tanır, entity yapısını çıkarır, brief üretir, iç link önerir ve kaliteyi kontrol eder. Sen sadece yön verirsin.'
    },
    faq: [
        {
            q: 'Bu sistem sadece içerik üretmek için mi?',
            a: 'Hayır. İçerik bunun sadece bir parçası. Asıl güç; araştırma, sınıflandırma, brief, üretim, QA, revizyon ve izleme katmanlarının tek düzene bağlanmasıdır.'
        },
        {
            q: 'Büyük projelerde gerçekten fark yaratır mı?',
            a: 'Evet. Çünkü büyük projede sorun tek bir yazı yazmak değil; tekrar eden kararları, kalite kontrolü ve koordinasyonu sistemleştirmektir.'
        },
        {
            q: 'Teknik SEO ile içerik operasyonu aynı yapıda ilerler mi?',
            a: 'İlerler. Ayrı yardımcılar ve ayrı akışlar kurulduğunda teknik kontroller, içerik brief’leri ve linkleme önerileri aynı operasyon altında birleşebilir.'
        },
        {
            q: 'Görseller olmadan sayfa kırılır mı?',
            a: 'Hayır. Bu paket, görseller sonradan eklense de ilk açılışta CSS tabanlı görsel placeholder ile çalışır.'
        }
    ],
    imageSpecs: [
        { file: 'lp1', size: '1600x900', usage: 'Hero ana görsel' },
        { file: 'lp2', size: '1400x900', usage: 'SEO kaosu / problem sahnesi' },
        { file: 'lp3', size: '1600x1000', usage: 'Route ve orkestrasyon haritası' },
        { file: 'lp4', size: '1400x900', usage: 'SEO engineer dashboard hissi' },
        { file: 'lp5', size: '1400x900', usage: 'Document store / knowledge hub' },
        { file: 'lp6', size: '1600x900', usage: 'Chatflow + canvas kurulum sahnesi' },
        { file: 'lp7', size: '1400x900', usage: 'Role-based assistants görseli' },
        { file: 'lp8', size: '1400x900', usage: 'Tools + credentials + API control' },
        { file: 'lp9', size: '1400x900', usage: 'Executions / QA / monitoring' },
        { file: 'lp10', size: '1600x900', usage: 'FindLaw ölçeğinde hukuk dizini SEO sahnesi' }
    ]
}
