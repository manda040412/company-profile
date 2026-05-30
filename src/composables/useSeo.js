import { watch } from 'vue'
import { useRoute } from 'vue-router'
import { currentLang } from './useI18n'

const BASE_URL = 'https://tranugerah.com'
const DEFAULT_IMAGE = `${BASE_URL}/wp-content/uploads/2025/10/Carousel-Website.webp`

const pageMeta = {
  EN: {
    home: {
      title: 'Official Distributor of Japanese Automotive Spare Parts | PT Timur Raya Anugerah Damai',
      desc:  'PT Timur Raya Anugerah Damai (TRAD) — ISO 9001:2015 certified importer & distributor of genuine Japanese automotive spare parts. 5,000+ products. Jakarta, Indonesia.',
      path:  '/',
    },
    'about-us': {
      title: 'About Us — PT Timur Raya Anugerah Damai | 50+ Years of Excellence',
      desc:  'Learn about TRAD — a trusted importer & distributor of genuine automotive spare parts from Japan with over 50 years of experience serving Indonesia.',
      path:  '/about-us',
    },
    services: {
      title: 'Our Services — Fleet, Retail & Workshop | PT Timur Raya Anugerah Damai',
      desc:  'Fleet & enterprise solutions, retail supply, and Anugerah Auto Workshop — complete automotive spare parts services across Indonesia.',
      path:  '/services',
    },
    products: {
      title: 'Genuine Automotive Spare Parts — NSK, 555, Seiken, GMB & More | TRAD',
      desc:  'Browse 5,000+ genuine spare parts from top brands: NSK, 555, Seiken, GMB, NOK, Showa, NWB, Mitsuboshi and more. Trusted distributor in Indonesia.',
      path:  '/products',
    },
    articles: {
      title: 'Articles & Guidelines — Automotive Tips | PT Timur Raya Anugerah Damai',
      desc:  'Read expert guides on brake pads, shock absorbers, wiper blades and more from the team at PT Timur Raya Anugerah Damai.',
      path:  '/articles',
    },
    contact: {
      title: 'Contact Us | PT Timur Raya Anugerah Damai — Jakarta',
      desc:  'Get in touch with PT Timur Raya Anugerah Damai. Sales inquiry, product info, or workshop booking — we are here to help.',
      path:  '/contact',
    },
  },
  ID: {
    home: {
      title: 'Distributor Resmi Spare Part Otomotif Jepang | PT Timur Raya Anugerah Damai',
      desc:  'PT Timur Raya Anugerah Damai (TRAD) — importir & distributor resmi suku cadang otomotif Jepang bersertifikasi ISO 9001:2015. 5.000+ produk. Jakarta, Indonesia.',
      path:  '/',
    },
    'about-us': {
      title: 'Tentang Kami — PT Timur Raya Anugerah Damai | 50+ Tahun Pengalaman',
      desc:  'Mengenal TRAD — importir & distributor suku cadang otomotif original Jepang terpercaya dengan pengalaman lebih dari 50 tahun melayani Indonesia.',
      path:  '/about-us',
    },
    services: {
      title: 'Layanan Kami — Fleet, Retail & Bengkel | PT Timur Raya Anugerah Damai',
      desc:  'Solusi armada & korporasi, pasokan ritel, dan Bengkel Anugerah Auto — layanan suku cadang otomotif lengkap di seluruh Indonesia.',
      path:  '/services',
    },
    products: {
      title: 'Suku Cadang Otomotif Original — NSK, 555, Seiken, GMB & Lainnya | TRAD',
      desc:  'Jelajahi 5.000+ suku cadang original dari merek terkemuka: NSK, 555, Seiken, GMB, NOK, Showa, NWB, Mitsuboshi dan lainnya.',
      path:  '/products',
    },
    articles: {
      title: 'Artikel & Panduan Otomotif | PT Timur Raya Anugerah Damai',
      desc:  'Baca panduan lengkap tentang kampas rem, peredam kejut, wiper blade dan lainnya dari tim PT Timur Raya Anugerah Damai.',
      path:  '/articles',
    },
    contact: {
      title: 'Hubungi Kami | PT Timur Raya Anugerah Damai — Jakarta',
      desc:  'Hubungi PT Timur Raya Anugerah Damai untuk informasi produk, pemesanan, atau pertanyaan penjualan. Kami siap membantu.',
      path:  '/contact',
    },
  },
}

function setMeta(title, desc, path) {
  document.title = title

  const setTag = (sel, attr, val) => {
    let el = document.querySelector(sel)
    if (!el) { el = document.createElement('meta'); document.head.appendChild(el) }
    el.setAttribute(attr, val)
  }

  setTag('meta[name="description"]',         'content', desc)
  setTag('meta[property="og:title"]',        'content', title)
  setTag('meta[property="og:description"]',  'content', desc)
  setTag('meta[property="og:url"]',          'content', `${BASE_URL}${path}`)
  setTag('meta[property="og:image"]',        'content', DEFAULT_IMAGE)
  setTag('meta[name="twitter:title"]',       'content', title)
  setTag('meta[name="twitter:description"]', 'content', desc)

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical) }
  canonical.href = `${BASE_URL}${path}`
}

export function useSeo() {
  const route = useRoute()

  function update() {
    const lang   = currentLang.value
    const name   = (route.name || 'home').toString().toLowerCase()
    const meta   = pageMeta[lang]?.[name] || pageMeta['EN'][name] || pageMeta['EN']['home']
    setMeta(meta.title, meta.desc, meta.path)

    // GA4 page_view on route change
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title:    meta.title,
        page_location: window.location.href,
        page_path:     route.path,
      })
    }
  }

  watch(() => [route.name, currentLang.value], update, { immediate: true })
}
