<template>
  <section class="bg-cream px-12 py-24" aria-labelledby="catalog-heading">
    <!-- Header + Filter -->
    <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-12">
      <div>
        <div class="section-tag">Featured Catalog</div>
        <h2 class="section-h2" id="catalog-heading">SPARE PARTS</h2>
      </div>
      <div class="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        <button
          v-for="cat in site.productCats" :key="cat"
          :class="[
            'text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-sm border-[1.5px] cursor-pointer transition-all duration-200 font-body',
            selectedCat === cat
              ? 'bg-navy text-white border-navy'
              : 'bg-white text-navy border-navy/15 hover:bg-navy hover:text-white hover:border-navy'
          ]"
          :aria-pressed="selectedCat === cat"
          @click="selectCat(cat)"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
      <article
        v-for="p in filteredProducts" :key="p.name"
        class="bg-white rounded-md overflow-hidden border-[1.5px] border-navy/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer"
        role="listitem"
        :aria-label="p.name + ' by ' + p.brand"
        @click="analytics.track('click', 'product_' + p.name)"
      >
        <!-- Product image -->
        <div class="h-48 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-navy-deep to-navy-mid">
          <!--
            GAMBAR PRODUK: jika p.img ada, tampilkan gambar:
            <img v-if="p.img" :src="p.img" :alt="p.name" class="w-full h-full object-cover" />
            <span v-else class="text-6xl z-10">{{ p.icon }}</span>
          -->
          <span class="text-6xl z-10">{{ p.icon }}</span>
          <div class="absolute inset-0" style="background: radial-gradient(circle at 30% 50%, rgba(215,43,43,0.18), transparent 68%)" />
          <span
            v-if="p.badge"
            class="absolute top-3 right-3 bg-gold text-navy text-[9px] font-black tracking-[0.14em] px-2 py-0.5 rounded-sm z-10"
          >
            {{ p.badge }}
          </span>
        </div>

        <!-- Info -->
        <div class="p-4.5">
          <div class="text-[10px] font-bold tracking-[0.2em] uppercase text-red mb-1.5">{{ p.brand }}</div>
          <h3 class="font-serif text-[18px] text-navy mb-2 leading-snug">{{ p.name }}</h3>
          <p class="text-[13px] text-gray-400 leading-snug">{{ p.desc }}</p>
        </div>

        <div class="flex items-center justify-between px-4.5 py-3 border-t border-cream-dark">
          <span class="text-[11px] font-semibold tracking-[0.1em] uppercase text-gray-400">View Details</span>
          <div class="w-7 h-7 bg-navy rounded-full flex items-center justify-center text-white text-sm">→</div>
        </div>
      </article>
    </div>

    <!-- Empty state -->
    <div v-if="filteredProducts.length === 0" class="text-center py-20 text-gray-400">
      No products found in this category.
    </div>

    <!-- Bottom CTA -->
    <div class="text-center mt-16 pt-12 border-t border-cream-dark">
      <p class="text-sm text-gray-400 mb-5">Can't find what you need? Our sales team can help.</p>
      <RouterLink
        to="/contact"
        class="btn-primary"
        @click="analytics.track('click', 'products_contact_cta')"
      >
        Request a Quote →
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useSiteStore }      from '@/stores/site'
import { useAnalyticsStore } from '@/stores/analytics'

const site      = useSiteStore()
const analytics = useAnalyticsStore()

const selectedCat = ref('All')

function selectCat(cat) {
  selectedCat.value = cat
  analytics.track('click', 'filter_cat_' + cat)
}

const filteredProducts = computed(() =>
  selectedCat.value === 'All'
    ? site.products
    : site.products.filter(p => p.cat === selectedCat.value)
)
</script>
