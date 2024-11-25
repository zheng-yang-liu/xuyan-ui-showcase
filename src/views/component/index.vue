<template>
  <indexPage :menuItems="menuItems"></indexPage>
</template>

<script lang="ts" setup>

import indexPage from "@/components/indexPage.vue"
const menuItems = [
  {
    title:'组件基础',
    children:[
      {
        title:"安装/使用",
        id:"5a8a715c27da27f82217078ddf6d3c30",
        path:"/component/componentBasics/installOrUse"
      }
    ]
  },
  {
    title: 'xuyan-ui组件预览',
    children: [
      {
        title: '全部组件预览',
        id: '9bfe52845ec328bbcab94d9565a67495',
        path: '/component/componentPreview/preview',
      }
    ]
  },
  {
    title:"基础组件",
    children:[
      {
        title:"按钮",
        id:"b2c12eae714f3182aae627b3266e8d34",
        path:"/component/basicComponent/button"
      },
      {
        title:"图标",
        id:"4a1cae3a510e016563173f77b6a97705",
        path:"/component/basicComponent/icon"
      },
      {
        title:"文字提示",
        id:"fca35f82ec1770903d823ca69ce86e2b",
        path:'/component/basicComponent/tooltip'
      },
      {
        title:"弹框",
        id:"8731e20e14191224ff1fccfdcc5574b8",
        path:"/component/basicComponent/dialog"
      },
      {
        title:"经典页面布局",
        id:"e05bf199ade4e8c31e5a7aa27d9e8361",
        path:'/component/basicComponent/classicPage'
      },
      {
        title:"input输入框",
        id:"f02adbf101146350b08b63a0881f06d4",
        path:"/component/basicComponent/input"
      }
    ]
  },
  {
    title:"图像组件",
    children:[
      {
        title:"图像裁剪",
        id:"c5466b6f5f2a684ddbd9eb9bd16e7e53",
        path:"/component/imageComponent/imgCropping"
      }
    ]
  },
  {
    title:"导航组件",
    children:[
      {
        title:"左侧导航",
        id:"d0b5ba449b4ba704c33879d6a511558f",
        path:"/component/navigationComponents/menuLeft"
      }
    ]
  },
  {
    title:"效果展示组件",
    children:[
      {
        title:"代码高亮",
        id:"d9ce2b1fd65628f60dea5356a9aecfbe",
        path:"/component/effectDisplayComponent/codePreview"
      },
      {
        title:"属性列表",
        id:"2428a53791868251cc30e41b19644f1b",
        path: "/component/effectDisplayComponent/attributeTable"
      },
      {
        title:"组件效果展示",
        id:"11711b4b00f5a71a2ff80e31ea598126",
        path: "/component/effectDisplayComponent/effectPreview"
      },
      {
        title:"组件说明页面",
        id:"b598fcb95d002ceef10cc0eb6263899d",
        path: "/component/effectDisplayComponent/showcasePage"
      }
    ]
  }
]

</script>