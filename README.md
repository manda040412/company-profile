# 🚗 TRAD Company Profile — Vite + Vue 3 + Tailwind

PT Timur Raya Anugerah Damai official company profile.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## 📁 Project Structure

```
trad-vite/
├── index.html                    ← Entry point + all SEO meta tags
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
│
├── public/
│   ├── favicon.png               ← Ganti dengan logo TRAD
│   ├── apple-touch-icon.png
│   └── robots.txt                ← Buat manual (lihat README)
│
└── src/
    ├── main.js                   ← App entry
    ├── App.vue                   ← Root + analytics init
    ├── assets/
    │   ├── main.css              ← Tailwind + custom CSS
    │   └── images/
    │       ├── banner/           ← Hero carousel images
    │       │   └── hero-1.jpg, hero-2.jpg ...
    │       ├── products/         ← Product photos
    │       │   └── brake-pad.jpg, shock-absorber.jpg ...
    │       ├── certif/           ← Certificate images
    │       │   └── seiken-cert.jpg ...
    │       ├── partners/         ← Partner brand logos
    │       │   └── seiken-logo.png, nsk-logo.png ...
    │       ├── vehicles/         ← Vehicle type illustrations
    │       └── team/             ← Team photos (optional)
    │
    ├── router/
    │   └── index.js              ← Vue Router + SEO meta per route
    │
    ├── stores/
    │   ├── analytics.js          ← Pinia analytics store
    │   └── site.js               ← All site content/data
    │
    ├── components/
    │   ├── layout/
    │   │   ├── TheTopbar.vue
    │   │   ├── TheNavbar.vue
    │   │   └── TheFooter.vue
    │   ├── ui/
    │   │   └── WhatsAppFloat.vue
    │   └── home/
    │       ├── HeroSection.vue
    │       ├── StatsBand.vue
    │       ├── VehiclesSection.vue
    │       ├── BrandsMarquee.vue
    │       ├── AboutTeaser.vue
    │       ├── ServicesPreview.vue
    │       └── CtaBand.vue
    │
    └── views/
        ├── HomeView.vue          ← ✅ Done
        ├── AboutView.vue         ← 🔜 Coming next
        ├── ServicesView.vue      ← 🔜 Coming next
        ├── ProductsView.vue      ← 🔜 Coming next
        ├── ArticlesView.vue      ← 🔜 Coming next
        ├── ContactView.vue       ← 🔜 Coming next
        ├── AdminView.vue         ← ✅ Analytics dashboard
        └── NotFoundView.vue      ← ✅ 404 page
```

## 🖼️ Cara Pasang Gambar

### Hero Banner
```vue
<!-- Di HeroSection.vue, ganti emoji dengan: -->
<img
  src="@/assets/images/banner/hero-main.jpg"
  alt="TRAD Japanese Spare Parts Warehouse"
  class="absolute inset-0 w-full h-full object-cover opacity-30"
/>
```

### Logo
```vue
<!-- Di TheNavbar.vue, ganti div TRAD. dengan: -->
<img
  src="@/assets/images/logo.png"
  alt="PT Timur Raya Anugerah Damai"
  class="h-10 w-auto"
/>
```

### Product Images
Di `src/stores/site.js`, ubah field `img: null` menjadi:
```js
{ ..., img: '/src/assets/images/products/brake-pad-seiken.jpg' }
```

Lalu di komponen ProductCard, gunakan:
```vue
<img v-if="product.img" :src="product.img" :alt="product.name" class="w-full h-full object-cover" />
<span v-else>{{ product.icon }}</span>
```

## 📊 Analytics Dashboard

Akses: http://localhost:5173/admin

Data yang ditrack:
- Page views per halaman + dwell time
- Semua klik elemen (nav, CTA, WhatsApp, dll)
- Scroll depth (tiap 25%)
- Tab visibility (pindah tab / kembali)
- Session info (browser, screen, timezone, referrer)

## 🔍 SEO

- Meta tags dinamis per halaman (via Vue Router afterEach)
- Schema.org JSON-LD: Organization + LocalBusiness + WebSite + FAQPage
- Open Graph + Twitter Card (diupdate per halaman)
- Hreflang bilingual (EN + ID)
- Canonical URL per halaman
- Geo meta tags untuk lokal Indonesia

## 📝 robots.txt (buat di /public/robots.txt)

```
User-agent: *
Allow: /
Disallow: /admin

Sitemap: https://tranugerah.com/sitemap.xml
```

## 🌐 Deploy

### Netlify (recommended)
```bash
npm run build
# Upload folder /dist ke Netlify
# Set: Build command = npm run build, Publish dir = dist
```

### Vercel
```bash
npm i -g vercel
vercel
```

### VPS / cPanel
```bash
npm run build
# Upload isi folder /dist ke /public_html
# Pastikan server redirect semua request ke index.html (SPA routing)
```

### Nginx config untuk SPA:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## ✅ Checklist Post-Deploy

- [ ] Submit ke Google Search Console
- [ ] Upload sitemap.xml
- [ ] Test Schema: https://search.google.com/test/rich-results
- [ ] Test OG: https://developers.facebook.com/tools/debug/
- [ ] Test Mobile: https://search.google.com/test/mobile-friendly
- [ ] Test Speed: https://pagespeed.web.dev/
- [ ] Daftarkan ke Google Business Profile
