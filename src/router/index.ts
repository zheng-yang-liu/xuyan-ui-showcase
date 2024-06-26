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
    component: () => import('@/views/component/component.vue'),
    children: [
      {
        path:'componentPreview',
        name:'componentPreview',
        component:()=>import('@/views/component/childComponents/preview/index.vue')
      },
      {
        path:"foundation",
        name:"foundation",
        component:()=>import("@/views/component/childComponents/foundation/index.vue")
      },
      {
        path:"imgCropping",
        name:"imgCropping",
        component:()=>import("@/views/component/childComponents/imgCropping/index.vue")
      },
      {
        path:"menuLeft",
        name:"menuLeft",
        component:()=>import("@/views/component/childComponents/menuLeft/index.vue")
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router
