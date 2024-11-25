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
    id: '3c2271cdea6fac38a0f15c1603bbd334',
    slot: 'basicUsage'
  },
  {
    title:"点击显示",
    id:"bf548c6b2edbdbcb2697cf453dd6cf14",
    slot:"clickShow"
  },
  {
    title:"显示内容自定义",
    id:"b4d6cfa85388515191f0fb06da818254",
    slot:"customContent"
  },
  {
    title: 'API',
    id: '0cd0f623019d031beb24f9098c0c96b6',
    children: [
      {
        title: "Attributes",
        id: "4ea3e7bd8154aa2b540a378decb97741",
        slot: "Attributes"
      },
      {
        title:"Slots",
        id:"4b99479b4f3cbf78f42dde350b846055",
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
  },
  {
    name: 'position',
    explain: '位置',
    type: [{
      value:"positionType",
      complexType:"'top' | 'right' | 'bottom' | 'left'"
    }],
    default: "'bottom'",
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