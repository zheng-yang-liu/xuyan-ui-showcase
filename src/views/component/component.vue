<template>
  <div>
    <xy-classic-page v-model:direction="direction">
      <template #header>
        <tabBar></tabBar>
      </template>
      <template #aside>
        <div style="width: 100%;height: 100%">
          <xy-menu-left
            :expandAll="true"
            :defaultStyle="false"
            :menuItems="menuItems"
            :select-style="selectStyle"
            :fillingDefaultIcon="false"
            :selectFirstItem="true"
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
    title:'组件基础',
    id: 'b3eda810068053e4189e00c61b000b72',
    children:[
      {
        title:"安装/使用",
        id:"5a8a715c27da27f82217078ddf6d3c30",
        path:"/component/foundation"
      }
    ]
  },
  {
    title: 'xuyan-ui组件预览',
    id: '63e2e6a19d2b7805d82eb20d8c21f615',
    children: [
      {
        title: 'xuyan-ui组件预览',
        id: '9bfe52845ec328bbcab94d9565a67495',
        path: '/component/componentPreview',
      }
    ]
  },
  {
    title:"图像组件",
    children:[
      {
        title:"图像裁剪",
        id:"",
        path:"/component/imgCropping"
      }
    ]
  }
]
const direction = ref('horizontal')

const selectStyle = {
  backgroundColor: '#ecf5ff',
  color: '#409eff'
}
</script>

<style scoped lang="scss">
@import '../../../node_modules/yanyan-ui/assets/style/mixin';
@include scrollbar();
</style>