<template>
  <xy-classic-page
    :direction="direction"
  >
    <template #header>
      <div class="header">
        <xy-button @click="setHorizontal">切换水平排布</xy-button>
        <xy-button @click="setVertical">切换竖向排布</xy-button>
      </div>
    </template>
    <template #aside>
      <div class="aside">
        aside
      </div>
    </template>
    <template #main>
      <div class="main">
        main
      </div>
    </template>
  </xy-classic-page>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
const direction = ref('horizontal')
const  setHorizontal= ()=>{
  direction.value = 'horizontal'
}
const  setVertical= ()=>{
  direction.value = 'vertical'
}
</script>

<style scoped lang="scss">
@mixin fillItUpSize(){
  width: 100%;
  height: 100%;
}
.header{
  background-color: #e0f0ff;
  @include fillItUpSize();
}
.aside{
  background-color: #014da1;
  @include fillItUpSize();
}
.main{
  background-color: #3c9cff;
  @include fillItUpSize();
}
</style>