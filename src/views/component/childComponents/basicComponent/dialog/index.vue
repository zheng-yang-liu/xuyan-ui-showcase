<template>
  <div>
    <xy-showcase-page
      introduction="用于弹出内容或提示用户"
      page-title="对话框"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText">
          <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #customFooter>
        <xy-effect-preview :code="customFooterText">
          <customFooter></customFooter>
        </xy-effect-preview>
      </template>
      <template #closeAfterComplete>
        <xy-effect-preview :code="closeAfterCompleteText">
          <closeAfterComplete></closeAfterComplete>
        </xy-effect-preview>
      </template>
      <template #draggableDialog>
        <xy-effect-preview :code="draggableDialogText">
          <draggableDialog></draggableDialog>
        </xy-effect-preview>
      </template>

      <template #Attributes>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>
      <template #Events>
        <xy-attribute-table :data="eventsData" :columns-no-default="false"></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import basicUsage from "./basicUsage.vue"
import basicUsageText from "./basicUsage.vue?raw"
import customFooter from "./customFooter.vue"
import customFooterText from "./customFooter.vue?raw"
import closeAfterComplete from "./closeAfterComplete.vue"
import closeAfterCompleteText from "./closeAfterComplete.vue?raw"
import draggableDialog from "./draggableDialog.vue"
import draggableDialogText from "./draggableDialog.vue?raw"

const catalogue = [
  {
    title: '基础用法',
    id: '290950c789dae996defdc25a23138e4e',
    slot: 'basicUsage'
  },
  {
    title:"自定义底部",
    id:"20540fd4f9e7d24d5574070d7f812792",
    slot: "customFooter"
  },
  {
    title: "完成任务之后关闭对话框",
    id: "6aae41ad86d1d3d4e1a62fd909c1114b",
    slot: "closeAfterComplete"
  },
  {
    title:"可拖拽对话框",
    id:"c5101a6ace71170386593bc0ca1dacd6",
    slot:"draggableDialog"
  },
  {
    title: 'API',
    id: '9a9bf1ffec5d01bfd9c15a09c6de6310',
    children: [
      {
        title: "Attributes",
        id: "6b81ea26df4356f8c042158b039401b3",
        slot: "Attributes"
      },
      {
        title: "Events",
        id: "7d28c8fcb0b257a29dd607f307ff33db",
        slot: "Events"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'visible',
    explain: '是否显示',
    type: 'boolean',
  },
  {
    name: 'width',
    explain: '宽度',
    type: 'number',
    default: "500",
  },
  {
    name: 'height',
    explain: '最小高度',
    type: 'number',
    default: "122",
  },
  {
    name: 'title',
    explain: '标题',
    type: 'string',
    default: "提示",
  },
  {
    name: 'defaultBottom',
    explain: '是否显示默认底部按钮',
    type: 'boolean',
    default: "false",
  },
  {
    name: 'confirmCallback',
    explain: '点击确定执行的回调函数,需要有一个返回值,返回值为true时关闭弹窗',
    type: [
      {
        value: 'Function',
        complexType: '()=>boolean'
      }
    ],
  },
  {
    name: 'clickOnExternalClose',
    explain: '点击外部关闭弹窗',
    type: 'boolean',
    default: "false",
  },
  {
    name: 'escClose',
    explain: 'esc关闭',
    type: 'boolean',
    default: "true",
  },
  {
    name: 'drag',
    explain: '拖动',
    type: 'boolean',
    default: "false",
  },
  {
    name: 'dragRange',
    explain: '拖动范围限制',
    type: 'boolean',
    default: "true",
  },
  {
    name: 'dialogStyle',
    explain: 'dialog样式',
    type: [
      {
        value: 'object',
        complexType: 'CSSStyleValue'
      }
    ],
  },
]
const eventsData = [
  {
    name: 'handleClose',
    explain: '关闭事件,flag-0:右上角关闭/外部 -1:取消 1:确定',
    type: [
      {
        value:"Function",
        complexType:"(visible,flag)=>void"
      }
    ],
  }
]
</script>

<style scoped lang="scss">

</style>