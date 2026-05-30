<template>
  <div style="background:#0B1A3A;width:100%;position:sticky;top:0;z-index:901">
    <div class="max-w-[1280px] mx-auto px-6 md:px-10" style="height:40px;display:flex;align-items:center;justify-content:space-between">

      <!-- Left: email -->
      <a href="mailto:tranugerahsales1@gmail.com"
         style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.75);font-family:'DM Sans',sans-serif;font-size:13px;text-decoration:none;transition:color 0.2s"
         onmouseover="this.style.color='white'"
         onmouseout="this.style.color='rgba(255,255,255,0.75)'"
         @click="analytics.track('click','topbar_email')">
        <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 0H1C0.45 0 0 0.45 0 1V10C0 10.55 0.45 11 1 11H13C13.55 11 14 10.55 14 10V1C14 0.45 13.55 0 13 0ZM13 10H1V2.5L7 6.5L13 2.5V10ZM7 5.5L1 1.5H13L7 5.5Z" fill="currentColor"/>
        </svg>
        tranugerahsales1@gmail.com
      </a>

      <!-- Right: EN / ID -->
      <div style="display:flex;align-items:center;gap:14px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:600">
        <button
          @click="setLang('EN')"
          :style="{
            background: 'none', border: 'none', cursor: 'pointer',
            color: currentLang === 'EN' ? 'white' : 'rgba(255,255,255,0.55)',
            padding: '0', display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'color 0.2s'
          }"
          @mouseover="e => { if(currentLang !== 'EN') e.currentTarget.style.color='white' }"
          @mouseout="e => { if(currentLang !== 'EN') e.currentTarget.style.color='rgba(255,255,255,0.55)' }"
        >
          <img src="https://flagcdn.com/w20/gb.png" alt="EN" width="20" height="14" style="display:block;border-radius:2px;object-fit:cover" />
          EN
        </button>
        <button
          @click="setLang('ID')"
          :style="{
            background: 'none', border: 'none', cursor: 'pointer',
            color: currentLang === 'ID' ? 'white' : 'rgba(255,255,255,0.55)',
            padding: '0', display: 'flex', alignItems: 'center', gap: '6px',
            transition: 'color 0.2s'
          }"
          @mouseover="e => { if(currentLang !== 'ID') e.currentTarget.style.color='white' }"
          @mouseout="e => { if(currentLang !== 'ID') e.currentTarget.style.color='rgba(255,255,255,0.55)' }"
        >
          <img src="https://flagcdn.com/w20/id.png" alt="ID" width="20" height="14" style="display:block;border-radius:2px;object-fit:cover" />
          ID
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAnalyticsStore } from '@/stores/analytics'
import { useI18n } from '@/composables/useI18n'

const analytics = useAnalyticsStore()
const { currentLang, setLang } = useI18n()
</script>
