<template>
  <section style="background:#f8f9fb;padding:72px 24px" aria-labelledby="vehicles-heading">
    <div class="max-w-[1280px] mx-auto">
      <div style="text-align:center;margin-bottom:48px">
        <div style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0f2066;margin-bottom:12px">
          What We Offer
        </div>
        <h2 id="vehicles-heading"
            style="font-family:'Bebas Neue',sans-serif;font-size:clamp(32px,4.5vw,48px);letter-spacing:0.06em;color:#0B1A3A;margin:0">
          Automotive Solutions
        </h2>
      </div>

      <div class="vehicles-grid" style="display:grid;grid-template-columns:repeat(5,1fr);gap:18px">
        <article v-for="v in vehicles" :key="v.name"
          style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:32px 18px;text-align:center;transition:all 0.2s"
          onmouseover="this.style.borderColor='#0B1A3A';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.08)'"
          onmouseout="this.style.borderColor='#e5e7eb';this.style.boxShadow='none'">
          <div style="height:80px;display:flex;align-items:center;justify-content:center;margin-bottom:16px">
            <img :src="v.icon" :alt="v.name" style="max-height:72px;max-width:90%;object-fit:contain" />
          </div>
          <h3 style="font-family:'DM Sans',sans-serif;font-size:16px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#0f2066;margin:0 0 10px 0">
            {{ v.name }}
          </h3>
          <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:#6b7280;line-height:1.6;margin:0">
            {{ v.desc }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import iconSedan from '@/assets/icons/sedan.png'
import iconMPV   from '@/assets/icons/mpv.png'
import iconSUV   from '@/assets/icons/suv.png'
import iconVan   from '@/assets/icons/van.png'
import iconTruck from '@/assets/icons/truck.png'

const vehicles = [
  { icon: iconSedan, name: 'Sedan',             desc: 'High-quality parts for your sedan, hatchback, and family car.' },
  { icon: iconMPV,   name: 'MPV',               desc: 'Reliable components for the versatility of MPVs.' },
  { icon: iconSUV,   name: 'SUV',               desc: 'Durable parts built for the strength and capability of SUVs.' },
  { icon: iconVan,   name: 'Van',               desc: 'Heavy-duty components for commercial vehicles and freight.' },
  { icon: iconTruck, name: 'Commercial Trucks', desc: 'Industrial-grade components for light to heavy duty trucks.' },
]
</script>

<style>
@media (max-width:900px)  { .vehicles-grid { grid-template-columns:repeat(3,1fr)!important } }
@media (max-width:560px)  { .vehicles-grid { grid-template-columns:repeat(2,1fr)!important } }
</style>
