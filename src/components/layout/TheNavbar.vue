<template>
  <div class="sticky top-0 z-[900]">
    <nav
      class="bg-white w-full transition-shadow duration-200"
      :class="scrolled ? 'shadow-md' : 'shadow-sm'"
      style="border-bottom:1px solid #e5e7eb"
      role="navigation"
      aria-label="Main navigation"
    >
      <div class="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center justify-between" style="height:88px">

        <!-- LOGO — larger -->
        <RouterLink to="/" class="flex-shrink-0 no-underline"
          aria-label="PT Timur Raya Anugerah Damai"
          @click="analytics.track('click','nav_logo')">
          <img
            src="@/assets/images/TRAD Logo.png"
            alt="PT Timur Raya Anugerah Damai"
            style="height:48px;width:auto;display:block"
          />
        </RouterLink>

        <!-- Nav links -->
        <ul class="flex items-center list-none" style="gap:4px;margin:0;padding:0">
          <li v-for="item in navItems" :key="item.to" style="list-style:none">
            <RouterLink :to="item.to" custom v-slot="{ isActive, navigate }">
              <button
                @click="navigate(); analytics.track('click','nav_'+item.label)"
                class="hover-nav-item"
                :style="{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: '\'DM Sans\', sans-serif',
                  fontSize: '14px',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '8px 16px',
                  position: 'relative',
                  color: isActive ? '#0f2066' : '#0B1A3A',
                  whiteSpace: 'nowrap',
                }"
              >
                {{ item.label }}
                <span v-if="isActive"
                  style="position:absolute;bottom:-2px;left:16px;right:16px;height:2px;background:#0f2066;border-radius:2px" />
              </button>
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useAnalyticsStore } from '@/stores/analytics'
const analytics = useAnalyticsStore()
const scrolled  = ref(false)
function onScroll() { scrolled.value = window.scrollY > 10 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
const navItems = [
  { to: '/',          label: 'Home' },
  { to: '/about-us',  label: 'About Us' },
  { to: '/services',  label: 'Services' },
  { to: '/products',  label: 'Products' },
  { to: '/articles',  label: 'Articles' },
  { to: '/contact',   label: 'Contact Us' },
]
</script>
<style>
.hover-nav-item:hover { color: #0f2066 !important; }
</style>
