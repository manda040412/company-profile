<template>
  <div class="sticky top-[40px] z-[900]">
    <nav class="bg-white w-full transition-shadow duration-200"
         :class="scrolled ? 'shadow-md' : 'shadow-sm'"
         style="border-bottom:1px solid #e5e7eb">
      <div class="max-w-[1280px] mx-auto px-6 md:px-10" style="height:72px;display:flex;align-items:center;justify-content:space-between">

        <!-- LOGO -->
        <RouterLink to="/" class="flex-shrink-0 no-underline" aria-label="PT Timur Raya Anugerah Damai">
          <img src="@/assets/images/TRAD Logo.png" alt="PT Timur Raya Anugerah Damai"
               style="height:42px;width:auto;display:block" />
        </RouterLink>

        <!-- Desktop nav -->
        <ul class="nav-desktop flex items-center list-none" style="gap:2px;margin:0;padding:0">
          <li v-for="item in navItems" :key="item.to" style="list-style:none">
            <RouterLink :to="item.to" custom v-slot="{ isActive, navigate }">
              <button @click="navigate"
                class="hover-nav-item"
                :style="{
                  background:'none',border:'none',cursor:'pointer',
                  fontFamily:'\'DM Sans\',sans-serif',fontSize:'13px',fontWeight:'700',
                  letterSpacing:'0.08em',textTransform:'uppercase',
                  padding:'8px 12px',position:'relative',whiteSpace:'nowrap',
                  color: isActive ? '#0f2066' : '#0B1A3A',
                }">
                {{ t.nav[item.key] }}
                <span v-if="isActive"
                  style="position:absolute;bottom:-2px;left:12px;right:12px;height:2px;background:#0f2066;border-radius:2px"/>
              </button>
            </RouterLink>
          </li>
        </ul>

        <!-- Mobile hamburger -->
        <button class="nav-mobile-btn" @click="menuOpen = !menuOpen"
          style="background:none;border:none;cursor:pointer;padding:8px;display:none" aria-label="Menu">
          <div style="display:flex;flex-direction:column;gap:5px">
            <span :style="{ display:'block',width:'24px',height:'2px',background:'#0B1A3A',transition:'all 0.2s',
              transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }"/>
            <span :style="{ display:'block',width:'24px',height:'2px',background:'#0B1A3A',transition:'all 0.2s',
              opacity: menuOpen ? '0' : '1' }"/>
            <span :style="{ display:'block',width:'24px',height:'2px',background:'#0B1A3A',transition:'all 0.2s',
              transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }"/>
          </div>
        </button>
      </div>

      <!-- Mobile dropdown -->
      <Transition name="menu">
        <div v-if="menuOpen" class="nav-mobile-menu"
          style="background:white;border-top:1px solid #e5e7eb;padding:8px 0 16px">
          <RouterLink v-for="item in navItems" :key="item.to" :to="item.to"
            @click="menuOpen = false"
            style="display:block;padding:12px 24px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#0B1A3A;text-decoration:none"
            active-style="color:#0f2066">
            {{ t.nav[item.key] }}
          </RouterLink>
        </div>
      </Transition>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const scrolled  = ref(false)
const menuOpen  = ref(false)

function onScroll() { scrolled.value = window.scrollY > 10 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const navItems = [
  { to: '/',         key: 'home' },
  { to: '/about-us', key: 'about' },
  { to: '/services', key: 'services' },
  { to: '/products', key: 'products' },
  { to: '/articles', key: 'articles' },
  { to: '/contact',  key: 'contact' },
]
</script>

<style>
.hover-nav-item:hover { color:#0f2066 !important }
.menu-enter-active, .menu-leave-active { transition: opacity 0.18s ease, transform 0.18s ease }
.menu-enter-from, .menu-leave-to { opacity:0; transform:translateY(-8px) }

@media (max-width: 860px) {
  .nav-desktop { display: none !important }
  .nav-mobile-btn { display: block !important }
}
@media (min-width: 861px) {
  .nav-mobile-menu { display: none !important }
}
</style>
