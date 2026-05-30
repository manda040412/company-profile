<template>
  <section style="background:white;padding:64px 0" aria-label="Partner Brands">
    <div class="max-w-[1280px] mx-auto px-6 md:px-10">

      <div style="text-align:center;margin-bottom:36px">
        <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0f2066;margin-bottom:10px">
          {{ t.brands.marqueeEyebrow }}
        </div>
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(24px,4vw,42px);letter-spacing:0.06em;color:#0B1A3A;margin:0">
          {{ t.brands.marqueeHeading }}
        </h2>
      </div>

      <!-- Partner brands scroll -->
      <div style="overflow:hidden;position:relative;margin-bottom:32px">
        <div style="position:absolute;left:0;top:0;bottom:0;width:60px;background:linear-gradient(to right,white,transparent);z-index:2;pointer-events:none"/>
        <div style="position:absolute;right:0;top:0;bottom:0;width:60px;background:linear-gradient(to left,white,transparent);z-index:2;pointer-events:none"/>
        <div class="brand-scroll-track">
          <div v-for="(b, i) in [...partnerBrands, ...partnerBrands]" :key="i"
               style="flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:8px 16px;height:80px">
            <img :src="b.logo" :alt="b.name"
                 style="max-height:72px;max-width:140px;object-fit:contain;display:block" />
          </div>
        </div>
      </div>

      <!-- View More -->
      <div style="text-align:center;margin-bottom:48px">
        <RouterLink to="/products"
          style="display:inline-block;background:#0B1A3A;color:white;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;padding:11px 32px;text-decoration:none;border-radius:3px">
          {{ t.brands.viewMore }}
        </RouterLink>
      </div>

      <!-- Car brands label -->
      <h3 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(16px,2vw,24px);letter-spacing:0.06em;color:#0B1A3A;text-align:center;margin:0 0 24px 0">
        {{ t.brands.fitTo }}
      </h3>

      <!-- Car brands scroll -->
      <div style="overflow:hidden;position:relative">
        <div style="position:absolute;left:0;top:0;bottom:0;width:60px;background:linear-gradient(to right,white,transparent);z-index:2;pointer-events:none"/>
        <div style="position:absolute;right:0;top:0;bottom:0;width:60px;background:linear-gradient(to left,white,transparent);z-index:2;pointer-events:none"/>
        <div class="carbrand-scroll-track">
          <div v-for="(c, i) in [...carBrands, ...carBrands]" :key="i"
               style="flex-shrink:0;display:flex;align-items:center;justify-content:center;padding:8px 16px;height:80px">
            <img :src="c.logo" :alt="c.name"
                 style="max-height:72px;max-width:140px;object-fit:contain;display:block" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()

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
import carHonda      from '@/assets/images/brands/honda.png'
import carLexus      from '@/assets/images/brands/lexus.png'
import carFord       from '@/assets/images/brands/ford.png'
import carHino       from '@/assets/images/brands/hino.png'

const partnerBrands = [
  { name:'NSK',           logo:logoNsk },
  { name:'555',           logo:logo555 },
  { name:'SEIKEN',        logo:logoSeiken },
  { name:'GMB',           logo:logoGmb },
  { name:'KJ LEX',        logo:logoKjlex },
  { name:'NOK',           logo:logoNok },
  { name:'SHOWA',         logo:logoShowa },
  { name:'NWB',           logo:logoNwb },
  { name:'COMPACT',       logo:logoCompact },
  { name:'MITSUBOSHI',    logo:logoMitsuboshi },
  { name:'NKN',           logo:logoNkn },
  { name:'NEW ERA',       logo:logoNewEra },
  { name:'3K',            logo:logo3k },
  { name:'RBI',           logo:logoRbi },
  { name:'KJ SHOCK',      logo:logoKjshock },
  { name:'KJ TRIC',       logo:logoKjtric },
  { name:'KJ STEERING',   logo:logoKjsteering },
  { name:'KJ HYDRAULICS', logo:logoKjhydraulics },
]

const carBrands = [
  { name:'Isuzu',      logo:carIsuzu },
  { name:'Mazda',      logo:carMazda },
  { name:'Toyota',     logo:carToyota },
  { name:'Suzuki',     logo:carSuzuki },
  { name:'Nissan',     logo:carNissan },
  { name:'Mitsubishi', logo:carMitsubishi },
  { name:'Honda',      logo:carHonda },
  { name:'Lexus',      logo:carLexus },
  { name:'Ford',       logo:carFord },
  { name:'Hino',       logo:carHino },
]
</script>

<style>
.brand-scroll-track {
  display: flex;
  gap: 16px;
  align-items: center;
  animation: brandScroll 30s linear infinite;
}
.brand-scroll-track:hover { animation-play-state: paused }
@keyframes brandScroll {
  from { transform: translateX(0) }
  to   { transform: translateX(-50%) }
}
.carbrand-scroll-track {
  display: flex;
  gap: 16px;
  align-items: center;
  animation: carScroll 28s linear infinite;
}
.carbrand-scroll-track:hover { animation-play-state: paused }
@keyframes carScroll {
  from { transform: translateX(0) }
  to   { transform: translateX(-50%) }
}
</style>
