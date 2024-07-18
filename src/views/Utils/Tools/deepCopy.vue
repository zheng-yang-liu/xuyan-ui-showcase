<template>
  <div class="list">
    <xy-button @click="shallowChange">浅拷贝改变李四，地址</xy-button>
    <xy-button @click="deepChange">深拷贝改变李四，地址</xy-button>
    <div class="item">原始值：<code>{{rawData}}</code></div>
    <div class="item">浅拷贝：<code>{{shallowCopy}}</code></div>
    <div class="item">深拷贝：<code>{{deepCopyData}}</code></div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Tools} from "yanyan-ui";

const rawData = ref([
  {
    name: "张三",
    age: 18,
    address: "北京市朝阳区"
  },
  {
    name: "李四",
    age: 20,
    address: "北京市海淀区"
  },
  {
    name: "王五",
    age: 22,
    address: "北京市昌平区"
  }
])
const shallowCopy = ref(rawData.value);

const deepCopyData = ref(Tools.deepCopy(rawData.value))

const shallowChange = () => {
  shallowCopy.value[1].name = "李四改变-浅拷贝";
  shallowCopy.value[1].address = "北京市海淀区改变";
}

const deepChange = () => {
  deepCopyData.value[1].name = "李四改变-深拷贝";
  deepCopyData.value[1].address = "北京市海淀区改变";
}
</script>

<style scoped lang="scss">
.list{
  div:first-child{
    margin-right: 10px;
  }
  .item{
    margin: 10px 0 ;
  }
}
</style>