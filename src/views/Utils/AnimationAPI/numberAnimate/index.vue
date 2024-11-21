<template>
  <div>
    <xy-showcase-page
      introduction="为数字的变化提供动画支持，支出多种缓动动画效果及自定义动画函数来实现数字动画"
      page-title="数字动画"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText">
          <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #animationType>
        <xy-effect-preview :code="basicUsageText">
          <animationType></animationType>
        </xy-effect-preview>
      </template>
      <template #Attributes>
        <xy-attribute-table
          :data="attributesData"
        ></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import basicUsage from "./basicUsage.vue"
import basicUsageText from "./basicUsage.vue?raw"
import animationType from "./animationType.vue"
import animationTypeText from "./animationType.vue?raw"

const catalogue = [
  {
    title: '基础用法',
    id: '730ca7e09ce810897b17179341c60d20',
    slot: 'basicUsage'
  },
  {
    title:"自定义动画函数",
    id:"fbee9f2c0f3bb1ca4f40289b422b993c",
    slot:"animationType"
  },
  {
    title: 'API',
    id: 'b8901c711f73a25476ce244d19528aa4',
    children: [
      {
        title: "Attributes",
        id: "911f114cc41ef70c13bb08412896216b",
        slot: "Attributes"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'duration',
    explain: '动画持续时间 ms',
    type: 'number',
  },
  {
    name: 'from',
    explain: '起始值',
    type: 'number',
  },
  {
    name: 'to',
    explain: '结束值',
    type: 'number',
  },
  {
    name:"callback",
    explain:"回调函数",
    type:[
      {
        value:"Function",
        complexType:"(value:number)=>void",
      }
    ]
  },
  {
    name:"animationType",
    explain:"缓动函数 string类型可以设置为`steps(n, start | end)` 或者 `cubic-bezier(n1, n2, n3, n4)`",
    type:[
      {
        value:"animationType",
        complexType:"'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end' | 'ease' | 'steps(n, start | end)' | 'cubic-bezier(n1, n2, n3, n4)' | (t: number) => number",
      }
    ],
    default:"'linear'"
  }
]
</script>

<style scoped lang="scss">

</style>