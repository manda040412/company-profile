<template>
  <main role="main" aria-label="Brand Detail Page">

    <!-- BRAND FOUND -->
    <BrandDetail v-if="brand" :brand="brand" />

    <!-- NOT FOUND -->
    <div v-else class="bg-[#EEF1F5] px-6 lg:px-16 py-[120px] text-center">
      <p class="text-[#0f2066] text-[22px] font-semibold mb-[20px]">Brand not found.</p>
      <RouterLink
        to="/products"
        class="inline-flex items-center gap-[8px] text-[#0f2066] font-semibold underline"
      >
        ← Back to Products
      </RouterLink>
    </div>

  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { getBrandBySlug } from '@/data/brandsData.js'
import BrandDetail from '@/components/products/BrandDetail.vue'

const route = useRoute()
const brand = computed(() => getBrandBySlug(route.params.slug))
</script>