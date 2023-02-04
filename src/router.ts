import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/pages/LandingPage.vue'),
    },
    {
      path: '/demo',
      component: () => import('@/pages/DemoPage.vue'),
    },
  ],
})
