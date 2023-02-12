import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: async () => import('@/pages/LandingPage.vue'),
    },
    {
      path: '/demo',
      component: async () => import('@/pages/DemoPage.vue'),
    },
  ],
})
