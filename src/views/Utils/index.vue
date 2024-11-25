<template>
  <indexPage :menuItems="menuItems" :currentIndex="1"></indexPage>
</template>

<script lang="ts" setup>
import indexPage from "@/components/indexPage.vue"
const menuItems = [
  {
    title:'工具基础',
    children:[
      {
        title:"安装/使用",
        id:"7ce762e945f575547cea05c39291fc47",
        path:"/Utils/utilsInstallOrUse"
      }
    ]
  },
  {
    title:"基础工具",
    children:[
      {
        title:"Tools",
        id:"8856d1b8eb1bfc8e7fa1a721145b357e",
        path:"/Utils/Tools"
      }
    ]
  },
  {
    title: '动画API',
    children: [
      {
        title: 'svg描边动画',
        id: '8e344ac32f4287b8f9f761319f1962af',
        path: '/Utils/AnimationAPI/svgAnimation',
      },
      {
        title: '页面动画',
        id: 'a5aa77b57fa46044dc27a25437d95206',
        path:"/Utils/AnimationAPI/pageAnimation"
      },
      {
        title:"数字动画",
        id:"4a4b5de32322092ff3a3fbf1078ac7d9",
        path: "/Utils/AnimationAPI/numberAnimate"
      }
    ]
  },
  {
    title:"canvasAPI",
    children:[
      {
        title:"canvas绘图",
        id:"5f95b7ae0e1f3cca2da58559756cb36d",
        path:"/Utils/canvasAPI/canvasGraph"
      }
    ]
  }
]
</script>