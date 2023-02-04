import App from '@/App.vue'
import { router } from '@/router'
import '@/styles/styles.scss'
import { MotionPlugin } from '@vueuse/motion'
import { createApp } from 'vue'

createApp(App).use(router).use(MotionPlugin).mount('#app')
