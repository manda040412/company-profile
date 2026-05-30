<template>
  <section style="background:white;padding:64px 24px">
    <div class="max-w-[1280px] mx-auto">
      <div class="about-teaser-grid">

        <!-- Images — hidden on mobile to save space -->
        <div class="teaser-img-block">
          <div style="position:absolute;top:0;right:0;width:140px;height:160px;background-image:radial-gradient(circle,#c8c8d4 1.5px,transparent 1.5px);background-size:16px 16px;z-index:0;pointer-events:none"/>
          <div style="position:absolute;top:0;left:0;width:62%;aspect-ratio:2/3;overflow:hidden;border-radius:4px;z-index:1;background:#e5e7eb">
            <img src="@/assets/images/gudang.webp" alt="TRAD Warehouse" style="width:100%;height:100%;object-fit:cover;display:block"/>
          </div>
          <div style="position:absolute;bottom:0;right:0;width:54%;aspect-ratio:3/4;overflow:hidden;border-radius:4px;z-index:2;border:4px solid white;box-shadow:0 8px 32px rgba(0,0,0,0.15)">
            <img src="@/assets/images/warehousing.webp" alt="TRAD Warehousing" style="width:100%;height:100%;object-fit:cover;display:block"/>
          </div>
        </div>

        <!-- Text -->
        <div>
          <RouterLink to="/about-us"
            style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;color:#0f2066;text-decoration:underline;display:inline-block;margin-bottom:10px">
            {{ t.aboutTeaser.link }}
          </RouterLink>
          <h2 style="font-family:'DM Sans',sans-serif;font-size:clamp(22px,3vw,34px);font-weight:700;color:#0B1A3A;margin:0 0 12px 0;line-height:1.2">
            {{ t.aboutTeaser.heading }}
          </h2>
          <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:#6b7280;line-height:1.75;margin:0 0 28px 0">
            {{ t.aboutTeaser.sub }}
          </p>

          <div class="teaser-stats-grid">
            <div v-for="(s, i) in t.aboutTeaser.stats" :key="i" style="display:flex;align-items:flex-start;gap:12px">
              <img :src="icons[i]" :alt="s.title" style="width:40px;height:40px;object-fit:contain;flex-shrink:0;margin-top:2px" />
              <div>
                <div style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;color:#0f2066;margin-bottom:4px">{{ s.title }}</div>
                <div style="font-family:'DM Sans',sans-serif;font-size:13px;color:#6b7280;line-height:1.6">{{ s.desc }}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n }    from '@/composables/useI18n'
import iconCertified  from '@/assets/icons/certified.png'
import iconClients    from '@/assets/icons/clients.png'
import iconProducts   from '@/assets/icons/products.png'
import iconExperience from '@/assets/icons/experience.png'

const { t }   = useI18n()
const icons   = [iconCertified, iconClients, iconProducts, iconExperience]
</script>

<style scoped>
.about-teaser-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}
.teaser-img-block {
  position: relative;
  min-height: 400px;
}
.teaser-stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 28px;
}
@media (max-width: 860px) {
  .about-teaser-grid { grid-template-columns: 1fr; gap: 0 }
  .teaser-img-block  { display: none }
  .teaser-stats-grid { grid-template-columns: 1fr 1fr }
}
@media (max-width: 420px) {
  .teaser-stats-grid { grid-template-columns: 1fr }
}
</style>