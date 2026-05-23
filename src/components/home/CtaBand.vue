<template>
  <section class="relative overflow-hidden" aria-label="Fleet CTA" style="min-height:360px">

    <!-- Background logistic.webp — more visible, less dark overlay -->
    <div class="absolute inset-0">
      <img
        src="@/assets/images/banner/logistic.webp"
        alt="Fleet & Logistics"
        style="width:100%;height:100%;object-fit:cover;display:block"
      />
      <!-- Lighter overlay so trucks are clearly visible -->
      <div class="absolute inset-0"/>
    </div>

    <!-- Content — centered, bigger text -->
    <div class="relative z-10 flex items-center justify-center" style="min-height:360px;padding:60px 24px">
      <div style="text-align:center;max-width:1000px">
        <p style="font-family:'DM Sans',sans-serif;font-size:clamp(28px,2.2vw,38px);font-weight:700;color:white;line-height:1.2;margin:0 0 20px 0">
          Serving diverse customer base in transportation &amp; logistic industry,
          we offer high quality spare parts to support your vehicle operational needs.
        </p>
        <p style="font-family:'DM Sans',sans-serif;font-size:clamp(28px,2.2vw,38px);font-weight:700;color:white;margin:0">
          Contact us for more information.
        </p>
      </div>
    </div>

  </section>
</template>
