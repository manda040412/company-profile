<template>
  <section style="background:#f8f9fb;padding:72px 24px" aria-labelledby="products-heading">
    <div class="max-w-[1280px] mx-auto">
      <div style="text-align:center;margin-bottom:48px">
        <div style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0f2066;margin-bottom:12px">
          Our Products
        </div>
        <h2 id="products-heading"
            style="font-family:'Bebas Neue',sans-serif;font-size:clamp(28px,4.5vw,46px);letter-spacing:0.06em;color:#0B1A3A;margin:0">
          Our Featured Galleries
        </h2>
      </div>

      <!-- No border — direct image, cover fill -->
      <div class="product-grid" style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-bottom:36px">
        <div v-for="p in products" :key="p.name"
             style="overflow:hidden;border-radius:8px;aspect-ratio:1;cursor:pointer;transition:transform 0.2s,box-shadow 0.2s"
             onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 32px rgba(0,0,0,0.14)'"
             onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none'"
             @click="analytics.track('click','product_'+p.name)">
          <img :src="p.img" :alt="p.name"
               style="width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.3s"
               onmouseover="this.style.transform='scale(1.04)'"
               onmouseout="this.style.transform='scale(1)'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAnalyticsStore } from '@/stores/analytics'
const analytics = useAnalyticsStore()

import imgNsk     from '@/assets/images/products/nsk.webp'
import img555     from '@/assets/images/products/555.webp'
import imgGmb     from '@/assets/images/products/gmb.webp'
import imgSeiken  from '@/assets/images/products/seiken.webp'
import imgKjshock from '@/assets/images/products/kjshock.webp'

const products = [
  { name: 'NSK',     img: imgNsk },
  { name: '555',     img: img555 },
  { name: 'GMB',     img: imgGmb },
  { name: 'SEIKEN',  img: imgSeiken },
  { name: 'KJSHOCK', img: imgKjshock },
]
</script>

<style>
@media (max-width:900px) { .product-grid { grid-template-columns:repeat(3,1fr)!important } }
@media (max-width:560px) { .product-grid { grid-template-columns:repeat(2,1fr)!important } }
</style>
