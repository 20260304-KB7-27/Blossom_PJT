import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/members',
      component: () => import('@/pages/Member.vue'),
    },
  ],
});

export default router;
