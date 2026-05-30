<template>
  <section class="bg-white py-[56px] px-6 lg:px-16">
    <div class="max-w-[1280px] mx-auto">
      <h3 style="font-weight:700;text-align:center;color:#0f2066;font-size:clamp(22px,3vw,36px);letter-spacing:0.06em;text-transform:uppercase;margin-bottom:32px">
        {{ t.fleetPartner.heading }}
      </h3>
      <div class="partner-grid">
        <div v-for="p in partners" :key="p.name"
          style="display:flex;align-items:center;justify-content:center;padding:12px">
          <img :src="p.logo" :alt="p.name" style="max-height:70px;max-width:180px;object-fit:contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
import mgmLogo      from '@/assets/images/partners/mgm.png'
import ironbirdLogo from '@/assets/images/partners/ironbird.png'
import kiatLogo     from '@/assets/images/partners/kiat.png'
import indonusaLogo from '@/assets/images/partners/indonusa.png'
import mobrentLogo  from '@/assets/images/partners/mobrent.png'

const { t } = useI18n()
const partners = [
  { name: 'MGM Bosco Logistics', logo: mgmLogo },
  { name: 'Ironbird Logistics',  logo: ironbirdLogo },
  { name: 'Kiat Ananda Group',   logo: kiatLogo },
  { name: 'Indonusa Group',      logo: indonusaLogo },
  { name: 'Mobrent',             logo: mobrentLogo },
]
</script>

<style>
.partner-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
}
@media (max-width: 860px) { .partner-grid { grid-template-columns: repeat(3, 1fr) } }
@media (max-width: 480px) { .partner-grid { grid-template-columns: repeat(2, 1fr) } }
</style>
