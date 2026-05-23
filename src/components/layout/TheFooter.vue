<template>
  <footer style="background:#0d1f52" role="contentinfo">
    <div class="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16" style="padding-top:64px;padding-bottom:56px">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">

        <!-- COL 1: Logo bigger + Company name -->
        <div style="display:flex;flex-direction:column;align-items:flex-start">
          <img
            src="@/assets/images/TRAD Logo.png"
            alt="PT Timur Raya Anugerah Damai"
            style="height:100px;width:auto;margin-bottom:20px;filter:brightness(0) invert(1)"
          />
          <p style="color:white;font-family:'DM Sans',sans-serif;font-size:17px;font-weight:700;margin:0">
            PT. Timur Raya Anugerah Damai
          </p>
        </div>

        <!-- COL 2: Address -->
        <div style="font-family:'DM Sans',sans-serif;font-size:15px;line-height:1.9;color:rgba(255,255,255,0.82)">
          <p style="margin:0 0 20px 0">
            Jalan Danau Sunter Barat Blok A4 No.3<br>
            Sunter Agung, Jakarta Utara 14350,<br>
            Indonesia
          </p>
          <p style="margin:0 0 10px 0">
            Tel : <a href="tel:+622122655929" style="color:rgba(255,255,255,0.82);text-decoration:none">+6221-2265-5929</a>
          </p>
          <p style="margin:0">
            Email : <a href="mailto:tranugerahsales1@gmail.com" style="color:rgba(255,255,255,0.82);text-decoration:none">tranugerahsales1@gmail.com</a>
          </p>
        </div>

        <!-- COL 3: Sales Inquiry + Shop Here -->
        <div style="display:flex;flex-direction:column;gap:28px">
          <div>
            <h4 style="color:white;font-family:'DM Sans',sans-serif;font-size:17px;font-weight:700;margin:0 0 14px 0">Sales Inquiry</h4>
            <RouterLink to="/contact"
              style="display:inline-block;border:2px solid white;color:white;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;padding:10px 28px;text-decoration:none;transition:all 0.2s"
              onmouseover="this.style.background='white';this.style.color='#0d1f52'"
              onmouseout="this.style.background='transparent';this.style.color='white'"
              @click="analytics.track('click','footer_contact_us')">
              CONTACT US
            </RouterLink>
          </div>
          <div>
            <h4 style="color:white;font-family:'DM Sans',sans-serif;font-size:17px;font-weight:700;margin:0 0 14px 0">Shop Here</h4>
            <div style="display:flex;flex-direction:column;gap:16px">
              <a v-for="shop in shops" :key="shop.label" :href="shop.url" target="_blank" rel="noopener"
                style="display:flex;align-items:center;gap:12px;color:rgba(255,255,255,0.75);text-decoration:none;font-family:'DM Sans',sans-serif;font-size:15px;transition:color 0.2s"
                onmouseover="this.style.color='white'"
                onmouseout="this.style.color='rgba(255,255,255,0.75)'"
                @click="analytics.track('click','footer_shop_'+shop.label.toLowerCase())">
                <div style="width:40px;height:40px;border:1.5px solid rgba(255,255,255,0.25);border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">
                  {{ shop.icon }}
                </div>
                <span>{{ shop.label }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div style="border-top:1px solid rgba(255,255,255,0.1);padding:16px 24px">
      <div class="max-w-[1280px] mx-auto flex items-center justify-between">
        <p style="color:rgba(255,255,255,0.4);font-family:'DM Sans',sans-serif;font-size:13px;margin:0">
          © {{ new Date().getFullYear() }} PT. Timur Raya Anugerah Damai. All rights reserved.
        </p>
        <RouterLink to="/admin" style="color:rgba(255,255,255,0.08);font-size:12px;text-decoration:none" title="Analytics">⚙</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useAnalyticsStore } from '@/stores/analytics'
const analytics = useAnalyticsStore()
const shops = [
  { icon: '🛒', label: 'Tokopedia', url: 'https://tokopedia.link/FvNr5qU45Xb' },
  { icon: '🛍️', label: 'Shopee',    url: 'https://shopee.co.id/timurrayaanugerahdamai' },
]
</script>
