---

# 📘 TypeScript Ödevi – 20 Soruluk Tip Sistemi Ustalığı

## 🎯 Amaç

Bu ödev, TypeScript’in gelişmiş tip sistemini kullanarak aşağıdaki konularda ustalık kazanmayı hedefler:

- **Generic Types**
- **Conditional Types**
- **Mapped Types**
- **Recursive Types**
- **Template Literal Types**
- **Nominal Typing (Branded Types)**
- **Distributed Conditionals**
- **Type Inference with `infer`**

Her soru, sadece `/* ??? */` ile işaretlenmiş bir satırı doldurarak derleyici hatası vermeyen ve doğru çalışan bir çözüm üretmeyi amaçlar.

---

## 📚 Soru Başlıkları ve Kapsam

| Soru | Konu                           | Açıklama |
|------|--------------------------------|----------|
| 1    | Generic Array Merge            | Farklı tipte dizileri birleştirme |
| 2    | Union Type & instanceof        | Ortak metotları çağırma |
| 3    | Class & Encapsulation          | Özel alanlar ve erişim |
| 4    | keyof & Indexed Access         | Tip güvenli property okuma |
| 5    | Function Overloads             | Parametreye göre dönüş tipi |
| 6    | Generic Class                  | Anahtar-değer cache yapısı |
| 7    | Partial & Readonly             | Güncelleme ve sabitleme |
| 8    | Rest Parameters                | Dinamik sayı toplama |
| 9    | Abstract Class                 | Alan hesaplama |
| 10   | Static Members                 | Sınıf örneği olmadan kullanım |
| 11   | Conditional Types              | `Promise<T>` içeriğini çıkarma |
| 12   | `infer` ile ReturnType         | Fonksiyon dönüş tipi çıkarımı |
| 13   | Mapped & Template Literals     | `getX()` şeklinde getter üretimi |
| 14   | Recursive Types                | Derin `readonly` tipi |
| 15   | Mapped Type Filtering          | Belirli tipteki alanları seçme |
| 16   | Branded Types                  | Aynı temel tipe sahip ama farklı anlamlı tipler |
| 17   | Distributed Conditional Types  | Union içinden filtreleme |
| 18   | `infer` ile Last Parameter     | Fonksiyonun son parametresini çıkarma |
| 19   | `infer` ile Dizi Elemanı       | Dizi ise eleman tipini çıkarma |
| 20   | Template Literal Parsing       | Route string’inden parametre nesnesi üretme |

---

## ✅ Kullanım

Her sorunun çözümü, sadece `type` tanımını doldurarak yapılır. Kod bloğuna **dokunulmaz**. Derleyici hatası vermemesi ve `@ts-expect-error` satırlarının beklenen hatayı üretmesi gerekir.

```ts
type Example<T> = T extends string ? "yes" : "no";
```

---

## 🧪 Testler

Her soru, aşağıdaki testleri geçmelidir:

- Doğru tip atamaları derleyici hatası vermemeli
- Yanlış tip atamaları `@ts-expect-error` ile işaretlenmeli
- Konsol çıktısı beklendiği gibi olmalı

---

## 🛠️ Geliştirme Ortamı

- TypeScript 4.1+ önerilir (template literal types için)
- VSCode + `tsc` ile test edilebilir
- `strict` mod açık olmalıdır

---

## 🧠 Ekstra Bilgiler

Bu ödev, gerçek dünyadaki şu alanlara doğrudan katkı sağlar:

- **API tipi çıkarımı** (Örn: `ParseRouteParams`)
- **Form doğrulama ve otomatik UI üretimi**
- **Kod güvenliği ve bakım kolaylığı**
- **Framework seviyesinde tip üretimi (NestJS, tRPC, Zod)**

---

## 👨‍💻 Hazırlayan

Ahmet Hüsrev Özcan  
Bilgisayar Mühendisliği Adayı (2026)  
Tutkulu bir TypeScript geliştiricisi, UI/UX meraklısı ve bilimsel doğruluk savunucusu

---

İstersen bu `README` dosyasını `.md` formatında dışa aktarabilir, GitHub repo açıklaması olarak kullanabilir veya PDF haline getirebilirim. Bir sonraki adımda ister test scripti ister otomatik doğrulama sistemi kurabiliriz. Hazırsan başlayalım!
