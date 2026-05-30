<template>
  <main role="main" aria-label="Articles Page">
    <div class="bg-white px-6 lg:px-16 pt-[56px] pb-[40px]">
      <div class="max-w-[1280px] mx-auto">
        <h1 class="text-[#0f2066] text-[clamp(24px,3vw,32px)] font-bold mb-[8px]">{{ t.articles.heading }}</h1>
        <p class="text-black/50 text-[14px] leading-[1.7]">{{ t.articles.sub }}</p>
      </div>
    </div>

    <div class="bg-[#f5f6f8] px-6 lg:px-16 pb-[64px] pt-[32px]">
      <div class="max-w-[1280px] mx-auto">

        <!-- Search -->
        <div class="bg-white rounded-[14px] border border-[#E3E6ED] p-[20px] mb-[24px]">
          <p class="text-[#0f2066] text-[13px] font-semibold mb-[10px]">{{ t.articles.searchLabel }}</p>
          <div class="article-search-bar">
            <input v-model="searchQuery" type="text" :placeholder="t.articles.placeholder"
              class="flex-1 h-[42px] border border-[#D8DCE8] rounded-[8px] px-[12px] text-[13px] text-[#0f2066] outline-none focus:border-[#0f2066]/50 transition-colors placeholder:text-black/30 min-w-0" />
            <button class="h-[42px] px-[24px] bg-[#0f2066] text-white text-[13px] font-semibold rounded-[8px] flex-shrink-0">
              {{ t.articles.searchBtn }}
            </button>
          </div>
        </div>

        <!-- Article list -->
        <div class="flex flex-col gap-[14px]">
          <RouterLink v-for="article in filteredArticles" :key="article.slug" :to="`/articles/${article.slug}`"
            class="bg-white rounded-[14px] border border-[#E3E6ED] overflow-hidden hover:shadow-[0_4px_20px_rgba(15,32,102,0.10)] hover:-translate-y-0.5 transition-all duration-200 group article-card">
            <div class="article-card-img">
              <img v-if="article.img" :src="article.img" :alt="article.title" class="w-full h-full object-cover" />
              <span v-else class="text-3xl">{{ article.icon }}</span>
            </div>
            <div class="article-card-body">
              <h2 class="text-[#0f2066] text-[15px] font-semibold underline underline-offset-2 mb-[6px] leading-[1.4] group-hover:text-[#1a3a9e] transition-colors">
                {{ article.title }}
              </h2>
              <p class="text-black/50 text-[13px] leading-[1.6] mb-[14px] line-clamp-2">{{ article.excerpt }}</p>
              <span class="inline-block bg-[#0f2066] text-white text-[12px] font-semibold px-[16px] py-[7px] rounded-[7px] group-hover:bg-[#1a3a9e] transition-colors">
                {{ t.articles.readMore }}
              </span>
            </div>
          </RouterLink>

          <div v-if="filteredArticles.length === 0" class="text-center py-[48px]">
            <p class="text-black/35 text-[14px]">{{ t.articles.noResults }}</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink }    from 'vue-router'
import { useI18n }       from '@/composables/useI18n'
import { getArticles }   from '@/data/articlesData.js'

const { t, currentLang } = useI18n()
const searchQuery = ref('')

const allArticles      = computed(() => getArticles(currentLang.value))
const filteredArticles = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (!q) return allArticles.value
  return allArticles.value.filter(a =>
    a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q)
  )
})
</script>

<style>
.article-search-bar {
  display: flex;
  gap: 8px;
}
.article-card {
  display: flex;
  align-items: stretch;
}
.article-card-img {
  width: 160px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #0f2066, #1a3a9e);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.article-card-body {
  flex: 1;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
@media (max-width: 540px) {
  .article-card     { flex-direction: column }
  .article-card-img { width: 100%; height: 160px }
  .article-card-body{ padding: 16px }
}
</style>
