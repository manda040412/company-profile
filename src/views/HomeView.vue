<template>
  <main role="main" aria-label="Home Page">
    <!-- 1. Hero: car diagram + headline -->
    <HeroSection />

    <!-- 2. About: warehouse photos + stats -->
    <AboutTeaser />

    <!-- 3. Vehicles: sedan, MPV, SUV, van, trucks -->
    <VehiclesSection />

    <!-- 4. Partner brands + compatible car brands -->
    <BrandsMarquee />

    <!-- 5. Featured product galleries -->
    <FeaturedProducts />

    <!-- 6. Fleet CTA banner -->
    <CtaBand />
  </main>
</template>

<script setup>
import HeroSection      from '@/components/home/HeroSection.vue'
import AboutTeaser      from '@/components/home/AboutTeaser.vue'
import VehiclesSection  from '@/components/home/VehiclesSection.vue'
import BrandsMarquee    from '@/components/home/BrandsMarquee.vue'
import FeaturedProducts from '@/components/home/FeaturedProducts.vue'
import CtaBand          from '@/components/home/CtaBand.vue'
</script>
