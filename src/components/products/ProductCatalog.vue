<template>
  <section class="bg-[#EEF1F5] px-6 lg:px-16 py-[10px]">
    <div class="max-w-[1400px] mx-auto">

      <!-- Filter bar -->
      <div class="bg-[#F4F5F8] rounded-[20px] p-[20px] mb-[48px] border border-[#E3E6ED]">
        <p class="text-[#0f2066] text-[14px] font-bold uppercase tracking-[0.05em] mb-[14px]">
          {{ t.catalog.filterLabel }}
        </p>
        <div class="catalog-filter-grid">
          <div class="relative">
            <select v-model="selectedCat"
              class="w-full h-[52px] rounded-[12px] border border-[#D8DDE7] bg-[#E9EDF5] px-[16px] text-[#0f2066] text-[15px] font-medium outline-none appearance-none">
              <option value="All">{{ t.catalog.categoryPlaceholder }}</option>
              <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
            </select>
            <div class="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#0f2066] pointer-events-none text-[12px]">▼</div>
          </div>
          <div class="relative">
            <input v-model="searchQuery" type="text" :placeholder="t.catalog.searchPlaceholder"
              class="w-full h-[52px] rounded-[12px] border border-[#D8DDE7] bg-[#E9EDF5] px-[16px] pr-[48px] text-[#0f2066] text-[15px] font-medium outline-none placeholder:text-[#0f2066]/60" />
            <div class="absolute right-[14px] top-1/2 -translate-y-1/2 text-[#0f2066] text-[18px]">🔍</div>
          </div>
        </div>
      </div>

      <!-- Product grid -->
      <div class="catalog-grid">
        <template v-for="product in filteredProducts" :key="product.name">
          <RouterLink v-if="product.slug" :to="`/products/brand/${product.slug}`" class="group cursor-pointer catalog-item">
            <div class="bg-[#F7F7F8] rounded-[18px] border border-[#ECECEC] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl relative overflow-hidden catalog-card-img">
              <img :src="product.logo" :alt="product.name" class="max-w-[160px] max-h-[100px] object-contain scale-[1.05]" />
              <div class="absolute inset-0 bg-[#0f2066]/0 group-hover:bg-[#0f2066]/5 transition-all duration-300 flex items-end justify-center pb-[10px]">
                <span class="opacity-0 group-hover:opacity-100 transition-all duration-300 text-[#0f2066] text-[11px] font-semibold uppercase tracking-widest bg-white/90 rounded-full px-[12px] py-[4px]">
                  {{ t.catalog.viewDetails }}
                </span>
              </div>
            </div>
            <div class="pt-[14px] text-center">
              <h3 class="text-[#0f2066] text-[17px] font-bold leading-[1.1]">{{ product.name }}</h3>
              <p class="text-black/70 text-[13px] leading-[1.3] mt-[6px]">{{ product.desc }}</p>
            </div>
          </RouterLink>
          <div v-else class="group catalog-item">
            <div class="bg-[#F7F7F8] rounded-[18px] border border-[#ECECEC] flex items-center justify-center transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl catalog-card-img">
              <img :src="product.logo" :alt="product.name" class="max-w-[160px] max-h-[100px] object-contain scale-[1.05]" />
            </div>
            <div class="pt-[14px] text-center">
              <h3 class="text-[#0f2066] text-[17px] font-bold leading-[1.1]">{{ product.name }}</h3>
              <p class="text-black/70 text-[13px] leading-[1.3] mt-[6px]">{{ product.desc }}</p>
            </div>
          </div>
        </template>
      </div>

      <div v-if="filteredProducts.length === 0" class="text-center py-[72px]">
        <p class="text-[#0f2066] text-[20px] font-semibold">{{ t.catalog.noProducts }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink }    from 'vue-router'
import { useI18n }       from '@/composables/useI18n'

import nskLogo        from '@/assets/images/brands/nsk-logo.png'
import fiveLogo       from '@/assets/images/brands/555-logo.png'
import seikenLogo     from '@/assets/images/brands/seiken-logo.png'
import gmbLogo        from '@/assets/images/brands/gmb-logo.png'
import kjlexLogo      from '@/assets/images/brands/k-jlex-hilex-logo.png'
import nokLogo        from '@/assets/images/brands/nok-logo.png'
import showaLogo      from '@/assets/images/brands/showa-logo.png'
import nwbLogo        from '@/assets/images/brands/nwb-logo.png'
import compactLogo    from '@/assets/images/brands/compact-brakes-logo.png'
import mitsuboshiLogo from '@/assets/images/brands/mitsuboshi-logo.png'
import nknLogo        from '@/assets/images/brands/nkn-logo.png'
import neweraLogo     from '@/assets/images/brands/new-era-logo.png'
import battery3kLogo  from '@/assets/images/brands/3k-battery-logo.png'
import rbiLogo        from '@/assets/images/brands/rbi-logo.png'
import kjshockLogo    from '@/assets/images/brands/kjshock-absorber-logo.png'
import kjtricLogo     from '@/assets/images/brands/kjtric-logo.png'
import hydraulicsLogo from '@/assets/images/brands/kjhydraulics-logo.png'
import steeringLogo   from '@/assets/images/brands/kjsteering-logo.png'

const { t } = useI18n()
const selectedCat  = ref('All')
const searchQuery  = ref('')

const categories = [
  'Bearings','Belts','Brakes','Bushing, Shock, Mounting','Cables','Car Battery',
  'Clutch & Brake kits','CV Joints','Electrical parts','Ignition coil, Fuel pump',
  'Seals','Shock Absorbers','Suspension parts','Water pump','Wiper Blade',
]

const products = [
  { name:'NSK',             desc:'Bearings',                 cat:'Bearings',                slug:'nsk',           logo:nskLogo        },
  { name:'555',             desc:'Suspension parts',         cat:'Suspension parts',         slug:'555',           logo:fiveLogo       },
  { name:'Seiken',          desc:'Clutch & Brake kits',      cat:'Clutch & Brake kits',      slug:'seiken',        logo:seikenLogo     },
  { name:'GMB',             desc:'Water pump',               cat:'Water pump',               slug:'gmb',           logo:gmbLogo        },
  { name:'KJLEX',           desc:'Cables',                   cat:'Cables',                   slug:'kjlex-hilex',   logo:kjlexLogo      },
  { name:'NOK',             desc:'Seals',                    cat:'Seals',                    slug:'nok',           logo:nokLogo        },
  { name:'SHOWA',           desc:'Shock Absorbers',          cat:'Shock Absorbers',          slug:'showa',         logo:showaLogo      },
  { name:'NWB',             desc:'Wiper Blade',              cat:'Wiper Blade',              slug:'nwb',           logo:nwbLogo        },
  { name:'Compact',         desc:'Brakes',                   cat:'Brakes',                   slug:'compact',       logo:compactLogo    },
  { name:'Mitsuboshi',      desc:'Belts',                    cat:'Belts',                    slug:'mitsuboshi',    logo:mitsuboshiLogo },
  { name:'NKN',             desc:'CV Joints',                cat:'CV Joints',                slug:'nkn',           logo:nknLogo        },
  { name:'New-Era',         desc:'Electrical parts',         cat:'Electrical parts',         slug:'new-era',       logo:neweraLogo     },
  { name:'3K Battery',      desc:'Car Battery',              cat:'Car Battery',              slug:'3k-battery',    logo:battery3kLogo  },
  { name:'RBI',             desc:'Bushing, Shock, Mounting', cat:'Bushing, Shock, Mounting', slug:'rbi',           logo:rbiLogo        },
  { name:'KJ Shock',        desc:'Shock Absorbers',          cat:'Shock Absorbers',          slug:'kj-shock',      logo:kjshockLogo    },
  { name:'KJTRIC',          desc:'Ignition coil, Fuel pump', cat:'Ignition coil, Fuel pump', slug:'kjtric',        logo:kjtricLogo     },
  { name:'KJ Hydraulics',   desc:'Hydraulics',               cat:'Hydraulics',               slug:'kj-hydraulics', logo:hydraulicsLogo },
  { name:'KJ Steering',     desc:'Steering',                 cat:'Steering',                 slug:'kj-steering',   logo:steeringLogo   },
]

const filteredProducts = computed(() =>
  products.filter(p => {
    const matchCat    = selectedCat.value === 'All' || p.cat === selectedCat.value
    const matchSearch = p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCat && matchSearch
  })
)
</script>

<style>
.catalog-filter-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.catalog-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px 24px;
}
.catalog-card-img { height: 180px }

@media (max-width: 1024px) {
  .catalog-grid { grid-template-columns: repeat(4, 1fr) }
}
@media (max-width: 768px) {
  .catalog-grid { grid-template-columns: repeat(3, 1fr) }
  .catalog-filter-grid { grid-template-columns: 1fr }
}
@media (max-width: 480px) {
  .catalog-grid { grid-template-columns: repeat(2, 1fr) }
  .catalog-card-img { height: 130px }
}
</style>
