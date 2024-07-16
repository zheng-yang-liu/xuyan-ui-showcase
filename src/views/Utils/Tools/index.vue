<template>
  <div>
    <xy-showcase-page
      introduction=""
      page-title=""
      :catalogue="catalogue"
    >
      <template #convertTimeFormat>
        <xy-effect-preview :code="convertTimeFormatText">
          <convertTimeFormat></convertTimeFormat>
        </xy-effect-preview>

        <xy-attribute-table
          :data="convertTimeFormatData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #groupBy>
        <xy-effect-preview :code="groupByText">
          <groupBy></groupBy>
        </xy-effect-preview>
        <xy-attribute-table
          :data="groupByData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import convertTimeFormat from"./convertTimeFormat.vue"
import convertTimeFormatText from"./convertTimeFormat.vue?raw"
import groupBy from"./groupBy.vue"
import groupByText from"./groupBy.vue?raw"

const catalogue = [
  {
    title: '转换时间格式',
    id: 'a19d557bcfd6b073227b7bb4f6064d1e',
    slot: 'convertTimeFormat',
    explain:"convertTimeFormat"
  },
  {
    title:"数组分类",
    id:"500f747af6ac481f5fcc48fccd9c9cf4",
    slot:"groupBy",
    explain:"groupBy"
  }
]
const convertTimeFormatData = [
  {
    name: 'format',
    explain: '时间格式',
    type: 'string',
  },
  {
    name: 'date',
    explain: '语言',
    type: [
      {
        value:"time Object",
        complexType:'formatDateNum | Date | number'
      }
    ],
  }
]
const groupByData = [
  {
    name:"array",
    explain:"原始数组",
    type:[
      {
        value:"Array",
        complexType:"Object[]"
      }
    ]
  },
  {
    name:"rules",
    explain:"分组规则",
    type:[
      {
        value:"string",
      },
      {
        value:"Function",
        complexType:"(item:any)=>any"
      }
    ]
  },
  {
    name:"return",
    explain:"返回值",
    type:[
      {
        value:"object",
        complexType:"{key:Array<any>...} | {true:Array<any>,false:Array<any>}"
      }
    ]
  }
]
</script>

<style scoped lang="scss">

</style>