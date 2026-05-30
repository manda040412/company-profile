<template>
  <main role="main" aria-label="Article Detail">
    <div v-if="!article" class="bg-[#f5f6f8] px-6 lg:px-16 py-[120px] text-center">
      <p class="text-[#0f2066] text-[22px] font-semibold mb-[20px]">{{ t.articleDetail.notFound }}</p>
      <RouterLink to="/articles" class="text-[#0f2066] font-semibold underline">
        {{ t.articleDetail.back }}
      </RouterLink>
    </div>

    <div v-else>
      <div class="bg-white border-b border-[#E3E6ED] px-6 lg:px-16 py-[18px]">
        <div class="max-w-[1280px] mx-auto">
          <RouterLink to="/articles"
            class="inline-flex items-center gap-[10px] text-[#0f2066] text-[15px] font-semibold hover:gap-[14px] transition-all duration-200 group">
            <span class="w-[34px] h-[34px] rounded-full border-2 border-[#0f2066] flex items-center justify-center group-hover:bg-[#0f2066] transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-[16px] h-[16px] text-[#0f2066] group-hover:text-white transition-colors duration-200"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
              </svg>
            </span>
            {{ t.articleDetail.backBtn }}
          </RouterLink>
        </div>
      </div>

      <div class="bg-[#f5f6f8] px-6 lg:px-16 py-[60px]">
        <div class="max-w-[780px] mx-auto bg-white rounded-[20px] border border-[#E3E6ED] p-[48px]">
          <template v-for="(block, i) in article.content" :key="i">
            <h1 v-if="block.type === 'heading'" class="text-[#0f2066] text-[28px] font-bold leading-[1.3] mb-[24px]">{{ block.text }}</h1>
            <h2 v-else-if="block.type === 'heading2'" class="text-[#0f2066] text-[20px] font-bold leading-[1.3] mt-[32px] mb-[12px]">{{ block.text }}</h2>
            <div v-else-if="block.type === 'image'" :class="['mb-[28px] rounded-[12px] overflow-hidden', block.size === 'small' ? 'bg-[#f5f6f8] border border-[#E3E6ED] inline-block' : 'bg-gradient-to-br from-[#0f2066]/10 to-[#0f2066]/5 w-full']">
              <img v-if="block.src" :src="block.src" :alt="block.alt" :class="['object-contain', block.size === 'small' ? 'max-h-[180px] max-w-[320px] p-[16px]' : 'w-full max-h-[420px] object-cover']" />
            </div>
            <p v-else-if="block.type === 'paragraph'" class="text-black/65 text-[15px] leading-[1.85] mb-[16px]">{{ block.text }}</p>
            <p v-else-if="block.type === 'subheading'" class="text-[#0f2066] text-[14px] font-bold mt-[20px] mb-[8px]">{{ block.text }}</p>
            <div v-else-if="block.type === 'label'" class="flex items-center gap-[10px] mt-[24px] mb-[12px]">
              <span class="w-[14px] h-[3px] bg-[#0f2066] rounded-full flex-shrink-0"></span>
              <span class="text-[#0f2066] text-[14px] font-semibold">{{ block.text }}</span>
            </div>
            <ol v-else-if="block.type === 'list'" class="mb-[16px] space-y-[6px]">
              <li v-for="(item, idx) in block.items" :key="idx" class="text-black/65 text-[15px] leading-[1.75] flex gap-[10px]">
                <span class="text-[#0f2066]/50 font-semibold flex-shrink-0 w-[18px]">{{ idx + 1 }}.</span>
                <span>{{ item }}</span>
              </li>
            </ol>
            <p v-else-if="block.type === 'note'" class="text-black/50 text-[13px] italic leading-[1.7] mb-[14px] pl-[14px] border-l-2 border-[#0f2066]/20">{{ block.text }}</p>
            <p v-else-if="block.type === 'notice'" class="text-[#0f2066] text-[14px] font-bold leading-[1.7] mt-[16px] mb-[8px]">{{ block.text }}</p>
          </template>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from '@/composables/useI18n'
import { getArticleBySlug } from '@/data/articlesData.js'

const { t, currentLang } = useI18n()
const route   = useRoute()
const article = computed(() => getArticleBySlug(route.params.slug, currentLang.value))
</script>
