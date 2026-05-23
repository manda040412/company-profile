<template>
  <section class="bg-white py-16 px-6 md:px-12" aria-labelledby="about-heading">
    <div class="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-16 items-start">

      <!-- LEFT: Overlapping image layout with dot pattern -->
      <div class="flex-shrink-0" style="position:relative;width:100%;max-width:460px;min-height:480px">

        <!-- Dot pattern background (top-right) -->
        <div style="
          position:absolute;
          top:0; right:0;
          width:200px; height:220px;
          background-image: radial-gradient(circle, #c8c8d4 1.5px, transparent 1.5px);
          background-size: 16px 16px;
          z-index:0;
          pointer-events:none;
        "/>

        <!-- Main image — tall portrait, left -->
        <div style="
          position:absolute;
          top:0; left:0;
          width:65%; 
          aspect-ratio:2/3;
          overflow:hidden;
          border-radius:4px;
          z-index:1;
          background:#e5e7eb;
        ">
          <img
            src="@/assets/images/gudang.webp"
            alt="TRAD Warehouse"
            style="width:100%;height:100%;object-fit:cover;display:block"
          />
        </div>

        <!-- Second image — overlap bottom-right -->
        <div style="
          position:absolute;
          bottom:0; right:0;
          width:58%;
          aspect-ratio:3/4;
          overflow:hidden;
          border-radius:4px;
          z-index:2;
          border:5px solid white;
          box-shadow:0 8px 32px rgba(0,0,0,0.15);
          background:#d1d5db;
        ">
          <img
            src="@/assets/images/warehousing.webp"
            alt="TRAD Warehousing"
            style="width:100%;height:100%;object-fit:cover;display:block"
          />
        </div>

      </div>

      <!-- RIGHT: Text + Stats -->
      <div class="flex-1" style="padding-top:16px">
        <RouterLink to="/about-us"
          style="font-family:'DM Sans',sans-serif;font-size:15px;font-weight:700;color:#0f2066;text-decoration:underline;display:inline-block;margin-bottom:12px"
          @click="analytics.track('click','about_link')">
          About Us
        </RouterLink>
        <h2 id="about-heading"
            style="font-family:'DM Sans',sans-serif;font-size:clamp(26px,3vw,38px);font-weight:700;color:#0B1A3A;margin:0 0 14px 0;line-height:1.2">
          Industry Leadership
        </h2>
        <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:#6b7280;line-height:1.75;margin:0 0 36px 0">
          Trusted by automotive professionals in Indonesia for excellence in quality and service.
        </p>

        <!-- Stats 2x2 grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:28px 40px">
          <div v-for="s in stats" :key="s.title" style="display:flex;align-items:flex-start;gap:14px">
            <img :src="s.icon" :alt="s.title"
                 style="width:48px;height:48px;object-fit:contain;flex-shrink:0;margin-top:2px" />
            <div>
              <div style="font-family:'DM Sans',sans-serif;font-size:18px;font-weight:700;color:#0f2066;margin-bottom:6px">
                {{ s.title }}
              </div>
              <div style="font-family:'DM Sans',sans-serif;font-size:15px;color:#6b7280;line-height:1.6">
                {{ s.desc }}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { useAnalyticsStore } from '@/stores/analytics'
import iconCertified  from '@/assets/icons/certified.png'
import iconClients    from '@/assets/icons/clients.png'
import iconProducts   from '@/assets/icons/products.png'
import iconExperience from '@/assets/icons/experience.png'

const analytics = useAnalyticsStore()

const stats = [
  { icon: iconCertified,  title: 'ISO 9001:2015 Certified', desc: 'Certified to guarantee consistent quality and reliability.' },
  { icon: iconClients,    title: '1,600+ Satisfied Clients', desc: 'Trusted by over 1,600 clients for our exceptional service.' },
  { icon: iconProducts,   title: '5,000+ Premium Products',  desc: 'Vast catalog of premium parts. Find exactly what you need.' },
  { icon: iconExperience, title: '50+ Years Experience',     desc: 'Over 50 years of industry expertise.' },
]
</script>
