<template>
    <xy-attribute-table :data="data"></xy-attribute-table>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
const data = [
  {
    name: 'name',
    explain: '名称',
    type: 'string'
  },
  {
    name: 'age',
    explain: '年龄',
    type:[
      {
        value:"object",
        complexType:`{
          autoIndent: boolean,
          indentValue: number,
          currentIndent: number
        }`
      },
      {
        value:"object",
        complexType:`{
          autoIndent: boolean,
          indentValue: number,
          currentIndent: number
        }`
      }
    ],
    default:`{
      autoIndent: true,
      indentValue: 10,
      currentIndent: 0
    }`
  },
  {
    name: 'address',
    explain: '地址',
    type: [
      {
        value: 'address',
        complexType: "'beijing' | 'shanghai' | 'sichuan' | 'beijing' | 'shanghai' | 'sichuan'"
      }
    ],
  }
]
</script>

<style scoped lang="scss">

</style>