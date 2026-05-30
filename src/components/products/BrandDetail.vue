<template>
  <div>
    <!-- BACK BUTTON -->
    <div style="background:white;border-bottom:1px solid #E3E6ED;padding:16px 24px">
      <div class="max-w-[1400px] mx-auto">
        <RouterLink to="/products"
          style="display:inline-flex;align-items:center;gap:10px;color:#0f2066;font-size:14px;font-weight:600;text-decoration:none">
          <span style="width:32px;height:32px;border-radius:50%;border:2px solid #0f2066;display:flex;align-items:center;justify-content:center;flex-shrink:0">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#0f2066" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </span>
          Back to Products
        </RouterLink>
      </div>
    </div>

    <!-- MAIN -->
    <section style="background:#EEF1F5;padding:48px 24px" class="lg:px-16">
      <div class="max-w-[1400px] mx-auto">

        <!-- BRAND HEADER -->
        <div class="brand-header">
          <!-- Logo -->
          <div style="background:white;border-radius:20px;border:1px solid #E3E6ED;display:flex;align-items:center;justify-content:center;padding:24px;flex-shrink:0" class="brand-logo-box">
            <img :src="brand.logo" :alt="brand.name" style="max-width:200px;max-height:130px;object-fit:contain" />
          </div>
          <!-- Text -->
          <div style="flex:1;padding-top:8px">
            <h2 style="color:#0f2066;font-size:clamp(22px,3vw,30px);font-weight:700;margin-bottom:14px;line-height:1.2">
              {{ brand.titleEN }}
            </h2>
            <p style="color:rgba(0,0,0,0.68);font-size:clamp(14px,1.2vw,16px);line-height:1.8;max-width:680px">
              {{ brand.descEN }}
            </p>
            <p v-if="brand.descID" style="color:rgba(0,0,0,0.45);font-size:14px;line-height:1.8;max-width:680px;margin-top:10px;font-style:italic">
              {{ brand.descID }}
            </p>
          </div>
        </div>

        <!-- INFO + PRODUCTS GRID -->
        <div class="brand-detail-grid">

          <!-- LEFT: INFO -->
          <div style="background:white;border-radius:22px;border:1px solid #E3E6ED;padding:32px">
            <h3 style="color:#0f2066;font-size:20px;font-weight:700;font-style:italic;margin-bottom:24px">Information</h3>

            <div style="margin-bottom:20px">
              <p style="color:#0f2066;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px">Company:</p>
              <p style="color:rgba(0,0,0,0.68);font-size:15px;margin:0">{{ brand.company }}</p>
            </div>

            <div :style="{ marginBottom: brand.catalogImage ? '24px' : '0' }">
              <p style="color:#0f2066;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:6px">Website:</p>
              <a v-if="brand.website" :href="brand.website" target="_blank"
                 style="color:rgba(15,32,102,0.65);font-size:14px;word-break:break-all;text-decoration:underline">
                {{ brand.websiteLabel }}
              </a>
              <p v-else style="color:rgba(0,0,0,0.35);font-size:14px;font-style:italic;margin:0">—</p>
            </div>

            <a v-if="brand.catalogImage && brand.catalogLink"
               :href="brand.catalogLink" target="_blank"
               style="display:block;border-radius:14px;overflow:hidden;border:1px solid #E3E6ED;transition:all 0.2s"
               onmouseover="this.style.boxShadow='0 4px 16px rgba(0,0,0,0.12)';this.style.transform='translateY(-2px)'"
               onmouseout="this.style.boxShadow='none';this.style.transform='none'">
              <img :src="brand.catalogImage" :alt="`${brand.name} Catalog`" style="width:100%;object-fit:cover;display:block" />
            </a>
          </div>

          <!-- RIGHT: PRODUCT LINE UP -->
          <div style="background:white;border-radius:22px;border:1px solid #E3E6ED;padding:32px">
            <h3 style="color:#0f2066;font-size:17px;font-weight:700;font-style:italic;margin-bottom:22px">Product Line up</h3>
            <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px">
              <li v-for="item in brand.productLineup" :key="item"
                  style="display:flex;align-items:center;gap:10px;color:rgba(0,0,0,0.62);font-size:15px;font-style:italic;line-height:1.5">
                <span style="width:5px;height:5px;border-radius:50%;background:rgba(15,32,102,0.3);flex-shrink:0"></span>
                {{ item }}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
defineProps({ brand: { type: Object, required: true } })
</script>

<style scoped>
.brand-header {
  display: flex;
  align-items: flex-start;
  gap: 48px;
  margin-bottom: 48px;
}
.brand-logo-box {
  width: 280px;
  height: 180px;
}
.brand-detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

@media (max-width: 900px) {
  .brand-header      { flex-direction: column; gap: 24px }
  .brand-logo-box    { width: 100%; height: 160px }
  .brand-detail-grid { grid-template-columns: 1fr }
}
</style>