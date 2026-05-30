<template>
  <section class="bg-white py-[60px] px-6 lg:px-16">
    <div class="max-w-[1280px] mx-auto">
      <div class="workshop-grid">

        <!-- LEFT -->
        <div>
          <p style="text-transform:uppercase;color:#0f2066;font-size:14px;letter-spacing:0.08em;font-weight:600;margin-bottom:10px">
            {{ t.workshop.label }}
          </p>
          <h2 style="font-size:clamp(22px,3.5vw,36px);line-height:1.05;font-weight:700;color:black;margin-bottom:18px">
            {{ t.workshop.title1 }}<br />{{ t.workshop.title2 }}
          </h2>
          <p style="font-size:14px;line-height:1.75;color:rgba(0,0,0,0.75);margin-bottom:16px">
            {{ t.workshop.desc }}
          </p>
          <div style="display:flex;justify-content:center;margin-bottom:16px">
            <img src="@/assets/images/AAJM.png" alt="Anugerah Auto"
                 style="width:150px;height:100px;object-fit:cover;border-radius:4px" />
          </div>
          <div class="ws-service-grid">
            <div v-for="(name, i) in t.workshop.services" :key="i"
              style="display:flex;align-items:center;gap:10px">
              <img :src="wsIcons[i]" :alt="name" style="width:44px;height:44px;object-fit:contain;flex-shrink:0" />
              <span style="color:#0f2066;font-size:13px;font-weight:600">{{ name }}</span>
            </div>
          </div>
          <div style="display:flex;justify-content:center;margin-top:20px">
            <a href="https://anugerahauto.tranugerah.com/" target="_blank" rel="noopener"
               style="background:#0f2066;color:white;font-size:13px;font-weight:600;height:42px;padding:0 24px;border-radius:4px;text-decoration:none;display:inline-flex;align-items:center">
              {{ t.workshop.findOut }}
            </a>
          </div>
        </div>

        <!-- RIGHT -->
        <div class="ws-img-wrap">
          <img src="@/assets/images/anugerah auto.png" alt="Anugerah Auto"
               style="width:100%;height:100%;object-fit:contain" />
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n }    from '@/composables/useI18n'
import suspensionIcon from '@/assets/icons/suspension.png'
import brakeIcon      from '@/assets/icons/brake.png'
import shockIcon      from '@/assets/icons/shock.png'
import batteryIcon    from '@/assets/icons/battery.png'
import oilIcon        from '@/assets/icons/oil.png'
import tuneupIcon     from '@/assets/icons/tuneup.png'

const { t }    = useI18n()
const wsIcons  = [suspensionIcon, brakeIcon, shockIcon, batteryIcon, oilIcon, tuneupIcon]
</script>

<style>
.workshop-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;
}
.ws-img-wrap { max-height: 500px }
.ws-service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px 20px;
}

@media (max-width: 860px) {
  .workshop-grid { grid-template-columns: 1fr; gap: 32px }
  .ws-img-wrap   { max-height: 280px }
}
@media (max-width: 480px) {
  .ws-service-grid { grid-template-columns: repeat(2, 1fr) }
}
</style>
