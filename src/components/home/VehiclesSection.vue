<template>
  <section style="background:#f8f9fb;padding:64px 24px">
    <div class="max-w-[1280px] mx-auto">
      <div style="text-align:center;margin-bottom:40px">
        <div style="font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.22em;text-transform:uppercase;color:#0f2066;margin-bottom:10px">
          {{ t.vehicles.eyebrow }}
        </div>
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(28px,4.5vw,46px);letter-spacing:0.06em;color:#0B1A3A;margin:0">
          {{ t.vehicles.heading }}
        </h2>
      </div>
      <div class="vehicles-grid">
        <article v-for="(v, i) in t.vehicles.items" :key="i"
          style="background:white;border:1px solid #e5e7eb;border-radius:8px;padding:24px 16px;text-align:center;transition:all 0.2s"
          onmouseover="this.style.borderColor='#0B1A3A';this.style.boxShadow='0 4px 16px rgba(0,0,0,0.08)'"
          onmouseout="this.style.borderColor='#e5e7eb';this.style.boxShadow='none'">
          <div style="height:68px;display:flex;align-items:center;justify-content:center;margin-bottom:12px">
            <img :src="icons[i]" :alt="v.name" style="max-height:60px;max-width:80%;object-fit:contain" />
          </div>
          <h3 style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#0f2066;margin:0 0 8px 0">
            {{ v.name }}
          </h3>
          <p style="font-family:'DM Sans',sans-serif;font-size:13px;color:#6b7280;line-height:1.6;margin:0">
            {{ v.desc }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import iconSedan from '@/assets/icons/sedan.png'
import iconMPV   from '@/assets/icons/mpv.png'
import iconSUV   from '@/assets/icons/suv.png'
import iconVan   from '@/assets/icons/van.png'
import iconTruck from '@/assets/icons/truck.png'

const { t }   = useI18n()
const icons   = [iconSedan, iconMPV, iconSUV, iconVan, iconTruck]
</script>

<style>
.vehicles-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
@media (max-width: 900px)  { .vehicles-grid { grid-template-columns: repeat(3, 1fr) } }
@media (max-width: 560px)  { .vehicles-grid { grid-template-columns: repeat(2, 1fr) } }
</style>
