<template>
  <section class="bg-[#eef0f6] overflow-hidden">
    <div class="max-w-[1280px] mx-auto px-6 md:px-10">
      <div class="vm-grid">
        <div class="vm-left">
          <div class="vm-block">
            <h3 class="vm-title">{{ t.visionMission.visionTitle }}</h3>
            <p class="vm-text">{{ t.visionMission.visionText }}</p>
          </div>
          <div class="vm-block">
            <h3 class="vm-title">{{ t.visionMission.missionTitle }}</h3>
            <p class="vm-text">{{ t.visionMission.missionText }}</p>
          </div>
        </div>
        <div class="vm-right" aria-hidden="true">
          <img src="@/assets/images/service.png" alt="" class="vm-car" />
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
.vm-grid {
  display: grid;
  grid-template-columns: 55fr 45fr;
  min-height: 400px;
  align-items: center;
}
.vm-left  { display:flex;flex-direction:column;gap:36px;padding:80px 40px 80px 0 }
.vm-title { font-family:'DM Sans',sans-serif;font-size:20px;font-weight:700;color:#0B1A3A;margin-bottom:10px }
.vm-text  { font-family:'DM Sans',sans-serif;font-size:14px;color:#555;line-height:1.8;max-width:500px }
.vm-right { position:relative;height:100%;min-height:400px }
.vm-car   { position:absolute;bottom:-8px;left:-4%;width:112%;max-width:none;object-fit:contain;filter:drop-shadow(0 8px 24px rgba(0,0,0,0.12)) }

@media (max-width: 860px) {
  .vm-grid  { grid-template-columns: 1fr }
  .vm-left  { padding: 60px 0 }
  .vm-right { display: none }
}
</style>
