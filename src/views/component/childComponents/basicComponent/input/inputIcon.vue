<template>
  <div class="inputList">
    <div>
      前置图标
      <xy-input
        v-model="testValue1"
        placeholder="请输入"
        beforeIcon="zhuyi"
      ></xy-input>
    </div>
    <div>
      后置图标
      <xy-input
        v-model="testValue2"
        placeholder="请输入"
        size="default"
        afterIcon="sousuo"
        @afterIconDown="afterIconDown"
      ></xy-input>
    </div>
    <div>
      图标点击事件
      <xy-input
        v-model="testValue3"
        placeholder="请输入"
        @iconDown="iconDown"
        @beforeIconDown="beforeIconDown"
        @afterIconDown="afterIconDown"
        beforeIcon="zhuyi"
        afterIcon="sousuo"
      ></xy-input>
    </div>
    <div>
      图标不能点击
      <xy-input
        v-model="testValue4"
        placeholder="请输入"
        @iconDown="iconDown"
        @beforeIconDown="beforeIconDown"
        @afterIconDown="afterIconDown"
        beforeIcon="zhuyi"
        afterIcon="sousuo"
        :iconCanClick="false"
      ></xy-input>
    </div>




  </div>
</template>

<script setup lang="ts">
import {ref} from"vue"
const testValue1 = ref<string>('')
const testValue2 = ref<string>('')
const testValue3 = ref<string>('')
const testValue4 = ref<string>('')
const iconDown = ()=>{
  alert('iconDown')
}
const beforeIconDown = ()=>{
  alert('beforeIconDown')
}
const afterIconDown = ()=>{
  alert('afterIconDown')
}
</script>

<style scoped lang="scss">
.inputList{
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  .xy-input{
    margin: 10px 0;
  }
}
</style>