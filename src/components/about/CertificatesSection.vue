<template>
  <section class="certif-section" aria-labelledby="certif-heading">
    <div class="certif-inner">

      <!-- Header -->
      <div class="certif-header">
        <h2 class="section-h2" id="certif-heading">Certificates</h2>
        <p class="certif-lead">
          Some of the Authorized Distributor Certificates as proofs to ensure your comfort in dealing with us.
        </p>
      </div>

      <!-- Grid -->
      <div class="certif-grid" role="list">
        <article
          v-for="cert in visibleCerts"
          :key="cert.name"
          class="certif-card"
          role="listitem"
          tabindex="0"
          @click="openLightbox(cert)"
          @keydown.enter="openLightbox(cert)"
        >
          <img :src="cert.img" :alt="cert.label" class="certif-img" />
        </article>
      </div>

      <!-- View More / Less -->
      <div class="view-more-wrap">
        <button class="view-more-btn" @click="toggleAll">
          {{ showAll ? 'View Less' : 'View More' }}
        </button>
      </div>

    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="lightboxCert"
        class="lightbox-bg"
        role="dialog"
        :aria-label="`${lightboxCert.label} certificate`"
        aria-modal="true"
        @click.self="closeLightbox"
        @keydown.esc="closeLightbox"
      >
        <div class="lightbox-box">
          <button class="lb-close" @click="closeLightbox" aria-label="Close">✕</button>
          <img :src="lightboxCert.img" :alt="lightboxCert.label" class="lb-img" />
        </div>
      </div>
    </Teleport>

  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

import img555        from '@/assets/images/certif/555.png'
import imgNsk        from '@/assets/images/certif/nsk.png'
import imgNwb        from '@/assets/images/certif/nwb.png'
import imgMitsuboshi from '@/assets/images/certif/mitsuboshi.png'
import img3k         from '@/assets/images/certif/3k.png'
import imgIso        from '@/assets/images/certif/iso.png'
import imgNkn        from '@/assets/images/certif/nkn.png'
import imgCompact    from '@/assets/images/certif/compact.png'

const allCerts = [
  { name: 'seiken',     label: 'SEIKEN',       img: img555        },
  { name: 'iso',        label: 'ISO 9001',     img: imgIso        },
  { name: '555',        label: '555 (SANKEI)', img: img555        },
  { name: 'nsk',        label: 'NSK',          img: imgNsk        },
  { name: 'nwb',        label: 'NWB',          img: imgNwb        },
  { name: 'mitsuboshi', label: 'MITSUBOSHI',   img: imgMitsuboshi },
  { name: '3k',         label: '3K',           img: img3k         },
  { name: 'nkn',        label: 'NKN',          img: imgNkn        },
  { name: 'compact',    label: 'COMPACT',      img: imgCompact    },
]

const showAll      = ref(false)
const lightboxCert = ref(null)

const visibleCerts = computed(() => showAll.value ? allCerts : allCerts.slice(0, 4))

function toggleAll () { showAll.value = !showAll.value }

function openLightbox (cert) {
  lightboxCert.value = cert
  document.body.style.overflow = 'hidden'
}
function closeLightbox () {
  lightboxCert.value = null
  document.body.style.overflow = ''
}
</script>

<style scoped>
/* ── Section ── */
.certif-section {
  background: #fff;
  padding: 80px 0;
  text-align: center;
}

/* ── Inner — same as home ── */
.certif-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 4px;
}
@media (max-width: 768px) {
  .certif-inner { padding: 0 24px; }
}

/* ── Header ── */
.certif-header {
  margin-bottom: 48px;
}

.section-h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 400;
  color: #0f2066;
  letter-spacing: 0.06em;
}

.certif-lead {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  color: #555555;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ── Grid — 4 col, image only like screenshot ── */
.certif-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 36px;
}
@media (max-width: 900px) {
  .certif-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .certif-grid { grid-template-columns: 1fr; }
}

/* ── Card — no label, just image ── */
.certif-card {
  background: #fff;
  border: 1.5px solid #e0e4f0;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
  aspect-ratio: 3 / 4;   /* portrait ratio matches cert paper */
}
.certif-card:hover,
.certif-card:focus-visible {
  border-color: #C8A84B;
  box-shadow: 0 8px 28px rgba(11, 26, 58, 0.14);
  transform: translateY(-4px);
}

.certif-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s;
}
.certif-card:hover .certif-img {
  transform: scale(1.03);
}

/* ── View More / Less ── */
.view-more-wrap { text-align: center; }

.view-more-btn {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: #0B1A3A;
  color: #fff;
  border: none;
  padding: 14px 52px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}
.view-more-btn:hover { background: #132250; }

/* ── Lightbox ── */
.lightbox-bg {
  position: fixed;
  inset: 0;
  background: rgba(5, 12, 40, 0.85);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.lightbox-box {
  position: relative;
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  max-width: 480px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  animation: lb-in 0.2s ease;
}
@keyframes lb-in {
  from { opacity: 0; transform: scale(0.94) translateY(12px); }
  to   { opacity: 1; transform: scale(1)    translateY(0); }
}

.lb-close {
  position: absolute;
  top: 10px;
  right: 12px;
  background: none;
  border: none;
  font-size: 18px;
  color: #888;
  cursor: pointer;
  line-height: 1;
  padding: 4px 8px;
  transition: color 0.15s;
  z-index: 1;
}
.lb-close:hover { color: #0B1A3A; }

.lb-img {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 6px;
  display: block;
}
</style>