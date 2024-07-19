<template>
  <div>
    <xy-showcase-page
      introduction="用于显示某些隐藏的内容或显示hover时的提示信息"
      page-title="文字提示"
      :catalogue="catalogue"
      :screenMaxCatalogue="false"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText">
          <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #clickShow>
        <xy-effect-preview :code="clickShowText">
          <click-show></click-show>
        </xy-effect-preview>
      </template>
      <template #customContent>
        <xy-effect-preview :code="customContentText">
          <custom-content></custom-content>
        </xy-effect-preview>
      </template>

      <template #Attributes>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>
      <template #slots>
        <xy-attribute-table :data="slotData" :columns-no-default="true"></xy-attribute-table>
      </template>
    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import basicUsage from "./basicUsage.vue";
import basicUsageText from "./basicUsage.vue?raw";
import clickShow from "./clickShow.vue"
import clickShowText from "./clickShow.vue?raw"
import customContent from "./customContent.vue"
import customContentText from "./customContent.vue?raw"

const catalogue = [
  {
    title: '基础用法',
    id: '69e241ba31c7b66e7e7346a1c0f4473b',
    slot: 'basicUsage'
  },
  {
    title:"点击显示",
    id:"4b0e9e5d5f9ebc5d931bcd8ecfc04e4e",
    slot:"clickShow"
  },
  {
    title:"显示内容自定义",
    id:"38c71e5312ea8015900427aaf0943547",
    slot:"customContent"
  },
  {
    title: 'API',
    id: '528438a67170d062c1be712983f70a85',
    children: [
      {
        title: "Attributes",
        id: "a8c3e6edd1564e789710ff0015739131",
        slot: "Attributes"
      },
      {
        title:"Slots",
        id:"b1",
        slot:"slots"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'content',
    explain: '显示的文字',
    type: 'string',
  },
  {
    name: 'hoverShow',
    explain: '悬浮显示',
    type: 'boolean',
    default: "true",
  },
  {
    name: 'inTime',
    explain: '显示时间',
    type: 'number',
    default: "0.3",
  },
  {
    name: 'outTime',
    explain: '隐藏时间',
    type: 'number',
    default: "0.3",
  },
  {
    name: 'topOffset',
    explain: '顶部偏移量',
    type: 'number',
    default: "10",
  },
  {
    name: 'XOffset',
    explain: '左侧偏移量',
    type: 'number',
    default:"0",
  }

]

const slotData = [
  {
    name: 'prompt',
    explain: '自定义显示的内容',
    type: 'slot',
  }
]
</script>

<style scoped lang="scss">

</style>