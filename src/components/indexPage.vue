<template>
  <xy-classic-page :direction="direction" :asideWidth="menuLeftWidth" :style="pageCssValue">
    <template #header>
      <tabBar :currentIndex="currentIndex"></tabBar>
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
        <div @click="scrollToTop" style="margin-left: auto">
          返回顶部<xy-icon icon="iconfont icon-fanhuidingbu" :icon-style="{marginLeft:'5px'}"></xy-icon>
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
          <div v-if="showMenu" class="menuLeftMask" :style="animationMenuMaskStyle">{{showMenu}}</div>

        </div>
      </div>
    </template>
    <template #main>
      <div class="main-wrapper"  ref="mainWrapper">
        <div class="main-inner">
          <router-view></router-view>
        </div>
      </div>
    </template>
  </xy-classic-page >
</template>

<script lang="ts" setup>
import { ref ,onMounted,onBeforeUnmount,watch } from 'vue'
import tabBar from "@/components/tabBar.vue"
import {AnimationUtils} from "yanyan-ui";
import {useRoute}from"vue-router"
const props = defineProps({
  currentIndex:{
    type:Number,
    default:0
  },
  menuItems:{
    type:Array,
    default:()=>[],
    required:true
  }
})
const pageCssValue = ref({
  "--page-padding-left": "54px",
  "--tabBar-padding-leftAndRight": "20px",
  "--wrapper-overflow-y":"auto"
})
const targetWidth = 865;
const direction = ref(window.innerWidth >= targetWidth?'horizontal':'vertical');
const showMenu = ref(window.innerWidth >= targetWidth);
const mainWrapper = ref<HTMLElement|null>(null);
const selectStyle = {
  backgroundColor: '#ecf5ff',
  color: '#409eff',
  borderRadius: '5px',
}

const animationMenuMaskStyle = ref({
  opacity: 0
})
const menuLeftWidth = 220;
const animationLeftStyle = ref({
  transform: `translateX(-${menuLeftWidth}px)`
})
const setArrange = ()=>{
  const width = window.innerWidth;
  if(width<targetWidth){
    direction.value = 'vertical'
    pageCssValue.value['--page-padding-left']='10px'
    pageCssValue.value['--tabBar-padding-leftAndRight']='20px'
    pageCssValue.value['--wrapper-overflow-y']='visible'
    showMenu.value = false;
  }else{
    direction.value = 'horizontal'
    pageCssValue.value['--page-padding-left']='54px'
    pageCssValue.value['--tabBar-padding-leftAndRight']='20px'
    pageCssValue.value['--wrapper-overflow-y']='auto'
    showMenu.value = true;
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
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑滚动
  });
}
const route = useRoute()
watch(()=>route.path,()=>{
  if(direction.value==='vertical')return
  mainWrapper.value?.scrollTo({
    top: 0,
    behavior: 'smooth' // 平滑滚动
  })
})
onMounted(()=>{
  setArrange()
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
  padding: 0 20px;
  &:hover{
    cursor: pointer;
  }

}
::v-deep(.xy-aside){
  position: sticky!important;
  top: 0!important;
  z-index: 999;
}
.main-wrapper{
  width: 100%;
  height: 100%;
  padding: 10px 10px 0 10px;
  overflow-y: var(--wrapper-overflow-y);
  .main-inner{
    padding: 64px 0 48px var(--page-padding-left);
  }
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