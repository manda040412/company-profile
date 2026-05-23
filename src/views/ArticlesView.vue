<template>
  <main role="main" aria-label="Articles Page">
    <div class="page-hero">
      <div class="relative z-10 max-w-2xl">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">Home / <span class="breadcrumb-active">Articles</span></nav>
        <h1 class="font-head text-[clamp(44px,7vw,80px)] tracking-wide text-white leading-none mb-4">ARTICLES &<br>INSIGHTS</h1>
        <p class="text-[15px] text-white/48 leading-relaxed max-w-xl">Latest news, maintenance tips, and industry insights from TRAD's expert team.</p>
      </div>
    </div>
    <section class="bg-cream-dark px-12 py-24" aria-labelledby="articles-heading">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-12">
        <div><div class="section-tag">Latest Posts</div><h2 class="section-h2" id="articles-heading">INDUSTRY NEWS</h2></div>
        <div class="flex flex-wrap gap-2" role="group" aria-label="Filter by topic">
          <button v-for="tag in site.articleTags" :key="tag"
            :class="['text-[11px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-sm border-[1.5px] cursor-pointer transition-all duration-200 font-body', selectedTag===tag ? 'bg-red text-white border-red' : 'bg-white text-navy border-navy/12 hover:bg-red hover:text-white hover:border-red']"
            @click="selectTag(tag)">{{ tag }}</button>
        </div>
      </div>
      <div v-if="filteredArticles.length > 0">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <ArticleCard v-if="filteredArticles[0]" :article="filteredArticles[0]" :featured="true" class="md:col-span-2" />
          <ArticleCard v-if="filteredArticles[1]" :article="filteredArticles[1]" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" v-if="filteredArticles.length > 2">
          <ArticleCard v-for="a in filteredArticles.slice(2)" :key="a.title" :article="a" />
        </div>
      </div>
      <div v-else class="text-center py-20 text-gray-400">No articles found in this category.</div>
    </section>
    <CtaBand />
  </main>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useSiteStore } from '@/stores/site'
import { useAnalyticsStore } from '@/stores/analytics'
import ArticleCard from '@/components/articles/ArticleCard.vue'
import CtaBand from '@/components/home/CtaBand.vue'
const site = useSiteStore()
const analytics = useAnalyticsStore()
const selectedTag = ref('All')
function selectTag(tag) { selectedTag.value = tag; analytics.track('click', 'filter_tag_' + tag) }
const filteredArticles = computed(() => selectedTag.value === 'All' ? site.articles : site.articles.filter(a => a.tag === selectedTag.value))
</script>
