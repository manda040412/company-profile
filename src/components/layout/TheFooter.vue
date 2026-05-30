<template>
  <footer style="background:#0d1f52" role="contentinfo">
    <div class="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16" style="padding-top:56px;padding-bottom:48px">
      <div class="footer-grid">

        <!-- Logo + name -->
        <div style="display:flex;flex-direction:column;align-items:flex-start">
          <img src="@/assets/images/TRAD Logo.png" alt="PT Timur Raya Anugerah Damai"
               style="height:80px;width:auto;margin-bottom:16px;filter:brightness(0) invert(1)" />
          <p style="color:white;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:700;margin:0">
            PT. Timur Raya Anugerah Damai
          </p>
        </div>

        <!-- Address -->
        <div style="font-family:'DM Sans',sans-serif;font-size:14px;line-height:1.9;color:rgba(255,255,255,0.78)">
          <p style="margin:0 0 14px 0">
            Jalan Danau Sunter Barat Blok A4 No.3<br>
            Sunter Agung, Jakarta Utara 14350, Indonesia
          </p>
          <p style="margin:0 0 8px 0">
            Tel :
            <a href="tel:+622122655929" style="color:rgba(255,255,255,0.78);text-decoration:none">+6221-2265-5929</a>
          </p>
          <p style="margin:0">
            Email :
            <a href="mailto:tranugerahsales1@gmail.com" style="color:rgba(255,255,255,0.78);text-decoration:none">tranugerahsales1@gmail.com</a>
          </p>
        </div>

        <!-- Shop + Contact -->
        <div style="display:flex;flex-direction:column;gap:24px">
          <div>
            <h4 style="color:white;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:700;margin:0 0 12px 0">
              {{ t.footer.salesInquiry }}
            </h4>
            <RouterLink to="/contact"
              style="display:inline-flex;align-items:center;justify-content:center;background:white;color:#0d1f52;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:700;letter-spacing:0.02em;width:136px;height:40px;border-radius:2px;text-decoration:none">
              {{ t.footer.contactUs }}
            </RouterLink>
          </div>
          <div>
            <h4 style="color:white;font-family:'DM Sans',sans-serif;font-size:15px;font-weight:700;margin:0 0 16px 0">
              {{ t.footer.shopHere }}
            </h4>
            <div style="display:flex;flex-direction:column;gap:16px">
              <a href="https://tokopedia.link/FvNr5qU45Xb" target="_blank" rel="noopener"
                 style="display:flex;align-items:center;gap:12px;text-decoration:none;color:white;font-family:'DM Sans',sans-serif;font-size:14px">
                <img src="@/assets/icons/tokopedia.png" alt="Tokopedia"
                     style="width:24px;height:24px;object-fit:contain;filter:brightness(0) invert(1)" />
                Tokopedia
              </a>
              <a href="https://shopee.co.id/timurrayaanugerahdamai" target="_blank" rel="noopener"
                 style="display:flex;align-items:center;gap:12px;text-decoration:none;color:white;font-family:'DM Sans',sans-serif;font-size:14px">
                <img src="@/assets/icons/shopee.png" alt="Shopee"
                     style="width:24px;height:24px;object-fit:contain;filter:brightness(0) invert(1)" />
                Shopee
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="border-top:1px solid rgba(255,255,255,0.1);padding:14px 24px">
      <div class="max-w-[1280px] mx-auto flex items-center justify-between flex-wrap gap-2">
        <p style="color:rgba(255,255,255,0.35);font-family:'DM Sans',sans-serif;font-size:12px;margin:0">
          © {{ new Date().getFullYear() }} PT. Timur Raya Anugerah Damai. {{ t.footer.rights }}
        </p>
        <RouterLink to="/admin" style="color:rgba(255,255,255,0.06);font-size:11px;text-decoration:none" title="Admin">⚙</RouterLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from '@/composables/useI18n'
const { t } = useI18n()
</script>

<style>
.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
}
@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr 1fr }
}
@media (max-width: 480px) {
  .footer-grid { grid-template-columns: 1fr }
}
</style>
