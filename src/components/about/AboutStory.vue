<template>
  <section class="bg-white px-12 py-24" aria-labelledby="story-heading">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

      <!-- Image frame -->
      <div class="relative aspect-[4/5] bg-navy-mid rounded overflow-hidden">
        <!--
          GAMBAR: ganti div dengan:
          <img src="@/assets/images/about/office.jpg" alt="TRAD Office Jakarta" class="w-full h-full object-cover" />
        -->
        <div class="w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-navy to-navy-mid">
          🏢
        </div>
        <div class="absolute -top-4 -left-4 w-full h-full border-2 border-gold rounded -z-10" />
        <div class="absolute bottom-6 left-6 bg-gold text-navy font-head text-[13px] tracking-[0.12em] px-4 py-2 rounded-sm">
          Jakarta, Indonesia
        </div>
      </div>

      <!-- Text -->
      <div>
        <div class="section-tag">PT. Timur Raya Anugerah Damai</div>
        <h2 class="section-h2" id="story-heading">OUR STORY</h2>
        <div class="space-y-4">
          <p class="text-[15px] leading-[1.82] text-[#3a3a4a]">
            PT. Timur Raya Anugerah Damai is an importer and distribution company for
            automotive spare parts mainly from Japan and other parts of the world. We pride
            ourselves on reliability, quality and speed when providing our products and
            services to our customers.
          </p>
          <p class="text-[15px] leading-[1.82] text-[#3a3a4a]">
            Following the dynamic change in business environment, we implement modern
            warehousing and operational systems with the purpose of providing greater
            services to our customers more efficiently.
          </p>
          <p class="text-[15px] leading-[1.82] text-[#3a3a4a]">
            We also equip ourselves with experienced dedicated teams, specialized in
            handling automotive spare parts with commitment to maintain long-term business
            partnerships with dealers, retailers, workshops and end-users throughout Indonesia.
          </p>
        </div>

        <!-- Mini stats -->
        <div class="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-cream-dark">
          <div v-for="s in miniStats" :key="s.label" class="text-center">
            <div class="font-head text-[36px] text-navy leading-none">
              {{ s.num }}<span class="text-red">{{ s.plus }}</span>
            </div>
            <div class="text-[11px] font-semibold tracking-[0.12em] uppercase text-gray-400 mt-1">
              {{ s.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const miniStats = [
  { num: '50', plus: '+', label: 'Years' },
  { num: '5K', plus: '+', label: 'Products' },
  { num: '1.6K', plus: '+', label: 'Clients' },
]
</script>
