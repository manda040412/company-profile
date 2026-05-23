<template>
  <main role="main" aria-label="About Us Page">
    <AboutHero />
    <VisionMission />
    <CapabilitiesSection />
    <DistributionMap />
    <CertificatesSection />
  </main>
</template>

<script setup>
import AboutHero          from '@/components/about/AboutHero.vue'
import VisionMission      from '@/components/about/VisionMission.vue'
import CapabilitiesSection from '@/components/about/CapabilitiesSection.vue'
import DistributionMap    from '@/components/about/DistributionMap.vue'
import CertificatesSection from '@/components/about/CertificatesSection.vue'
</script>
