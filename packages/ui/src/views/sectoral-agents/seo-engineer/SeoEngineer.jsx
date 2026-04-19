import { useMemo, useState } from 'react'
import './seo-engineer.css'
import heroSeoEngineerSystem from "@/assets/images/sectoral-agents/seo-engineer/hero-seo-engineer-system.webp"
import seoChaosProblem from "@/assets/images/sectoral-agents/seo-engineer/seo-chaos-problem.webp"
import seoFlowOrchestration from "@/assets/images/sectoral-agents/seo-engineer/seo-flow-orchestration.webp"
import seoControlDashboard from "@/assets/images/sectoral-agents/seo-engineer/seo-control-dashboard.webp"
import seoKnowledgeHub from "@/assets/images/sectoral-agents/seo-engineer/seo-knowledge-hub.webp"
import seoCanvasBuilder from "@/assets/images/sectoral-agents/seo-engineer/seo-canvas-builder.webp"
import seoSpecialistAgentTeam from "@/assets/images/sectoral-agents/seo-engineer/seo-specialist-agent-team.webp"
import seoApiControlCenter from "@/assets/images/sectoral-agents/seo-engineer/seo-api-control-center.webp"
import seoExecutionMonitoring from "@/assets/images/sectoral-agents/seo-engineer/seo-execution-monitoring.webp"
import seoLegalDirectoryCaseStudy from "@/assets/images/sectoral-agents/seo-engineer/seo-legal-directory-case-study.webp"

const routeCards = [
    {
        route: '/chatflows',
        title: 'Mini SEO motorlarını kur',
        text: 'Keyword grouping, intent ayırma, title-meta önerisi, schema çıkarımı, entity extraction ve outline üretimi gibi küçük ama kritik işleri ayrı akışlara böl.',
        items: ['Tek iş yapan net akışlar kur', 'Her akışın giriş ve çıkışını görünür tut', 'Aynı mini motoru farklı projelerde tekrar kullan']
    },
    {
        route: '/canvas',
        title: 'Akışı görsel olarak kur',
        text: 'Prompt, model, retriever, koşul, tool ve variable bağlantılarını soyut değil; görünür şekilde birbirine bağla.',
        items: ['Girdi nereden geliyor, net gör', 'Hangi adım ne üretiyor, karıştırma', 'Karar noktalarını elle tutulur hale getir']
    },
    {
        route: '/executions',
        title: 'Çalıştırmaları izle',
        text: 'Hangi akış ne üretti, hangi adım saçmaladı, nerede kalite düştü ve neyin yeniden denenmesi gerekiyor; buradan takip et.',
        items: ['Başarılı ve zayıf koşuları ayır', 'Revizyon gereken noktayı hızlı bul', 'Sadece üretme değil, sonuç izleme düzeni kur']
    },
    {
        route: '/assistants',
        title: 'Uzman rolleri ayır',
        text: 'SEO Strateji Asistanı, Technical SEO Analyst, Brief Architect, Internal Linking Assistant ve QA Assistant gibi rolleri ayrı ayrı tanımla.',
        items: ['Rol karışıklığını azalt', 'Her yardımcıya net görev ver', 'Tek mega asistan yerine uzman kadro kur']
    },
    {
        route: '/marketplaces',
        title: 'Hazır iskeletle başla',
        text: 'Sıfırdan başlamak zorunda değilsin. Şablon, hazır blok veya başlangıç yapısı kullan; sonra kendi sistemine göre özelleştir.',
        items: ['Başlangıç süresini kısalt', 'Hazır yapıyı kopyala, geliştir', 'Deneme maliyetini düşür']
    },
    {
        route: '/tools',
        title: 'Ajanların iş yapmasını sağla',
        text: 'Araç yoksa ajan sadece konuşur. SERP çekme, sitemap okuma, içerik kıyaslama, schema doğrulama ve dış sistemden veri alma gibi işleri buradan aç.',
        items: ['Konuşan değil, iş yapan ajan kur', 'Dış veri kaynaklarını bağla', 'Teknik kontrolleri otomasyona taşı']
    },
    {
        route: '/credentials',
        title: 'API anahtarlarını güvenli tut',
        text: 'OpenAI, Tavily, Firecrawl, DataForSEO, Ahrefs ya da başka servis anahtarlarını sağa sola yapıştırma. Güvenli yönet ve kontrollü kullandır.',
        items: ['Anahtar dağınıklığını bitir', 'Erişimi düzenli tut', 'Kaynak kullanımını kontrol et']
    },
    {
        route: '/variables',
        title: 'Projeyi değişkenleştir',
        text: 'Country, city, practice area, page type, tone, compliance rule ve no-go terms gibi alanları bir kere tanımla; sistemi tekrar tekrar baştan kurma.',
        items: ['Aynı yapıyı farklı projeye taşı', 'Kopyala-yapıştır kaosunu azalt', 'Şehir ve niyet değişse de sistemi bozma']
    },
    {
        route: '/apikey',
        title: 'Erişimi kontrol et',
        text: 'Flow’larını gelişigüzel açıkta bırakma. Hangi akışı kim çağıracak, ajans iç tool’ları nasıl korunacak, bunu burada yönet.',
        items: ['İç akışları güvenli çağır', 'Müşteri ve ekip bazlı erişim ayır', 'Otomasyon çağrılarını kontrollü yürüt']
    },
    {
        route: '/document-stores',
        title: 'Dağınık SEO bilgisini merkezileştir',
        text: 'Rakip sayfalar, sitemap export’ları, SOP belgeleri, editoryal kurallar, eski içerik arşivi, entity listeleri ve GSC verilerini tek merkezde topla.',
        items: ['Ajanların dosya peşinde koşmasını engelle', 'Bilgi tekrarını azalt', 'Büyük projede ortak hafıza kur']
    }
]

const roleCards = [
    { title: 'Technical SEO Analyst', text: 'Index, template, crawl ve structure mantığını sürekli kontrol eder.' },
    { title: 'Brief Architect', text: 'Her sayfa tipi için üretim standardını netleştirir.' },
    { title: 'Internal Linking Assistant', text: 'Konu kümeleri arasındaki ağı kurar.' },
    { title: 'QA Assistant', text: 'Çıkan sayfayı niyet, kalite ve tutarlılık açısından yeniden tarar.' }
]

const faqItems = [
    {
        q: 'Bu sistem sadece içerik üretmek için mi?',
        a: 'Hayır. İçerik bunun yalnız bir parçası. Asıl güç; araştırma, sınıflandırma, brief, üretim, QA, revizyon ve izleme katmanlarının tek düzen altında toplanmasıdır.'
    },
    {
        q: 'Büyük projelerde gerçekten fark yaratır mı?',
        a: 'Evet. Çünkü büyük projede sorun tek bir yazı yazmak değil; tekrar eden kararları, kalite denetimini ve koordinasyonu sistemleştirmektir.'
    },
    {
        q: 'Teknik SEO ile içerik operasyonu aynı yapıda ilerler mi?',
        a: 'İlerler. Ayrı yardımcılar ve ayrı akışlar kurulduğunda teknik kontroller, içerik brief’leri ve linkleme önerileri aynı operasyon çatısı altında birleşebilir.'
    },
    {
        q: 'Bu sayfa neden satış sayfası gibi yazıldı?',
        a: 'Çünkü amaç yalnız ürün ekranlarını göstermek değil; bir SEO mühendisinin neden bu sisteme ihtiyaç duyacağını, hangi sırayla kullanacağını ve büyük projede nasıl sonuç alacağını net şekilde hissettirmektir.'
    }
]

function FaqItem({ item, open, onToggle }) {
    return (
        <div className={`seo-faq__item${open ? ' is-open' : ''}`}>
            <button type='button' className='seo-faq__question' onClick={onToggle}>
                <span>{item.q}</span>
                <span className='seo-faq__icon'>+</span>
            </button>
            {open ? <div className='seo-faq__answer'>{item.a}</div> : null}
        </div>
    )
}

function RouteCard({ route, title, text, items }) {
    return (
        <article className='seo-route-card'>
            <span className='seo-route-card__route'>{route}</span>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </article>
    )
}

function Step({ number, title, text }) {
    return (
        <div className='seo-step'>
            <div className='seo-step__num'>{number}</div>
            <div>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

function ImageFrame({ src, alt, caption, priority = false, hero = false }) {
    return (
        <div className={`seo-image-frame${hero ? ' seo-image-frame--hero' : ''}`}>
            <div className={`seo-image-frame__media${hero ? ' seo-image-frame__media--hero' : ''}`}>
                <img src={src} alt={alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
            </div>
            {caption ? <div className='seo-image-frame__caption'>{caption}</div> : null}
        </div>
    )
}

export default function SeoEngineer() {
    const [openFaqIndex, setOpenFaqIndex] = useState(0)

    const stats = useMemo(
        () => [
            { value: '10', label: 'ana ürün yüzeyi ile tam SEO orkestrasyonu' },
            { value: '5+', label: 'uzman rol: strateji, brief, QA, linkleme, teknik kontrol' },
            { value: '1', label: 'merkezi sistem: tools, docs, vars, akışlar, çalıştırmalar' }
        ],
        []
    )

    return (
        <div className='seo-page'>
            <div className='seo-topbar'>
                <div className='seo-container seo-topbar__inner'>
                    <div className='seo-brand'>
                        <div className='seo-brand__mark'>AI</div>
                        <div>
                            <div className='seo-brand__title'>SEO Mühendisi Senaryosu</div>
                            <small>Ajanlarla büyük SEO operasyonu kur</small>
                        </div>
                    </div>
                    <nav className='seo-topbar__nav'>
                        <a href='#problem'>Sorun</a>
                        <a href='#routes'>Ürün Akışı</a>
                        <a href='#case'>FindLaw Senaryosu</a>
                        <a href='#faq'>SSS</a>
                    </nav>
                </div>
            </div>

            <header className='seo-hero'>
                <div className='seo-container seo-hero__grid'>
                    <div className='seo-glass seo-hero__copy'>
                        <span className='seo-eyebrow'>JVZoo tarzı uzun form açılış sayfası</span>
                        <h1>SEO projelerini tek tek yönetme. Sistemi kur, ajanlar çalışsın.</h1>
                        <p className='seo-lead'>
                            Büyük hukuk dizinleri, şehir sayfaları, practice area kümeleri, entity haritaları ve tekrar eden teknik kontroller için tek tek koşturmak yerine; işi ajanlara bölen, akışları görünür yapan ve kaliteyi tekrar tekrar ölçen bir düzen kur.
                        </p>
                        <div className='seo-cta-row'>
                            <a className='seo-btn seo-btn--primary' href='#routes'>SEO mühendisi akışını gör</a>
                            <a className='seo-btn seo-btn--secondary' href='#case'>FindLaw ölçeğinde kullanım örneği</a>
                        </div>
                        <ul className='seo-check-list'>
                            <li>Mini SEO motorlarını ayrı kurarsın.</li>
                            <li>Büyük ajan akışını görsel olarak yönetirsin.</li>
                            <li>Araçları, API’leri, dokümanları ve değişkenleri tek sistemde tutarsın.</li>
                            <li>Üretir, izler, kaliteyi ölçer ve zayıf halkayı yeniden düzeltirsin.</li>
                        </ul>
                        <div className='seo-stats'>
                            {stats.map((item) => (
                                <div className='seo-stat-card' key={item.label}>
                                    <strong>{item.value}</strong>
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='seo-glass seo-hero__visual'>
                        <div className='seo-image-frame seo-image-frame--hero' style={{ padding: 0, background: 'transparent', border: 'none', boxShadow: 'none' }}>
                            <div className='seo-image-frame__media seo-image-frame__media--hero'>
                                <img
                                    src={heroSeoEngineerSystem}
                                    alt='SEO mühendisi için ajanlarla çalışan otomatik SEO operasyon sistemi'
                                    loading='eager'
                                    fetchPriority='high'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id='problem' className='seo-section'>
                <div className='seo-container seo-split'>
                    <div className='seo-stack'>
                        <span className='seo-eyebrow'>Büyük acı</span>
                        <h2>50 sayfa yönetmek başka. 5.000 sayfa yönetmek başka.</h2>
                        <p className='seo-section-copy'>
                            Sorun sadece içerik yazmak değildir. Hangi sayfa tipi, hangi intent, hangi entity, hangi brief standardı, hangi kalite eşiği, hangi iç link ağı sorunu da birlikte gelir.
                        </p>
                        <div className='seo-card'>
                            <div className='seo-card__icon'>!</div>
                            <h3>İnsan gücü şişer ama sistem kurulmaz</h3>
                            <p>Teknik SEO, içerik planı, QA, revizyon ve iç linkleme aynı düzen altında toplanmadığında ekip büyür; ama operasyon yine dağılır.</p>
                        </div>
                        <div className='seo-card'>
                            <div className='seo-card__icon'>→</div>
                            <h3>Asıl dönüşüm burada başlar</h3>
                            <p>Tek bir mega prompt yerine, işleri rol rol ve akış akış böl. Böylece büyüdükçe kaos değil, orkestrasyon güçlenir.</p>
                        </div>
                    </div>
                    <ImageFrame
                        src={seoChaosProblem}
                        alt='Büyük SEO projesinde dağınık görevler arasında sıkışmış SEO mühendisi'
                        caption='Büyük proje büyüdükçe üretim değil, koordinasyon ve kalite denetimi krize dönüşür.'
                    />
                </div>
            </section>

            <section className='seo-section seo-section--tight'>
                <div className='seo-container'>
                    <div className='seo-quote'>“Tek tek sayfa yetiştirmeye çalışma. Sistemi kur. Ajanlar sayfa tipini tanısın, entity’yi çıkarsın, brief’i hazırlasın, kaliteyi ölçsün. Sen sadece yön ver.”</div>
                </div>
            </section>

            <section className='seo-section'>
                <div className='seo-container'>
                    <span className='seo-eyebrow'>Büyük vaat</span>
                    <h2>Bu sistem SEO işini tek büyük görev olarak değil, yönetilebilir ajan işlerine böler.</h2>
                    <div className='seo-grid seo-grid--four'>
                        <div className='seo-card'><div className='seo-card__icon'>01</div><h3>Araştırır</h3><p>Domain, rakip, entity, intent ve cluster fırsatlarını ayrı iş olarak ele alır.</p></div>
                        <div className='seo-card'><div className='seo-card__icon'>02</div><h3>Üretir</h3><p>Brief, outline, schema, iç link önerisi ve sayfa taslağını standarda bağlar.</p></div>
                        <div className='seo-card'><div className='seo-card__icon'>03</div><h3>Denetler</h3><p>Çıkan sonucu kalite, tutarlılık, sayfa tipi ve SEO niyeti açısından tekrar kontrol eder.</p></div>
                        <div className='seo-card'><div className='seo-card__icon'>04</div><h3>Ölçer</h3><p>Çalıştırmaları izler, zayıf akışı bulur ve prompt veya araç katmanını yeniden düzeltir.</p></div>
                    </div>
                </div>
            </section>

            <section id='routes' className='seo-section'>
                <div className='seo-container'>
                    <span className='seo-eyebrow'>Ekran ekran ürün akışı</span>
                    <h2>SEO mühendisi için en doğru kullanım sırası</h2>
                    <p className='seo-section-copy'>Küçük işi ayrı motor yap. Büyük orkestrasyonu ayrı yönet. Bilgiyi tek merkezde topla. Çalıştırmaları izle. Sistemi tekrar tekrar düzelt.</p>
                    <div className='seo-route-grid'>
                        {routeCards.map((card) => (
                            <RouteCard key={card.route} {...card} />
                        ))}
                    </div>
                </div>
            </section>

            <section className='seo-section'>
                <div className='seo-container seo-split'>
                    <ImageFrame
                        src={seoFlowOrchestration}
                        alt='Chatflows, tools, variables, document stores ve executions arasındaki SEO orkestrasyon haritası'
                        caption='Tek bir görüntüde ürün akışı: küçük motorlar, merkezi bilgi, araçlar, kalite döngüsü.'
                    />
                    <div className='seo-stack'>
                        <span className='seo-eyebrow'>Kaosu sisteme çevir</span>
                        <h2>Soyut işi görünür operasyona çevir.</h2>
                        <p className='seo-section-copy'>Büyük proje yönetmenin tek yolu daha çok insan eklemek değildir. Doğru katmanları ayırmaktır: bilgi ayrı, akış ayrı, araç ayrı, kalite ayrı, çalıştırma ayrı.</p>
                        <ul className='seo-check-list'>
                            <li>Mini motorlar: intent, outline, schema, iç link, QA.</li>
                            <li>Merkezi hafıza: SOP, rakip veri, sitemap, eski içerik.</li>
                            <li>Güvenli bağlantı: credentials, API key, kontrollü erişim.</li>
                            <li>Çalıştırma ve tekrar: execution, kalite, revizyon döngüsü.</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className='seo-section'>
                <div className='seo-container seo-split'>
                    <div className='seo-stack'>
                        <span className='seo-eyebrow'>Ekranda ne görmelisin?</span>
                        <h2>Kontrol paneli, bilgi merkezi ve akış editörü yan yana çalışmalı.</h2>
                        <p className='seo-section-copy'>Yalnız içerik üretmek yetmez. Kontrol paneli sana operasyonu, document store sana kaynağı, canvas sana işleyişi göstermeli. İşte bu yüzden bu sayfa tam bir satış sayfası gibi sonuç satıyor: çünkü sonuç gerçekten bu katmanların birleşiminden geliyor.</p>
                    </div>
                    <div className='seo-stack'>
                        <ImageFrame src={seoControlDashboard} alt='SEO operasyonu için merkezi dashboard ve kalite kontrol ekranı' />
                        <ImageFrame src={seoKnowledgeHub} alt='Document store ve bilgi merkezi ile ajanları besleyen SEO veri katmanı' />
                        <ImageFrame src={seoCanvasBuilder} alt='Araştırma, brief, QA, linkleme ve export zinciri kurulan canvas görünümü' />
                    </div>
                </div>
            </section>

            <section className='seo-section'>
                <div className='seo-container seo-split'>
                    <ImageFrame
                        src={seoSpecialistAgentTeam}
                        alt='Role göre ayrılmış yapay zeka ajanları: teknik SEO, içerik, iç linkleme ve kalite denetimi'
                        caption='SEO mühendisinin yükü tek kişiye değil, uzman rollere ayrılmış ajanlara dağıtılır.'
                    />
                    <div className='seo-stack'>
                        <span className='seo-eyebrow'>Uzman kadro mantığı</span>
                        <h2>Tek mega asistan kurma. Uzman rolleri ayır.</h2>
                        <p className='seo-section-copy'>Büyük projede karışıklığın ana nedeni herkesin her işi yapmaya çalışmasıdır. Burada ise her yardımcıya tek görev verilir: teknik SEO, içerik stratejisi, brief üretimi, QA, iç linkleme, yerel SEO, hukuk dizini sayfa tipi ayrımı.</p>
                        <div className='seo-grid seo-grid--two'>
                            {roleCards.map((card) => (
                                <div className='seo-card' key={card.title}>
                                    <div className='seo-card__icon'>★</div>
                                    <h3>{card.title}</h3>
                                    <p>{card.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className='seo-section'>
                <div className='seo-container seo-split'>
                    <div className='seo-stack'>
                        <span className='seo-eyebrow'>Tools + Credentials + API</span>
                        <h2>Ajanların eli kolu burada açılır.</h2>
                        <p className='seo-section-copy'>Araç yoksa ajan yalnız konuşur. Araç bağlandığında arar, kontrol eder, kıyaslar, veri çeker, kalite doğrular ve çıktıyı gerçek işe dönüştürür. Credentials ve API key katmanı da bu işi güvenli hale getirir.</p>
                        <ul className='seo-check-list'>
                            <li>SERP ve rakip veri kaynaklarını bağla.</li>
                            <li>Schema doğrulama ve teknik kontrol araçlarını ekle.</li>
                            <li>Aynı sistemi müşteri veya ekip bazlı güvenli şekilde çağır.</li>
                        </ul>
                    </div>
                    <div className='seo-stack'>
                        <ImageFrame src={seoApiControlCenter} alt='API, credentials ve araç kontrol merkezi ile SEO ajanlarını besleyen sistem katmanı' />
                        <ImageFrame src={seoExecutionMonitoring} alt='Execution, kalite kontrol ve revizyon döngüsü paneli' />
                    </div>
                </div>
            </section>

            <section id='case' className='seo-section'>
                <div className='seo-container'>
                    <span className='seo-eyebrow'>Büyük örnek senaryo</span>
                    <h2>Düşün: FindLaw benzeri dev bir hukuk dizininin SEO’sunu yönetiyorsun.</h2>
                    <p className='seo-section-copy'>On binlerce URL var. Şehir sayfaları, eyalet sayfaları, practice area sayfaları, avukat profil sayfaları, soru-cevap içerikleri ve bilgi rehberleri aynı sistem içinde büyüyor. Tek tek sayfa yetiştirmek bu ölçekte bir strateji değildir.</p>
                    <div className='seo-case-grid'>
                        <ImageFrame
                            src={seoLegalDirectoryCaseStudy}
                            alt='FindLaw benzeri büyük bir hukuk dizininde SEO operasyonunun ajanlarla merkezi olarak yönetilmesi'
                            caption='Hukuk dizini ölçeğinde projede asıl farkı üretim hızı değil, akış disiplini yaratır.'
                        />
                        <div className='seo-steps'>
                            <Step number='1' title='Bilgiyi topla' text='Rakip sayfaları, mevcut site içeriklerini, SOP belgelerini, location listelerini ve eski içerik arşivini document store içine yükle.' />
                            <Step number='2' title='Değişken sistemini kur' text='State, city, practice area, intent, page type, tone, compliance rule ve internal linking rule gibi alanları sabitle.' />
                            <Step number='3' title='Mikro SEO motorlarını çıkar' text='Keyword grouping, intent separation, entity extraction, outline generation, schema suggestion ve internal linking önerilerini ayrı mini akışlara böl.' />
                            <Step number='4' title='Büyük ajan akışını kur' text='Araştırma → sınıflandırma → brief → taslak → QA → linkleme → export zincirini tek görünür operasyon sistemine çevir.' />
                            <Step number='5' title='Çalıştır ve yeniden düzelt' text='Execution ve kalite çıktıları üzerinden saçmalayan akışı bul, prompt veya araç katmanında düzelt, tekrar çalıştır.' />
                        </div>
                    </div>
                </div>
            </section>

            <section id='faq' className='seo-section'>
                <div className='seo-container'>
                    <span className='seo-eyebrow'>Sık sorulan kritik sorular</span>
                    <h2>Bu sistem gerçekten nasıl fark yaratır?</h2>
                    <div className='seo-faq'>
                        {faqItems.map((item, index) => (
                            <FaqItem
                                key={item.q}
                                item={item}
                                open={openFaqIndex === index}
                                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className='seo-section seo-section--bottom'>
                <div className='seo-container'>
                    <div className='seo-close-card'>
                        <h2>Tek tek sayfa yetiştirmeye çalışma. Sistemi kur. Akışı kur. Ajanları çalıştır.</h2>
                        <p>Bir SEO mühendisi için gerçek ölçek burada başlar: daha fazla insan eklemek değil, daha iyi orkestrasyon kurmak.</p>
                        <div className='seo-cta-row seo-cta-row--center'>
                            <a className='seo-btn seo-btn--primary' href='#routes'>Ürün akışını tekrar incele</a>
                            <a className='seo-btn seo-btn--secondary' href='#problem'>Sorundan başla</a>
                        </div>
                    </div>
                </div>
            </section>

            <div className='seo-sticky-cta'>
                <div className='seo-sticky-cta__inner'>
                    <div className='seo-sticky-cta__copy'>
                        SEO operasyonunu tek kişilik maratona çevirme.
                        <small>Akışları kur. Rolleri ayır. Kaliteyi ölç. Zayıf halkayı yeniden düzelt.</small>
                    </div>
                    <a className='seo-btn seo-btn--primary' href='#case'>FindLaw ölçeğinde örneği gör</a>
                </div>
            </div>
        </div>
    )
}
