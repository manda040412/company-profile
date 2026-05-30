<template>
  <section class="relative overflow-hidden" aria-label="Fleet CTA" style="min-height:360px">
    <div class="absolute inset-0">
      <img src="@/assets/images/banner/logistic.webp" alt="Fleet & Logistics"
           style="width:100%;height:100%;object-fit:cover;display:block"/>
      <div class="absolute inset-0"/>
    </div>
    <div class="relative z-10 flex items-center justify-center" style="min-height:360px;padding:60px 24px">
      <div style="text-align:center;max-width:1000px">
        <p style="font-family:'DM Sans',sans-serif;font-size:clamp(28px,2.2vw,38px);font-weight:700;color:white;line-height:1.2;margin:0 0 20px 0">
          {{ t.cta.line1 }}
        </p>
        <p style="font-family:'DM Sans',sans-serif;font-size:clamp(28px,2.2vw,38px);font-weight:700;color:white;margin:0">
          {{ t.cta.line2 }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
