<template>
  <div>
    <xy-showcase-page
      introduction="以下为xuyan-ui的全部组件,点击预览查看详情"
      page-title="xuyan-ui组件预览"
      :catalogue="catalogue"
    >
      <template #install>
        <xy-code-preview :code="foundationCode.installCode" language="markdown"></xy-code-preview>
      </template>
      <template #fullImport>
        <xy-code-preview :code="foundationCode.importCode" language="JavaScript"></xy-code-preview>
      </template>
    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import {foundationCode} from"./codeText"
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