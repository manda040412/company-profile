<template>
  <article
    class="bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200 border-[1.5px] border-navy/4"
    :class="featured ? 'col-span-1 md:col-span-2' : ''"
    :aria-label="article.title"
    @click="analytics.track('click', 'article_' + article.title.slice(0, 24))"
  >
    <!-- Image -->
    <div
      class="bg-gradient-to-br from-navy-mid to-navy flex items-center justify-center overflow-hidden"
      :class="featured ? 'h-72' : 'h-44'"
    >
      <!--
        GAMBAR ARTIKEL: ganti dengan:
        <img v-if="article.img" :src="article.img" :alt="article.title" class="w-full h-full object-cover" />
        <span v-else>{{ article.icon }}</span>
      -->
      <span :class="featured ? 'text-6xl' : 'text-4xl'">{{ article.icon }}</span>
    </div>

    <!-- Meta -->
    <div class="flex items-center gap-2.5 px-5 pt-5 pb-1.5">
      <span class="text-[10px] font-bold tracking-[0.14em] uppercase text-red bg-red/7 px-2 py-0.5 rounded-sm">
        {{ article.cat }}
      </span>
      <span class="text-[11px] text-gray-400">{{ article.date }}</span>
    </div>

    <!-- Title -->
    <h3
      class="font-serif text-navy px-5 pb-3 leading-snug"
      :class="featured ? 'text-[22px]' : 'text-[16px]'"
    >
      {{ article.title }}
    </h3>

    <!-- Excerpt (featured only) -->
    <p v-if="featured" class="text-[13px] text-gray-400 leading-relaxed px-5 pb-5">
      {{ article.excerpt }}
    </p>

    <!-- Read more -->
    <div class="flex items-center gap-2 px-5 pb-5 text-[12px] font-semibold text-red" v-if="!featured">
      Read more →
    </div>
  </article>
</template>

<script setup>
import { useAnalyticsStore } from '@/stores/analytics'

defineProps({
  article:  { type: Object, required: true },
  featured: { type: Boolean, default: false },
})

const analytics = useAnalyticsStore()
</script>
