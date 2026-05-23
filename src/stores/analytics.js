import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const STORAGE_KEY = 'trad_analytics_v2'

function load() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultData()
  } catch { return defaultData() }
}

function defaultData() {
  return {
    sessions: 0,
    totalPageViews: 0,
    totalClicks: 0,
    pageViews: {},
    pageDwell: {},
    clicks: {},
    events: [],
    firstVisit: new Date().toISOString(),
  }
}

function save(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)) } catch {}
}

export const useAnalyticsStore = defineStore('analytics', () => {
  const data = ref(load())
  const sessionStart = ref(Date.now())
  const pageEnterTime = ref(Date.now())
  const maxScroll = ref(0)
  const initialized = ref(false)

  // Call this once from App.vue onMounted — safe after pinia is ready
  function init() {
    if (initialized.value) return
    initialized.value = true
    data.value.sessions++
    save(data.value)
  }

  // ── Track event ──
  function track(type, detail) {
    const ev = {
      id: Date.now() + Math.random(),
      type,
      detail,
      time: new Date().toLocaleTimeString('id-ID'),
      page: window.location.pathname,
    }
    data.value.events.unshift(ev)
    if (data.value.events.length > 300) {
      data.value.events = data.value.events.slice(0, 300)
    }

    if (type === 'click') {
      data.value.totalClicks++
      data.value.clicks[detail] = (data.value.clicks[detail] || 0) + 1
    }
    if (type === 'pageview') {
      data.value.totalPageViews++
      data.value.pageViews[detail] = (data.value.pageViews[detail] || 0) + 1
    }
    save(data.value)
  }

  // ── Track dwell time when leaving page ──
  function trackDwell(page) {
    const elapsed = Date.now() - pageEnterTime.value
    if (!data.value.pageDwell[page]) data.value.pageDwell[page] = []
    data.value.pageDwell[page].push(elapsed)
    save(data.value)
  }

  // ── Reset page enter time ──
  function setPageEnter() {
    pageEnterTime.value = Date.now()
    maxScroll.value = 0
  }

  // ── Scroll track ──
  function trackScroll(pct, page) {
    if (pct > maxScroll.value) {
      maxScroll.value = pct
      if (pct % 25 === 0 && pct > 0) {
        track('scroll', `${pct}% — ${page}`)
      }
    }
  }

  // ── Clear ──
  function clearAll() {
    data.value = defaultData()
    data.value.sessions = 1
    save(data.value)
  }

  // ── Computed for dashboard ──
  const pageViewStats = computed(() => {
    const pv = data.value.pageViews
    const dw = data.value.pageDwell
    const total = Math.max(1, Object.values(pv).reduce((a, b) => a + b, 0))
    return Object.entries(pv)
      .map(([page, views]) => {
        const dwells = dw[page] || []
        const avgMs = dwells.length ? dwells.reduce((a, b) => a + b, 0) / dwells.length : 0
        const avgTime = avgMs >= 60000
          ? `${Math.floor(avgMs / 60000)}m ${Math.floor((avgMs % 60000) / 1000)}s`
          : `${Math.floor(avgMs / 1000)}s`
        return { page, views, avgTime, pct: Math.round(views / total * 100) }
      })
      .sort((a, b) => b.views - a.views)
  })

  const clickStats = computed(() => {
    const cl = data.value.clicks
    const total = Math.max(1, Object.values(cl).reduce((a, b) => a + b, 0))
    return Object.entries(cl)
      .map(([element, count]) => ({ element, count, pct: Math.round(count / total * 100) }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 20)
  })

  const avgDwell = computed(() => {
    const all = Object.values(data.value.pageDwell).flat()
    if (!all.length) return '—'
    const avg = all.reduce((a, b) => a + b, 0) / all.length
    return avg >= 60000
      ? `${Math.floor(avg / 60000)}m ${Math.floor((avg % 60000) / 1000)}s`
      : `${Math.floor(avg / 1000)}s`
  })

  const recentEvents = computed(() => data.value.events.slice(0, 50))

  const sessionDuration = computed(() => {
    const ms = Date.now() - sessionStart.value
    const s = Math.floor(ms / 1000)
    return s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`
  })

  const sessionInfo = {
    ua: navigator.userAgent,
    screen: `${screen.width}×${screen.height}`,
    lang: navigator.language,
    tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
    ref: document.referrer || 'Direct',
  }

  return {
    data,
    sessionStart,
    maxScroll,
    init,
    track,
    trackDwell,
    setPageEnter,
    trackScroll,
    clearAll,
    pageViewStats,
    clickStats,
    avgDwell,
    recentEvents,
    sessionDuration,
    sessionInfo,
  }
})
