<template>
  <div>
    <xy-showcase-page
      introduction="对代码进行高亮展示"
      page-title="代码高亮"
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
import {ref, reactive} from "vue";
import basicUsage from "./basicUsage.vue"
import basicUsageText from "./basicUsage.vue?raw"

const catalogue = [
  {
    title: '基础用法',
    id: '1263bb5639edb534714206741166b6b3',
    slot: 'basicUsage'
  },
  {
    title: 'API',
    id: '904ae0b2d39452a3128d580066e37017',
    children:[
      {
        title:"Attributes",
        id:"69a03e3918e64cb11fcfccc5a286db22",
        slot:"Attributes"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'code',
    explain: '代码内容',
    type: 'string',
  },
  {
    name: 'language',
    explain: '语言',
    type: 'string',
    default:"xml",
  },
  {
    name: 'round',
    explain: '是否圆角',
    type: 'boolean',
    default:"true",
  }

]
</script>

<style scoped lang="scss">

</style>