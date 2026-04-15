/**
 * Canvas i18n / guidance layer
 *
 * Goal:
 * - Keep source-of-truth node metadata untouched
 * - Translate only visible UI text
 * - Provide beginner-friendly labels, short descriptions,
 *   "when to use" guidance, and a richer "learn more" payload
 * - Preserve current exports and compatibility
 *
 * Notes:
 * - Raw node names, category keys, badges, tags and identifiers stay intact
 * - Overlay text is resolved at render time
 * - Unknown nodes always fall back safely
 */

export const canvasUIText = {
    addNodesTitle: 'Düğüm Ekle',
    searchPlaceholder: 'Düğüm adı, kategori veya yapmak istediğin işe göre ara',
    clearSearch: 'Aramayı temizle',
    addNode: 'Düğüm ekle',
    generateAgentflow: 'Ajan akışı üret',
    generationDialogTitle: 'Nasıl bir akış oluşturmak istiyorsun?',
    generationDialogDescription:
        'Kısaca ne yapmak istediğini yaz. Sistem buna göre başlangıç düğümleri ve bağlantılar önerebilir. Son düzenlemeyi yine sen yaparsın.',
    searchHint: 'İpucu: ne yapmak istediğini günlük dille yaz. Örneğin “CSV’den soru cevap”, “koşula göre ayır”, “değişken kaydet”.',
    duplicate: 'Kopyala',
    delete: 'Sil',
    info: 'Detay',
    inputs: 'Girdiler',
    inputsTooltip: 'Bu adımın çalışması için gereken girişler burada görünür.',
    output: 'Çıktı',
    outputTooltip: 'Bu adım tamamlandığında ürettiği sonuç burada görünür.',
    additionalSettings: 'Ek Ayarlar',
    additionalSettingsTooltip: 'Daha ayrıntılı seçenekleri açmak için kullan.',
    documentation: 'Dokümantasyon',
    openDocumentation: 'Dokümantasyonu aç',
    version: 'sürüm',
    authorPrefix: 'Yazar',
    nodePurpose: 'Bu adım ne yapar?',
    nodeWhenToUse: 'Ne zaman seçilir?',
    learnMoreTitle: 'Daha fazla gör',
    learnMoreSummary: 'Kısa özet',
    learnMoreGuide: 'Adım adım nasıl düşünmelisin?',
    learnMoreExample: 'Basit örnek',
    learnMoreWarning: 'Dikkat edilmesi gereken nokta',
    learnMoreBestFor: 'En uygun kullanım'
}

const TAB_META = [
    {
        label: 'LangChain',
        tooltip: 'Genel sohbet, zincir, araç ve model adımlarının büyük bölümü burada yer alır.'
    },
    {
        label: 'LlamaIndex',
        tooltip: 'Özellikle RAG, veri sorgulama, geri getirme ve özetleme odaklı adımlar burada yer alır.'
    },
    {
        label: 'Yardımcılar',
        tooltip: 'Değişken, koşul, not ve özel kod gibi destek adımları burada yer alır.'
    }
]

const CATEGORY_META = {
    Agents: {
        label: 'Ajanlar',
        tooltip: 'Bir işi sadece cevaplamakla kalmaz; gerektiğinde karar verip başka adımlar veya araçlar da çalıştırır.'
    },
    Cache: {
        label: 'Önbellek',
        tooltip: 'Daha önce üretilen sonucu kısa süre saklar. Aynı işi tekrar yapmadan hız kazanmak için kullanılır.'
    },
    Chains: {
        label: 'Zincirler',
        tooltip: 'Birden fazla işi belirli sırayla yapan hazır akış parçalarıdır.'
    },
    'Chat Models': {
        label: 'Sohbet Modelleri',
        tooltip: 'Kullanıcıya metin yanıtı üreten modeli bağladığın bölüm burasıdır.'
    },
    'Document Loaders': {
        label: 'Belge Yükleyiciler',
        tooltip: 'Dosya, klasör veya dış kaynaktan metin içeriğini içeri alan adımlar burada bulunur.'
    },
    Embeddings: {
        label: 'Gömme Modelleri',
        tooltip: 'Metni benzerlik araması yapılabilecek vektör biçimine çeviren adımlar burada bulunur.'
    },
    Graph: {
        label: 'Graf Veritabanları',
        tooltip: 'İlişkilerle bağlı veri yapılarıyla çalışan bağlantılar burada yer alır.'
    },
    LLMs: {
        label: 'Büyük Dil Modelleri',
        tooltip: 'Temel metin üretimi yapan model bağlantıları burada yer alır.'
    },
    Memory: {
        label: 'Hafıza',
        tooltip: 'Konuşma geçmişini veya ara bağlamı tutan adımlar burada yer alır.'
    },
    Moderation: {
        label: 'İçerik Denetimi',
        tooltip: 'Riskli, uygunsuz veya filtrelenmesi gereken içerikleri kontrol eden adımlar burada yer alır.'
    },
    'Output Parsers': {
        label: 'Çıktı Ayrıştırıcıları',
        tooltip: 'Modelin serbest metin çıktısını daha düzenli, daha güvenli ve daha okunur forma çeviren adımlar burada yer alır.'
    },
    Prompts: {
        label: 'İstem Şablonları',
        tooltip: 'Modele ne söyleyeceğini ve metnin nasıl kurulacağını hazırlayan adımlar burada yer alır.'
    },
    'Record Manager': {
        label: 'Kayıt Yöneticisi',
        tooltip: 'İndeksleme ve kayıt eşleme takibini yöneten adımlar burada yer alır.'
    },
    Retrievers: {
        label: 'Getiriciler',
        tooltip: 'En ilgili içerik parçalarını bulup geri getiren adımlar burada yer alır.'
    },
    'Text Splitters': {
        label: 'Metin Bölücüler',
        tooltip: 'Uzun metni daha küçük parçalara bölen adımlar burada yer alır.'
    },
    Tools: {
        label: 'Araçlar',
        tooltip: 'Akışın dış sistemlerle işlem yapmasını sağlayan araç bağlantıları burada yer alır.'
    },
    'Tools (MCP)': {
        label: 'MCP Araçları',
        tooltip: 'MCP üzerinden harici sistem ve araçlara bağlanan adımlar burada yer alır.'
    },
    'Vector Stores': {
        label: 'Vektör Veritabanları',
        tooltip: 'Vektör verisini saklayan ve benzerlik araması yapan depolar burada yer alır.'
    },
    Utilities: {
        label: 'Yardımcı Adımlar',
        tooltip: 'Koşul, değişken, not ve küçük destek işleri için kullanılan yardımcı adımlar burada yer alır.'
    },
    Engine: {
        label: 'Motorlar',
        tooltip: 'Sorgu veya yanıt üretme mantığının nasıl işleyeceğini belirleyen adımlar burada yer alır.'
    },
    'Response Synthesizer': {
        label: 'Yanıt Oluşturucular',
        tooltip: 'Parçalı bilgileri birleştirip tek ve daha düzenli bir cevap oluşturan adımlar burada yer alır.'
    }
}

const BADGE_META = {
    DEPRECATING: 'Kullanımdan Kaldırılıyor'
}

const CATEGORY_FALLBACKS = {
    Agents: {
        description:
            'Bu adım, verilen işi tek başına cevaplamak yerine gerektiğinde karar verir ve başka araçları ya da alt adımları devreye sokar.',
        whenToUse:
            'İş sadece tek cevap üretmekten ibaret değilse, sistemin hangi adımı atacağına kendi karar vermesini istediğinde seçilir.',
        summary:
            'Ajan adımları, “önce düşün sonra gerekirse işlem yap” mantığıyla çalışır.',
        learnMoreBullets: [
            'Bu tür adımlar sadece yazı üretmek için değil, işi yönetmek için kullanılır.',
            'Önce kullanıcı isteğini anlamaya çalışır.',
            'Gerekirse uygun aracı veya alt adımı seçer.',
            'Bazı ajanlar belge arar, bazıları araç çağırır, bazıları veri dosyasıyla çalışır.',
            'Tek adımda çözülemeyen işlerde daha faydalıdır.',
            'Küçük ve net görevlerde bazen gereksiz karmaşıklık oluşturabilir.',
            'Ajan seçerken hangi girdileri beklediğine bak.',
            'Sonraki adıma ne üreteceğini anlamadan bağlama.',
            'Ajanın hangi araçları kullanabildiğini mutlaka kontrol et.',
            'Anlamadığında detay bilgisini açıp örnek senaryoyla düşün.'
        ],
        example:
            'Örnek: Kullanıcı “CSV dosyamdan en yüksek satış yapılan ürünü bul” dediğinde ajan önce dosyayı okur, sonra doğru işlemi seçer ve sonucu yazar.'
    },
    Cache: {
        description:
            'Bu adım, daha önce üretilen sonucu kısa süre tutar. Böylece aynı hesap yeniden yapılmadan daha hızlı sonuç alınır.',
        whenToUse:
            'Aynı girişler sık sık tekrar geliyorsa ve gereksiz tekrar hesaplama istemiyorsan seçilir.',
        summary:
            'Önbellek, tekrar eden işleri hızlandırmak için ara sonuç saklar.',
        learnMoreBullets: [
            'Aynı işi tekrar tekrar çalıştırıyorsan faydalıdır.',
            'Her durumda zorunlu değildir.',
            'Yanlış yerde kullanılırsa eski sonucu gösterebilir.',
            'Hangi verinin ne kadar süre saklanacağını düşün.',
            'Sık değişen verilerde dikkatli kullan.',
            'Canlı güncel veri gereken yerde önbellek sorun çıkarabilir.',
            'Hız kazandırır ama tazelik ihtiyacını azaltmaz.',
            'Gerektiğinde temizlenebilir olup olmadığına bak.',
            'Önbelleğin neyi sakladığını bilmeden kurma.',
            'Performans sorunu varsa önce burada düşün.'
        ],
        example:
            'Örnek: Aynı ürün açıklaması için sürekli özet üretiyorsan ilk sonucu saklayıp sonraki çağrılarda tekrar kullanabilirsin.'
    },
    Chains: {
        description:
            'Bu adım, birden fazla işi belirli sırayla çalıştırır. Her adımı tek tek kurmadan hazır bir akış mantığı kullanmanı sağlar.',
        whenToUse:
            'İşin sırası belliyse ve bir adımın çıktısı diğer adıma geçecekse seçilir.',
        summary:
            'Zincir adımları, sıralı görevler için hazır iskelet sunar.',
        learnMoreBullets: [
            'Bir işi parçalara ayırıp sırayla yürütmek için uygundur.',
            'İlk adımdan çıkan bilgi ikinci adıma aktarılır.',
            'Hazır zincirler, elle bağlantı kurma ihtiyacını azaltır.',
            'Her zincirin amacı farklı olabilir.',
            'Bazısı soru-cevap içindir, bazısı API veya SQL için olabilir.',
            'Yanlış zincir seçersen akış gereksiz karmaşık olur.',
            'Zincirin hangi girdiyi beklediğini önce kontrol et.',
            'Son çıktının nerede kullanılacağını baştan düşün.',
            'Basit işlerde bazen tek model düğümü yeterli olabilir.',
            'Hazır zincirleri karşılaştırarak seçmek daha güvenlidir.'
        ],
        example:
            'Örnek: Önce kullanıcı sorusunu alıp sonra belge getirip en son cevap oluşturan hazır akış parçası bir zincirdir.'
    },
    'Chat Models': {
        description:
            'Bu adım, kullanıcıya yanıt yazacak sohbet modelini bağlar. Akışın konuşan tarafı çoğu zaman burada belirlenir.',
        whenToUse:
            'Bir metin yanıtı üretmek veya başka adımların kullanacağı bir dil modeli bağlamak istediğinde seçilir.',
        summary:
            'Sohbet modeli, yazılı yanıt üreten ana motor görevi görür.',
        learnMoreBullets: [
            'Bu bölümde genelde model sağlayıcısı seçilir.',
            'Hangi modelin hangi kaliteyi verdiği değişebilir.',
            'Maliyet, hız ve kalite birlikte düşünülmelidir.',
            'Uzun bağlam gerekiyorsa uygun model seçmek önemlidir.',
            'Bazı modeller araç kullanımına daha uygundur.',
            'Bazı modeller daha hızlı ama daha yüzeysel olabilir.',
            'Sıcaklık gibi ayarlar sonucu etkileyebilir.',
            'Akışın dili ve tonu burada dolaylı etkilenir.',
            'Sadece model eklemek tek başına akış kurmak anlamına gelmez.',
            'Modelin çıktısını kim kullanacaksa ona göre seçmek gerekir.'
        ],
        example:
            'Örnek: Kullanıcının sorusuna Türkçe ve kısa cevap verecek ana sohbet modelini bu bölümden bağlarsın.'
    },
    Utilities: {
        description:
            'Bu adımlar ana işi tek başına yapmaz; akışın daha düzenli çalışması için küçük destek görevleri üstlenir.',
        whenToUse:
            'Değişken saklamak, koşul kontrol etmek, kısa not eklemek veya küçük özel mantık yazmak istediğinde seçilir.',
        summary:
            'Yardımcı adımlar, akışın iskeletini düzenlemek için kullanılır.',
        learnMoreBullets: [
            'Ana üretim değil, destek işi yaparlar.',
            'Küçük ama kritik roller üstlenebilirler.',
            'Akışı daha okunur hale getirmede faydalıdırlar.',
            'Değişken yönetimi burada yapılabilir.',
            'Koşula göre yol ayırma burada yapılabilir.',
            'Not ekleyerek ekibe açıklama bırakabilirsin.',
            'Kısa özel JavaScript işlemleri burada yapılabilir.',
            'Aşırı kullanılırsa akış gereksiz kalabalıklaşır.',
            'Yalnızca gerçekten ihtiyaç olan yardımcı adımı ekle.',
            'Her yardımcı adımın çıktı etkisini anlamadan bağlama.'
        ],
        example:
            'Örnek: Önce kullanıcı bilgisini değişkende saklayıp sonra koşula göre farklı yola göndermek için yardımcı adımları kullanırsın.'
    }
}

const DEFAULT_FALLBACK = {
    description:
        'Bu adım akış içinde belirli bir işi yerine getirir. Kısa metin yetmiyorsa detay bilgisini açıp ne aldığını ve ne ürettiğini birlikte kontrol et.',
    whenToUse:
        'Akışta belirli bir görevi ayrı bir adım olarak net şekilde yönetmek istediğinde seçilir.',
    summary:
        'Bu adım tek bir iş üstlenir ve akışın ilgili noktasında çalışır.',
    learnMoreBullets: [
        'Önce bu adımın ne aldığına bak.',
        'Sonra ne ürettiğini kontrol et.',
        'Bir sonraki adıma ne göndereceğini düşün.',
        'Gereken ayarları eksiksiz doldur.',
        'İlk denemeyi küçük örnekle yap.',
        'Beklenen sonuç çıkmadan büyük akışa bağlama.',
        'Benzer adımlar varsa farkını karşılaştır.',
        'Gereksiz karmaşıklık ekleme.',
        'Arama ile alternatifleri de gözden geçir.',
        'Anlamadığında detay ekranını açıp örnek senaryo düşün.'
    ],
    example:
        'Örnek: Kullanıcıdan gelen metni bu adıma verirsin, sonra ürettiği sonucu bir sonraki adıma aktarırsın.',
    warning:
        'Ne yaptığı belirsizse önce küçük test yap, sonra gerçek akışa ekle.',
    bestFor:
        'Tek amacı net olan küçük ve kontrollü adımlar için uygundur.'
}

const NODE_META = {
    customFunction: {
        label: 'Özel JS Fonksiyonu',
        description:
            'Hazır adımların yapamadığı küçük işi kendi JavaScript kodunla tamamlarsın.',
        whenToUse:
            'Özel kurala göre veri dönüştürmek, küçük hesap yapmak veya akışa özel mantık eklemek istediğinde seçilir.',
        summary:
            'Hazır seçenekler yetmediğinde kısa ve kontrollü özel kod yazmak için kullanılır.',
        learnMoreBullets: [
            'Hazır adımla çözülemeyen küçük işi burada yaparsın.',
            'Gelen veriyi okuyup istediğin biçime çevirebilirsin.',
            'Kodu kısa ve tek amaçlı tutmak daha güvenlidir.',
            'Buradan çıkan sonuç bir sonraki adıma gider.',
            'Aynı yere çok fazla mantık yükleme.',
            'Önce basit bir örnekle test et.',
            'Beklenmeyen veri gelirse ne olacağını düşün.',
            'Yalnızca gerekli değişkenleri kullan.',
            'Hata olursa akışın hangi noktada duracağını izle.',
            'Uzun iş mantığı yerine küçük dönüşümler için tercih et.'
        ],
        example:
            'Örnek: Gelen fiyat bilgisini yüzde 20 artırıp yeni fiyatı sonraki adıma gönderebilirsin.',
        warning:
            'Uzun ve karmaşık kod yazarsan hata ayıklamak zorlaşır.',
        bestFor:
            'Küçük veri dönüşümleri, biçim düzeltme ve özel iş kuralları için uygundur.'
    },
    getVariable: {
        label: 'Değişkeni Getir',
        description:
            'Daha önce kaydedilmiş bir değeri geri çağırır. Aynı bilgiyi yeniden üretmeden tekrar kullanırsın.',
        whenToUse:
            'Akışın önceki kısmında sakladığın veriye tekrar ihtiyaç duyduğunda seçilir.',
        summary:
            'Daha önce kaydettiğin bilgiyi yeniden okumak için kullanılır.',
        learnMoreBullets: [
            'Önce gerçekten kaydedilmiş bir değişken olduğundan emin ol.',
            'Değişken adını doğru yaz.',
            'Yanlış ad yazarsan boş veya hatalı sonuç alabilirsin.',
            'Bu adım yeni veri üretmez; kayıtlı veriyi geri getirir.',
            'Aynı değeri birçok yerde kullanacaksan faydalıdır.',
            'Uzun akışlarda tekrar eden bilgiyi taşımayı kolaylaştırır.',
            'Gizli kopya oluşturmaz; kayıtlı değeri çağırır.',
            'Verinin hangi adımda üretildiğini bilmek önemlidir.',
            'Veri tipi değişmişse sonraki adım etkilenebilir.',
            'Gereksiz tekrar hesaplamadan kurtarır.'
        ],
        example:
            'Örnek: Kullanıcının seçtiği şehir bilgisini önce kaydedip sonra hava durumu sorgusunda yeniden kullanabilirsin.',
        warning:
            'Kaydedilmemiş bir değişkeni çağırırsan beklediğin veri gelmez.',
        bestFor:
            'Aynı veriyi akışın birden fazla yerinde kullanman gerektiğinde uygundur.'
    },
    setVariable: {
        label: 'Değişken Kaydet',
        description:
            'Bir değeri akış içinde saklar. Sonraki adımlarda aynı bilgiye yeniden erişirsin.',
        whenToUse:
            'Bir sonucu ileride tekrar kullanacaksan seçilir.',
        summary:
            'Akış içinde daha sonra lazım olacak bilgiyi geçici olarak tutar.',
        learnMoreBullets: [
            'Önce hangi veriyi saklayacağını seç.',
            'Veriye anlaşılır bir ad ver.',
            'Aynı adı başka veri için kullanırsan eskiyi ezebilirsin.',
            'Bu kayıt çoğu zaman çalışma süresi boyunca kullanılır.',
            'Sonraki adımlarda aynı veriye kolay erişim sağlar.',
            'Ara sonuçları kaydetmek için çok uygundur.',
            'Gereksiz veri saklama; yalnız tekrar kullanılacak olanı tut.',
            'Saklanan değerin tipini bilmek önemlidir.',
            'Kaydet ve getir adımlarını birlikte planla.',
            'İsimlendirme temiz olursa akış daha anlaşılır olur.'
        ],
        example:
            'Örnek: Kullanıcının seçtiği ürün kodunu kaydedip ödeme adımında tekrar kullanabilirsin.',
        warning:
            'Aynı değişken adına farklı veri yazarsan karışıklık oluşabilir.',
        bestFor:
            'Ara sonuçlar, kullanıcı seçimleri ve tekrar kullanılacak küçük veriler için uygundur.'
    },
    ifElseFunction: {
        label: 'Koşula Göre Ayır',
        description:
            'Belirlediğin kurala göre akışı iki farklı yola ayırır.',
        whenToUse:
            'Bir koşul doğruysa başka, yanlışsa başka yol izlemek istediğinde seçilir.',
        summary:
            'Bu adım akışta karar noktası kurar.',
        learnMoreBullets: [
            'Önce hangi koşulu kontrol edeceğini net yaz.',
            'Koşul doğruysa hangi yolun çalışacağını bil.',
            'Yanlışsa hangi yolun çalışacağını da planla.',
            'İki yolun da çıkışını gözden geçir.',
            'Boş veri gelirse ne olacağını düşün.',
            'Koşulu gereksiz karmaşıklaştırma.',
            'Küçük örneklerle doğru-yanlış durumu test et.',
            'Karar metni okunur değilse sonra bakım zorlaşır.',
            'Birden fazla şart varsa adım adım bölmek daha anlaşılır olur.',
            'Bu adım akışı netleştirir ama aşırı kullanılırsa kalabalıklaştırır.'
        ],
        example:
            'Örnek: Sipariş tutarı 1000 üstüyse onay akışına, değilse doğrudan işleme gönder.',
        warning:
            'Belirsiz koşul yazarsan yanlış yol çalışabilir.',
        bestFor:
            'Karar noktaları, eşik kontrolleri ve yönlendirme senaryoları için uygundur.'
    },
    stickyNote: {
        label: 'Not Kutusu',
        description:
            'Akışın içine kısa açıklama notu ekler. Ekip içi anlaşılabilirliği artırır.',
        whenToUse:
            'Kendine veya ekibine bu bölümün ne yaptığını hatırlatmak istediğinde seçilir.',
        summary:
            'Çalışan bir işlem yapmaz; yalnız açıklama bırakır.',
        learnMoreBullets: [
            'Bu adım veri işlemez.',
            'Akış açıklaması yazmak için kullanılır.',
            'Karmaşık bölümlerde büyük fayda sağlar.',
            'Yeni gelen kişinin akışı anlamasını kolaylaştırır.',
            'Neden bu yolu seçtiğini yazabilirsin.',
            'Geçici not yerine kalıcı açıklama gibi düşün.',
            'Kısa ve net yaz.',
            'Aşırı uzun notlar ekrana yük bindirir.',
            'Renk veya başlık kullanabiliyorsan anlamlı düzen kur.',
            'Canlı işi etkilemez, yalnız okunurluğu artırır.'
        ],
        example:
            'Örnek: “Bu bölüm müşterinin e-posta doğrulamasını yapar” diye açıklama bırakabilirsin.',
        warning:
            'İşlev üretmediği için gerçek işlem beklememelisin.',
        bestFor:
            'Ekip içi açıklama, bakım kolaylığı ve akış belgelemesi için uygundur.'
    },
    csvAgent: {
        label: 'CSV Veri Ajanı',
        description:
            'CSV dosyasındaki veriyi okuyup o veri üzerinden sorulara cevap arar.',
        whenToUse:
            'Elinde tablo benzeri CSV veri varsa ve bu veriyi doğal dille sorgulamak istiyorsan seçilir.',
        summary:
            'CSV içeriğini okuyup “tablodan bana cevap bul” işi yapar.',
        learnMoreBullets: [
            'Önce CSV dosyasının doğru yüklendiğinden emin ol.',
            'Sütun adları anlamlıysa daha iyi sonuç alırsın.',
            'Bu adım veriyi kendi başına uydurmaz; dosyadaki içeriğe dayanır.',
            'Tablo büyüdükçe performans ve doğruluk değişebilir.',
            'Sorunu mümkünse sütun mantığına yakın kur.',
            'Karışık başlıklar sonucu bozabilir.',
            'Tarih, sayı ve para alanlarını ayrıca kontrol et.',
            'Özet istemek ile kesin hesap istemek farklı sonuç verebilir.',
            'Gelen cevabı kritik işlerde doğrulamak iyi fikirdir.',
            'Dosya değişirse sonuç da değişir.'
        ],
        example:
            'Örnek: “Bu CSV’de en yüksek satış yapan ürün hangisi?” diye sorup doğrudan sonuç alabilirsin.',
        warning:
            'Dağınık veya bozuk CSV yapısı cevabı zayıflatabilir.',
        bestFor:
            'Satış listeleri, rapor tabloları ve satır-sütun mantığı olan veri dosyaları için uygundur.'
    },
    conversationalAgent: {
        label: 'Sohbet Ajanı',
        description:
            'Kullanıcıyla konuşurken gerektiğinde ek karar alabilen ve adımları yönetebilen sohbet odaklı ajandır.',
        whenToUse:
            'Sadece tek cevap veren model değil, konuşma boyunca yöneten bir yapı istediğinde seçilir.',
        summary:
            'Konuşmayı sürdürür, niyeti anlamaya çalışır ve gerektiğinde sonraki hareketi seçer.',
        learnMoreBullets: [
            'Bu adım yalnız yazı üretmekten daha fazlasını yapabilir.',
            'Sohbet bağlamını kullanarak karar verebilir.',
            'Bazı durumlarda araç veya alt işlem çağırabilir.',
            'Uzun diyaloglarda daha faydalı olur.',
            'Tek cümlelik basit görevlerde bazen fazla gelebilir.',
            'Kullanıcı amacını doğru anlaması için iyi istem gerekir.',
            'Hafıza ile birlikte kullanıldığında daha güçlü olur.',
            'Yanlış araç bağlanırsa gereksiz davranış gösterebilir.',
            'Sınırlarını ve yetkilerini net tanımlamak önemlidir.',
            'Gerçek iş akışı varsa test senaryosu ile doğrulamak gerekir.'
        ],
        example:
            'Örnek: Kullanıcı önce ürün sorar, sonra karşılaştırma ister, sonra sipariş durumunu öğrenmek ister; sohbet ajanı bu akışı daha iyi yönetir.',
        warning:
            'Amaç ve sınır net değilse gereksiz dolaşan cevaplar üretebilir.',
        bestFor:
            'Uzun diyalog, çok adımlı yardım ve konuşma içinde yönlendirme gereken akışlar için uygundur.'
    },
    openAIAssistant: {
        label: 'OpenAI Asistanı',
        description:
            'OpenAI Assistant yapısını kullanarak görev yürütür ve uygun durumda araçları devreye sokabilir.',
        whenToUse:
            'Assistant tabanlı bir akış kurmak ve OpenAI tarafındaki yardımcı yapıdan yararlanmak istediğinde seçilir.',
        summary:
            'OpenAI Assistant mantığını akış içine bağlayan hazır ajan adımıdır.',
        learnMoreBullets: [
            'Assistant tabanlı yapı kullanır.',
            'Bazı görevlerde araç çağırma yeteneğinden yararlanabilir.',
            'OpenAI tarafındaki ayarlarla uyumlu düşünülmelidir.',
            'Her kullanımda araç zorunlu değildir.',
            'Görev tanımı ne kadar netse sonuç o kadar iyileşir.',
            'Dosya, araç veya talimat desteği olan senaryolarda öne çıkar.',
            'Maliyet ve model seçimi ayrıca düşünülmelidir.',
            'Sadece sohbet modeli alternatifi gibi değerlendirme.',
            'OpenAI tarafındaki davranış değişimleri sonucu etkileyebilir.',
            'Gerçek görev senaryosuyla test etmek gerekir.'
        ],
        example:
            'Örnek: Kullanıcının belge sorularını yanıtlayan ve gerektiğinde bağlı araçtan bilgi alan bir asistan kurabilirsin.',
        warning:
            'Yanlış yapılandırılırsa beklenen araç davranışı görülmeyebilir.',
        bestFor:
            'OpenAI Assistant ekosistemini kullanan görev odaklı yardımcılar için uygundur.'
    },
    airtableAgent: {
        label: 'Airtable Ajanı',
        description:
            'Airtable içindeki tablo verileriyle çalışır ve gerektiğinde bu veriler üzerinde işlem yapar ya da soru cevaplar.',
        whenToUse:
            'Verin Airtable tarafındaysa ve doğal dille o veriyi kullanmak istiyorsan seçilir.',
        summary:
            'Airtable verisini okuyup onun üstünde iş yapan ajan adımıdır.',
        learnMoreBullets: [
            'Önce doğru Airtable bağlantısını kur.',
            'Hangi tabloyu veya alanları kullanacağını bil.',
            'Veri yapısı netse sonuç daha iyi olur.',
            'Bu adım veriyi doğrudan kullanabilir veya yorumlayabilir.',
            'Alan isimleri karışıksa cevap da zayıflar.',
            'Yetki ve erişim sorunları varsa çalışmayabilir.',
            'Test için küçük tabloyla başlamak daha güvenlidir.',
            'Yazma ve okuma yetkisi farklı olabilir.',
            'İş kurallarını açık vermek hata riskini azaltır.',
            'Airtable değişirse akış davranışı da etkilenebilir.'
        ],
        example:
            'Örnek: “Airtable’daki açık talepleri getir ve en öncelikli olanı yaz” gibi görevlerde kullanabilirsin.',
        warning:
            'Bağlantı ve tablo eşleşmesi doğru değilse sonuç alamazsın.',
        bestFor:
            'Airtable tabanlı ekip verisi, kayıt listesi ve hafif operasyon akışları için uygundur.'
    },
    toolAgent: {
        label: 'Araç Kullanan Ajan',
        description:
            'Sadece cevap yazmakla kalmaz; gerekli olduğunda bağlı araçlardan doğru olanı seçip çalıştırmaya çalışır.',
        whenToUse:
            'İşin içinde arama, hesaplama, API çağrısı veya harici işlem varsa seçilir.',
        summary:
            'Bu ajan, ihtiyaca göre uygun aracı seçip kullanan karar adımıdır.',
        learnMoreBullets: [
            'Önce hangi araçların bağlı olduğunu kontrol et.',
            'Ajan her işi kendi başına çözmez; gerektiğinde araç çağırır.',
            'Araç isimleri ve görevleri net olursa daha doğru seçim yapar.',
            'Bağlı araç yoksa beklenen davranış oluşmaz.',
            'Araç çıktısını nasıl yorumlayacağını test et.',
            'Gereksiz çok araç bağlamak seçimi zorlaştırabilir.',
            'Yetki isteyen araçlarda erişim konusu önemlidir.',
            'Kritik işlemlerde sonuç mutlaka doğrulanmalıdır.',
            'Basit sohbet için bazen gereksiz olabilir.',
            'Gerçek iş akışlarında en çok test isteyen yapılardan biridir.'
        ],
        example:
            'Örnek: Kullanıcı “hava durumuna bak ve sonra takvimime uygun günü seç” dediğinde ajan ilgili araçları sırayla kullanabilir.',
        warning:
            'Araç bağlantıları zayıfsa ajan ne yapacağını bilemeyebilir.',
        bestFor:
            'Harici işlem, API çağrısı, arama ve çok adımlı görev akışları için uygundur.'
    },
    xmlAgent: {
        label: 'XML Ajanı',
        description:
            'XML tabanlı veri veya kurallarla çalışan görevleri yürütmek için kullanılan özel ajan adımıdır.',
        whenToUse:
            'Çalıştığın veri veya araç XML biçimini temel alıyorsa seçilir.',
        summary:
            'XML mantığıyla çalışan veri ve görevlerde yardımcı olur.',
        learnMoreBullets: [
            'Önce gerçekten XML tabanlı ihtiyaç olup olmadığına bak.',
            'Girdi yapısı bozuksa sonuç da bozulabilir.',
            'Etiket mantığını anlamak gerekir.',
            'Serbest metin yerine yapılı veriyle çalışırken faydalıdır.',
            'Yanlış formatlı veri sorun çıkarabilir.',
            'Her senaryoda gerekli değildir.',
            'Daha sade bir alternatif varsa önce onu düşün.',
            'XML çıktısını başka adımların okuyup okuyamayacağını kontrol et.',
            'Test verisiyle denemek gerekir.',
            'Yalnız özel entegrasyonlar için daha anlamlı olabilir.'
        ],
        example:
            'Örnek: XML formatında gelen sistem verisini okuyup içinden gerekli alanları çıkaran akışta kullanabilirsin.',
        warning:
            'XML yapısı bozuksa ajan doğru okuyamaz.',
        bestFor:
            'XML tabanlı entegrasyonlar ve yapılı veri senaryoları için uygundur.'
    },
    reActAgentChat: {
        label: 'ReAct Sohbet Ajanı',
        description:
            'Sohbet sırasında düşünüp sonra eylem seçen ReAct yaklaşımıyla çalışan ajan adımıdır.',
        whenToUse:
            'Ajanın hem akıl yürütmesi hem de gerektiğinde araç kullanması isteniyorsa seçilir.',
        summary:
            'Önce nasıl ilerleyeceğini düşünür, sonra uygun adımı atar.',
        learnMoreBullets: [
            'ReAct yaklaşımı düşünme ve eylem adımlarını birlikte kullanır.',
            'Araç seçmesi gereken görevlerde faydalıdır.',
            'Sıradan sohbet modelinden daha yönetsel davranır.',
            'Yanlış araç bağlanırsa sonuç zayıflar.',
            'Açık hedef verilirse daha iyi çalışır.',
            'Çok basit görevlerde gereksiz ağır olabilir.',
            'Düşünme adımları sonucu etkiler.',
            'Harici araçlarla birlikte test etmek gerekir.',
            'Bağlam ve hafıza ile uyum önemlidir.',
            'Cevapların doğruluğu kritikse kontrol senaryosu kur.'
        ],
        example:
            'Örnek: Kullanıcı “önce dosyaya bak, sonra sonucu özetle” dediğinde ajan önce uygun aracı seçip sonra cevabı oluşturabilir.',
        warning:
            'Araç kurulumu zayıfsa beklenen eylem davranışı görülmez.',
        bestFor:
            'Araç kullanımı gereken sohbet odaklı çok adımlı görevler için uygundur.'
    },
    reActAgentLLM: {
        label: 'ReAct LLM Ajanı',
        description:
            'ReAct mantığını daha genel LLM akışı içinde kullanan ajan adımıdır.',
        whenToUse:
            'Modelin gerektiğinde araç seçip ilerlemesi gereken daha genel görev akışlarında seçilir.',
        summary:
            'Modelin önce düşünüp sonra doğru işlemi seçmesine yardım eder.',
        learnMoreBullets: [
            'Düşünme ve eylem akışını birlikte yürütür.',
            'Yalnızca cevap üretmek yerine iş çözmeye yaklaşır.',
            'Araçlarla birlikte daha anlamlı hale gelir.',
            'Görev açık tarif edilmezse dolaşabilir.',
            'Basit işlerde fazla ağır olabilir.',
            'Araçların ne döndürdüğünü bilmek önemlidir.',
            'Ürettiği sonucu son aşamada kontrol etmek gerekir.',
            'Çok adımlı karar gerektiren işlerde daha faydalıdır.',
            'Doğru model seçimi davranışı etkiler.',
            'Yanlış beklentiyle kullanılırsa gereksiz karmaşıklık yaratır.'
        ],
        example:
            'Örnek: Kullanıcının sorusunu önce analiz edip sonra uygun arama aracını seçen ve sonunda cevap yazan akışta kullanılabilir.',
        warning:
            'Görev sınırı net değilse gereksiz adımlar atabilir.',
        bestFor:
            'Düşünme + araç kullanımı kombinasyonu gereken genel ajan senaryoları için uygundur.'
    },
    conversationalRetrievalToolAgent: {
        label: 'Belgeli Sohbet Araç Ajanı',
        description:
            'Sohbet bağlamını korurken belge getirme ve araç kullanımını bir araya getirir.',
        whenToUse:
            'Kullanıcının konuşmasına göre belge arayıp gerektiğinde araç da kullanmak istiyorsan seçilir.',
        summary:
            'Hem konuşmayı takip eder hem ilgili bilgiyi arayıp kullanır.',
        learnMoreBullets: [
            'Sohbet geçmişi önemlidir.',
            'Belge kaynağı doğru kurulmalıdır.',
            'Araç kullanımına gerçekten ihtiyaç olup olmadığı düşünülmelidir.',
            'Sade akış için bazen retrieval zinciri yeterli olabilir.',
            'Çok kaynaklı yapılarda daha faydalıdır.',
            'Girdi ve bağlam ilişkisi önemlidir.',
            'Belge kalitesi cevabı doğrudan etkiler.',
            'Araç çağrıları ek karmaşıklık getirebilir.',
            'Kritik işlerde doğrulama gerekir.',
            'Uzun diyaloglarda performans izlenmelidir.'
        ],
        example:
            'Örnek: Kullanıcı şirket politikasını sorar, ajan belgeyi bulur, gerekiyorsa başka araçtan tamamlayıcı bilgi alır ve cevabı yazar.',
        warning:
            'Belge ve araç katmanları birlikte olduğundan kurulum dikkat ister.',
        bestFor:
            'Kurumsal bilgi tabanı + sohbet + gerektiğinde araç kullanımı gereken senaryolar için uygundur.'
    }
}

const NODE_META_ALIASES = {
    customfunction: 'customFunction',
    customjsfunction: 'customFunction',
    getvariable: 'getVariable',
    setvariable: 'setVariable',
    ifelsefunction: 'ifElseFunction',
    ifelse: 'ifElseFunction',
    stickynote: 'stickyNote',
    csvagent: 'csvAgent',
    conversationalagent: 'conversationalAgent',
    openaiassistant: 'openAIAssistant',
    openaiassistantagent: 'openAIAssistant',
    airtableagent: 'airtableAgent',
    toolagent: 'toolAgent',
    xmlagent: 'xmlAgent',
    reactagentchat: 'reActAgentChat',
    reactagentllm: 'reActAgentLLM',
    conversationalretrievaltoolagent: 'conversationalRetrievalToolAgent'
}

const safeText = (value) => (typeof value === 'string' ? value.trim() : '')

const normalizeKey = (value = '') =>
    safeText(value)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '')

const parseCategory = (category = '') => {
    const [rawCategory = '', badge = ''] = safeText(category).split(';')
    return { rawCategory, badge }
}

const getRawCategory = (category = '') => parseCategory(category).rawCategory

const getCategoryGuideData = (category = '') => {
    return CATEGORY_FALLBACKS[getRawCategory(category)] ?? DEFAULT_FALLBACK
}

const resolveNodeMetaKey = (node) => {
    if (!node) return ''

    const exactName = safeText(node.name)
    if (NODE_META[exactName]) return exactName

    const normalizedName = normalizeKey(node.name)
    const aliasMatch = NODE_META_ALIASES[normalizedName]
    if (aliasMatch && NODE_META[aliasMatch]) return aliasMatch

    const normalizedLabel = normalizeKey(node.label)
    const aliasFromLabel = NODE_META_ALIASES[normalizedLabel]
    if (aliasFromLabel && NODE_META[aliasFromLabel]) return aliasFromLabel

    return ''
}

const getNodeMeta = (node) => {
    const resolvedKey = resolveNodeMetaKey(node)
    return resolvedKey ? NODE_META[resolvedKey] : null
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
    const meta = getNodeMeta(node)
    if (meta?.label) return meta.label
    return safeText(node.label) || safeText(node.name) || 'Node'
}

export const getLocalizedNodeDescription = (node) => {
    if (!node) return ''

    const meta = getNodeMeta(node)
    if (meta?.description) return meta.description

    const categoryGuide = getCategoryGuideData(node.category)
    if (categoryGuide?.description) return categoryGuide.description

    return safeText(node.description) || safeText(node.label) || DEFAULT_FALLBACK.description
}

export const getNodeWhenToUseText = (node) => {
    if (!node) return DEFAULT_FALLBACK.whenToUse

    const meta = getNodeMeta(node)
    if (meta?.whenToUse) return meta.whenToUse

    const categoryGuide = getCategoryGuideData(node.category)
    return categoryGuide?.whenToUse || DEFAULT_FALLBACK.whenToUse
}

export const getNodeLearnMoreData = (node) => {
    const meta = getNodeMeta(node)
    const categoryGuide = getCategoryGuideData(node?.category)

    return {
        title: getLocalizedNodeLabel(node),
        summary: meta?.summary || getLocalizedNodeDescription(node),
        bullets: (meta?.learnMoreBullets || categoryGuide.learnMoreBullets || DEFAULT_FALLBACK.learnMoreBullets).slice(0, 10),
        example: meta?.example || categoryGuide.example || DEFAULT_FALLBACK.example,
        warning: meta?.warning || categoryGuide.warning || DEFAULT_FALLBACK.warning,
        bestFor: meta?.bestFor || categoryGuide.bestFor || DEFAULT_FALLBACK.bestFor
    }
}

export const getSearchableText = (node) => {
    if (!node) return ''

    const categoryName = getCategoryDisplayName(node.category)
    const learnMore = getNodeLearnMoreData(node)

    return [
        node.name,
        node.label,
        node.description,
        node.category,
        categoryName,
        getCategoryTooltip(node.category),
        getLocalizedNodeLabel(node),
        getLocalizedNodeDescription(node),
        getNodeWhenToUseText(node),
        learnMore.summary,
        ...(learnMore.bullets || []),
        learnMore.example,
        learnMore.warning,
        learnMore.bestFor
    ]
        .filter(Boolean)
        .join(' ')
}
