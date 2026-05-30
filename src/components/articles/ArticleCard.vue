<template>
  <article
    class="group bg-white rounded-[20px] overflow-hidden border border-[#E8EBF2] cursor-pointer
           transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(15,32,102,0.12)]"
    :class="featured ? 'flex flex-row' : 'flex flex-col'"
    :aria-label="article.title"
    @click="analytics.track('click', 'article_' + article.title.slice(0, 24))"
  >

    <!-- IMAGE -->
    <div
      class="relative overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#0f2066] to-[#1a3a9e]"
      :class="featured ? 'w-[340px] rounded-l-[20px]' : 'h-[200px] rounded-t-[20px]'"
    >
      <img
        v-if="article.img"
        :src="article.img"
        :alt="article.title"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <span :class="featured ? 'text-6xl' : 'text-5xl'">{{ article.icon }}</span>
      </div>

      <!-- CATEGORY BADGE -->
      <span
        class="absolute top-[14px] left-[14px] text-[11px] font-bold tracking-[0.1em] uppercase
               bg-white text-[#0f2066] px-[12px] py-[5px] rounded-full shadow-sm"
      >
        {{ article.cat }}
      </span>
    </div>

    <!-- CONTENT -->
    <div class="flex flex-col flex-1 p-[28px]">

      <!-- DATE -->
      <p class="text-[12px] text-[#0f2066]/40 font-medium tracking-[0.08em] uppercase mb-[10px]">
        {{ article.date }}
      </p>

      <!-- TITLE -->
      <h3
        class="font-bold text-[#0f2066] leading-[1.35] mb-[12px] group-hover:text-[#1a3a9e] transition-colors duration-200"
        :class="featured ? 'text-[22px]' : 'text-[17px]'"
      >
        {{ article.title }}
      </h3>

      <!-- EXCERPT -->
      <p
        class="text-[#0f2066]/55 leading-[1.7] flex-1"
        :class="featured ? 'text-[15px]' : 'text-[13px] line-clamp-3'"
      >
        {{ article.excerpt }}
      </p>

      <!-- READ MORE -->
      <div class="flex items-center gap-[8px] mt-[20px]">
        <span class="text-[13px] font-bold text-[#0f2066] tracking-[0.04em]">Read more</span>
        <span
          class="w-[28px] h-[28px] rounded-full bg-[#0f2066] flex items-center justify-center
                 transition-all duration-300 group-hover:bg-[#1a3a9e] group-hover:translate-x-1"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="w-[13px] h-[13px] text-white" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </span>
      </div>

    </div>
  </article>
</template>

<script setup>
import { useAnalyticsStore } from '@/stores/analytics'

defineProps({
  article:  { type: Object,  required: true },
  featured: { type: Boolean, default: false },
})

const analytics = useAnalyticsStore()
</script>