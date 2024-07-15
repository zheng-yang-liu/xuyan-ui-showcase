<template>
  <div>
    <xy-showcase-page
      introduction=""
      page-title=""
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText">
          <xy-button @click="toEffeft">查看效果</xy-button>
        </xy-effect-preview>
      </template>
      <template #customizeGraphics>
        <xy-effect-preview :code="basicUsageText">
          <xy-button @click="toEffeftCus">查看效果</xy-button>
        </xy-effect-preview>
      </template>
      <template #DrawGraph>
        <xy-attribute-table
          :data="attributesData"
          :columns-no-default="true"
        >
        </xy-attribute-table>
      </template>

      <template #detailType>
        <xy-code-preview :code="detailType" language="typescript"></xy-code-preview>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import{useRouter}from "vue-router";
import basicUsage from "./basicUsage.vue"
import basicUsageText from "../Effects/canvasGraph.vue?raw"
import detailType from"./detailType.d.ts?raw"
const router = useRouter();

const catalogue = [
  {
    title: '基础用法',
    id: '22d7da554d8a9cce46dcc3f2cd91751f',
    slot: 'basicUsage'
  },
  {
    title:'自定义图形',
    id:"6f367e97d08f62052546a55ba8475d29",
    slot:'customizeGraphics',
    explain:'自定义图形,通过继承Graph类，编写自定义draw、isInside方法，实现绘制自定义图形'
  },
  {
    title: '工具类',
    id: 'cdc1ea8222bd9e6eef2aa5df80245f96',
    children: [
      {
        title: "DrawGraph",
        id: "a946b1bf72cdf43e0b43ec4d15105c94",
        slot: "DrawGraph"
      }
    ]
  },
  {
    title:"详细类型",
    id:"a58cda25a7165341bd4abd14aec0f325",
    slot:"detailType"
  }
]
const attributesData = [
  {
    name: 'constructor',
    explain: '构造函数 - 创建一个绘图对象。',
    type: [
      {
        value:"Function",
        complexType:`constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D)`
      }
    ],
  },
  {
    name: 'init',
    explain: '初始化绘图',
    type: [
      {
        value:"Function",
        complexType:`init(width: number, height: number, canvasBG: string, graphColor: string): void;`
      }
    ],
  },
  {
    name: 'destruction',
    explain: '销毁绘图',
    type: [
      {
        value:"Function",
        complexType:`destruction(): void;`
      }
    ],
  },
  {
    name:"changeGraphColor",
    explain:"改变填充颜色",
    type:[
      {
        value:"Function",
        complexType:`changeGraphColor(graphColor: string): void;`
      }
    ]
  }

]
const toEffeft = () => {
  router.push('/canvasEffect/canvasGraph')
}
const toEffeftCus = () => {
  router.push('/canvasEffect/customizeGraphics')
}
</script>

<style scoped lang="scss">

</style>