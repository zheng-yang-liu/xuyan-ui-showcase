<template>
  <div>
    <xy-classic-page v-model:direction="direction" :asideWidth="220">
      <template #header>
        <tabBar :currentIndex="1"></tabBar>
      </template>
      <template #aside>
        <div style="width: 100%;height: 100%;padding: 20px 0 0 20px">
          <xy-menu-left
            :expandAll="true"
            :defaultStyle="false"
            :menuItems="menuItems"
            :select-style="selectStyle"
            :initByRouter="true"
          >
          </xy-menu-left>
        </div>
      </template>
      <template #main>
        <div style="width: 100%;height: 100%;padding: 10px;overflow-y: auto;">
          <div style="padding: 64px 0 48px 64px">
            <router-view></router-view>
          </div>
        </div>
      </template>
    </xy-classic-page>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import tabBar from "@/components/tabBar.vue"
const menuItems = [
  {
    title:'工具基础',
    children:[
      {
        title:"安装/使用",
        id:"7ce762e945f575547cea05c39291fc47",
        path:"/Utils/installOrUse"
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
const direction = ref('horizontal')

const selectStyle = {
  backgroundColor: '#ecf5ff',
  color: '#409eff',
  borderRadius: '5px',
}

</script>

<style scoped lang="scss">
@import '../../../node_modules/yanyan-ui/assets/style/mixin';
@include scrollbar();
</style>