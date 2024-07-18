<template>
  <div>
    <template v-for="item in type">
      <code class="item">{{item.name}} 的数据类型为 <em>{{item.type}}</em></code>
    </template>
  </div>
</template>

<script setup lang="ts">
import {Tools} from "yanyan-ui";
const type = [
  {
    name:"true/false",
    type:Tools.getType(true)
  },
  {
    name:'1',
    type:Tools.getType(1)
  },
  {
    name:'"1"',
    type:Tools.getType("1")
  },
  {
    name:"Function",
    type:Tools.getType(()=>{})
  },
  {
    name:'[]',
    type:Tools.getType([])
  },
  {
    name:"date",
    type:Tools.getType(new Date())
  },
  {
    name:"regExp -正则",
    type:Tools.getType(/./)
  },
  {
    name:'undefined',
    type:Tools.getType(undefined)
  },
  {
    name: 'null',
    type: Tools.getType(null)
  },
  {
    name:'{}',
    type:Tools.getType({})
  },
  {
    name:"blob -二进制",
    type:Tools.getType(new Blob())
  },
  {
    name:'formData -表单数据',
    type:Tools.getType(new FormData())
  },
  {
    name:"promise",
    type:Tools.getType(new Promise(()=>{}))
  }
]
</script>

<style scoped lang="scss">
.item{
  display: block;
  margin: 10px 0;
}
</style>