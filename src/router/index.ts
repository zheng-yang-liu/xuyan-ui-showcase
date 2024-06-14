import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'

const routes= [
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/',
    name: 'component',
    component: () => import('@/views/component.vue'),
    children: [
      {
        path: 'calendar',
        name: 'calendar',
        component: () => import('@/views/calendar.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
