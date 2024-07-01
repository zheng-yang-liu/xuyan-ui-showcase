<template>
  <div>
    <xy-classic-page v-model:direction="direction" :asideWidth="220">
      <template #header>
        <tabBar></tabBar>
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
    title:'组件基础',
    children:[
      {
        title:"安装/使用",
        id:"5a8a715c27da27f82217078ddf6d3c30",
        path:"/component/installOrUse"
      }
    ]
  },
  {
    title: 'xuyan-ui组件预览',
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
        id:"c5466b6f5f2a684ddbd9eb9bd16e7e53",
        path:"/component/imgCropping"
      }
    ]
  },
  {
    title:"导航组件",
    children:[
      {
        title:"左侧导航",
        id:"d0b5ba449b4ba704c33879d6a511558f",
        path:"/component/menuLeft"
      }
    ]
  },
  {
    title:"效果展示组件",
    children:[
      {
        title:"代码高亮",
        id:"f1",
        path:"/component/codePreview"
      },
      {
        title:"属性列表",
        id:"f2",
        path: "/component/attributeTable"
      },
      {
        title:"组件效果展示",
        id:"f3",
        path: "/component/effectPreview"
      },
      {
        title:"组件说明页面",
        id:"f4",
        path: "/component/showcasePage"
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