<template>
  <main role="main" aria-label="Services Page">
    <ServicesHero />
    <FleetSection />
    <FleetPartner />
    <RetailSection />
    <WorkshopSection />
  </main>
</template>

<script setup>
import ServicesHero    from '@/components/services/ServicesHero.vue'
import FleetSection    from '@/components/services/FleetSection.vue'
import FleetPartner    from '@/components/services/FleetPartner.vue'
import RetailSection   from '@/components/services/RetailSection.vue'
import WorkshopSection from '@/components/services/WorkshopSection.vue'
</script>
