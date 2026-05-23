<template>
  <section style="background:white;padding:72px 24px" aria-label="Partner Brands">
    <div class="max-w-[1280px] mx-auto">

      <!-- Header -->
      <div style="text-align:center;margin-bottom:40px">
        <div style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0f2066;margin-bottom:12px">
          Our Partners
        </div>
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(28px,4vw,44px);letter-spacing:0.06em;color:#0B1A3A;margin:0">
          Trusted Automotive Brands Worldwide
        </h2>
      </div>

      <!-- Auto-scroll marquee — bigger logos -->
      <div style="overflow:hidden;position:relative;margin-bottom:36px">
        <div style="position:absolute;left:0;top:0;bottom:0;width:80px;background:linear-gradient(to right,white,transparent);z-index:2;pointer-events:none"/>
        <div style="position:absolute;right:0;top:0;bottom:0;width:80px;background:linear-gradient(to left,white,transparent);z-index:2;pointer-events:none"/>
        <div class="brand-scroll-track">
          <div v-for="(b, i) in [...partnerBrands, ...partnerBrands]" :key="i"
               style="flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:10px 20px;height:100px">
            <img :src="b.logo" :alt="b.name"
                 style="max-height:100px;max-width:160px;object-fit:contain;display:block"
                 @error="e => { e.target.style.display='none'; e.target.nextSibling.style.display='block' }" />
            <span :style="{ display:'none', fontFamily:'\'Bebas Neue\',sans-serif', fontSize:'18px', letterSpacing:'0.1em', color:'#0B1A3A' }">
              {{ b.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- View More -->
      <div style="text-align:center;margin-bottom:64px">
        <RouterLink to="/products"
          style="display:inline-block;background:#0B1A3A;color:white;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;padding:12px 36px;text-decoration:none;border-radius:3px"
          @click="analytics.track('click','brands_view_more')">
          View More
        </RouterLink>
      </div>

      <!-- Car brands — carousel -->
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(20px,2.5vw,28px);letter-spacing:0.06em;color:#0B1A3A;text-align:center;margin:0 0 28px 0">
        Fit to most car brands in Indonesia:
      </h3>

      <!-- Auto-scroll marquee — car brands (no captions, no arrows, no dots) -->
      <div style="overflow:hidden;position:relative;margin-bottom:0">
        <div style="position:absolute;left:0;top:0;bottom:0;width:80px;background:linear-gradient(to right,white,transparent);z-index:2;pointer-events:none"/>
        <div style="position:absolute;right:0;top:0;bottom:0;width:80px;background:linear-gradient(to left,white,transparent);z-index:2;pointer-events:none"/>
        <div class="carbrand-scroll-track">
          <div v-for="(c, i) in [...carBrands, ...carBrands]" :key="i"
               style="flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:10px 20px;height:100px">
            <img :src="c.logo" :alt="c.name"
                 style="max-height:100px;max-width:160px;object-fit:contain;display:block" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useAnalyticsStore } from '@/stores/analytics'
const analytics = useAnalyticsStore()

import logoNsk          from '@/assets/images/brands/nsk.png'
import logo555          from '@/assets/images/brands/555.png'
import logoSeiken       from '@/assets/images/brands/seiken.png'
import logoGmb          from '@/assets/images/brands/gmb.png'
import logoKjlex        from '@/assets/images/brands/kjlex.png'
import logoNok          from '@/assets/images/brands/nok.png'
import logoShowa        from '@/assets/images/brands/showa.png'
import logoNwb          from '@/assets/images/brands/nwb.png'
import logoCompact      from '@/assets/images/brands/compact.png'
import logoMitsuboshi   from '@/assets/images/brands/mitsuboshi.png'
import logoNkn          from '@/assets/images/brands/nkn.png'
import logoNewEra       from '@/assets/images/brands/new-era.png'
import logo3k           from '@/assets/images/brands/3k.png'
import logoRbi          from '@/assets/images/brands/rbi.png'
import logoKjshock      from '@/assets/images/brands/kjshock.png'
import logoKjtric       from '@/assets/images/brands/kjtric.png'
import logoKjsteering   from '@/assets/images/brands/kjsteering.png'
import logoKjhydraulics from '@/assets/images/brands/kjhydraulics.png'

import carIsuzu      from '@/assets/images/brands/isuzu.png'
import carMazda      from '@/assets/images/brands/mazda.png'
import carToyota     from '@/assets/images/brands/toyota.png'
import carSuzuki     from '@/assets/images/brands/suzuki.png'
import carNissan     from '@/assets/images/brands/nissan.png'
import carMitsubishi from '@/assets/images/brands/mitsubishi.png'

const partnerBrands = [
  { name: 'NSK',           logo: logoNsk },
  { name: '555',           logo: logo555 },
  { name: 'SEIKEN',        logo: logoSeiken },
  { name: 'GMB',           logo: logoGmb },
  { name: 'KJ LEX',        logo: logoKjlex },
  { name: 'NOK',           logo: logoNok },
  { name: 'SHOWA',         logo: logoShowa },
  { name: 'NWB',           logo: logoNwb },
  { name: 'COMPACT',       logo: logoCompact },
  { name: 'MITSUBOSHI',    logo: logoMitsuboshi },
  { name: 'NKN',           logo: logoNkn },
  { name: 'NEW ERA',       logo: logoNewEra },
  { name: '3K',            logo: logo3k },
  { name: 'RBI',           logo: logoRbi },
  { name: 'KJ SHOCK',      logo: logoKjshock },
  { name: 'KJ TRIC',       logo: logoKjtric },
  { name: 'KJ STEERING',   logo: logoKjsteering },
  { name: 'KH HYDRAULICS', logo: logoKjhydraulics },
]

import carHonda      from '@/assets/images/brands/honda.png'
import carLexus      from '@/assets/images/brands/lexus.png'
import carFord       from '@/assets/images/brands/ford.png'
import carHino       from '@/assets/images/brands/hino.png'

const carBrands = [
  { name: 'Isuzu',      logo: carIsuzu },
  { name: 'Mazda',      logo: carMazda },
  { name: 'Toyota',     logo: carToyota },
  { name: 'Suzuki',     logo: carSuzuki },
  { name: 'Nissan',     logo: carNissan },
  { name: 'Mitsubishi', logo: carMitsubishi },
  { name: 'Honda',      logo: carHonda },
  { name: 'Lexus',      logo: carLexus },
  { name: 'Ford',       logo: carFord },
  { name: 'Hino',       logo: carHino },
]

// No carousel logic needed — using CSS marquee animation
</script>

<style>
.brand-scroll-track {
  display: flex;
  gap: 20px;
  align-items: center;
  animation: brandScroll 32s linear infinite;
}
.brand-scroll-track:hover { animation-play-state: paused; }
@keyframes brandScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
.carbrand-scroll-track {
  display: flex;
  gap: 20px;
  align-items: center;
  animation: carBrandScroll 32s linear infinite;
}
.carbrand-scroll-track:hover { animation-play-state: paused; }
@keyframes carBrandScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
</style>
