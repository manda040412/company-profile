<template>
  <main role="main" style="min-height:60vh;display:flex;align-items:center;justify-content:center;padding:60px 24px;background:#f5f6f8">
    <div style="text-align:center">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:clamp(80px,15vw,160px);color:#0f2066;line-height:1;margin-bottom:16px">404</div>
      <p style="font-family:'DM Sans',sans-serif;font-size:18px;color:#555;margin:0 0 32px 0;max-width:440px">{{ t.notFound.message }}</p>
      <RouterLink to="/"
        style="font-family:'DM Sans',sans-serif;font-size:15px;font-weight:700;color:#0f2066;text-decoration:none;border:2px solid #0f2066;padding:12px 36px;border-radius:4px;display:inline-block;transition:0.2s"
        onmouseover="this.style.background='#0f2066';this.style.color='white'"
        onmouseout="this.style.background='transparent';this.style.color='#0f2066'">
        {{ t.notFound.back }}
      </RouterLink>
    </div>
  </main>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
