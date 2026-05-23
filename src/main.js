import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)

// Pinia HARUS di-use sebelum router dan sebelum mount
const pinia = createPinia()
app.use(pinia)
app.use(router)

// Global error handler (development helper)
app.config.errorHandler = (err, instance, info) => {
  console.error('[Vue Error]', err, info)
}

app.mount('#app')
