# Çevrilecekler

Bu dosya, `translate/cevrilenler.md` içinde tamamlandı olarak işaretlenenlerin ardından en mantıklı sıradaki çeviri ve sadeleştirme işlerini takip etmek için oluşturuldu.

Buradaki öncelik mantığı şudur:
1. Kullanıcının doğrudan gördüğü yerler önce
2. Acemi kullanıcıyı en çok zorlayan teknik yüzeyler sonra
3. Derin bileşen, tooltip ve veri sözlüğü katmanları en son

---

## Öncelik 1 — `/marketplaces` akışının eksik kalan çevrileri

### 1. `packages/ui/src/views/tools/ToolDialog/*`
**Neden sıradaki en mantıklı iş bu?**
`/marketplaces` içinde `Tool` tipi bir şablona tıklanınca kullanıcı canvas yerine araç diyaloğuna düşüyor. Eğer bu diyalog İngilizce veya teknik kalırsa marketplace tarafındaki çeviri yarım kalır.

**Yapılması gerekenler:**
- Tool preview başlıkları Türkçeleştirilmeli.
- Araç açıklamaları acemi kullanıcıya göre sadeleştirilmeli.
- `Import`, `Template`, `Use`, `Cancel`, `Save` gibi buton/metinler gözden geçirilmeli.
- Gerekirse “bu araç ne yapar?” yardımcı açıklaması eklenmeli.

**Beklenen sonuç:**
Kullanıcı `Tool` tipindeki topluluk şablonlarını açtığında da aynı öğretici Türkçe deneyimi görmeli.

---

### 2. `packages/ui/src/views/agentflowsv2/AgentFlowNode.jsx`
**Neden önemli?**
Marketplace V2 preview ekranı Türkçeleştirildi ama node kutularının kendi bileşeni burada çalışıyor. Eğer node başlıkları ve alan etiketleri burada İngilizce kalıyorsa deneyim yine yarım görünür.

**Yapılması gerekenler:**
- V2 node başlıkları için display map eklenmeli.
- Teknik alan adları daha anlaşılır Türkçeyle gösterilmeli.
- Mümkünse açıklayıcı tooltip veya kısa helper metin eklenmeli.

---

### 3. `packages/ui/src/views/agentflowsv2/IterationNode.jsx`
**Neden önemli?**
V2 ajan akışlarında tekrar eden işlem mantığını gösteren özel düğüm. Acemi kullanıcı için en zor anlaşılan node tiplerinden biri olabilir.

**Yapılması gerekenler:**
- Başlıklar ve görünen alanlar Türkçeleştirilmeli.
- Tekrar / döngü mantığı daha açıklayıcı hale getirilmeli.
- Gerekirse kısa açıklama metni eklenmeli.

---

## Öncelik 2 — Node içi etiket ve yardımcı metin sözlüğünü büyütme

### 4. Ortak node çeviri sözlüğü oluşturma
**Önerilen yeni dosya:**
- `packages/ui/src/utils/translateNodeLabels.js`
veya benzeri bir ortak yardımcı dosya.

**Neden gerekli?**
Şu ana kadar bazı dosyalarda yerel sözlük kullanıldı. Bu yaklaşım hızlıdır ama uzun vadede dağınık hale gelir. Ortak sözlük kurulursa marketplace, canvas ve node dialog’larında aynı isimlendirme kullanılır.

**Yapılması gerekenler:**
- Node name → kullanıcı dostu Türkçe label eşlemesi merkezi hale getirilmeli.
- Ortak `getReadableNodeLabel`, `getReadableNodeHint` yardımcıları yazılmalı.
- Marketplace kartları, preview node’ları ve V2 node pencereleri bunu ortak kullanmalı.

**Beklenen sonuç:**
Aynı node, repo boyunca her yerde aynı Türkçe isimle görünür.

---

### 5. Input param / ayar etiketleri için ortak sadeleştirme
**Neden gerekli?**
Node adı Türkçe olsa bile alt ayarlar hâlâ teknik kalıyorsa acemi kullanıcı yine zorlanır.

**Yapılması gerekenler:**
- Sık geçen input label’ları için sade Türkçe karşılıklar hazırlanmalı.
- Özellikle model, hafıza, prompt, retriever, vector store, API isteği, kimlik bilgisi, tool input alanları sadeleştirilmeli.
- Mümkünse `NodeInputHandler` seviyesinde display-map mantığı düşünülmeli.

---

## Öncelik 3 — Baştaki büyük hedefe geri bağlanan işler

### 6. `Sektörel Ajanlar` kodlarının repoya gerçekten geçirilmesi
**Hazırlanmış dosyalar:**
- `packages/ui/src/menu-items/dashboard.js`
- `packages/ui/src/routes/MainRoutes.jsx`
- `packages/ui/src/views/sectoral-agents/index.jsx`

**Neden tekrar burada?**
Bu sohbette bu yüzey için plan ve kod üretildi. Eğer repoda fiilen yoksa, başlangıçtaki ana hedefin yarısı eksik kalır.

**Yapılması gerekenler:**
- Menüye sekme eklenmeli.
- Route açılmalı.
- Landing ekranı eklenmeli.
- Marketplace ve ajan akışlarıyla ilişkili yönlendirme korunmalı.

---

### 7. `Sektörel Ajanlar` sayfasının ikinci fazı
**Bu ne demek?**
İlk fazda sadece giriş ekranı vardı. İkinci fazda gerçekten kullanıcıyı sektöre göre doğru şablona ve ajan yapısına götüren sistem kurulmalı.

**Yapılması gerekenler:**
- Sektör kartlarına göre hazır başlangıç akışları bağlanmalı.
- Her sektör için kısa açıklama ve tooltip geliştirilmeli.
- “Bu sektör için önerilen yapı” mantığı eklenmeli.
- Gerekirse `ChatFlow` veya `CustomTemplate` ile ilişkilendirilecek başlangıç yapıları hazırlanmalı.

---

## Öncelik 4 — Deneyimi daha da acemi dostu yapacak geliştirmeler

### 8. Flow kartlarında daha güçlü tooltip standardı
**Neden?**
Şu an tooltip altyapısı eklendi ama daha sistematik hale getirilebilir.

**Yapılması gerekenler:**
- Her topluluk şablonu için tek tip açıklama şablonu oluşturulmalı.
- “Bu ne yapar?”, “Kim için uygun?”, “Tıklayınca ne olur?” formatı standartlaştırılmalı.
- Mümkünse tooltip metni API verisinden zenginleştirilmeli.

---

### 9. Preview ekranlarında onboarding / bilgi şeridi
**Neden?**
Acemi kullanıcı preview ekranına girince neye baktığını yine tam anlamayabilir.

**Yapılması gerekenler:**
- Preview ekranının üst kısmına kısa bilgi satırı eklenebilir.
- Örnek: “Bu ekran düzenleme ekranı değil, önizleme ekranıdır. Şablonu kopyaladıktan sonra kendi sürümünü düzenleyebilirsin.”

---

### 10. İngilizce kalan dağınık küçük metinleri tarama turu
**Neden?**
Marketplace ana gövde çevrilmiş olsa bile küçük İngilizce kırıntılar güven hissini bozar.

**Yapılması gerekenler:**
- `title`, `aria-label`, `alt`, tooltip, placeholder, chip label alanları toplu taranmalı.
- `/marketplaces` ile ilişkili dosyalarda son temizlik turu yapılmalı.

---

## En mantıklı uygulama sırası

1. `ToolDialog` ve tool preview yüzeyleri
2. `AgentFlowNode.jsx`
3. `IterationNode.jsx`
4. ortak node sözlüğü
5. ortak input label sadeleştirme
6. `Sektörel Ajanlar` patch’ini repoya geçirmek
7. `Sektörel Ajanlar` ikinci faz
8. onboarding / küçük İngilizce temizlik turu

---

## Kısa karar özeti

Şu an en mantıklı sıradaki işler şunlar:

- marketplace içinde hala İngilizce kalabilecek tool ve V2 node yüzeylerini bitirmek
- sonra ortak çeviri altyapısını merkezileştirmek
- sonra konuşmanın başındaki ana hedef olan `Sektörel Ajanlar` tarafını repoda tam hayata geçirmek

Bu dosya gerektiğinde güncellenecek ve tamamlanan maddeler `translate/cevrilenler.md` dosyasına taşınacaktır.
