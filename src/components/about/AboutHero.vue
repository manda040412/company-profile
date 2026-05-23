<template>
  <section class="who-we-are" aria-label="Who We Are">

    <div class="video-wrap" aria-hidden="true">
      <iframe
        src="https://www.youtube.com/embed/nWBO4eKJGHc?autoplay=1&mute=1&loop=1&playlist=nWBO4eKJGHc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="Company background video"
      />
    </div>

    <div class="overlay" aria-hidden="true" />

    <div class="content">
      <p class="eyebrow">Who We Are</p>

      <h2 class="font-head headline">
        PT. Timur Raya Anugerah Damai
      </h2>

      <p class="body-text">
        is an importer and distribution company for automotive spare parts mainly from Japan
        and other parts of the world. We pride ourselves on reliability, quality and speed
        when providing our products and services to our customers.
      </p>

      <p class="body-text mt-4">
        Following the dynamic change in business environment, we implement modern warehousing
        and operational system with the purpose of providing greater services to our customers
        more efficiently. We also equip ourselves with experienced dedicated team, specialized
        in handling automotive spare parts with commitment to maintain long-term business
        partnerships. In addition to quality products and greater customer services, maintaining
        a reliable/trustworthy business is among our highest priority.
      </p>
    </div>

  </section>
</template>

<style scoped>
.who-we-are {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
}

.video-wrap {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}
.video-wrap iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 177.78vh;
  min-width: 100%;
  height: 56.25vw;
  min-height: 100%;
  transform: translate(-50%, -50%);
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(35, 36, 39, 0.72);
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1280px;
  padding: 100px 48px;
}

.eyebrow {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #ffffff;
  padding-bottom: 5px;
  margin-bottom: 10px;
  text-decoration: underline;
}

.headline {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(28px, 5.5vw, 48px);
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.03em;
  line-height: 1.0;
  margin-bottom: 16px;
}

.body-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  line-height: 1.5;
  color: rgb(255, 255, 255);
  margin: 0 auto;
}

.mt-4 { margin-top: 16px; }
</style>