<template>
  <section style="background:#f5f6fa;padding:56px 0">
    <div class="max-w-[1280px] mx-auto px-6 md:px-10">
      <div style="text-align:center;margin-bottom:16px">
        <h2 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(24px,3.5vw,38px);font-weight:400;color:#0f2066;letter-spacing:0.06em">
          {{ t.distMap.heading }}
        </h2>
        <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:#525252;line-height:1.6;max-width:640px;margin:0 auto">
          {{ t.distMap.lead }}
        </p>
      </div>

      <div id="dist-map" ref="mapEl" style="height:520px;border-radius:12px;overflow:hidden;border:1px solid #dde2f0;box-shadow:0 4px 24px rgba(0,0,0,0.08);margin-bottom:24px" />

      <div class="dist-cta-wrap">
        <div>
          <h3 style="font-family:'Bebas Neue',sans-serif;font-size:clamp(16px,2vw,22px);font-weight:400;color:#fff;letter-spacing:0.08em;margin-bottom:4px">
            {{ t.distMap.ctaTitle }}
          </h3>
          <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:rgba(255,255,255,0.85);margin:0">
            {{ t.distMap.ctaSub }}
          </p>
        </div>
        <a href="/contact"
           style="font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:0.1em;background:#fff;color:#0f2066;padding:12px 36px;border-radius:4px;text-decoration:none;white-space:nowrap;flex-shrink:0;font-weight:700">
          {{ t.distMap.ctaBtn }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from '@/composables/useI18n'

const { t }     = useI18n()
const mapEl     = ref(null)
let mapInstance = null

const locations = [
  { name:'Merauke',     lat:-8.4966,  lng:140.4015 },
  { name:'Jayapura',    lat:-2.5337,  lng:140.7180 },
  { name:'Manado',      lat:1.4748,   lng:124.8421 },
  { name:'Palu',        lat:-0.9003,  lng:119.8779 },
  { name:'Makassar',    lat:-5.1477,  lng:119.4327 },
  { name:'Balikpapan',  lat:-1.2654,  lng:116.8312 },
  { name:'Samarinda',   lat:-0.5022,  lng:117.1536 },
  { name:'Banjarmasin', lat:-3.3194,  lng:114.5908 },
  { name:'Pontianak',   lat:-0.0263,  lng:109.3425 },
  { name:'Aceh',        lat:5.5483,   lng:95.3238  },
  { name:'Medan',       lat:3.5952,   lng:98.6722  },
  { name:'Pekanbaru',   lat:0.5071,   lng:101.4478 },
  { name:'Jambi',       lat:-1.6101,  lng:103.6131 },
  { name:'Palembang',   lat:-2.9761,  lng:104.7754 },
  { name:'Lampung',     lat:-5.4295,  lng:105.2610 },
  { name:'Serang',      lat:-6.1201,  lng:106.1503 },
  { name:'Tangerang',   lat:-6.1781,  lng:106.6300 },
  { name:'Bogor',       lat:-6.5971,  lng:106.8060 },
  { name:'Depok',       lat:-6.4025,  lng:106.7942 },
  { name:'Bandung',     lat:-6.9175,  lng:107.6191 },
  { name:'Sukabumi',    lat:-6.9215,  lng:106.9272 },
  { name:'Cirebon',     lat:-6.7063,  lng:108.5570 },
  { name:'Cikarang',    lat:-6.3566,  lng:107.1431 },
  { name:'Jakarta',     lat:-6.1344,  lng:106.8742 },
  { name:'Tegal',       lat:-6.8694,  lng:109.1402 },
  { name:'Purwokerto',  lat:-7.4211,  lng:109.2347 },
  { name:'Magelang',    lat:-7.4712,  lng:110.2178 },
  { name:'Semarang',    lat:-6.9932,  lng:110.4203 },
  { name:'Kudus',       lat:-6.8051,  lng:110.8396 },
  { name:'Solo',        lat:-7.5755,  lng:110.8243 },
  { name:'Yogyakarta',  lat:-7.7956,  lng:110.3695 },
  { name:'Surabaya',    lat:-7.2575,  lng:112.7521 },
  { name:'Malang',      lat:-7.9666,  lng:112.6326 },
]

async function initMap() {
  const L = (await import('leaflet')).default
  if (!document.getElementById('leaflet-css')) {
    const link = document.createElement('link')
    link.id = 'leaflet-css'; link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)
  }
  mapInstance = L.map(mapEl.value, { center:[-2.5,118], zoom:5, scrollWheelZoom:true })
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>', maxZoom:18
  }).addTo(mapInstance)

  const makeIcon = (active=false) => L.divIcon({
    className:'',
    html:`<svg width="24" height="32" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 0C6.27 0 0 6.27 0 14C0 24.5 14 36 14 36C14 36 28 24.5 28 14C28 6.27 21.73 0 14 0Z" fill="${active?'#C8A84B':'#0B1A3A'}"/><circle cx="14" cy="14" r="5.5" fill="white"/></svg>`,
    iconSize:[24,32], iconAnchor:[12,32], popupAnchor:[0,-34]
  })
  const defaultIcon = makeIcon(false)
  const activeIcon  = makeIcon(true)
  let activeMarker  = null

  locations.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon:defaultIcon }).addTo(mapInstance)
    marker.bindPopup(`<div style="font-family:'DM Sans',sans-serif;padding:2px 4px;font-size:13px;font-weight:700;color:#0B1A3A">${loc.name}</div>`, { maxWidth:140 })
    marker.on('click', () => {
      if (activeMarker && activeMarker !== marker) activeMarker.setIcon(defaultIcon)
      marker.setIcon(activeIcon); activeMarker = marker
      mapInstance.flyTo([loc.lat, loc.lng], 9, { duration:1.2 })
    })
    marker.on('popupclose', () => {
      marker.setIcon(defaultIcon); activeMarker = null
      mapInstance.flyTo([-2.5,118], 5, { duration:1.2 })
    })
  })
}

onMounted(()      => initMap())
onBeforeUnmount(() => { if (mapInstance) { mapInstance.remove(); mapInstance = null } })
</script>

<style scoped>
.dist-cta-wrap {
  background: #0f2066;
  border-radius: 10px;
  padding: 28px 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
@media (max-width: 600px) {
  #dist-map        { height: 360px }
  .dist-cta-wrap   { flex-direction: column; text-align: center; padding: 24px 20px }
}
</style>