<template>
  <div class="inputList">
    <div>
      多行文本允许任意调节
      <xy-input
        v-model="testValue1"
        placeholder="请输入"
        textarea
      ></xy-input>
    </div>
    <div>
      多行文本不允许调整
      <xy-input
        v-model="testValue3"
        placeholder="请输入"
        textarea
        textChangeSize="none"
      ></xy-input>
    </div>
    <div>
      多行文本允许水平
      <xy-input
        v-model="testValue4"
        placeholder="请输入"
        textarea
        textChangeSize="horizontal"
      ></xy-input>
    </div>
    <div>
      多行文本允许垂直
      <xy-input
        v-model="testValue5"
        placeholder="请输入"
        textarea
        textChangeSize="vertical"
      ></xy-input>
    </div>
    <div>
      多行自动高度
      <xy-input
        v-model="testValue"
        placeholder="请输入文字"
        height="50"
        width="240"
        textarea
        textChangeSize="vertical"
        autoSize
      ></xy-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
const testValue1 = ref<string>('');
const testValue2 = ref<string>('');
const testValue3 = ref<string>('');
const testValue4 = ref<string>('');
const testValue5 = ref<string>('');

</script>

<style scoped lang="scss">
@import "mixin.scss";
.inputList{
  @include layout;
}
</style>