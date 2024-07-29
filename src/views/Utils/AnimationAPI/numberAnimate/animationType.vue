<template>
  <div>
    <xy-button @click="actionAnimation" style="margin-right: 10px">开始动画</xy-button>{{num}}
    <div>打开控制台查看变化<code>ease:慢-快-慢</code></div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {AnimationUtils} from"yanyan-ui"

const num = ref(0);
const actionAnimation = ()=>{
  AnimationUtils.numberAnimate(
    1000,
    0,
    100,
    (value:number)=>{
      num.value = Math.floor(value);
      console.log(Math.floor(value))
    },
    'ease'
  )

}

</script>

<style scoped lang="scss">

</style>