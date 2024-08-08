<template>
  <div>
    <xy-showcase-page
      introduction="为svg路径实现描边动画的效果，支持多种缓动动画"
      page-title="svg描边动画"
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
    id: 'b0de01509cdaec5d6a38306b48cf1248',
    slot: 'basicUsage',
    explain: '为path添加类型为`svgLine`/`自定义类名`,使其拥有动画'
  },
  {
    title: 'API',
    id: 'bbfa338e937c98e85cb9ae9253eccdd7',
    children: [
      {
        title: "Attributes",
        id: "f76278972084afb73a44d69429940ae0",
        slot: "Attributes"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'time',
    explain: '动画时间`s`',
    type: 'number',
    default: "2",
  },
  {
    name: 'timingFunction',
    explain: '动画速度曲线、string类型可以设置为`steps(n, start | end)` 或者 `cubic-bezier(n1, n2, n3, n4)`',
    type: [
      {
        value:"timingFunction",
        complexType:"'ease' | 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end' | string"
      }
    ],
    default: "ease",
  },
  {
    name: 'lineClassName',
    explain: '类名',
    type: 'string',
    default: ".svgLine",
  },
  {
    name: 'color',
    explain: '描边颜色',
    type: 'string',
    default: "#000",
  },
  {
    name: 'strokeWidth',
    explain: '描边宽度',
    type: 'string',
    default: "36",
  },
  {
    name: 'strokeLinecap',
    explain: '描边样式',
    type: [
      {
        value:"strokeLinecap",
        complexType:"'butt' | 'round' | 'square' | 'inherit'"
      }
    ],
    default: "round",
  },
  {
    name:'fill',
    explain:'填充',
    type:'string',
    default:'none'
  }

]
</script>

<style scoped lang="scss">

</style>