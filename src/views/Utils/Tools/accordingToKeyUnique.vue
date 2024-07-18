<template>
  <div>
    <div><code>原始数据:{{original}}</code></div>
    <div style="margin: 10px 0"><code>去重数据:{{afterScreen}}</code></div>
  </div>
</template>

<script setup lang="ts">
import {Tools} from "yanyan-ui";
const original = [
  {
    id:'1',
    name:"张三",
    age:18,
  },
  {
    id:'2',
    name:"李四",
    age:20,
  },
  {
    id:"1",
    name:"张三",
    age:19,
  }
]
const afterScreen = Tools.accordingToKeyUnique(original, 'id')
</script>