<template>
  <section class="bg-navy px-12 py-24" aria-labelledby="fleet-heading">
    <div class="section-tag">Fleet & Enterprise Solutions</div>
    <h2 class="section-h2-white" id="fleet-heading">KEEP YOUR FLEETS<br>MOVING</h2>
    <p class="section-lead-white mb-14">
      Strategic automotive spare parts partner for large-scale operations,
      logistics fleets, and dealer networks across Indonesia.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5" role="list">
      <article
        v-for="(s, i) in site.fleetServices" :key="s.title"
        class="relative overflow-hidden bg-white/[0.03] border border-white/6 px-9 py-11 hover:bg-red/5 transition-colors duration-200"
        role="listitem"
      >
        <div class="absolute top-4 right-4 font-head text-[68px] text-white/[0.04] leading-none select-none">
          {{ String(i + 1).padStart(2, '0') }}
        </div>
        <div class="text-[34px] mb-5">{{ s.icon }}</div>
        <h3 class="font-head text-[22px] tracking-[0.08em] text-white mb-2.5">{{ s.title }}</h3>
        <p class="text-[13px] text-white/42 leading-[1.7]">{{ s.desc }}</p>
      </article>
    </div>

    <!-- Fleet Partner Types -->
    <div class="mt-12">
      <div class="text-[11px] font-bold tracking-[0.18em] uppercase text-white/35 mb-4">
        Who We Serve
      </div>
      <div class="flex flex-wrap gap-3">
        <span
          v-for="fp in fleetPartners" :key="fp"
          class="bg-white/6 border border-white/10 text-white/60 font-head text-[15px] tracking-[0.1em] px-4 py-2.5 rounded-sm hover:bg-white/10 hover:text-white transition-all duration-200"
        >
          {{ fp }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSiteStore } from '@/stores/site'
const site = useSiteStore()

const fleetPartners = [
  'Logistic Companies', 'Dealer Networks', 'Expedition Fleet',
  'Mining Operations', 'Government Fleet', 'Workshop Chains',
]
</script>
