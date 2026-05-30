<template>
  <main role="main" aria-label="Contact Page">

    <!-- HERO -->
    <div class="relative overflow-hidden" style="height:260px">
      <img src="@/assets/images/banner/contact-hero.webp"
           alt="Contact us"
           style="width:100%;height:100%;object-fit:cover;display:block" />
      <div style="position:absolute;inset:0;background:rgba(0,0,0,0.45)" />
      <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 24px">
        <h1 style="font-family:'DM Sans',sans-serif;font-size:clamp(28px,4vw,48px);font-weight:700;color:white;margin:0 0 12px 0">
          {{ t.contact.heroTitle }}
        </h1>
        <p style="font-family:'DM Sans',sans-serif;font-size:15px;color:rgba(255,255,255,0.8);margin:0">
          {{ t.contact.heroSub }}
        </p>
      </div>
    </div>

    <!-- FORM + INFO -->
    <div style="background:white;padding:48px 0">
      <div class="max-w-[1280px] mx-auto px-6 lg:px-16 contact-grid" style="align-items:start">

        <!-- LEFT: FORM -->
        <div>
          <h2 style="font-family:'DM Sans',sans-serif;font-size:18px;font-weight:700;color:#0f2066;margin:0 0 24px 0;text-decoration:underline;text-underline-offset:4px">
            {{ t.contact.formTitle }}
          </h2>

          <div style="display:flex;flex-direction:column;gap:14px">

            <!-- Name -->
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
                <label style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#555">{{ t.contact.nameLabel }}</label>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <input v-model="form.name" type="text" :placeholder="t.contact.namePlaceholder"
                style="width:100%;height:44px;border:1px solid #ddd;border-radius:4px;padding:0 14px;font-family:'DM Sans',sans-serif;font-size:14px;color:#333;outline:none;box-sizing:border-box"
                @focus="e => e.target.style.borderColor='#0f2066'" @blur="e => e.target.style.borderColor='#ddd'" />
            </div>

            <!-- Phone -->
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
                <label style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#555">{{ t.contact.phoneLabel }}</label>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.08 3.15 2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <input v-model="form.phone" type="tel" :placeholder="t.contact.phonePlaceholder"
                style="width:100%;height:44px;border:1px solid #ddd;border-radius:4px;padding:0 14px;font-family:'DM Sans',sans-serif;font-size:14px;color:#333;outline:none;box-sizing:border-box"
                @focus="e => e.target.style.borderColor='#0f2066'" @blur="e => e.target.style.borderColor='#ddd'" />
            </div>

            <!-- Email -->
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
                <label style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#555">{{ t.contact.emailLabel }}</label>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <input v-model="form.email" type="email" :placeholder="t.contact.emailPlaceholder"
                style="width:100%;height:44px;border:1px solid #ddd;border-radius:4px;padding:0 14px;font-family:'DM Sans',sans-serif;font-size:14px;color:#333;outline:none;box-sizing:border-box"
                @focus="e => e.target.style.borderColor='#0f2066'" @blur="e => e.target.style.borderColor='#ddd'" />
            </div>

            <!-- Subject -->
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
                <label style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#555">{{ t.contact.subjectLabel }}</label>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
              </div>
              <input v-model="form.subject" type="text" :placeholder="t.contact.subjectPlaceholder"
                style="width:100%;height:44px;border:1px solid #ddd;border-radius:4px;padding:0 14px;font-family:'DM Sans',sans-serif;font-size:14px;color:#333;outline:none;box-sizing:border-box"
                @focus="e => e.target.style.borderColor='#0f2066'" @blur="e => e.target.style.borderColor='#ddd'" />
            </div>

            <!-- Message -->
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px">
                <label style="font-family:'DM Sans',sans-serif;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#555">{{ t.contact.messageLabel }}</label>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#aaa" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
              </div>
              <textarea v-model="form.message" rows="5" :placeholder="t.contact.messagePlaceholder"
                style="width:100%;border:1px solid #ddd;border-radius:4px;padding:12px 14px;font-family:'DM Sans',sans-serif;font-size:14px;color:#333;outline:none;resize:vertical;box-sizing:border-box"
                @focus="e => e.target.style.borderColor='#0f2066'" @blur="e => e.target.style.borderColor='#ddd'" />
            </div>

            <div>
              <button @click="handleSubmit" :disabled="submitted"
                style="height:46px;padding:0 40px;border:none;border-radius:4px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;transition:background 0.2s"
                :style="{ background: submitted ? '#16a34a' : '#0f2066', color: 'white' }">
                {{ submitted ? t.contact.sentBtn : t.contact.submitBtn }}
              </button>
            </div>

          </div>
        </div>

        <!-- RIGHT: INFO -->
        <div>
          <h2 style="font-family:'DM Sans',sans-serif;font-size:18px;font-weight:700;color:#0f2066;margin:0 0 24px 0;text-decoration:underline;text-underline-offset:4px">
            {{ t.contact.infoTitle }}
          </h2>

          <div style="display:flex;flex-direction:column;gap:12px">

            <!-- Address -->
            <div style="display:flex;align-items:flex-start;gap:16px;background:#f5f6fa;border-radius:8px;padding:18px 20px">
              <div style="width:40px;height:40px;border-radius:50%;background:#0f2066;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div>
                <p style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;color:#0f2066;margin:0 0 4px 0">{{ t.contact.addressLabel }}</p>
                <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:#555;margin:0;line-height:1.6">Jalan Danau Sunter Barat Blok A4 No. 3, Sunter Agung, Jakarta Utara 14350, Indonesia</p>
              </div>
            </div>

            <!-- Phone -->
            <div style="display:flex;align-items:center;gap:16px;background:#f5f6fa;border-radius:8px;padding:18px 20px">
              <div style="width:40px;height:40px;border-radius:50%;background:#0f2066;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              </div>
              <div>
                <p style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;color:#0f2066;margin:0 0 2px 0">{{ t.contact.phoneLabel }}</p>
                <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:#555;margin:0">Tel : +6221-2265-5929</p>
              </div>
            </div>

            <!-- Hours -->
            <div style="display:flex;align-items:center;gap:16px;background:#f5f6fa;border-radius:8px;padding:18px 20px">
              <div style="width:40px;height:40px;border-radius:50%;background:#0f2066;display:flex;align-items:center;justify-content:center;flex-shrink:0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
              </div>
              <div>
                <p style="font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;color:#0f2066;margin:0 0 2px 0">{{ t.contact.hoursLabel }}</p>
                <p style="font-family:'DM Sans',sans-serif;font-size:14px;color:#555;margin:0">{{ t.contact.hoursValue }}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <!-- MAP -->
    <div style="background:white;padding:0 0 48px 0">
      <div class="max-w-[1280px] mx-auto px-6 lg:px-16">
        <div style="width:100%;height:300px;border-radius:8px;overflow:hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.871010947123!2d106.85858549999999!3d-6.148020799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f579056a0401%3A0xf12313d40eda2685!2sPT.%20TIMUR%20RAYA%20ANUGERAH%20DAMAI!5e0!3m2!1sen!2sid!4v1780040037591!5m2!1sen!2sid"
            width="100%" height="100%" style="border:0;display:block" allowfullscreen loading="lazy"
            referrerpolicy="no-referrer-when-downgrade" title="PT. Timur Raya Anugerah Damai Location">
          </iframe>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useAnalytics } from '@/composables/useAnalytics'
import { useI18n } from '@/composables/useI18n'

const { t } = useI18n()
const { trackFormSubmit, trackWA } = useAnalytics()

const form = ref({ name: '', phone: '', email: '', subject: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  if (!form.value.name || !form.value.email || !form.value.message) return
  submitted.value = true
  trackFormSubmit()
  setTimeout(() => {
    submitted.value = false
    form.value = { name: '', phone: '', email: '', subject: '', message: '' }
  }, 3000)
}
</script>

<style>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
}
@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr }
}
</style>
