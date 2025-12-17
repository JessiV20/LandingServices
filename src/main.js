import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  // 🔹 importante
import './style.css'
createApp(App)
  .use(router)                // 🔹 sin esto RouterView no existe
  .mount('#app')
