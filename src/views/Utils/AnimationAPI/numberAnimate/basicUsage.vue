<template>
  <div>
    <xy-button @click="actionAnimation" style="margin-right: 10px">开始动画</xy-button>{{num}}
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {AnimationUtils} from"yanyan-ui"

const num = ref(0);
const actionAnimation = ()=>{
  AnimationUtils.numberAnimate(
    1050,
    0,
    1000,
    (value:number)=>{
      num.value = Math.floor(value);
    })
}

</script>

<style scoped lang="scss">

</style>