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
        <xy-effect-preview :code="customizeGraphics">
          <xy-button @click="toEffeftCus">查看效果</xy-button>
        </xy-effect-preview>
      </template>
      <template #DrawGraph>
        <xy-attribute-table
          :data="DrawGraphData"
          :columns-no-default="true"
        >
        </xy-attribute-table>
      </template>
      <template #Graph>
        <xy-attribute-table
          :data="GraphData"
          :columns-no-default="true"
        >
        </xy-attribute-table>
      </template>

      <template #detailType>
        <xy-code-preview :code="detailType" language="typescript"></xy-code-preview>
      </template>
      <template #GraphExample>
        <xy-code-preview :code="Ellipse" language="typescript"></xy-code-preview>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import{useRouter}from "vue-router";
import basicUsageText from "../Effects/canvasGraph.vue?raw"
import customizeGraphics from"@/views/tools/canvasAPI/Effects/customizeGraphics.vue?raw"
import detailType from"./detailType.d.ts?raw"
import Ellipse from"./Ellipse.ts?raw"
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
    explain:'自定义图形,通过继承Graph类，编写自定义draw、isInside方法，实现绘制自定义图形，本例的椭圆为自定图形'
  },
  {
    title: '工具类',
    id: 'cdc1ea8222bd9e6eef2aa5df80245f96',
    children: [
      {
        title: "DrawGraph",
        id: "a946b1bf72cdf43e0b43ec4d15105c94",
        slot: "DrawGraph"
      },
      {
        title:"Graph",
        id:"3a4a748c276990d2f5049cbcd81baf89",
        slot:"Graph",
        explain:"图形基类，提供基础属性和方法,快速实现自定义图形类的生成"
      }
    ]
  },
  {
    title:"详细类型",
    id:"a58cda25a7165341bd4abd14aec0f325",
    slot:"detailType"
  },
  {
    title:"GraphExample",
    id:"c33f2dbbb280611235f89e7f044bc18d",
    slot:"GraphExample",
    explain:"通过继承Graph类，实现自定义椭圆图形"
  }
]
const DrawGraphData = [
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
    name:"changeCanvasBG",
    explain:"改变背景颜色",
    type:[
      {
        value:"Function",
        complexType:`changeCanvasBG(color: string): void;`
      }
    ]
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
  },
  {
    name:"downloadCanvas",
    explain:"下载canvas",
    type:[
      {
        value:"Function",
        complexType:`downloadCanvas(): void;`
      }
    ]
  }

]
const GraphData = [
  {
    name: 'constructor',
    explain: '构造函数 - 创建一个绘图对象。',
    type: [
      {
        value:"Function",
        complexType:`constructor(color:string,
    startX:number,
    startY:number,
    ctx:CanvasRenderingContext2D,
    width:number,
    height:number,
    dpi:number)`
      }
    ],
  },
  {
    name:"endX",
    explain:"设置结束点X坐标",
    type:[
      {
        value:"set Function",
        complexType:"number"
      }
    ]
  },
  {
    name:"endY",
    explain:"设置结束点Y坐标",
    type:[
      {
        value:"set Function",
        complexType:"number"
      }
    ]
  },
  {
    name:"minX",
    explain:"最小X坐标",
    type:[
      {
        value:"get Function",
        complexType:"number"
      }
    ]
  },
  {
    name:"minY",
    explain:"最小Y坐标",
    type:[
      {
        value:"get Function",
        complexType:"number"
      }
    ]
  },
  {
    name:"maxX",
    explain:"最大X坐标",
    type:[
      {
        value:"get Function",
        complexType:"number"
      }
    ]
  },
  {
    name:"maxY",
    explain:"最大Y坐标",
    type:[
      {
        value:"get Function",
        complexType:"number"
      }
    ]
  },
  {
    name:"_color",
    explain:"填充颜色",
    type:'string'
  },
  {
    name:"_ctx",
    explain:"canvas上下文",
    type:[
      {
        value:"CanvasRenderingContext2D",
        complexType:"CanvasRenderingContext2D"
      }
    ]
  },
  {
    name:"_dpi",
    explain:"设备像素比",
    type:'number'
  },
  {
    name:"draw",
    explain:"绘制图形 --需继承后重写",
    type:[
      {
        value:"Function",
        complexType:"()=>void"
      }
    ]
  },
  {
    name:"isInside",
    explain:"判断是否在图形内 -- 需继承后重写",
    type:[
      {
        value:"Function",
        complexType:"(x,y)=>boolean"
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