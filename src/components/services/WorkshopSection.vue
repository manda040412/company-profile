<template>
  <section class="bg-white px-12 py-24" aria-labelledby="workshop-heading">
    <div class="section-tag">Integrated Service Pledge</div>
    <h2 class="section-h2" id="workshop-heading">INSTALLATION SERVICES</h2>
    <p class="section-lead mb-14">
      Anugerah Auto Workshop — expert technicians install our certified parts
      with service warranty available.
    </p>

    <div class="grid grid-cols-3 sm:grid-cols-6 gap-4 mb-12" role="list">
      <article
        v-for="ws in site.workshopServices" :key="ws.name"
        class="bg-cream-dark border-[1.5px] border-transparent rounded-md py-7 px-4 text-center hover:border-navy transition-all duration-200"
        role="listitem"
        :aria-label="ws.name"
      >
        <div class="text-[32px] mb-2.5" aria-hidden="true">{{ ws.icon }}</div>
        <div class="font-head text-[13px] tracking-[0.08em] text-navy">{{ ws.name }}</div>
      </article>
    </div>

    <!-- Workshop CTA banner -->
    <div class="relative bg-navy rounded-md overflow-hidden px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
      <div class="absolute inset-0 bg-grid opacity-100" />
      <div class="relative z-10">
        <div class="text-[11px] font-bold tracking-[0.18em] uppercase text-gold mb-2">Anugerah Auto Workshop</div>
        <h3 class="font-head text-[28px] tracking-wide text-white leading-none mb-2">
          NEED A PROFESSIONAL INSTALLATION?
        </h3>
        <p class="text-[14px] text-white/50">
          Our workshop uses only genuine TRAD-sourced spare parts, installed by certified technicians.
        </p>
      </div>
      <div class="relative z-10 flex-shrink-0">
        <a
          :href="site.company.workshop"
          target="_blank"
          rel="noopener"
          class="btn-white whitespace-nowrap"
          @click="analytics.track('click', 'workshop_visit_link')"
        >
          Visit Workshop ↗
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSiteStore }      from '@/stores/site'
import { useAnalyticsStore } from '@/stores/analytics'
const site      = useSiteStore()
const analytics = useAnalyticsStore()
</script>
