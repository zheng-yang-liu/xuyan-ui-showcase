<template>
  <xy-classic-page :direction="direction" :asideWidth="220">
    <template #header>
      <tabBar :tabStyle="direction==='vertical'?{padding:'0 54px'}:{}"></tabBar>
    </template>
    <template #aside>
      <transition name="slide">
        <div v-if="direction==='horizontal'" class="horLeft">
          <xy-menu-left
            :expandAll="true"
            :initByRouter="true"
            :defaultStyle="false"
            :isTheHeightSet="true"
            :menuItems="menuItems"
            :select-style="selectStyle"
            :menuLeftStyle="{backgroundColor: 'white'}"
          >
          </xy-menu-left>
        </div>
      </transition>

      <div v-if="direction==='vertical'" class="verLeft">
        <div @click="showMenu = true">
          <xy-icon icon="iconfont icon-caidan"></xy-icon>菜单
        </div>
        <div
          v-if="showMenu"
          @click="closeMenu"
          class="hideMenuStyle"
        >
          <xy-menu-left
            :width="menuLeftWidth"
            :expandAll="true"
            :initByRouter="true"
            :defaultStyle="false"
            :isTheHeightSet="true"
            :menuItems="menuItems"
            :select-style="selectStyle"
            :menuLeftStyle="[{backgroundColor: 'white',padding:'0 20px'},animationLeftStyle]"
          >
          </xy-menu-left>
          <div class="menuLeftMask" :style="animationMenuMaskStyle"></div>

        </div>
      </div>
    </template>
    <template #main>
      <div style="width: 100%;height: 100%;padding: 10px;overflow-y: auto;">
        <div style="padding: 64px 0 48px 54px">
          <router-view></router-view>
        </div>
      </div>
    </template>
  </xy-classic-page>
</template>

<script lang="ts" setup>
import { ref ,onMounted,onBeforeUnmount,watch} from 'vue'
import tabBar from "@/components/tabBar.vue"
import {AnimationUtils} from "yanyan-ui";
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
        path: '/component/componentPreview/AllPreview',
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
const direction = ref('horizontal')
const showMenu = ref(false)
const selectStyle = {
  backgroundColor: '#ecf5ff',
  color: '#409eff',
  borderRadius: '5px',
}
const animationLeftStyle = ref({
  transform: 'translateX(-200px)'
})
const animationMenuMaskStyle = ref({
  opacity: 0
})
const menuLeftWidth = 220;

const setArrange = ()=>{
  const width = window.innerWidth;
  if(width<865){
    direction.value = 'vertical'
  }else{
    direction.value = 'horizontal'
  }
}
const closeMenu = ()=>{
  AnimationUtils.numberAnimate(150,0,-menuLeftWidth,(val)=>{
    animationLeftStyle.value = {
      transform: `translateX(${val}px)`
    }
  })
  AnimationUtils.numberAnimate(150,0.6,0,(val)=>{
    animationMenuMaskStyle.value = {
      opacity: val
    }
  })
  setTimeout(()=>{
    showMenu.value = false;
  },250)
}
watch(()=>showMenu.value,(NewVal)=>{
  if(NewVal){
    AnimationUtils.numberAnimate(250,-menuLeftWidth,0,(val)=>{
      animationLeftStyle.value = {
        transform: `translateX(${val}px)`
      }
    })
    AnimationUtils.numberAnimate(150,0,0.6,(val)=>{
      animationMenuMaskStyle.value = {
        opacity: val
      }
    })
  }
})

onMounted(()=>{
  setArrange()
  window.addEventListener('resize',setArrange)
})
onBeforeUnmount(()=>{
  window.removeEventListener('resize',setArrange)
})
</script>

<style scoped lang="scss">
.hideMenuStyle{
  position: fixed;
  inset: 0;
  z-index: 9999;
  .menuLeftBox{

  }
  .menuLeftMask{
    position: fixed;
    inset: 0;
    background-color: black;
    z-index: -1;
  }
  //background-color: #6c6c6c;
  //width: 100%;
}
.horLeft{
  width: 100%;
  height: 100%;
  padding: 20px 0 0 20px;
  position: absolute;
  z-index: 10;
}
.verLeft{
  height: 50px;
  @include display-flex();
  border-bottom: 1px #dedfe3 solid;
  background-color: white;
  padding-left: 60px;
  &:hover{
    cursor: pointer;
  }

}
::v-deep(.xy-aside){
  position: sticky!important;
  top: 0!important;
  z-index: 999;
}

.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-220px);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
</style>