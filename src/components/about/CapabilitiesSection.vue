<template>
  <section class="caps-section" aria-labelledby="caps-heading">

    <div class="caps-inner">
      <div class="header">
        <h2 class="section-h2 font-head" id="caps-heading">WHAT WE OFFER</h2>
      </div>

      <div class="offer-grid" role="list">
        <article
          v-for="cap in capabilities"
          :key="cap.title"
          class="offer-card"
          role="listitem"
        >
          <img :src="cap.icon" :alt="cap.title" class="cap-icon" />
          <h3 class="cap-title font-head">{{ cap.title }}</h3>
          <p class="cap-desc">{{ cap.desc }}</p>
        </article>
      </div>
    </div>

  </section>
</template>

<script setup>
import supportIcon    from '@/assets/icons/support.png'
import knowIcon       from '@/assets/icons/know.png'
import guaranteedIcon from '@/assets/icons/guaranteed.png'
import pickupIcon     from '@/assets/icons/pickup.png'
import deliveryIcon   from '@/assets/icons/delivery.png'

const capabilities = [
  {
    icon: supportIcon,
    title: 'Support',
    desc: 'Chat consultation services to answer your questions and tips about our products.',
  },
  {
    icon: knowIcon,
    title: 'Product Know-How',
    desc: 'Equipped with product know-how, we guarantee our products fit to your vehicle requirements through chat consultation.',
  },
  {
    icon: guaranteedIcon,
    title: 'Guaranteed Original Product',
    desc: 'As an authorized distributor, we guarantee our products are 100% original from the manufacturer.',
  },
  {
    icon: pickupIcon,
    title: 'Buy and Pickup in Store',
    desc: 'Hassle free option. Confirm product fitment before buying.',
  },
  {
    icon: deliveryIcon,
    title: 'Delivery Options at Your Choices',
    desc: 'On time delivery services to reach your ends.',
  },
]
</script>

<style scoped>
/* ── Full-bleed section ── */
.caps-section {
  background: #fff;
  padding: 60px 0;
}

/* ── Inner: sama persis dengan home — max-w-[1280px] mx-auto px-12 ── */
.caps-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 4px;
}
@media (max-width: 768px) {
  .caps-inner { padding: 0 24px; }
}

.header {
  text-align: center;
  margin-bottom: 32px;
}

.section-h2 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(26px, 3.5vw, 40px);
  font-weight: 400;
  color: #0f2066;
  letter-spacing: 0.06em;
}

/* ── Grid: border menempel ke edge inner wrapper ── */
.offer-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: 1px solid #e2e6f0;
  border-radius: 10px;
  overflow: hidden;
}
@media (max-width: 1024px) {
  .offer-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 640px) {
  .offer-grid { grid-template-columns: 1fr 1fr; }
}

.offer-card {
  padding: 36px 28px;
  border-right: 1px solid #e2e6f0;
  transition: background 0.2s;
  cursor: default;
}
.offer-card:last-child { border-right: none; }
.offer-card:hover { background: #f5f7ff; }

.cap-icon {
  width: 54px;
  height: 54px;
  object-fit: contain;
  margin-bottom: 18px;
  display: block;
}

.cap-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: #0f2066;
  margin-bottom: 10px;
  line-height: 1.3;
}

.cap-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #5c5c5c;
  line-height: 1.72;
}
</style>