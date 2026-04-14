# UI Component Türkçe Çeviri — Batch 1 Manifest

Bu branch, `packages/ui/src/ui-component` alanı için güvenli ilk Türkçeleştirme partisinin başlangıç kaydıdır.

## Hedef
Kullanıcıya görünen İngilizce metinleri sade, anlaşılır ve acemi dostu Türkçeye çevirmek.

## İlk parti kapsamı
- dialog/ChatflowConfigurationDialog.jsx
- dialog/SaveChatflowDialog.jsx
- dialog/AllowedDomainsDialog.jsx
- dialog/SpeechToTextDialog.jsx
- dialog/StarterPromptsDialog.jsx
- dialog/ChatFeedbackDialog.jsx
- extended/AllowedDomains.jsx
- extended/StarterPrompts.jsx
- extended/ChatFeedback.jsx
- extended/Leads.jsx
- input/Input.jsx
- button/FlowListMenu.jsx

## Kural
- İş mantığı değişmeyecek
- API sözleşmesi bozulmayacak
- Öncelik görünür metinler, tooltipler, placeholderlar ve snackbarlar
- Büyük refactor yapılmayacak

## Not
Bu branch manifest amaçlı açılmıştır. Kodlu batch bu oturumda ayrıca paketlenmiştir.