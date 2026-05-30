<template>
  <section style="background:#fff;padding:64px 24px;text-align:center">
    <div class="max-w-[1280px] mx-auto">
      <div style="margin-bottom:40px">
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(24px,3.5vw,38px);font-weight:400;color:#0f2066;letter-spacing:0.06em">
          {{ t.certificates.heading }}
        </h2>
        <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:#555;max-width:520px;margin:0 auto;line-height:1.7">
          {{ t.certificates.lead }}
        </p>
      </div>
      <div class="certif-grid">
        <article v-for="cert in visibleCerts" :key="cert.name"
          style="background:#fff;border:1.5px solid #e0e4f0;border-radius:10px;overflow:hidden;cursor:pointer;outline:none;transition:border-color 0.2s,box-shadow 0.2s,transform 0.2s;aspect-ratio:3/4"
          tabindex="0"
          @click="openLightbox(cert)"
          @keydown.enter="openLightbox(cert)"
          onmouseover="this.style.borderColor='#C8A84B';this.style.transform='translateY(-4px)';this.style.boxShadow='0 8px 28px rgba(11,26,58,0.14)'"
          onmouseout="this.style.borderColor='#e0e4f0';this.style.transform='none';this.style.boxShadow='none'">
          <img :src="cert.img" :alt="cert.label" style="width:100%;height:100%;object-fit:cover;display:block" />
        </article>
      </div>
      <div style="text-align:center;margin-top:28px">
        <button @click="toggleAll"
          style="font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.04em;background:#0B1A3A;color:#fff;border:none;padding:12px 48px;border-radius:4px;cursor:pointer">
          {{ showAll ? t.certificates.viewLess : t.certificates.viewMore }}
        </button>
      </div>
    </div>

    <Teleport to="body">
      <div v-if="lightboxCert"
        style="position:fixed;inset:0;background:rgba(5,12,40,0.85);z-index:9999;display:flex;align-items:center;justify-content:center;padding:24px"
        @click.self="closeLightbox" @keydown.esc="closeLightbox">
        <div style="position:relative;background:#fff;border-radius:12px;padding:20px;max-width:420px;width:100%">
          <button @click="closeLightbox" style="position:absolute;top:10px;right:12px;background:none;border:none;font-size:18px;color:#888;cursor:pointer;z-index:1">✕</button>
          <img :src="lightboxCert.img" :alt="lightboxCert.label" style="width:100%;height:auto;max-height:75vh;object-fit:contain;border-radius:6px;display:block" />
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n }       from '@/composables/useI18n'

import img555        from '@/assets/images/certif/555.png'
import imgNsk        from '@/assets/images/certif/nsk.png'
import imgNwb        from '@/assets/images/certif/nwb.png'
import imgMitsuboshi from '@/assets/images/certif/mitsuboshi.png'
import img3k         from '@/assets/images/certif/3k.png'
import imgIso        from '@/assets/images/certif/iso.png'
import imgNkn        from '@/assets/images/certif/nkn.png'
import imgCompact    from '@/assets/images/certif/compact.png'

const { t } = useI18n()

const allCerts = [
  { name:'seiken',     label:'SEIKEN',       img:img555        },
  { name:'iso',        label:'ISO 9001',     img:imgIso        },
  { name:'555',        label:'555 (SANKEI)', img:img555        },
  { name:'nsk',        label:'NSK',          img:imgNsk        },
  { name:'nwb',        label:'NWB',          img:imgNwb        },
  { name:'mitsuboshi', label:'MITSUBOSHI',   img:imgMitsuboshi },
  { name:'3k',         label:'3K',           img:img3k         },
  { name:'nkn',        label:'NKN',          img:imgNkn        },
  { name:'compact',    label:'COMPACT',      img:imgCompact    },
]

const showAll      = ref(false)
const lightboxCert = ref(null)
const visibleCerts = computed(() => showAll.value ? allCerts : allCerts.slice(0, 4))

function toggleAll()    { showAll.value = !showAll.value }
function openLightbox(cert) { lightboxCert.value = cert; document.body.style.overflow = 'hidden' }
function closeLightbox()    { lightboxCert.value = null; document.body.style.overflow = '' }
</script>

<style>
.certif-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
@media (max-width: 860px) { .certif-grid { grid-template-columns: repeat(3, 1fr) } }
@media (max-width: 540px) { .certif-grid { grid-template-columns: repeat(2, 1fr) } }
</style>
