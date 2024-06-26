<template>
  <div>
    <xy-showcase-page
      introduction="以下为xuyan-ui组件库的基本使用方法"
      page-title="使用/安装"
      :catalogue="catalogue"
    >
      <template #install>
        <xy-code-preview :code="installCode" language="markdown"></xy-code-preview>
      </template>
      <template #fullImport>
        <xy-code-preview :code="importCode" language="JavaScript"></xy-code-preview>
      </template>
    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import installCode from "./installCode.txt?raw"
import importCode from "./importCode.txt?raw"
const catalogue = [
  {
    title:"安装",
    id:'8bf55d1f9221ed41c6f8d1f0850e4318',
    slot: 'install'
  },
  {
    title:"快速上手",
    id:"d31ffed75bf08590f750ff0401313435",
    slot:"quickStart",
    children:[
      {
        title:"完整导入",
        id:"f6796928d53e64f6afd6ff96654b4c34",
        slot:"fullImport"
      }
    ]
  }
]
</script>

<style scoped lang="scss">

</style>