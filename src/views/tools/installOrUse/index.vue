<template>
  <div>
    <xy-showcase-page
      introduction="以下为xuyan-ui组件库API的基本使用方法"
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
    id:'281b47bcbe00b684c7d11ff255b682de',
    slot: 'install'
  },
  {
    title:"快速上手",
    id:"b0de01509cdaec5d6a38306b48cf1248",
    slot:"quickStart",
    children:[
      {
        title:"完整导入",
        id:"bbfa338e937c98e85cb9ae9253eccdd7",
        slot:"fullImport"
      }
    ]
  }
]
</script>

<style scoped lang="scss">

</style>