<template>
  <section class="bg-[#EEF1F5] px-6 lg:px-16 py-[80px]">
    <div class="max-w-[1400px] mx-auto">

      <!-- Assist banner -->
      <div class="assist-banner">
        <div style="max-width:380px;z-index:10">
          <h2 style="color:#0f2066;font-size:clamp(16px,1.6vw,20px);line-height:1.5;font-weight:700">
            {{ t.brands.assistHeading }}
          </h2>
        </div>
        <div class="assist-img">
          <img src="@/assets/images/product.png" alt="Spare Parts" style="width:220px;object-fit:contain" />
        </div>
        <div style="display:flex;align-items:center;gap:14px;z-index:10">
          <div style="width:52px;height:52px;border-radius:50%;border:3px solid #0f2066;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#0f2066" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.57 2.28a2 2 0 01-.45 1.82l-1.2 1.2a16 16 0 006.36 6.36l1.2-1.2a2 2 0 011.82-.45l2.28.57A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
          </div>
          <div>
            <p style="color:#0f2066;font-size:14px;font-weight:500;margin-bottom:2px">{{ t.brands.callChat }}</p>
            <a href="https://wa.me/6281298155372" target="_blank"
               style="color:#0f2066;font-size:15px;font-weight:700;text-decoration:none">
              +62 812-9815-5372
            </a>
          </div>
        </div>
      </div>

      <!-- Store links -->
      <div style="text-align:center;margin-top:48px">
        <p style="color:rgba(0,0,0,0.45);font-size:15px;line-height:1.7;margin-bottom:36px">{{ t.brands.storeDesc }}</p>
        <div class="store-grid">
          <a href="https://tokopedia.link/FvNr5qU45Xb" target="_blank" class="hover:scale-105 transition-transform duration-200">
            <img src="@/assets/images/partners/tokopedia.webp" alt="Tokopedia" style="width:200px;object-fit:contain" />
          </a>
          <a href="https://shopee.co.id/timurrayaanugerahdamai" target="_blank" class="hover:scale-105 transition-transform duration-200">
            <img src="@/assets/images/partners/shopee.png" alt="Shopee" style="width:200px;object-fit:contain" />
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<style>
.assist-banner {
  position: relative;
  background: white;
  border-radius: 20px;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 60px;
  gap: 24px;
  flex-wrap: wrap;
}
.assist-img {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -90px;
}
.store-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
}
@media (max-width: 768px) {
  .assist-banner { padding: 28px 24px; justify-content: center; text-align: center }
  .assist-img { display: none }
  .store-grid { gap: 40px }
}
</style>
