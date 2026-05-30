<template>
  <section class="bg-white py-[56px] px-6 md:px-10">
    <div class="max-w-[1280px] mx-auto">
      <div style="text-align:center;margin-bottom:28px">
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(24px,3.5vw,38px);font-weight:400;color:#0f2066;letter-spacing:0.06em">
          {{ t.capabilities.heading }}
        </h2>
      </div>
      <div class="caps-grid">
        <article v-for="(cap, i) in t.capabilities.items" :key="i"
          class="caps-card"
          onmouseover="this.style.background='#f5f7ff'"
          onmouseout="this.style.background='white'">
          <img :src="icons[i]" :alt="cap.title" style="width:48px;height:48px;object-fit:contain;margin-bottom:14px;display:block" />
          <h3 style="font-family:'Bebas Neue',sans-serif;font-size:18px;font-weight:400;letter-spacing:0.08em;color:#0f2066;margin-bottom:8px;line-height:1.3">
            {{ cap.title }}
          </h3>
          <p style="font-family:'DM Sans',sans-serif;font-size:13px;color:#5c5c5c;line-height:1.7;margin:0">
            {{ cap.desc }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n }       from '@/composables/useI18n'
import supportIcon       from '@/assets/icons/support.png'
import knowIcon          from '@/assets/icons/know.png'
import guaranteedIcon    from '@/assets/icons/guaranteed.png'
import pickupIcon        from '@/assets/icons/pickup.png'
import deliveryIcon      from '@/assets/icons/delivery.png'

const { t } = useI18n()
const icons = [supportIcon, knowIcon, guaranteedIcon, pickupIcon, deliveryIcon]
</script>

<style>
.caps-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid #e2e6f0;
  border-radius: 10px;
  overflow: hidden;
}
.caps-card {
  padding: 28px 20px;
  border-right: 1px solid #e2e6f0;
  transition: background 0.2s;
  cursor: default;
  background: white;
}
.caps-card:last-child { border-right: none }

@media (max-width: 1024px) {
  .caps-grid { grid-template-columns: repeat(3, 1fr) }
  .caps-card:nth-child(3) { border-right: none }
  .caps-card:nth-child(4), .caps-card:nth-child(5) { border-top: 1px solid #e2e6f0 }
}
@media (max-width: 640px) {
  .caps-grid { grid-template-columns: 1fr 1fr }
  .caps-card { border-right: 1px solid #e2e6f0 }
  .caps-card:nth-child(2n) { border-right: none }
  .caps-card:nth-child(n+3) { border-top: 1px solid #e2e6f0 }
}
@media (max-width: 360px) {
  .caps-grid { grid-template-columns: 1fr }
  .caps-card { border-right: none; border-top: 1px solid #e2e6f0 }
  .caps-card:first-child { border-top: none }
}
</style>
