<template>
  <div>
    <xy-showcase-page
      introduction="常用的操作按钮"
      page-title="按钮"
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
      <template #Events>
        <xy-attribute-table :data="eventsData" :columns-no-default="true"></xy-attribute-table>
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
    id: '7901232d578af68b0f357e756e9702a3',
    slot: 'basicUsage'
  },
  {
    title: 'API',
    id: 'b9025265f1df958a8df6696e690096d7',
    children: [
      {
        title: "Attributes",
        id: "9d4210683414d03a0d165686b452b307",
        slot: "Attributes"
      },
      {
        title: "Events",
        id: "c1bb9d94d41397d77817100a7056bae0",
        slot: "Events"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'width',
    explain: '最小宽度',
    type: 'number',
    default: "84",
  },
  {
    name: 'height',
    explain: '高度',
    type: 'number',
    default: "32",
  },
  {
    name: 'color',
    explain: '颜色',
    type: 'string',
    default: "#fff",
  },
  {
    name: 'type',
    explain: '类型',
    type: [
      {
        value:"buttonType",
        complexType:"'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'"
      }
    ],
    default: "default",
  },
  {
    name: 'frontIcon',
    explain: '前置图标',
    type: 'string',
    default: "",
  },
  {
    name: 'postIcon',
    explain: '后置图标',
    type: 'string',
    default: "",
  }
]
const eventsData = [
  {
    name: 'click',
    explain: '点击事件',
    type: [
      {
        value:"Function",
        complexType:"() => void"
      }
    ],
  }
]
</script>

<style scoped lang="scss">

</style>