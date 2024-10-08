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
    component: () => import('@/views/component/index.vue'),
    children: [
      {
        path:"componentBasics",
        name:"组件基础",
        children:[
          {
            path:"installOrUse",
            name:"安装/使用",
            component:()=>import("@/views/component/childComponents/componentBasics/installOrUse/index.vue")
          },
        ]
      },
      {
        path:"componentPreview",
        name:"组件预览",
        children:[
          {
            path:'AllPreview',
            name:'xuyan-ui组件预览',
            component:()=>import('@/views/component/childComponents/componentPreview/preview/index.vue')
          },
        ]
      },
      {
        path:"basicComponent",
        name:"基础组件",
        children:[
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
          },
          {
            path: "icon",
            name: "图标",
            component: () => import("@/views/component/childComponents/basicComponent/icon/index.vue")
          },
          {
            path:"classicPage",
            name:"经典页面布局",
            component:()=>import("@/views/component/childComponents/basicComponent/classicPage/index.vue")
          },
          {
            path:"input",
            name:'input输入框',
            component:()=>import("@/views/component/childComponents/basicComponent/input/index.vue")
          }
        ]
      },
      {
        path:"imageComponent",
        name:"图像组件",
        children:[
          {
            path:"imgCropping",
            name:"图像裁剪",
            component:()=>import("@/views/component/childComponents/imageComponent/imgCropping/index.vue")
          },
        ]
      },
      {
        path:"navigationComponents",
        name:"导航组件",
        children:[
          {
            path:"menuLeft",
            name:"左侧导航",
            component:()=>import("@/views/component/childComponents/navigationComponents/menuLeft/index.vue")
          },
        ]
      },
      {
        path:"effectDisplayComponent",
        name:"效果展示组件",
        children:[
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
        ]
      },
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test.vue')
  },
  {
    path:"/Utils",
    name:"工具",
    component:()=>import("@/views/Utils/index.vue"),
    children:[
      {
        path:"installOrUse",
        name:"Utils 安装/使用",
        component:()=>import("@/views/Utils/installOrUse/index.vue")
      },
      {
        path:"Tools",
        name:"基础工具",
        component:()=>import("@/views/Utils/Tools/index.vue")
      },
      {
        path:"AnimationAPI",
        name:"动画API",
        children:[
          {
            path:"svgAnimation",
            name:"SVG动画",
            component:()=>import("@/views/Utils/AnimationAPI/svgAnimation/index.vue")
          },
          {
            path:'pageAnimation',
            name:"页面动画",
            component:()=>import("@/views/Utils/AnimationAPI/pageAnimation/index.vue")
          },
          {
            path:"numberAnimate",
            name:"数字动画",
            component:()=>import("@/views/Utils/AnimationAPI/numberAnimate/index.vue")
          }
        ]
      },
      {
        path:"canvasAPI",
        name:"canvas相关API",
        children:[
          {
            path:"canvasGraph",
            name:"canvas绘图",
            component:()=>import("@/views/Utils/canvasAPI/canvasGraph/index.vue")
          },
        ]
      },
    ]
  },
  {
    path:"/pageEffects",
    name:"整页组件的页面效果",
    children:[
      {
        path:"page1",
        name:"page1",
        component:()=>import("@/views/pageEffects/effects/page1.vue")
      },
      {
        path:"canvasGraph",
        name:"canvas绘图效果",
        component:()=>import("@/views/pageEffects/effects/canvasGraph.vue")
      },
      {
        path:"customizeGraphics",
        name:"自定义图形",
        component:()=>import("@/views/pageEffects/effects/customizeGraphics.vue")
      },
      {
        path:"classicPage",
        name:"经典页面布局-效果",
        component:()=>import("@/views/pageEffects/effects/classicPage.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0,};
    }
  },
});
router.beforeEach((to, from, next) => {
  // 在路由切换之前执行的函数
  // console.log('切换路由，从:', from.path, '到:', to.path);

  // 执行某些操作，比如权限检查
  // if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' });
  // else next();

  // 继续路由切换
  next();
});

router.afterEach((to, from) => {
  // 在路由切换之后执行的函数
});
export default router
