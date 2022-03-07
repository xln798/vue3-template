import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'schedule',
    component: () => import(/* webpackChunkName: "schedule" */ '@/views/schedule.vue'),
    meta: {
      index: 1,
    },
  }],
});
export default router;
