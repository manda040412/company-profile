<template>
  <section class="bg-white py-16 text-center">
    <h2 class="font-head text-4xl tracking-wide text-[#0f2066] mb-4">{{ t.servicesHero.heading }}</h2>
    <p class="text-[15px] text-gray-500 max-w-2xl mx-auto leading-relaxed">{{ t.servicesHero.sub }}</p>
  </section>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>
