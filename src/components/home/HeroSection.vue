<template>
  <section class="relative w-full overflow-hidden" aria-label="Hero Carousel">
    <div class="relative w-full overflow-hidden">

      <!-- Slides -->
      <div class="flex transition-transform duration-700 ease-in-out"
           :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(slide, i) in slides" :key="i" class="flex-shrink-0 w-full">
          <img
            :src="slide.src"
            :alt="slide.alt"
            style="width:100%;height:auto;display:block"
          />
        </div>
      </div>

      <!-- Arrows — only if multiple slides -->
      <template v-if="slides.length > 1">
        <button @click="prev"
          style="position:absolute;left:16px;top:50%;transform:translateY(-50%);z-index:10;background:rgba(255,255,255,0.85);border:none;cursor:pointer;width:40px;height:40px;border-radius:50%;font-size:20px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.15)"
          aria-label="Previous">‹</button>
        <button @click="next"
          style="position:absolute;right:16px;top:50%;transform:translateY(-50%);z-index:10;background:rgba(255,255,255,0.85);border:none;cursor:pointer;width:40px;height:40px;border-radius:50%;font-size:20px;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.15)"
          aria-label="Next">›</button>
        <!-- Dots -->
        <div style="position:absolute;bottom:16px;left:50%;transform:translateX(-50%);display:flex;gap:8px;z-index:10">
          <button v-for="(_, i) in slides" :key="i" @click="goTo(i)"
            :style="{ width:'10px',height:'10px',borderRadius:'50%',border:'none',cursor:'pointer',padding:0,
                      background: currentSlide===i ? '#0f2066' : 'rgba(255,255,255,0.65)',transition:'background 0.3s' }" />
        </div>
      </template>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import carouselImg from '@/assets/images/banner/Carousel Website.png'

const slides = [
  { src: carouselImg, alt: 'TRAD - We Are Your Automotive Spare Parts Partner' },
]

const currentSlide = ref(0)
let timer = null
function next()  { currentSlide.value = (currentSlide.value + 1) % slides.length }
function prev()  { currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length }
function goTo(i) { currentSlide.value = i }
onMounted(() => { if (slides.length > 1) timer = setInterval(next, 5000) })
onUnmounted(() => { if (timer) clearInterval(timer) })
</script>
