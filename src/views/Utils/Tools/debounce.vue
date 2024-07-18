<template>
  <div>
    <xy-button @click="active">开始</xy-button>
    <div class="item">未使用防抖：<code>{{debounceNum}}</code></div>
    <div class="item">使用防抖：<code>{{noDebounceNum}}</code></div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Tools} from "yanyan-ui";
const debounceNum = ref(0);
const noDebounceNum = ref(0);

const active = ()=>{
  const addDe = () => {
    debounceNum.value++;
  };
  const addNoDe = () => {
    console.log('lll')
    noDebounceNum.value++;
  };
  const setDe = setInterval(addDe, 100);
  const setNoDe = Tools.debounce(addNoDe,1000);
  const acSetNoDe = setInterval(setNoDe,100);

  setTimeout(()=>{
    clearInterval(setDe);
    clearInterval(acSetNoDe);
  },3000)
}
</script>

<style scoped lang="scss">
.item{
  margin: 10px 0;
}
</style>