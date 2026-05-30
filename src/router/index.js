import { createRouter, createWebHistory } from 'vue-router'

// Views (lazy-loaded for performance)
const HomeView     = () => import('@/views/HomeView.vue')
const AboutView    = () => import('@/views/AboutView.vue')
const ServicesView = () => import('@/views/ServicesView.vue')
const ProductsView = () => import('@/views/ProductsView.vue')
const ArticlesView = () => import('@/views/ArticlesView.vue')
const ContactView  = () => import('@/views/ContactView.vue')
const BrandDetailView = () => import('@/views/BrandDetailView.vue')
const ArticleDetailView = () => import('@/views/ArticleDetailView.vue')
const NotFound     = () => import('@/views/NotFoundView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Official Distributor of Japanese Automotive Spare Parts | PT Timur Raya Anugerah Damai',
      description: 'PT Timur Raya Anugerah Damai (TRAD) — trusted official distributor of genuine Japanese automotive spare parts. ISO 9001:2015 certified. 5,000+ products. Jakarta, Indonesia.',
      canonical: 'https://tranugerah.com/',
      ogImage: 'https://tranugerah.com/wp-content/uploads/2025/10/Carousel-Website.webp',
    }
  },
  {
    path: '/about-us',
    name: 'about',
    component: AboutView,
    meta: {
      title: 'About Us | PT Timur Raya Anugerah Damai - Japanese Spare Parts Distributor',
      description: 'Since its establishment, TRAD has been committed to providing high-quality Japanese spare parts with professional service. ISO 9001:2015 certified, 50+ years experience.',
      canonical: 'https://tranugerah.com/about-us/',
      ogImage: 'https://tranugerah.com/wp-content/uploads/2025/10/Group-25-1.png',
    }
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesView,
    meta: {
      title: 'Our Services | Fleet & Retail Distribution | PT Timur Raya Anugerah Damai',
      description: 'Fleet & Enterprise Solutions, Retail Partner Supply, and Installation Services. Fast distribution, professional support for your automotive spare parts needs.',
      canonical: 'https://tranugerah.com/services/',
      ogImage: 'https://tranugerah.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-16-at-15.29.01.jpeg',
    }
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView,
    meta: {
      title: 'Products | 5,000+ Genuine Japanese Spare Parts | PT Timur Raya Anugerah Damai',
      description: 'Browse 5,000+ premium genuine Japanese automotive spare parts from SEIKEN, SANKEI, NSK, NWB, MITSUBOSHI, and more. Authorized distributor. Jakarta, Indonesia.',
      canonical: 'https://tranugerah.com/products/',
      ogImage: 'https://tranugerah.com/wp-content/uploads/2025/11/Desain-tanpa-judul-89.webp',
    }
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesView,
    meta: {
      title: 'Articles & Insights | Automotive Spare Parts Tips | PT Timur Raya Anugerah Damai',
      description: 'Latest automotive spare parts news, maintenance tips, and industry insights from TRAD\'s expert team.',
      canonical: 'https://tranugerah.com/articles/',
      ogImage: 'https://tranugerah.com/wp-content/uploads/2025/10/Carousel-Website.webp',
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: {
      title: 'Contact Us | PT Timur Raya Anugerah Damai - Spare Parts Inquiry',
      description: 'Need assistance or a quote? Contact TRAD for Japanese automotive spare parts. Jakarta office, WhatsApp, email, Tokopedia, and Shopee available.',
      canonical: 'https://tranugerah.com/contact/',
      ogImage: 'https://tranugerah.com/wp-content/uploads/2022/01/tra-phoenix-e1691224943245.webp',
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue'),
    meta: { title: 'Analytics Dashboard | TRAD Admin', description: 'Private analytics dashboard.' }
  },
  {
  path: '/products/brand/:slug',
  name: 'brand-detail',
  component: BrandDetailView,
  meta: {
    title: 'Brand Detail | PT Timur Raya Anugerah Damai',
    description: 'Detailed product information and catalog for our brand partners.',
    canonical: 'https://tranugerah.com/products/',
  }
},
{
  path: '/articles/:slug',
  name: 'article-detail',
  component: ArticleDetailView,
  meta: {
    title: 'Article | PT Timur Raya Anugerah Damai',
    description: 'Read our automotive guidelines and tips.',
    canonical: 'https://tranugerah.com/articles/',
  }
},
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: {
      title: '404 — Page Not Found | PT Timur Raya Anugerah Damai',
      description: 'Page not found.',
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

// ── Dynamic SEO Meta per Route ──
router.afterEach((to) => {
  const meta = to.meta

  // Title
  document.title = meta.title || 'PT Timur Raya Anugerah Damai'

  // Helpers
  const setMeta = (name, content, attr = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`)
    if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el) }
    el.setAttribute('content', content || '')
  }

  const setLink = (rel, href) => {
    let el = document.querySelector(`link[rel="${rel}"]`)
    if (!el) { el = document.createElement('link'); el.setAttribute('rel', rel); document.head.appendChild(el) }
    el.setAttribute('href', href || '')
  }

  if (meta.description)  setMeta('description', meta.description)
  if (meta.canonical)    setLink('canonical', meta.canonical)
  if (meta.canonical)    setMeta('og:url', meta.canonical, 'property')
  if (meta.title)        setMeta('og:title', meta.title, 'property')
  if (meta.description)  setMeta('og:description', meta.description, 'property')
  if (meta.ogImage)      setMeta('og:image', meta.ogImage, 'property')
  if (meta.title)        setMeta('twitter:title', meta.title)
  if (meta.description)  setMeta('twitter:description', meta.description)
  if (meta.ogImage)      setMeta('twitter:image', meta.ogImage)
})

export default router
