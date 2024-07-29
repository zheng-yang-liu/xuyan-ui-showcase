<template>
  <xy-classic-page :direction="direction" :asideWidth="220">
    <template #header>
      <tabBar :tabStyle="direction==='vertical'?{padding:'0 54px'}:{}" :current-index="1"></tabBar>
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
const targetWidth = 865;
const direction = ref(window.innerWidth >= targetWidth?'horizontal':'vertical');
const showMenu = ref(window.innerWidth >= targetWidth);
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
  if(width<targetWidth){
    direction.value = 'vertical'
  }else{
    direction.value = 'horizontal'
  }
}
const closeTime = 150;
const openTime = 350;
const closeMenu = ()=>{
  AnimationUtils.numberAnimate(closeTime,0,-menuLeftWidth,(val)=>{
    animationLeftStyle.value = {
      transform: `translateX(${val}px)`
    }
  },"ease")
  AnimationUtils.numberAnimate(closeTime,0.6,0,(val)=>{
    animationMenuMaskStyle.value = {
      opacity: val
    }
  },"ease")
  setTimeout(()=>{
    showMenu.value = false;
  },250)
}
watch(()=>showMenu.value,(NewVal)=>{
  console.log(NewVal,'NewVal')
  if(NewVal){
    AnimationUtils.numberAnimate(openTime,-menuLeftWidth,0,(val)=>{
      animationLeftStyle.value = {
        transform: `translateX(${val}px)`
      }
    },"ease")
    AnimationUtils.numberAnimate(closeTime,0,0.6,(val)=>{
      animationMenuMaskStyle.value = {
        opacity: val
      }
    },"ease")
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
  transition: transform 0.4s;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(-220px);
}
.slide-enter-to, .slide-leave-from {
  transform: translateX(0);
}
</style>