<template>
  <div>
    <TheTopbar />
    <TheNavbar />

    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.name" />
      </Transition>
    </RouterView>

    <TheFooter />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAnalyticsStore } from '@/stores/analytics'

import TheTopbar     from '@/components/layout/TheTopbar.vue'
import TheNavbar     from '@/components/layout/TheNavbar.vue'
import TheFooter     from '@/components/layout/TheFooter.vue'

const route = useRoute()

// Store harus diinisialisasi di dalam setup(), setelah app.use(pinia)
const analytics = useAnalyticsStore()

// Track page view on route change
watch(() => route.name, (newName, oldName) => {
  if (oldName) analytics.trackDwell(oldName)
  analytics.setPageEnter()
  analytics.track('pageview', newName || 'home')
}, { immediate: true })

// Scroll depth tracking
function handleScroll() {
  const total = document.documentElement.scrollHeight - document.documentElement.clientHeight
  if (total <= 0) return
  const pct = Math.round(window.scrollY / total * 100)
  analytics.trackScroll(pct, route.name || 'home')
}

// Tab visibility tracking
function handleVisibility() {
  analytics.track(
    'visibility',
    document.hidden ? `hidden — ${route.name}` : `returned — ${route.name}`
  )
}

onMounted(() => {
  analytics.init()
  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('visibilitychange', handleVisibility)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('visibilitychange', handleVisibility)
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(16px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
