# Çevrilenler

Bu dosya, repo içinde Türkçeleştirilmiş veya acemi kullanıcı için sadeleştirilmiş yüzeyleri takip etmek için oluşturuldu.

Amaç yalnızca kelime çevirisi değildir.
Amaç, özellikle yeni başlayan bir kullanıcının Flowise içindeki önemli yüzeyleri korkmadan anlayabilmesini sağlamaktır.

---

## Ana hedef özeti

Konuşmanın başındaki ana hedef iki ana kola ayrıldı:

1. **Sektörel Ajanlar yüzeyi**
   - Kayıt ve girişten sonra kullanıcıya ayrı bir yönlendirme alanı sunmak.
   - Mevcut Flowise yapısını bozmadan yeni bir başlangıç yüzeyi eklemek.
   - Kullanıcıyı daha sonra sürükle-bırak, öğretici, Türkçe bir ajan kurucu deneyimine taşımak.

2. **Marketplace / Hazır şablonlar yüzeyi**
   - `/marketplaces` sayfasını teknik İngilizce ağırlıktan çıkarıp Türkçe ve öğretici hale getirmek.
   - Topluluk şablonlarını acemi kullanıcı için daha anlaşılır hale getirmek.
   - Şablona tıklanınca açılan preview ekranlarını da Türkçeleştirmek.
   - Düğüm, ayar ve tooltip metinlerini daha açıklayıcı yapmak.

---

## Bu sohbette tamamlanan dosyalar

### 1. `packages/ui/src/views/marketplaces/index.jsx`
**Durum:** Çevrildi

**Yapılanlar:**
- Ana başlık ve açıklama daha anlaşılır hale getirildi.
- Filtre metinleri sadeleştirildi.
- İngilizce badge/type/framework/usecase değerleri için ekranda görünen Türkçe karşılıklar eklendi.
- Arama alanı açıklaması acemi dostu hale getirildi.
- Kartların üstüne açıklayıcı tooltip mantığı eklendi.
- Boş durum mesajları Türkçeleştirildi.

**Kazanım:**
Kullanıcı artık `/marketplaces` ana yüzeyine girince daha anlaşılır bir giriş ekranı görür.

---

### 2. `packages/ui/src/ui-component/table/MarketplaceTable.jsx`
**Durum:** Çevrildi

**Yapılanlar:**
- Liste görünümündeki tüm kolon başlıkları Türkçeleştirildi.
- Type, framework, usecase ve badge alanları Türkçe gösterilecek hale getirildi.
- Satır başlığına tooltip mantığı eklendi.
- `Shared Template`, `Share`, `Delete` gibi metinler Türkçeleştirildi.
- Açıklama alanları acemi kullanıcı için daha anlaşılır hale getirildi.

**Kazanım:**
Liste görünümüne geçen kullanıcı İngilizce kolonlar ve teknik etiketlerle karşılaşmaz.

---

### 3. `packages/ui/src/ui-component/cards/ItemCard.jsx`
**Durum:** Çevrildi

**Yapılanlar:**
- Kart başlığı ve açıklama sunumu acemi kullanıcıya uygunlaştırıldı.
- Düğüm ve ikon tooltip’leri daha anlaşılır hale getirildi.
- `+ N More` ifadesi Türkçeleştirildi.
- Yaygın node isimleri için kullanıcı dostu Türkçe karşılıklar eklendi.

**Kazanım:**
Kart görünümünde şablonun içindeki yapı taşları daha anlaşılır görünür.

---

### 4. `packages/ui/src/views/marketplaces/MarketplaceCanvasHeader.jsx`
**Durum:** Çevrildi

**Yapılanlar:**
- `Back` → `Geri Dön`
- `Use Template` mantığı daha açıklayıcı hale getirildi.
- Buton tooltip’i öğretici hale getirildi.

**Kazanım:**
Şablon preview ekranında kullanıcı neye basarsa ne olacağını daha net anlar.

---

### 5. `packages/ui/src/views/marketplaces/MarketplaceCanvas.jsx`
**Durum:** Çevrildi

**Yapılanlar:**
- Preview canvas kontrol tooltip’leri Türkçeleştirildi.
- `toggle snapping`, `toggle background` gibi teknik metinler sadeleştirildi.

**Kazanım:**
Preview ekranı içinde küçük ama kritik kontroller İngilizce kalmaz.

---

### 6. `packages/ui/src/views/marketplaces/MarketplaceCanvasNode.jsx`
**Durum:** Çevrildi

**Yapılanlar:**
- `Inputs`, `Output`, `Additional Parameters` gibi metinler Türkçeleştirildi.
- Node başlıkları için daha anlaşılır Türkçe karşılıklar eklendi.
- Düğüm yardım metni mantığı eklendi.
- `Ek Ayarları Gör` gibi daha öğretici buton kullanıldı.

**Kazanım:**
Preview içindeki düğümler teknik değil, öğretici bir dille görünür hale gelir.

---

### 7. `packages/ui/src/views/agentflowsv2/MarketplaceCanvas.jsx`
**Durum:** Çevrildi

**Yapılanlar:**
- V2 preview canvas kontrol tooltip’leri Türkçeleştirildi.
- Klasik marketplace preview mantığı ile aynı dil standardına çekildi.

**Kazanım:**
`AgentflowV2` tipi topluluk şablonlarında da dil tutarlılığı korunur.

---

### 8. `packages/ui/src/views/agentflowsv2/EditNodeDialog.jsx`
**Durum:** Çevrildi

**Yapılanlar:**
- `Edit Name`, `Save Name`, `Cancel` gibi metinler Türkçeleştirildi.
- V2 node detay penceresi daha anlaşılır hale getirildi.

**Kazanım:**
V2 ajan preview içinde node detay penceresi İngilizce kalmaz.

---

## Bu sohbette kodu verilmiş ama repoya ayrıca uygulanması gerekenler

### `Sektörel Ajanlar` yüzeyi
Bu sohbette aşağıdaki dosyalar için kod üretildi ve plan netleştirildi:

- `packages/ui/src/menu-items/dashboard.js`
- `packages/ui/src/routes/MainRoutes.jsx`
- `packages/ui/src/views/sectoral-agents/index.jsx`

Bu üç dosya, `Sektörel Ajanlar` sekmesini ve başlangıç yüzeyini oluşturmak için hazırlanmıştı.

**Not:**
Bu takip dosyasında bunlar “planı hazırlanmış / kodu üretilmiş” iş olarak kabul edilir.
Eğer repoya fiilen geçirildiyse bu bölüm daha sonra “uygulandı” diye güncellenmelidir.

---

## Uygulanan yaklaşım ilkeleri

Bu çeviri çalışmasında aşağıdaki prensipler benimsendi:

- Ham veri değerleri mümkün olduğunca bozulmaz.
- Ekranda görünen metin Türkçeleştirilir.
- Teknik terim birebir çevrilmez; gerekiyorsa açıklayıcı Türkçe kullanılır.
- Acemi kullanıcı için “ne işe yarar?” hissi verilir.
- Tooltip ve yardımcı metinler sadece süs değil, yol gösterici olacak şekilde kullanılır.
- Mevcut Flowise davranışı kırılmadan ilerlenir.

---

## Kısa özet

Bu aşamada asıl kazanç şudur:

- `/marketplaces` ana yüzeyi
- topluluk şablonları liste/kart görünümü
- şablon preview ekranları
- preview node detayları

bunlar, İngilizce ve teknik hissettiren yapıdan çıkıp daha öğretici bir Türkçe deneyime taşınmıştır.
