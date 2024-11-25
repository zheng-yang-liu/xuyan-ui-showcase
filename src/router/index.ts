import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

interface routerItem{
  meta?:Object,
  path:string,
  name:string,
  children?:Array<routerItem>,
  component?:Function,
}
interface routerIndexVue{
  [key:string]:Function
}


const routerPages:Object = import.meta.glob(
  `../views/**/page.js`,
  {
    eager: true,
    import:'default'
  }
)
console.log(routerPages);

const routerIndex = import.meta.glob(`../views/**/index.vue`);
console.log(routerIndex);

const buildRoutes = (routerPages:any[],routerIndexVue:routerIndexVue): any => {
  const root:Array<routerItem> = [];

  for (let [path, meta] of routerPages) {
    path = path.replace('../views', '').replace('/page.js', '');
    let current:Array<routerItem> | undefined = root;
    const parts = path.split('/').filter(Boolean);
    const partsLength = parts.length;

    parts.forEach((path:string, index:number) => {
      const isLast = index === partsLength - 1; //是否是最后一个
      const existingRoute = current?.find(route => route.path === path);

      if (existingRoute) {
        current = existingRoute.children || (existingRoute.children = []);
      } else {
        const router:routerItem = {
          name: path + Math.random().toString(36).substr(2, 9),
          path,
          children: [],
          component:routerIndexVue[`../views/${parts.join("/")}/index.vue`],
          ...(isLast && { meta })
        }
        if (isLast) delete router.children;
        if (!isLast) delete router.component;
        current?.push(router);
        if (!isLast) current = router.children && router.children;
      }

    });
  }
  root.forEach((item:routerItem):void=>{
    item.path = `/${item.path}`;
    item.component = routerIndexVue[`../views${item.path}/index.vue`]
  })
  root.push({
    path:'/',
    name:'index',
    component:routerIndexVue['../views/index.vue']
  })

  return root;
}

const routes: Readonly<RouteRecordRaw[]> = buildRoutes(Object.entries(routerPages),routerIndex);
console.log(routes);


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
