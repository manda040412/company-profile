<template>
  <section class="bg-cream px-12 py-24" aria-labelledby="retail-heading">
    <div class="section-tag">Supporting Local Business</div>
    <h2 class="section-h2" id="retail-heading">YOUR RETAIL PARTNER</h2>
    <p class="section-lead mb-14">
      We empower local businesses — trusted supplier for independent retailers
      and workshops across the region.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Image -->
      <div class="aspect-[4/3] bg-navy rounded-md overflow-hidden flex items-center justify-center text-8xl">
        <!--
          GAMBAR: ganti dengan:
          <img src="@/assets/images/services/retail-store.jpg" alt="TRAD Retail Partner" class="w-full h-full object-cover" />
        -->
        🏪
      </div>

      <!-- Features -->
      <div class="flex flex-col gap-5">
        <div
          v-for="f in retailFeatures" :key="f.title"
          class="flex gap-4 items-start bg-white rounded-md p-5 border-[1.5px] border-transparent hover:border-navy transition-all duration-200"
        >
          <div class="w-10 h-10 bg-red/10 rounded-md flex items-center justify-center text-xl flex-shrink-0">
            {{ f.icon }}
          </div>
          <div>
            <strong class="block text-[14px] font-bold text-navy tracking-[0.04em] mb-1">{{ f.title }}</strong>
            <span class="text-[13px] text-gray-400 leading-relaxed">{{ f.desc }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const retailFeatures = [
  { icon: '📦', title: 'Parts Availability',        desc: 'High-demand certified spare parts always in stock for your customers. Never lose a sale.' },
  { icon: '⚡', title: 'Next / Same Day Dispatch',  desc: 'Fast dispatch to keep your workshop or retail shop running without costly delays.' },
  { icon: '🤝', title: 'Long-Term Partnership',     desc: 'Dedicated support and partner programs to help grow your automotive business with us.' },
  { icon: '📋', title: 'Legal Documentation',       desc: 'Complete tax invoices and official documents ready for every transaction.' },
]
</script>
