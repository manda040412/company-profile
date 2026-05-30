<template>
  <main role="main" aria-label="Products Page">
    <ProductsHero />
    <ProductCatalog />
    <BrandsSection />
  </main>
</template>

<script setup>
import ProductsHero  from '@/components/products/ProductsHero.vue'
import ProductCatalog from '@/components/products/ProductCatalog.vue'
import BrandsSection from '@/components/products/BrandsSection.vue'
</script>
