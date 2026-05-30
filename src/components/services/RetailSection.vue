<template>
  <section class="bg-[#EEF1F5] py-[60px] px-6 lg:px-16">
    <div class="max-w-[1280px] mx-auto">
      <div class="retail-grid">

        <!-- TEXT -->
        <div>
          <p style="text-transform:uppercase;color:#0f2066;font-size:14px;letter-spacing:0.07em;font-weight:600;margin-bottom:10px">
            {{ t.retail.label }}
          </p>
          <h2 style="font-size:clamp(24px,4vw,40px);line-height:1.05;font-weight:700;color:black;margin-bottom:18px">
            {{ t.retail.title1 }}<br />{{ t.retail.title2 }}
          </h2>
          <p style="font-size:14px;line-height:1.8;color:rgba(0,0,0,0.75);margin-bottom:28px">
            {{ t.retail.desc }}
          </p>
          <div class="retail-features">
            <div v-for="(feat, i) in t.retail.features" :key="i"
              style="background:#0f2066;border-radius:50%;width:150px;height:150px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:14px;flex-shrink:0">
              <img :src="icons[i]" :alt="feat.label" style="width:54px;height:54px;object-fit:contain;margin-bottom:8px" />
              <p style="color:white;font-size:12px;line-height:1.2;font-weight:600;margin:0;white-space:pre-line">{{ feat.label }}</p>
            </div>
          </div>
        </div>

        <!-- IMAGE -->
        <div class="retail-img-wrap">
          <img src="@/assets/images/partners/employee.png" alt="Retail Partner"
               style="width:100%;height:100%;object-fit:cover;border-radius:16px" />
          <div class="retail-float" style="position:absolute;bottom:-16px;left:-40px;background:#0f2066;border-radius:14px;padding:22px 28px;max-width:280px">
            <p style="color:white;font-size:17px;line-height:1.1;font-weight:700;margin:0">{{ t.retail.floating }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n }      from '@/composables/useI18n'
import availabilityIcon from '@/assets/icons/availability.png'
import dispatchIcon     from '@/assets/icons/dispatch.png'
import partnerIcon      from '@/assets/icons/partner.png'

const { t }   = useI18n()
const icons   = [availabilityIcon, dispatchIcon, partnerIcon]
</script>

<style>
.retail-grid {
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 64px;
  align-items: center;
}
.retail-img-wrap {
  position: relative;
  height: 520px;
}
.retail-float  { display: block }
.retail-features {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .retail-grid    { grid-template-columns: 1fr; gap: 36px }
  .retail-img-wrap{ height: 320px }
  .retail-float   { display: none }
}
@media (max-width: 480px) {
  .retail-features { justify-content: center }
}
</style>
