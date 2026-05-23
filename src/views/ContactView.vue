<template>
  <main role="main" aria-label="Contact Page">
    <div class="page-hero">
      <div class="relative z-10 max-w-2xl">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">Home / <span class="breadcrumb-active">Contact Us</span></nav>
        <h1 class="font-head text-[clamp(44px,7vw,80px)] tracking-wide text-white leading-none mb-4">GET IN TOUCH</h1>
        <p class="text-[15px] text-white/48 leading-relaxed max-w-xl">Need assistance or a quote? Our sales team is ready to help with your spare parts and fleet needs.</p>
      </div>
    </div>
    <section class="bg-cream px-12 py-24" aria-labelledby="contact-heading">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div>
          <div class="section-tag">Our Office</div>
          <h2 class="section-h2" id="contact-heading">CONTACT INFO</h2>
          <div class="flex flex-col gap-6 mt-10">
            <div v-for="ci in contactItems" :key="ci.label" class="flex gap-4 items-start">
              <div class="w-12 h-12 bg-navy rounded-md flex items-center justify-center text-xl flex-shrink-0">{{ ci.icon }}</div>
              <div>
                <div class="text-[11px] font-bold tracking-[0.14em] uppercase text-navy mb-1">{{ ci.label }}</div>
                <div class="text-[14px] text-gray-600 leading-relaxed" v-html="ci.value" />
              </div>
            </div>
          </div>
          <div class="mt-8 bg-navy-mid rounded-md h-64 flex flex-col items-center justify-center gap-3 border border-dashed border-white/10 text-white/30 text-sm">
            <span class="text-4xl">📍</span>
            <div>Jalan Danau Sunter Barat Blok A4 No.3</div>
            <div class="text-xs">Sunter Agung, Jakarta Utara 14350</div>
            <a :href="site.company.address.mapsLink" target="_blank" rel="noopener" class="mt-2 text-[12px] font-semibold border border-white/15 px-4 py-2 rounded-sm text-white/40 hover:text-white hover:border-white/40 transition-all duration-200 no-underline" @click="analytics.track('click','maps_link')">Open in Google Maps ↗</a>
          </div>
          <div class="mt-8">
            <div class="text-[10px] font-bold tracking-[0.18em] uppercase text-navy mb-3.5">Shop Online</div>
            <div class="flex gap-3">
              <a v-for="shop in shops" :key="shop.label" :href="shop.url" target="_blank" rel="noopener" class="flex-1 bg-white border-[1.5px] border-navy/8 rounded-md px-4 py-4 flex items-center gap-3 hover:border-navy hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 no-underline" @click="analytics.track('click','shoplink_'+shop.label.toLowerCase())">
                <span class="text-3xl">{{ shop.icon }}</span>
                <div>
                  <div class="font-head text-[17px] tracking-[0.08em] text-navy">{{ shop.label }}</div>
                  <div class="text-[11px] text-gray-400">{{ shop.url_short }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-xl p-10 border border-navy/5 shadow-lg">
          <div class="font-head text-[28px] tracking-[0.08em] text-navy mb-7">SEND A MESSAGE</div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div><label for="f-name" class="form-label">Your Name</label><input id="f-name" type="text" class="form-input" placeholder="John Doe" v-model="form.name" /></div>
            <div><label for="f-email" class="form-label">Email Address</label><input id="f-email" type="email" class="form-input" placeholder="john@company.com" v-model="form.email" /></div>
          </div>
          <div class="mb-4"><label for="f-subject" class="form-label">Subject</label><select id="f-subject" class="form-input" v-model="form.subject"><option value="">Select a topic...</option><option>Product Inquiry</option><option>Fleet Partnership</option><option>Wholesale / Dealer</option><option>Technical Support</option><option>General Inquiry</option></select></div>
          <div class="mb-4"><label for="f-company" class="form-label">Company / Workshop</label><input id="f-company" type="text" class="form-input" placeholder="PT. Your Company" v-model="form.company" /></div>
          <div class="mb-4"><label for="f-phone" class="form-label">Phone / WhatsApp</label><input id="f-phone" type="tel" class="form-input" placeholder="+62 812 xxxx xxxx" v-model="form.phone" /></div>
          <div class="mb-6"><label for="f-msg" class="form-label">Your Message</label><textarea id="f-msg" rows="4" class="form-input resize-none" placeholder="Tell us about your spare parts needs..." v-model="form.message" /></div>
          <button class="w-full btn-primary justify-center py-4 text-sm" :class="formSent ? 'bg-green-600 hover:bg-green-600' : ''" @click="submitForm">{{ formSent ? '✓ Sent! We will contact you soon.' : 'Send Message →' }}</button>
          <p class="text-[12px] text-gray-400 mt-4 leading-relaxed">Or reach us via <a :href="site.company.waLink" target="_blank" rel="noopener" class="text-red no-underline hover:underline" @click="analytics.track('click','form_whatsapp')">WhatsApp {{ site.company.whatsapp }}</a> for faster response.</p>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref } from 'vue'
import { useSiteStore } from '@/stores/site'
import { useAnalyticsStore } from '@/stores/analytics'
const site = useSiteStore()
const analytics = useAnalyticsStore()
const form = ref({ name:'', email:'', subject:'', company:'', phone:'', message:'' })
const formSent = ref(false)
function submitForm() { analytics.track('click','form_submit'); formSent.value=true; setTimeout(()=>{ formSent.value=false; form.value={name:'',email:'',subject:'',company:'',phone:'',message:''} },4000) }
const contactItems = [
  { icon:'📍', label:'Address', value:`${site.company.address.street},<br>${site.company.address.city} ${site.company.address.zip}, ${site.company.address.country}` },
  { icon:'📞', label:'Telephone', value:`<a href="tel:${site.company.phone.replace(/\D/g,'')}" class="text-red no-underline hover:underline">${site.company.phone}</a>` },
  { icon:'💬', label:'WhatsApp', value:`<a href="${site.company.waLink}" target="_blank" rel="noopener" class="text-red no-underline hover:underline">${site.company.whatsapp}</a>` },
  { icon:'✉️', label:'Email', value:`<a href="mailto:${site.company.email}" class="text-red no-underline hover:underline">${site.company.email}</a>` },
  { icon:'🕐', label:'Operational Hours', value:site.company.hours },
]
const shops = [
  { label:'Tokopedia', icon:'🛒', url:site.company.tokopedia[0].url, url_short:'tokopedia.link' },
  { label:'Shopee', icon:'🛍️', url:site.company.shopee, url_short:'shopee.co.id' },
]
</script>
