<template>
  <div class="homeBox">
    <svg width="500" height="185.19" xmlns="http://www.w3.org/2000/svg" @click="toComponent">
      <!-- X -->
      <path class="svgLine" d="M10,50 L50,150 M50,50 L10,150" stroke="black" stroke-width="2" transform="scale(1.16)"/>
      <!-- U -->
      <path class="svgLine" d="M70,50 L70,130 Q70,150 90,150 Q110,150 110,130 L110,50" stroke="black" stroke-width="2" fill="transparent" transform="scale(1.16)"/>
      <!-- Y -->
      <path class="svgLine" d="M130,50 L150,100 L170,50 M150,100 L150,150" stroke="black" stroke-width="2" transform="scale(1.16)"/>
      <!-- A -->
      <path class="svgLine" d="M190,150 L210,50 L230,150 M200,110 L220,110" stroke="black" stroke-width="2" transform="scale(1.16)"/>
      <!-- N -->
      <path class="svgLine" d="M250,150 L250,50 L290,150 L290,50" stroke="black" stroke-width="2" transform="scale(1.16)"/>
      <!-- - -->
      <path class="svgLine" d="M310,100 L340,100" stroke="black" stroke-width="2" transform="scale(1.16)"/>
      <!-- U -->
      <path class="svgLine" d="M360,50 L360,130 Q360,150 380,150 Q400,150 400,130 L400,50" stroke="black" stroke-width="2" fill="transparent" transform="scale(1.16)"/>
      <!-- I -->
      <path class="svgLine" d="M420,50 L420,150" stroke="black" stroke-width="2" transform="scale(1.16)"/>
    </svg>

    <div class="textBox">
      <p>春风和煦</p>
      <p class="textLaseP">炎阳似火</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted ,onBeforeUnmount} from 'vue'
import {AnimationUtils,Tools} from "yanyan-ui"
import { useRouter } from 'vue-router';
export default defineComponent({
  name: "svgAnimation",
  setup(props, context) {
    const router = useRouter();
    Tools.setCssVar('--svg-scale','scale(1.2)')
    const setSvgScale = () => {
      const width = window.innerWidth;
      if(width>690){
        Tools.setCssVar('--svg-scale','scale(1.2)')
      }else if(width>590){
        Tools.setCssVar('--svg-scale','scale(0.9)')
      }else{
        Tools.setCssVar('--svg-scale','scale(0.8)')
      }
    }
    onMounted(() => {
      AnimationUtils.svgAnimation();
      setSvgScale();
      window.addEventListener('resize',setSvgScale)
    })
    onBeforeUnmount(() => {
      window.removeEventListener('resize',setSvgScale)
    })
    const toComponent = () => {
      router.push('/component/componentBasics/installOrUse');
    }
    return {
      toComponent
    }
  }
})
</script>

<style scoped lang="scss">
.homeBox{
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content:center;
  //设置背景图片
  background-image: url("@/assets/homeBackground.png");
  background-size: cover;
  background-repeat: no-repeat;
  svg{
    margin-top: 10%;
    cursor: pointer;
    transform:var(--svg-scale);
  }
  .textBox{
    position: absolute;
    top: 55%;
    color: #fff;
    font: {
      size: 20px;
    };
    //字间距
    letter-spacing: 15px;
    //第一个p标签的样式
    .textLaseP{
      line-height: 35px;
      //margin-left: 106px;
    }
    //不允许选中文字
    user-select: none;
  }
}
</style>
