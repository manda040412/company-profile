<template>
  <section style="background:#f8f9fb;padding:64px 24px">
    <div class="max-w-[1280px] mx-auto">
      <div style="text-align:center;margin-bottom:40px">
        <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0f2066;margin-bottom:10px">
          {{ t.featured.eyebrow }}
        </div>
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(26px,4.5vw,44px);letter-spacing:0.06em;color:#0B1A3A;margin:0">
          {{ t.featured.heading }}
        </h2>
      </div>
      <div class="featured-grid">
        <div v-for="p in products" :key="p.name"
             style="overflow:hidden;border-radius:8px;aspect-ratio:1;cursor:pointer;transition:transform 0.2s,box-shadow 0.2s"
             onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 32px rgba(0,0,0,0.14)'"
             onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'">
          <img :src="p.img" :alt="p.name" style="width:100%;height:100%;object-fit:cover;display:block" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()

import imgNsk    from '@/assets/images/products/nsk.webp'
import img555    from '@/assets/images/products/555.webp'
import imgGmb    from '@/assets/images/products/gmb.webp'
import imgSeiken from '@/assets/images/products/seiken.webp'
import imgKj     from '@/assets/images/products/kjshock.webp'

const products = [
  { name:'NSK',    img:imgNsk },
  { name:'555',    img:img555 },
  { name:'GMB',    img:imgGmb },
  { name:'SEIKEN', img:imgSeiken },
  { name:'KJ',     img:imgKj },
]
</script>

<style>
.featured-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}
@media (max-width: 860px) { .featured-grid { grid-template-columns: repeat(3, 1fr) } }
@media (max-width: 480px) { .featured-grid { grid-template-columns: repeat(2, 1fr) } }
</style>
