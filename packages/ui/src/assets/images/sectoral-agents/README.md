# Sectoral Agents image plan

Bu klasor, `packages/ui/src/views/sectoral-agents` icindeki landing page'ler icin gorsel alanidir.

## Hedef dosyalar
- lp1 - 1600x900 - Hero ana gorsel
- lp2 - 1400x900 - SEO kaosu / problem sahnesi
- lp3 - 1600x1000 - Route ve orkestrasyon haritasi
- lp4 - 1400x900 - SEO engineer dashboard hissi
- lp5 - 1400x900 - Document store / knowledge hub
- lp6 - 1600x900 - Chatflow + canvas kurulum sahnesi
- lp7 - 1400x900 - Role-based assistants
- lp8 - 1400x900 - Tools + credentials + API control
- lp9 - 1400x900 - Executions / QA / monitoring
- lp10 - 1600x900 - FindLaw olceginde hukuk dizini SEO sahnesi

## Format
- Oncelik: webp
- Yedek: png

## Not
Bu kod paketi gorseller olmadan da calisir.
Gorseller sonradan eklense bile build kirilmasin diye sayfalar su an CSS placeholder ile gelir.
Gorselleri baglamak isterseniz `SeoEngineer.jsx` ve `index.jsx` icindeki `ImageSlot` kullanimlarini gercek image component yapisina cevirebilirsiniz.
