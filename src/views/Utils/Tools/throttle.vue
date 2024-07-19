<template>
  <div>
    <xy-button @click="active">开始</xy-button>
    <div class="item">未使用节流：<code>{{throttleNum}}</code></div>
    <div class="item">使用节流：<code>{{noThrottleNum}}</code></div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Tools} from "yanyan-ui";
const throttleNum = ref(0);
const noThrottleNum = ref(0);

const active = ()=>{
  const addDe = () => {
    throttleNum.value++;
  };
  const addNoDe = () => {
    console.log('lll')
    noThrottleNum.value++;
  };
  const setDe = setInterval(addDe, 100);
  const setNoDe = Tools.throttle(addNoDe,1000);
  const acSetNoDe = setInterval(setNoDe,100);

  setTimeout(()=>{
    clearInterval(setDe);
    clearInterval(acSetNoDe);
  },4000)
}
</script>

<style scoped lang="scss">
.item{
  margin: 10px 0;
}
</style>