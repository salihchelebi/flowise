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
    nodePurpose: 'Bu ne yapar?',
    nodeWhenToUse: 'Ne zaman seçilir?',
    learnMoreTitle: 'Daha fazla gör',
    learnMoreSummary: 'Kısa özet',
    learnMoreGuide: 'Adım adım nasıl düşünmelisin?',
    learnMoreExample: 'Basit örnek'
}

const TAB_META = [
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

const CATEGORY_META = {
    Agents: {
        label: 'Ajanlar',
        tooltip: 'Kullanıcı adına karar adımları çalıştıran ve gerektiğinde başka araçları devreye alan bileşenler.'
    },
    Cache: {
        label: 'Önbellek',
        tooltip: 'Aynı sonucu tekrar üretmemek için ara çıktıları geçici olarak tutan bileşenler.'
    },
    Chains: {
        label: 'Zincirler',
        tooltip: 'Birden fazla adımı sırayla çalıştıran hazır akış parçaları.'
    },
    'Chat Models': {
        label: 'Sohbet Modelleri',
        tooltip: 'Kullanıcıya yanıt yazan sohbet modeli bağlantıları.'
    },
    'Document Loaders': {
        label: 'Belge Yükleyiciler',
        tooltip: 'Dosya, klasör veya dış kaynaktan içerik içeri alan bileşenler.'
    },
    Embeddings: {
        label: 'Gömme Modelleri',
        tooltip: 'Metni benzerlik aramasında kullanılacak vektöre çeviren bileşenler.'
    },
    Graph: {
        label: 'Graf Veritabanları',
        tooltip: 'Düğümler ve ilişkiler şeklindeki verilerle çalışan bağlantılar.'
    },
    LLMs: {
        label: 'Büyük Dil Modelleri',
        tooltip: 'Temel metin üretimi yapan model bağlantıları.'
    },
    Memory: {
        label: 'Hafıza',
        tooltip: 'Konuşma geçmişini veya bağlamı akış boyunca tutan bileşenler.'
    },
    Moderation: {
        label: 'İçerik Denetimi',
        tooltip: 'Uygunsuz ya da riskli içerikleri kontrol eden bileşenler.'
    },
    'Output Parsers': {
        label: 'Çıktı Ayrıştırıcıları',
        tooltip: 'Model çıktısını daha düzenli ve işlenebilir hale getiren bileşenler.'
    },
    Prompts: {
        label: 'İstem Şablonları',
        tooltip: 'Modele verilecek talimat metnini kuran bileşenler.'
    },
    'Record Manager': {
        label: 'Kayıt Yöneticisi',
        tooltip: 'İndeksleme ve kayıt takibini yöneten bileşenler.'
    },
    Retrievers: {
        label: 'Getiriciler',
        tooltip: 'En ilgili bilgi parçalarını bulan bileşenler.'
    },
    'Text Splitters': {
        label: 'Metin Bölücüler',
        tooltip: 'Uzun metinleri küçük parçalara bölen bileşenler.'
    },
    Tools: {
        label: 'Araçlar',
        tooltip: 'Modelin hesaplama, arama veya dış sistem çağrısı yapmasını sağlayan bileşenler.'
    },
    'Tools (MCP)': {
        label: 'MCP Araçları',
        tooltip: 'MCP üzerinden harici araç ve sistemlere bağlanan bileşenler.'
    },
    'Vector Stores': {
        label: 'Vektör Veritabanları',
        tooltip: 'Vektörleri saklayan ve benzer içerik arayan veritabanı bağlantıları.'
    },
    Utilities: {
        label: 'Yardımcı Düğümler',
        tooltip: 'Akışta değişken, koşul ve açıklama notu gibi destek işleri yapan bileşenler.'
    },
    Engine: {
        label: 'Motorlar',
        tooltip: 'Sorgu veya yanıt üretme mantığını belirleyen bileşenler.'
    },
    'Response Synthesizer': {
        label: 'Yanıt Oluşturucu',
        tooltip: 'Parçalı bilgileri tek ve okunur bir yanıta dönüştüren bileşenler.'
    }
}

const BADGE_META = {
    DEPRECATING: 'Kullanımdan Kaldırılıyor'
}

const CATEGORY_FALLBACKS = {
    Agents: {
        description: 'Kullanıcı adına seçim yapar, gerekirse başka araçları çağırır. Bir işi adım adım yönetmek istediğinde kullanılır.',
        whenToUse: 'Tek bir model cevabı yetmiyorsa ve sistemin hangi adımı atacağına karar vermesi gerekiyorsa seçilir.'
    },
    Cache: {
        description: 'Önceden üretilen sonucu kısa süre saklar. Aynı hesabı tekrar yapmadan hız kazanmak istediğinde kullanılır.',
        whenToUse: 'Aynı girişler sık tekrarlanıyorsa seçilir.'
    },
    Chains: {
        description: 'Birkaç adımı sırayla çalıştırır. Tek tek bağlamak yerine hazır akış mantığı istediğinde kullanılır.',
        whenToUse: 'İşin sırası belliyse ve adımlar birbirini takip ediyorsa seçilir.'
    },
    'Chat Models': {
        description: 'Kullanıcıya yazılı yanıt üreten modeli bağlar. Sohbet akışının konuşan kısmını kurarken kullanılır.',
        whenToUse: 'Yanıt üreten model seçmen gerektiğinde seçilir.'
    },
    Utilities: {
        description: 'Akışa destek işi ekler. Değişken tutmak, koşul kontrol etmek veya not bırakmak istediğinde kullanılır.',
        whenToUse: 'Ana akışı değiştirmeden küçük yardımcı adımlar eklemek istediğinde seçilir.'
    }
}

const DEFAULT_FALLBACK = {
    description: 'Bu bileşen akış içinde belirli bir işi çalıştırır. Ne yaptığını kısa metinle anlayamıyorsan detay görünümünü açman gerekir.',
    whenToUse: 'Akışta belirli bir görevi ayrı bir adım olarak yönetmek istediğinde seçilir.',
    summary: 'Bu bileşen tek bir işi üstlenir ve akışın ilgili noktasında çalışır.',
    learnMoreBullets: [
        'Önce bu adımın ne alacağını kontrol et.',
        'Sonra ne üreteceğine bak.',
        'Çıkışı bir sonraki adıma bağlayıp bağlamayacağını karar ver.',
        'Ayar alanları varsa sadece gerekli olanları doldur.',
        'Denemeyi küçük bir örnekle başlat.',
        'Beklenen sonucu görmeden büyük akışa ekleme.',
        'Aynı işi yapan başka düğüm varsa farkını karşılaştır.',
        'Gereksiz karmaşıklık eklememeye dikkat et.',
        'Arama ile benzer düğümleri de gözden geçir.',
        'Anlamadığın yerde detay bilgisini açıp tekrar oku.'
    ],
    example: 'Örnek: Kullanıcıdan gelen metni önce bu adıma verirsin, sonra ürettiği sonucu bir sonraki adıma aktarırsın.'
}

const NODE_META = {
    customFunction: {
        label: 'Özel JS Fonksiyonu',
        description: 'Kendi JavaScript kodunu çalıştırır. Hazır düğümlerin yapamadığı özel işlemler için kullanılır.',
        whenToUse: 'Özel kurala göre veri dönüştürmek, küçük bir hesap yapmak veya akışa özel mantık eklemek istediğinde seçilir.',
        summary: 'Hazır seçenekler yetmediğinde kendi küçük kodunu yazarak eksik işi tamamlarsın.',
        learnMoreBullets: [
            'Hazır düğümle çözülemeyen küçük işleri burada yaparsın.',
            'Girdi olarak gelen veriyi okuyup dönüştürebilirsin.',
            'Kısa ve tek amaçlı kod yazmak daha güvenlidir.',
            'Kodun çıktısı bir sonraki adıma gider.',
            'Aynı anda çok fazla iş yükleme.',
            'Önce basit bir örnekle çalıştır.',
            'Beklenmeyen veri gelirse ne olacağını düşün.',
            'Mümkünse yalnızca gerekli değişkenleri kullan.',
            'Hata olursa akışın hangi noktada duracağını kontrol et.',
            'Uzun mantık yerine küçük yardımcı kodlar tercih et.'
        ],
        example: 'Örnek: Giren fiyat bilgisini yüzde 20 artırıp yeni fiyatı sonraki adıma gönderebilirsin.'
    },
    getVariable: {
        label: 'Değişkeni Getir',
        description: 'Daha önce kaydedilmiş bir değeri geri alır. Aynı bilgiyi yeniden üretmeden tekrar kullanırsın.',
        whenToUse: 'Akışın önceki adımında sakladığın veriye tekrar ihtiyaç duyduğunda seçilir.',
        summary: 'Bu adım, daha önce kaydettiğin bilgiyi yeniden okumak içindir.',
        learnMoreBullets: [
            'Önce gerçekten kaydedilmiş bir değişken olduğundan emin ol.',
            'Değişken adını doğru yaz.',
            'Yanlış ad yazarsan boş sonuç alırsın.',
            'Bu düğüm veri üretmez, mevcut veriyi geri getirir.',
            'Aynı değeri birçok yerde kullanacaksan faydalıdır.',
            'Uzun akışlarda tekrar eden bilgiyi taşımayı kolaylaştırır.',
            'Gizli bir kopya oluşturmaz; kayıtlı değeri çağırır.',
            'Kaynağın hangi adımda üretildiğini bilmek önemlidir.',
            'Veri tipi değişmişse sonraki adım etkilenebilir.',
            'Gereksiz yere aynı veriyi tekrar hesaplamaktan kurtarır.'
        ],
        example: 'Örnek: Kullanıcının şehir bilgisini önce kaydedip sonra hava durumu sorgusunda yeniden kullanabilirsin.'
    },
    setVariable: {
        label: 'Değişken Kaydet',
        description: 'Bir değeri akış içinde saklar. Sonraki adımlarda aynı bilgiyi tekrar kullanırsın.',
        whenToUse: 'Bir sonucu ileride yeniden çağıracaksan seçilir.',
        summary: 'Bu adım, veriyi kısa süreliğine akış hafızasına bırakır.',
        learnMoreBullets: [
            'Önce hangi veriyi saklayacağını seç.',
            'Veriye anlaşılır bir ad ver.',
            'Aynı adı başka veri için kullanırsan eskiyi ezebilirsin.',
            'Bu kayıt yalnızca o çalışma sırasında geçerli olabilir.',
            'Sonraki adımlarda aynı veriye kolay erişim sağlar.',
            'Tekrar eden veri akışını sadeleştirir.',
            'Ara sonuçları saklamak için uygundur.',
            'Gereksiz veri saklama; sadece tekrar kullanılacak olanı tut.',
            'Saklanan değerin tipini bilmek sonraki adımlar için önemlidir.',
            'Kaydet ve getir düğümlerini birlikte düşün.'
        ],
        example: 'Örnek: Kullanıcının seçtiği ürün kodunu kaydedip ödeme adımında tekrar kullanabilirsin.'
    },
    ifElseFunction: {
        label: 'Koşullu Dallanma',
        description: 'Bir koşulu kontrol eder ve akışı iki farklı yola ayırır. Evet-hayır tipi karar noktalarında kullanılır.',
        whenToUse: 'Akışın koşula göre farklı şekilde ilerlemesini istediğinde seçilir.',
        summary: 'Bu adım, “şu olursa bu yola git, olmazsa diğer yola git” mantığı kurar.',
        learnMoreBullets: [
            'Önce hangi kararı vereceğini açık belirle.',
            'Koşulu kısa ve net yaz.',
            'Doğru sonuçta hangi yolun çalışacağını bil.',
            'Yanlış sonuçta hangi yolun çalışacağını da tanımla.',
            'Her iki dalın da nereye gittiğini kontrol et.',
            'Boş veri geldiğinde ne olacağını düşün.',
            'Çok karmaşık koşulları küçük parçalara böl.',
            'Akışı dallandırmadan önce veri hazır mı bak.',
            'Yanlış dala gitme riskini küçük testle kontrol et.',
            'İş kuralları değişirse önce bu düğümü güncelle.'
        ],
        example: 'Örnek: Toplam tutar 1000’den büyükse yönetici onayına, değilse doğrudan kayda gidebilirsin.'
    },
    stickyNote: {
        label: 'Not Kutusu',
        description: 'Akışın içine kısa açıklama notu ekler. Kendine veya ekibine hatırlatma bırakmak için kullanılır.',
        whenToUse: 'Teknik akışa dokunmadan açıklama bırakmak istediğinde seçilir.',
        summary: 'Bu adım işlem yapmaz; sadece insanlara açıklama gösterir.',
        learnMoreBullets: [
            'Akışın kritik yerlerini açıklamak için kullan.',
            'Uzun paragraf yerine kısa ve net not bırak.',
            'İş kuralını, uyarıyı veya sırayı hatırlatabilirsin.',
            'Bu düğüm veri üretmez.',
            'Akış mantığını değiştirmez.',
            'Ekip çalışmasında anlaşılmayı artırır.',
            'Kendine ileride dönüp bakarken yol gösterir.',
            'Gereksiz her yere not ekleyip görüntüyü kalabalıklaştırma.',
            'Sadece açıklama gereken yere ekle.',
            'İnsan okur içindir; sistem işlemi için değildir.'
        ],
        example: 'Örnek: “Bu noktadan sonra müşteri verisi dış servise gider” diye ekip için uyarı notu bırakabilirsin.'
    },
    airtableAgent: {
        label: 'Airtable Ajanı',
        description: 'Airtable verisiyle çalışır. Kayıt aramak, okumak veya bu veriye göre işlem başlatmak istediğinde kullanılır.',
        whenToUse: 'Akışın Airtable tablosundaki bilgilere bakarak karar vermesi gerekiyorsa seçilir.',
        summary: 'Airtable içindeki tablo verisini kullanarak akışı yöneten yardımcı ajandır.',
        learnMoreBullets: [
            'Önce Airtable’da hangi tabloyla çalışacağını bil.',
            'Bu adım tablo verisini okuyabilir veya ona göre işlem başlatabilir.',
            'Kullanıcı sorusunu tablo verisine bağlamada işe yarar.',
            'Elle tablo açmadan akış içinden veri kullanırsın.',
            'Doğru alan adlarını eşlemek önemlidir.',
            'Büyük veri varsa hangi kaydın aranacağını netleştir.',
            'Çıktıyı sonraki karar adımına bağlayabilirsin.',
            'Sadece Airtable verisi gereken yerde kullan.',
            'Yetki ve bağlantı ayarları eksikse sonuç alamazsın.',
            'Önce küçük bir sorguyla test etmek güvenlidir.'
        ],
        example: 'Örnek: Kullanıcının e-posta adresine göre Airtable’daki müşteri kaydını bulup destek akışını ona göre yönlendirebilirsin.'
    },
    csvAgent: {
        label: 'CSV Veri Ajanı',
        description: 'CSV dosyasındaki verilerle soru cevaplar. Dosya içeriğini doğal dille sorgulamak istediğinde kullanılır.',
        whenToUse: 'Tablo verisini elle filtrelemeden “bu dosyada ne var?” diye sormak istediğinde seçilir.',
        summary: 'CSV dosyasını okuyup içindeki satırlardan anlamlı cevap üretir.',
        learnMoreBullets: [
            'Önce doğru CSV dosyasını bağla.',
            'Bu adım tabloyu senin yerine okumaya çalışır.',
            'Doğal dille soru sorabilmen en büyük avantajıdır.',
            'Kolon adları ne kadar düzenliyse sonuç o kadar iyi olur.',
            'Çok büyük dosyalarda önce ne aradığını net söyle.',
            'Toplam, ortalama, sıralama gibi sorularda işe yarar.',
            'Ham tabloyu tek tek incelemek zorunda kalmazsın.',
            'Yanlış dosya bağlıysa cevap da yanlış olur.',
            'Sonucu başka adımlara aktarabilirsin.',
            'İlk testte basit bir soru sorarak başla.'
        ],
        example: 'Örnek: “En yüksek satış yapan ilk 5 ürün hangisi?” diye sorup CSV içinden özet alabilirsin.'
    },
    conversationalAgent: {
        label: 'Sohbet Ajanı',
        description: 'Kullanıcıyla birden fazla tur konuşan akışı yönetir. Sohbet ilerledikçe bağlamı takip etmek istediğinde kullanılır.',
        whenToUse: 'Tek soruluk cevap yerine devam eden diyalog gerektiğinde seçilir.',
        summary: 'Bu adım, sadece cevap üretmez; konuşmanın akışını da taşır.',
        learnMoreBullets: [
            'Kullanıcıyla birkaç tur konuşma gerekiyorsa uygundur.',
            'Önceki mesajları hesaba katabilir.',
            'Tek adımlık basit yanıt için fazla güçlü olabilir.',
            'Soru net değilse ek soru soran akışlarda kullanılır.',
            'Araç bağlanırsa gerektiğinde dış işlem de yaptırabilir.',
            'Destek botları ve asistanlar için sık kullanılır.',
            'Konuşmanın tonu ve amacı önemlidir.',
            'Gereksiz karmaşıklık istemiyorsan basit model akışıyla karşılaştır.',
            'Yanıt kalitesi büyük ölçüde bağlama bağlıdır.',
            'Önce örnek diyalogla test etmek faydalıdır.'
        ],
        example: 'Örnek: Kullanıcı önce ürün sorar, sonra “aynısının kırmızısı var mı?” der; bu ajan ikinci soruyu ilk bağlamla birlikte ele alabilir.'
    },
    openAIAssistant: {
        label: 'OpenAI Asistanı',
        description: 'OpenAI Assistant altyapısını kullanarak görev yürütür. Dosya, araç ve çok adımlı görev desteği gerektiğinde seçilir.',
        whenToUse: 'Sadece sohbet değil, araç kullanımı ve görev takibi de istiyorsan seçilir.',
        summary: 'OpenAI Assistant mantığını hazır akış içine bağlar.',
        learnMoreBullets: [
            'Bu adım yalnız düz metin yanıtı için değildir.',
            'Araç kullanımı gereken görevlerde daha uygundur.',
            'Dosya veya görev mantığı olan işlerde fayda sağlar.',
            'OpenAI tarafındaki yetenekleri akışa taşır.',
            'Bağlantı ve kimlik doğrulama ayarları doğru olmalıdır.',
            'Basit tek mesajlık akışlarda gereksiz olabilir.',
            'Çok adımlı görevlerde daha anlamlıdır.',
            'İstenen sonucu açık tanımlamak önemlidir.',
            'Araç çıktısını sonraki adımlara verebilirsin.',
            'Önce küçük bir görevle test etmek en güvenli başlangıçtır.'
        ],
        example: 'Örnek: Kullanıcının yüklediği belgeyi okuyup özet çıkaran ve gerekirse ek araç kullanan bir asistan kurabilirsin.'
    },
    toolAgent: {
        label: 'Araç Kullanan Ajan',
        description: 'Soruna göre doğru aracı seçer ve çalıştırır. Sadece metin yazmak yerine işlem yaptırmak istediğinde kullanılır.',
        whenToUse: 'Arama, hesaplama, veri çekme veya dış servise istek gönderme gibi işler varsa seçilir.',
        summary: 'Bu ajan, ihtiyaca göre uygun aracı çağırarak işi ilerletir.',
        learnMoreBullets: [
            'Önce hangi araçların bağlı olduğunu bil.',
            'Ajan her soruda araç kullanmak zorunda değildir.',
            'Gerektiğinde uygun aracı seçip kullanır.',
            'Hesaplama, arama veya dış veri çekme işlerinde güçlüdür.',
            'Araç çıktısını okuyup kullanıcıya anlaşılır yanıt verebilir.',
            'Yanlış araç bağlantısı sonucu bozabilir.',
            'Basit sohbet için bazen gereksiz olabilir.',
            'İyi çalışması için görev tanımı açık olmalıdır.',
            'Güvenlik nedeniyle hangi aracı ne zaman kullanacağını sınırla.',
            'İlk denemeyi tek araçla yapmak daha güvenlidir.'
        ],
        example: 'Örnek: Kullanıcı “yarın İstanbul hava durumu nedir?” dediğinde önce hava durumu aracını çağırıp sonra sonucu doğal dille açıklayabilir.'
    },
    xmlAgent: {
        label: 'XML Ajanı',
        description: 'XML yapısındaki veri veya kurallarla çalışır. XML tabanlı girişleri okuyup ona göre işlem yapmak istediğinde kullanılır.',
        whenToUse: 'Veri kaynağın veya kural yapın XML ise seçilir.',
        summary: 'XML biçimindeki bilgiyi anlamak ve akışta kullanmak için tercih edilir.',
        learnMoreBullets: [
            'Önce XML verinin yapısını bilmek gerekir.',
            'Bu adım etiketli verileri okumada işe yarar.',
            'Düz metin yerine yapısal XML veriyle çalışır.',
            'Kurallı veri akışlarında kullanışlıdır.',
            'Yanlış alan eşleşmesi sonucu bozabilir.',
            'Gelen XML temiz değilse önce doğrulama gerekebilir.',
            'Çıktıyı başka adımlara dönüştürerek gönderebilirsin.',
            'Her kullanım için gerekli değildir.',
            'Yalnız XML odaklı senaryolarda seçmek daha doğrudur.',
            'Küçük bir örnek XML ile başlamak iyi testtir.'
        ],
        example: 'Örnek: Bir entegrasyondan gelen XML sipariş verisini okuyup gerekli alanları sonraki adıma aktarabilirsin.'
    },
    reActAgentChat: {
        label: 'ReAct Sohbet Ajanı',
        description: 'Adım adım düşünüp gerektiğinde araç kullanır. Hem akıl yürütme hem işlem gereken sohbetlerde kullanılır.',
        whenToUse: 'Cevap vermeden önce birkaç adım değerlendirme yapmasını istediğinde seçilir.',
        summary: 'Bu ajan, düşünme ve eylemi birlikte yürütmeye çalışır.',
        learnMoreBullets: [
            'Önce sorunu anlamaya çalışır.',
            'Gerekirse araç kullanır.',
            'Araç sonucuna göre yeni karar verebilir.',
            'Çok adımlı akıl yürütme gereken işlerde faydalıdır.',
            'Basit sorularda fazla ayrıntılı kalabilir.',
            'Araçların doğru bağlanması önemlidir.',
            'Yanlış veya eksik araç çıktısı sonucu etkiler.',
            'Adım adım ilerleyen görevlerde daha anlamlıdır.',
            'Karmaşık sorgular için iyi bir seçenektir.',
            'İlk testte tek soru ve tek araçla dene.'
        ],
        example: 'Örnek: Kullanıcı hem bilgi ister hem hesap sonucu isterse önce bilgiyi değerlendirip sonra hesaplama aracını çağırabilir.'
    },
    reActAgentLLM: {
        label: 'ReAct LLM Ajanı',
        description: 'Adım adım düşünüp gerektiğinde model destekli işlem kurar. Karmaşık karar yapılarında kullanılır.',
        whenToUse: 'Tek seferlik cevap yetmediğinde ve ara kararlar gerektiğinde seçilir.',
        summary: 'Bu ajan, çözümü parçalara ayırıp ilerlemeye uygundur.',
        learnMoreBullets: [
            'Sorunu tek cevap yerine aşamalı ele alır.',
            'Gerekirse ara işlem adımları oluşturur.',
            'Karar mantığı olan görevlerde etkilidir.',
            'Çok basit işler için gereksiz olabilir.',
            'Model ve araç dengesini iyi kurmak gerekir.',
            'Belirsiz sorularda daha kontrollü ilerler.',
            'Yanlış yapılandırılırsa gereksiz uzayabilir.',
            'İzlenebilirlik isteyen senaryolarda faydalıdır.',
            'Sonucu kullanıcıya toparlayarak sunar.',
            'İlk denemeyi sınırlı kapsamla yapmak daha güvenlidir.'
        ],
        example: 'Örnek: “Bu veriye göre hangi kampanya daha mantıklı?” sorusunda önce ölçütleri belirleyip sonra seçenekleri kıyaslayabilir.'
    }
}

const safeText = (value) => String(value || '').trim()

const parseCategory = (category = '') => {
    const [rawCategory = '', badge = ''] = String(category || '').split(';')
    return { rawCategory, badge }
}

const getRawCategory = (category = '') => parseCategory(category).rawCategory

const getNodeMeta = (node) => {
    if (!node) return null
    return NODE_META[node.name] ?? null
}

const getCategoryFallback = (category = '') => {
    return CATEGORY_FALLBACKS[getRawCategory(category)] ?? DEFAULT_FALLBACK
}

export const getTabMeta = (index) => TAB_META[index] ?? { label: '', tooltip: '' }

export const getCategoryDisplayName = (category = '') => {
    const rawCategory = getRawCategory(category)
    return CATEGORY_META[rawCategory]?.label ?? rawCategory
}

export const getCategoryTooltip = (category = '') => {
    const rawCategory = getRawCategory(category)
    return CATEGORY_META[rawCategory]?.tooltip ?? ''
}

export const getVisibleBadgeLabel = (badge) => {
    if (!badge) return ''
    return BADGE_META[badge] ?? badge
}

export const getLocalizedNodeLabel = (node) => {
    if (!node) return ''
    const nodeMeta = getNodeMeta(node)
    if (nodeMeta?.label) return nodeMeta.label
    return safeText(node.label) || safeText(node.name) || 'Node'
}

export const getLocalizedNodeDescription = (node) => {
    if (!node) return ''
    const nodeMeta = getNodeMeta(node)
    if (nodeMeta?.description) return nodeMeta.description

    const categoryFallback = getCategoryFallback(node.category)
    if (categoryFallback?.description) return categoryFallback.description

    return safeText(node.description) || safeText(node.label) || DEFAULT_FALLBACK.description
}

export const getNodeWhenToUseText = (node) => {
    if (!node) return DEFAULT_FALLBACK.whenToUse

    const nodeMeta = getNodeMeta(node)
    if (nodeMeta?.whenToUse) return nodeMeta.whenToUse

    const categoryFallback = getCategoryFallback(node.category)
    return categoryFallback?.whenToUse || DEFAULT_FALLBACK.whenToUse
}

export const getNodeLearnMoreData = (node) => {
    const nodeMeta = getNodeMeta(node)
    const categoryFallback = getCategoryFallback(node?.category)

    return {
        title: getLocalizedNodeLabel(node),
        summary: nodeMeta?.summary || getLocalizedNodeDescription(node),
        bullets: (nodeMeta?.learnMoreBullets || categoryFallback.learnMoreBullets || DEFAULT_FALLBACK.learnMoreBullets).slice(0, 10),
        example: nodeMeta?.example || DEFAULT_FALLBACK.example
    }
}

export const getSearchableText = (node) => {
    if (!node) return ''

    const learnMore = getNodeLearnMoreData(node)

    return [
        node.name,
        node.label,
        node.description,
        node.category,
        getCategoryDisplayName(node.category),
        getLocalizedNodeLabel(node),
        getLocalizedNodeDescription(node),
        getNodeWhenToUseText(node),
        learnMore.summary,
        ...(learnMore.bullets || []),
        learnMore.example
    ]
        .filter(Boolean)
        .join(' ')
}
