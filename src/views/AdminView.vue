<template>
  <main class="px-12 py-10 min-h-screen bg-cream">
    <div class="max-w-6xl mx-auto">
      <h1 class="font-head text-[44px] tracking-wide text-navy mb-1">📊 Analytics Dashboard</h1>
      <p class="text-gray-400 text-sm mb-2">Privacy-first tracking — all data stored locally in browser.</p>

      <div class="bg-gold/10 border border-gold/30 rounded px-4 py-3 text-[13px] text-navy mb-8">
        ⚠️ Data disimpan di <strong>localStorage</strong> browser visitor. Untuk server-side analytics, integrasikan dengan backend API kamu.
      </div>

      <div class="flex justify-between items-center mb-4">
        <span class="text-xs text-gray-400">Session started: {{ new Date(analytics.data.firstVisit).toLocaleString('id-ID') }}</span>
        <div class="flex gap-3">
          <span class="text-xs text-gray-400">Duration: {{ analytics.sessionDuration }}</span>
          <button class="bg-red text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded cursor-pointer border-none hover:bg-red-light" @click="confirmClear">🗑 Clear Data</button>
        </div>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div v-for="card in summaryCards" :key="card.label" class="bg-white border border-navy/6 rounded-md p-6 shadow-sm">
          <div class="text-[10px] font-bold tracking-[0.16em] uppercase text-gray-400 mb-2">{{ card.label }}</div>
          <div class="font-head text-[40px] tracking-wide text-navy leading-none">{{ card.value }}</div>
          <div class="text-xs text-gray-400 mt-1">{{ card.sub }}</div>
        </div>
      </div>

      <!-- Page Views Table -->
      <div class="bg-white rounded-md border border-navy/6 p-7 mb-5 shadow-sm">
        <h3 class="font-head text-[20px] tracking-wide text-navy mb-5">📄 Page Views</h3>
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-left px-3 py-2 border-b-2 border-cream">Page</th>
              <th class="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-left px-3 py-2 border-b-2 border-cream">Views</th>
              <th class="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-left px-3 py-2 border-b-2 border-cream">Avg Time</th>
              <th class="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-left px-3 py-2 border-b-2 border-cream w-32">Traffic</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="pg in analytics.pageViewStats" :key="pg.page" class="hover:bg-cream">
              <td class="px-3 py-2.5 border-b border-cream text-[13px] font-semibold text-navy">{{ pg.page }}</td>
              <td class="px-3 py-2.5 border-b border-cream text-[13px]">{{ pg.views }}</td>
              <td class="px-3 py-2.5 border-b border-cream text-[13px]">{{ pg.avgTime }}</td>
              <td class="px-3 py-2.5 border-b border-cream">
                <div class="h-2 bg-cream rounded-full overflow-hidden">
                  <div class="h-full bg-red rounded-full transition-all duration-700" :style="{ width: pg.pct + '%' }" />
                </div>
              </td>
            </tr>
            <tr v-if="!analytics.pageViewStats.length">
              <td colspan="4" class="text-center py-8 text-gray-400 text-sm">No page views recorded yet.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Click Stats -->
      <div class="bg-white rounded-md border border-navy/6 p-7 mb-5 shadow-sm">
        <h3 class="font-head text-[20px] tracking-wide text-navy mb-5">🖱 Click Events</h3>
        <table class="w-full border-collapse">
          <thead>
            <tr>
              <th class="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-left px-3 py-2 border-b-2 border-cream">Element</th>
              <th class="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-left px-3 py-2 border-b-2 border-cream">Clicks</th>
              <th class="text-[10px] font-bold tracking-[0.14em] uppercase text-gray-400 text-left px-3 py-2 border-b-2 border-cream w-32">Traffic</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ce in analytics.clickStats" :key="ce.element" class="hover:bg-cream">
              <td class="px-3 py-2.5 border-b border-cream text-[13px] font-semibold text-navy">{{ ce.element }}</td>
              <td class="px-3 py-2.5 border-b border-cream text-[13px]">{{ ce.count }}</td>
              <td class="px-3 py-2.5 border-b border-cream">
                <div class="h-2 bg-cream rounded-full overflow-hidden">
                  <div class="h-full bg-navy rounded-full transition-all duration-700" :style="{ width: ce.pct + '%' }" />
                </div>
              </td>
            </tr>
            <tr v-if="!analytics.clickStats.length">
              <td colspan="3" class="text-center py-8 text-gray-400 text-sm">No clicks recorded yet.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Session + Recent Events -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
        <div class="bg-white rounded-md border border-navy/6 p-7 shadow-sm">
          <h3 class="font-head text-[20px] tracking-wide text-navy mb-5">📱 Session Info</h3>
          <table class="w-full border-collapse">
            <tbody>
              <tr v-for="row in sessionRows" :key="row.label" class="hover:bg-cream">
                <td class="px-3 py-2 border-b border-cream text-[11px] font-bold uppercase tracking-widest text-gray-400 w-1/3">{{ row.label }}</td>
                <td class="px-3 py-2 border-b border-cream text-[12px] text-navy break-all">{{ row.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-white rounded-md border border-navy/6 p-7 shadow-sm">
          <h3 class="font-head text-[20px] tracking-wide text-navy mb-5">📋 Recent Events</h3>
          <div class="flex flex-col gap-2 max-h-72 overflow-y-auto">
            <div
              v-for="ev in analytics.recentEvents" :key="ev.id"
              class="flex justify-between items-center px-3 py-2 bg-cream rounded text-xs"
            >
              <span class="font-bold text-navy tracking-wide uppercase">{{ ev.type }}</span>
              <span class="text-gray-400 flex-1 mx-3 truncate">{{ ev.detail }}</span>
              <span class="text-gray-400 shrink-0">{{ ev.time }}</span>
            </div>
            <div v-if="!analytics.recentEvents.length" class="text-center py-8 text-gray-400">
              No events yet.
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-8">
        <RouterLink to="/" class="btn-navy">← Back to Home</RouterLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useAnalyticsStore } from '@/stores/analytics'

const analytics = useAnalyticsStore()

const summaryCards = computed(() => [
  { label: 'Total Sessions',    value: analytics.data.sessions,       sub: 'All time' },
  { label: 'Total Page Views',  value: analytics.data.totalPageViews, sub: 'Across all pages' },
  { label: 'Total Clicks',      value: analytics.data.totalClicks,    sub: 'Interactive elements' },
  { label: 'Avg Dwell Time',    value: analytics.avgDwell,            sub: 'Per page visit' },
])

const sessionRows = computed(() => [
  { label: 'Duration',   value: analytics.sessionDuration },
  { label: 'Scroll Depth', value: analytics.maxScroll + '%' },
  { label: 'Screen',     value: analytics.sessionInfo.screen },
  { label: 'Language',   value: analytics.sessionInfo.lang },
  { label: 'Timezone',   value: analytics.sessionInfo.tz },
  { label: 'Referrer',   value: analytics.sessionInfo.ref },
  { label: 'Browser',    value: analytics.sessionInfo.ua.split(')')[0].split('(')[1] || analytics.sessionInfo.ua.slice(0, 50) },
])

function confirmClear() {
  if (confirm('Clear all analytics data?')) analytics.clearAll()
}
</script>
