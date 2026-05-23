<template>
  <section class="dist-section" aria-labelledby="dist-heading">
    <div class="dist-inner">

      <div class="dist-header">
        <h2 class="section-h2" id="dist-heading">Our Distribution Channel</h2>
        <p class="dist-lead">
          We distribute our products to dealers, retailers, workshops and end-users throughout Indonesia.
          With thousands of SKUs, our products fit ideally to your vehicle needs, from passenger cars,
          vans, commercial trucks, etc.
        </p>
      </div>

      <div id="dist-map" ref="mapEl" role="application" aria-label="Interactive distribution map of Indonesia" />


      <div class="cta-band">
        <div class="cta-text">
          <h3 class="cta-title">OUR PRODUCTS ARE WITHIN YOUR REACH!</h3>
          <p class="cta-sub">Find our products at the nearest store in your area.</p>
        </div>
        <a href="/contact" class="cta-btn">CONTACT US</a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const mapEl          = ref(null)
const activeLocation = ref(null)
let mapInstance      = null
let markersMap       = {}

const DEFAULT_CENTER = [-2.5, 118]
const DEFAULT_ZOOM   = 5

const locations = [
  { name: 'Merauke',     lat: -8.4966,  lng: 140.4015 },
  { name: 'Jayapura',    lat: -2.5337,  lng: 140.7180 },
  { name: 'Manado',      lat:  1.4748,  lng: 124.8421 },
  { name: 'Palu',        lat: -0.9003,  lng: 119.8779 },
  { name: 'Makassar',    lat: -5.1477,  lng: 119.4327 },
  { name: 'Balikpapan',  lat: -1.2654,  lng: 116.8312 },
  { name: 'Samarinda',   lat: -0.5022,  lng: 117.1536 },
  { name: 'Banjarmasin', lat: -3.3194,  lng: 114.5908 },
  { name: 'Pontianak',   lat: -0.0263,  lng: 109.3425 },
  { name: 'Aceh',        lat:  5.5483,  lng:  95.3238 },
  { name: 'Medan',       lat:  3.5952,  lng:  98.6722 },
  { name: 'Pekanbaru',   lat:  0.5071,  lng: 101.4478 },
  { name: 'Jambi',       lat: -1.6101,  lng: 103.6131 },
  { name: 'Palembang',   lat: -2.9761,  lng: 104.7754 },
  { name: 'Lampung',     lat: -5.4295,  lng: 105.2610 },
  { name: 'Serang',      lat: -6.1201,  lng: 106.1503 },
  { name: 'Tangerang',   lat: -6.1781,  lng: 106.6300 },
  { name: 'Bogor',       lat: -6.5971,  lng: 106.8060 },
  { name: 'Depok',       lat: -6.4025,  lng: 106.7942 },
  { name: 'Bandung',     lat: -6.9175,  lng: 107.6191 },
  { name: 'Sukabumi',    lat: -6.9215,  lng: 106.9272 },
  { name: 'Cirebon',     lat: -6.7063,  lng: 108.5570 },
  { name: 'Cikarang',    lat: -6.3566,  lng: 107.1431 },
  { name: 'Jakarta',     lat: -6.1344,  lng: 106.8742 },
  { name: 'Tegal',       lat: -6.8694,  lng: 109.1402 },
  { name: 'Purwokerto',  lat: -7.4211,  lng: 109.2347 },
  { name: 'Magelang',    lat: -7.4712,  lng: 110.2178 },
  { name: 'Semarang',    lat: -6.9932,  lng: 110.4203 },
  { name: 'Kudus',       lat: -6.8051,  lng: 110.8396 },
  { name: 'Solo',        lat: -7.5755,  lng: 110.8243 },
  { name: 'Yogyakarta',  lat: -7.7956,  lng: 110.3695 },
  { name: 'Surabaya',    lat: -7.2575,  lng: 112.7521 },
  { name: 'Malang',      lat: -7.9666,  lng: 112.6326 },
]

async function initMap () {
  const L = (await import('leaflet')).default

  if (!document.getElementById('leaflet-css')) {
    const link = document.createElement('link')
    link.id   = 'leaflet-css'
    link.rel  = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)
  }

  mapInstance = L.map(mapEl.value, {
    center:             DEFAULT_CENTER,
    zoom:               DEFAULT_ZOOM,
    zoomControl:        true,
    scrollWheelZoom:    true,
    attributionControl: true,
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(mapInstance)

  const makeIcon = (active = false) => L.divIcon({
    className: '',
    html: `<svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0C6.27 0 0 6.27 0 14C0 24.5 14 36 14 36C14 36 28 24.5 28 14C28 6.27 21.73 0 14 0Z"
        fill="${active ? '#C8A84B' : '#0B1A3A'}"/>
      <circle cx="14" cy="14" r="5.5" fill="white"/>
    </svg>`,
    iconSize:    [28, 36],
    iconAnchor:  [14, 36],
    popupAnchor: [0, -38],
  })

  const defaultIcon  = makeIcon(false)
  const activeIconEl = makeIcon(true)
  let activeMarker   = null

  locations.forEach(loc => {
    const marker = L.marker([loc.lat, loc.lng], { icon: defaultIcon }).addTo(mapInstance)

    // Popup hanya nama kota, tanpa deskripsi
    marker.bindPopup(`
      <div style="font-family:'DM Sans',sans-serif;padding:2px 4px">
        <div style="font-size:13px;font-weight:700;color:#0B1A3A">${loc.name}</div>
      </div>
    `, { maxWidth: 160, className: 'trad-popup' })

    marker.on('click', () => {
      if (activeMarker && activeMarker !== marker) activeMarker.setIcon(defaultIcon)
      marker.setIcon(activeIconEl)
      activeMarker = marker
      activeLocation.value = loc
      mapInstance.flyTo([loc.lat, loc.lng], 9, { duration: 1.4, easeLinearity: 0.25 })
    })

    // Saat popup ditutup → reset marker icon + zoom out ke default
    marker.on('popupclose', () => {
      marker.setIcon(defaultIcon)
      if (activeLocation.value?.name === loc.name) {
        activeLocation.value = null
      }
      activeMarker = null
      mapInstance.flyTo(DEFAULT_CENTER, DEFAULT_ZOOM, { duration: 1.2, easeLinearity: 0.25 })
    })

    markersMap[loc.name] = marker
  })
}

function flyTo (loc) {
  const marker = markersMap[loc.name]
  if (!marker || !mapInstance) return
  marker.fire('click')
  marker.openPopup()
}

onMounted(() => { initMap() })
onBeforeUnmount(() => {
  if (mapInstance) { mapInstance.remove(); mapInstance = null }
  markersMap = {}
})
</script>

<style scoped>
.dist-section {
  background: #f5f6fa;
  padding: 60px 0;
}

.dist-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 4px;
}
@media (max-width: 768px) {
  .dist-inner { padding: 0 24px; }
}

.dist-header {
  text-align: center;
  margin-bottom: 20px;
}

.section-h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 400;
  color: #0f2066;
  letter-spacing: 0.06em;
}

.dist-lead {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  color: #525252;
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto;
}

#dist-map {
  height: 560px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #dde2f0;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  z-index: 0;
}

.cta-band {
  background: #0f2066;
  border-radius: 10px;
  padding: 36px 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  margin-top: 28px;
}
@media (max-width: 640px) {
  .cta-band { flex-direction: column; text-align: center; padding: 32px 24px; }
}

.cta-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(18px, 2.2vw, 24px);
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}

.cta-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  color: rgb(255, 255, 255);
}

.cta-btn {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 15px;
  letter-spacing: 0.1em;
  background: #fff;
  color: #0f2066;
  padding: 13px 40px;
  border-radius: 4px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s, color 0.2s;
  flex-shrink: 0;
}
.cta-btn:hover {
  background: #4268ff;
  color: #fff;
}
</style>

<style>
.trad-popup .leaflet-popup-content-wrapper {
  border-radius: 8px !important;
  box-shadow: 0 6px 24px rgba(11, 26, 58, 0.18) !important;
  padding: 0 !important;
}
.trad-popup .leaflet-popup-content {
  margin: 10px 14px !important;
}
.trad-popup .leaflet-popup-tip-container {
  margin-top: -1px;
}
</style>