<template>
  <section class="bg-[#EEF1F5] py-[56px] px-6 lg:px-16">
    <div class="max-w-[1280px] mx-auto">
      <p style="color:#0f2066;font-size:14px;font-weight:600;text-decoration:underline;text-underline-offset:4px;margin-bottom:6px">
        {{ t.productsHero.eyebrow }}
      </p>
      <h1 style="font-size:clamp(22px,3.5vw,36px);line-height:1.1;font-weight:700;color:#0f2066;margin-bottom:10px;max-width:760px">
        {{ t.productsHero.heading }}
      </h1>
      <p style="font-size:14px;line-height:1.65;color:rgba(0,0,0,0.65);max-width:680px;margin-bottom:28px">
        {{ t.productsHero.desc }}
      </p>

      <div class="products-hero-grid">
        <div style="display:flex;justify-content:center;align-items:center">
          <img src="@/assets/images/banner/spareparts.png" alt="Spare parts catalogue"
               style="width:100%;max-width:480px;object-fit:contain" />
        </div>
        <div class="products-items-grid">
          <div v-for="(name, i) in t.productsHero.items" :key="i"
            style="display:flex;align-items:center;gap:10px">
            <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
              <img :src="icons[i]" :alt="name" style="width:36px;height:36px;object-fit:contain" />
            </div>
            <p style="color:#0f2066;font-size:13px;font-weight:600;line-height:1.4;margin:0">{{ name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n }    from '@/composables/useI18n'
import bearingIcon    from '@/assets/icons/baering.png'
import suspensionIcon from '@/assets/icons/suspension.png'
import shockIcon      from '@/assets/icons/shock.png'
import brakeIcon      from '@/assets/icons/brake.png'
import waterpumpIcon  from '@/assets/icons/water.png'
import oilsealIcon    from '@/assets/icons/oil-seal.png'
import fanbeltIcon    from '@/assets/icons/fan-belt.png'
import wiperIcon      from '@/assets/icons/wiper.png'
import electricalIcon from '@/assets/icons/electrical.png'
import batteryIcon    from '@/assets/icons/battery.png'
import cableIcon      from '@/assets/icons/list-item.png'

const { t }   = useI18n()
const icons   = [bearingIcon, oilsealIcon, suspensionIcon, fanbeltIcon, shockIcon, wiperIcon, brakeIcon, electricalIcon, waterpumpIcon, batteryIcon, cableIcon]
</script>

<style>
.products-hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  align-items: center;
}
.products-items-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 18px;
}
@media (max-width: 860px) {
  .products-hero-grid  { grid-template-columns: 1fr }
  .products-items-grid { grid-template-columns: 1fr 1fr }
}
@media (max-width: 400px) {
  .products-items-grid { grid-template-columns: 1fr }
}
</style>
