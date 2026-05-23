<template>
  <section class="bg-navy px-12 py-20" aria-labelledby="brands-heading">
    <div class="section-tag">Our Brand Partners</div>
    <h2 class="section-h2-white" id="brands-heading">TRUSTED BRANDS</h2>
    <p class="section-lead-white mb-10">
      Official authorized distributor for Japan's most trusted automotive spare parts brands.
    </p>

    <div class="flex flex-wrap gap-3">
      <div
        v-for="b in site.brands" :key="b"
        class="bg-white/6 border border-white/10 text-white/60 font-head text-[18px] tracking-[0.12em] px-5 py-3 rounded-sm hover:bg-white/12 hover:text-white transition-all duration-200 cursor-default"
      >
        {{ b }}
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSiteStore } from '@/stores/site'
const site = useSiteStore()
</script>
