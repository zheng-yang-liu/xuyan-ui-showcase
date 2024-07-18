<template>
  <div>
    <xy-showcase-page
      introduction=""
      page-title=""
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText">
          <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #Attributes>
        <xy-attribute-table
          :columns-no-default="true"
          :data="attributesData"
        ></xy-attribute-table>
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
    id: '730ca7e09ce810897b17179341c60d20',
    slot: 'basicUsage'
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
  }
]
</script>

<style scoped lang="scss">

</style>