<template>
  <div>
    <xy-showcase-page
      introduction="对组件效果进行展示和便捷复制组件样例代码"
      page-title="组件效果"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText">
          <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #Attributes>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import basicUsage from "./basicUsage.vue"
import basicUsageText from "./basicUsage.vue?raw"

const catalogue = [
  {
    title: '基础用法',
    id: 'd2b01604ee737ad73b0385fb6fad77a2',
    slot: 'basicUsage'
  },
  {
    title: 'API',
    id: '35559cad6a30dfd794eaf6905ea03ab8',
    children:[
      {
        title:"Attributes",
        id:"4581527ae285384b9c054fcb725598bf",
        slot:"Attributes"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'width',
    explain: '宽度',
    type: 'string',
    default:"100%",
  },
  {
    name: 'code',
    explain: '代码字符串',
    type: 'string',
  },
  {
    name: 'language',
    explain: '代码语言',
    type: 'string',
    default:"xml",
  },
  {
    name:"effectHeight",
    explain:"效果区域`minHeight`",
    type:"number",
  }

]
</script>

<style scoped lang="scss">

</style>