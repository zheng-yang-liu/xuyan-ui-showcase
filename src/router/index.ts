import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'

const routes= [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/component',
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
