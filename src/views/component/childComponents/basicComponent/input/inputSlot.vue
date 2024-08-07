<template>
  <div class="inputList">
    前置slot
    <xy-input
      v-model="testValue1"
      maxWidth="400"
    >
      <template #prepend>
        <xy-icon icon="iconfont icon-kuaidiyuan-xianxing"></xy-icon>
      </template>
    </xy-input>
    后置slot
    <xy-input
      v-model="testValue2"
      maxWidth="400"
    >
      <template #append>
        <xy-icon icon="iconfont icon-sousuo"></xy-icon>
      </template>
    </xy-input>
    插槽
    <xy-input
      v-model="testValue3"
      maxWidth="400"
      @prepend-down="prependDown"
      @append-down="appendDown"
    >
      <template #prepend>
        <xy-icon icon="iconfont icon-caidan"></xy-icon>
      </template>
      <template #append>
        <xy-icon icon="iconfont icon-shangchuan"></xy-icon>
      </template>
    </xy-input>


  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"

const testValue1 = ref<string>('')
const testValue2 = ref<string>('')
const testValue3 = ref<string>('')
const prependDown = () => {
  alert('前置slot--prepend点击')
};
const appendDown = () => {
  alert('后置slot--append点击')
};

</script>
<style lang="scss" scoped>
.inputList {
  .xy-input {
    margin: 10px 0;
  }
}
</style>