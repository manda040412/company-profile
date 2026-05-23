<template>
  <section class="vm-section" aria-labelledby="vm-heading">

    <!-- Inner wrapper — same max-width + centering as home -->
    <div class="vm-inner">

      <!-- ══ LEFT: Vision + Mission text ══ -->
      <div class="left-col">
        <div class="vm-block">
          <h3 class="vm-title">Our Vision</h3>
          <p class="vm-text">
            To be the leading distributor of automotive parts, recognized for providing guaranteed product
            quality and easy access for customers throughout Indonesia.
          </p>
        </div>

        <div class="vm-block">
          <h3 class="vm-title">Our Mission</h3>
          <p class="vm-text">
            To implement innovative ideas and optimization to enhance ourselves in providing our customers
            the best service, product quality and compliance with legal regulations.
          </p>
        </div>
      </div>

      <!-- ══ RIGHT: Navy band + car ══ -->
      <div class="right-col" aria-hidden="true">

        <img
          src="@/assets/images/service.png"
          alt=""
          class="car-img"
        />
      </div>

    </div>

  </section>
</template>

<style scoped>
/* ── Outer section — full bleed background ── */
.vm-section {
  background: #eef0f6;
  overflow: hidden;
}

/* ── Inner wrapper — same as home: max-w-[1280px] mx-auto px-6 md:px-12 ── */
.vm-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 4px;           /* md:px-12 = 48px */
  display: grid;
  grid-template-columns: 55fr 45fr;
  min-height: 440px;
  align-items: center;
}
@media (max-width: 768px) {
  .vm-inner { padding: 0 24px; }  /* px-6 = 24px */
}
@media (max-width: 900px) {
  .vm-inner   { grid-template-columns: 1fr; }
  .right-col  { display: none; }
}

/* ── Left column ── */
.left-col {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 120px 64px 120px 0;
}

.vm-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 22px;
  font-weight: 700;
  color: #0B1A3A;
  margin-bottom: 12px;
}

.vm-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #555;
  line-height: 1.8;
  max-width: 520px;
}

/* ── Right column ── */
.right-col {
  position: relative;
  /* tall enough to show the full car */
  height: 100%;
  min-height: 440px;
}

/* Navy band — top ~46%, bleeds to the RIGHT beyond inner wrapper */
.navy-band {
  position: absolute;
  top: 0;
  /* start from left edge of right col */
  left: 0;
  /* bleed all the way to viewport right edge */
  right: calc(-1 * (50vw - 640px) - 48px);
  height: 46%;
  background: #0B1A3A;
  display: flex;
  align-items: flex-start;
  padding: 36px 48px 0 48px;
  z-index: 0;
}
@media (max-width: 768px) {
  .navy-band { right: -24px; }
}

.tagline {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(18px, 1.8vw, 24px);
  font-weight: 700;
  color: #fff;
  line-height: 1.38;
}

/* Car image — full width of right col, no clipping */
.car-img {
  position: absolute;
  /* sit 0 from bottom of section */
  bottom: -8px;
  /* bleed a little left so car appears centred over band edge */
  left: -4%;
  width: 112%;
  max-width: none;    /* ← remove max-width so it doesn't get cut */
  object-fit: contain;
  z-index: 1;
  filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.12));
}
</style>