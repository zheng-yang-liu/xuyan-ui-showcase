<template>
  <div>
    <xy-button @click="actionAnimation">开始动画</xy-button>
    <p>{{num}}</p>>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
import {AnimationUtils} from"yanyan-ui"

const num = ref(0);
const actionAnimation = ()=>{
  AnimationUtils.numberAnimate(
    num.value,
    0,
    1000,
    (value:number)=>{
      num.value = value;
    })
}

</script>

<style scoped lang="scss">

</style>