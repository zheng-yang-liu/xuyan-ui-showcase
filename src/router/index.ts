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
        path:"installOrUse",
        name:"安装/使用",
        component:()=>import("@/views/component/childComponents/componentBasics/installOrUse/index.vue")
      },
      {
        path:'componentPreview',
        name:'组件预览',
        component:()=>import('@/views/component/childComponents/componentPreview/preview/index.vue')
      },
      {
        path:"imgCropping",
        name:"图像裁剪",
        component:()=>import("@/views/component/childComponents/imageComponent/imgCropping/index.vue")
      },
      {
        path:"menuLeft",
        name:"左侧导航",
        component:()=>import("@/views/component/childComponents/navigationComponents/menuLeft/index.vue")
      },
      {
        path:"codePreview",
        name:"代码高亮",
        component:()=>import("@/views/component/childComponents/effectDisplayComponent/codePreview/index.vue")
      },
      {
        path:"attributeTable",
        name:"属性列表",
        component:()=>import("@/views/component/childComponents/effectDisplayComponent/attributeTable/index.vue")
      },
      {
        path:"effectPreview",
        name:'组件效果展示',
        component:()=>import("@/views/component/childComponents/effectDisplayComponent/effectPreview/index.vue")
      },
      {
        path:"showcasePage",
        name:"组件说明页面",
        component:()=>import("@/views/component/childComponents/effectDisplayComponent/showcasePage/index.vue")
      },
      {
        path:"tooltip",
        name:"文字提示",
        component:()=>import("@/views/component/childComponents/basicComponent/tooltip/index.vue")
      },
      {
        path:"button",
        name:"按钮",
        component:()=>import("@/views/component/childComponents/basicComponent/button/index.vue")
      },
      {
        path:"dialog",
        name:"弹框",
        component:()=>import("@/views/component/childComponents/basicComponent/dialog/index.vue")
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
