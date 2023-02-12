import App from '@/App.vue'
import { router } from '@/router'
import '@/styles/styles.scss'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'

const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
