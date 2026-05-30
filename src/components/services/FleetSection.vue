<template>
  <section style="background:#EEF1F5;padding:64px 24px" class="lg:px-16">
    <div class="max-w-[1280px] mx-auto">
      <div class="fleet-grid">

        <!-- LEFT IMAGE -->
        <div class="fleet-img-wrap">
          <img src="@/assets/images/partners/fleet.jpeg" alt="Fleet partnership"
               style="width:100%;height:100%;object-fit:cover;border-radius:16px" />
        </div>

        <!-- RIGHT TEXT -->
        <div>
          <p style="text-transform:uppercase;color:#0f2066;font-size:13px;letter-spacing:0.1em;font-weight:600;margin-bottom:10px">
            {{ t.fleet.label }}
          </p>
          <h2 style="font-size:clamp(26px,3.5vw,40px);line-height:1.05;font-weight:700;color:black;margin-bottom:14px">
            {{ t.fleet.title1 }}<br />{{ t.fleet.title2 }}
          </h2>
          <p style="font-size:14px;line-height:1.8;color:rgba(0,0,0,0.72);margin-bottom:14px">
            {{ t.fleet.desc }}
          </p>
          <h3 style="font-size:17px;font-weight:600;color:black;margin-bottom:14px">{{ t.fleet.howHelp }}</h3>

          <!-- 3 top + 2 bottom layout on desktop, all equal on mobile -->
          <div class="fleet-cards-top">
            <div v-for="(card, i) in t.fleet.cards.slice(0,3)" :key="i" class="fleet-card">
              <img :src="allIcons[i]" alt="" class="fleet-card-icon" />
              <p style="color:white;font-size:13px;line-height:1.25;font-weight:600;margin:0;text-align:center">
                {{ card.line1 }}<br />{{ card.line2 }}<template v-if="card.line3"><br />{{ card.line3 }}</template>
              </p>
            </div>
          </div>
          <div class="fleet-cards-bottom">
            <div v-for="(card, i) in t.fleet.cards.slice(3,5)" :key="i" class="fleet-card">
              <img :src="allIcons[i+3]" alt="" class="fleet-card-icon" />
              <p style="color:white;font-size:13px;line-height:1.25;font-weight:600;margin:0;text-align:center">
                {{ card.line1 }}<br />{{ card.line2 }}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n }    from '@/composables/useI18n'
import genuineIcon    from '@/assets/icons/genuine.png'
import dealerIcon     from '@/assets/icons/dealer.png'
import costIcon       from '@/assets/icons/cost.png'
import assistanceIcon from '@/assets/icons/assistance.png'
import taxIcon        from '@/assets/icons/tax.png'

const { t }    = useI18n()
const allIcons = [genuineIcon, dealerIcon, costIcon, assistanceIcon, taxIcon]
</script>

<style scoped>
.fleet-grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 60px;
  align-items: start;
}
.fleet-img-wrap { height: 520px }

.fleet-cards-top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 10px;
}
.fleet-cards-bottom {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  max-width: 66%;
  margin: 0 auto;
}
.fleet-card {
  background: #0f2066;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px 12px;
  aspect-ratio: 1;
}
.fleet-card-icon {
  width: 52px;
  height: 52px;
  object-fit: contain;
  margin-bottom: 12px;
}

@media (max-width: 1024px) {
  .fleet-grid          { grid-template-columns: 1fr; gap: 32px }
  .fleet-img-wrap      { height: 280px }
  .fleet-cards-bottom  { max-width: 100%; grid-template-columns: repeat(2, 1fr) }
}
@media (max-width: 480px) {
  .fleet-cards-top     { grid-template-columns: repeat(2, 1fr) }
  .fleet-cards-bottom  { grid-template-columns: repeat(2, 1fr); max-width: 100% }
}
</style>