import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/styles.scss'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(MotionPlugin).mount('#app')
