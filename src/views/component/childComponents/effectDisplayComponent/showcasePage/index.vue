<template>
  <div>
    <xy-showcase-page
      introduction="对编写的组件进行说明包括基本使用样例、属性、方法等进行说明"
      page-title="组件说明"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText">
          <div @click="toImgCropping" class="toPath">页面效果参考图像裁剪</div>
        </xy-effect-preview>
      </template>
      <template #Attributes>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>
      <template #Emits>
        <xy-attribute-table :data="emitsData" :columns-no-default="true"></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
import basicUsageText from "./basicUsage.txt?raw"
const router = useRouter()
const catalogue = [
  {
    title: '基础用法',
    id: '9e06530b14cdc42bd5202949fb9a8909',
    slot: 'basicUsage'
  },
  {
    title: 'API',
    id: '6d40a10a319df3f22f5ccd965e396870',
    children: [
      {
        title: "Attributes",
        id: "8cf4ee797569ebd670ff2a027e21555a",
        slot: "Attributes"
      },
      {
        title: "Emits",
        id: "cbf99ccca884ce3bc38fb3bf4a0c0309",
        slot: "Emits"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'catalogue',
    explain: '目录列表',
    type: [
      {
        value:"Array",
        complexType:`{
          id: string;
          title: string;
          slot?: string;
          explain?: string | string[];
          children?: catalogue[];
        }`
      }
    ],
  },
  {
    name: 'pageTitle',
    explain: '页面标题',
    type: 'string'
  },
  {
    name: 'introduction',
    explain: '页面介绍',
    type: [
      {
        value:"string"
      },
      {
        value:"Array",
        complexType:"string[]"
      }
    ],
  },
  {
    name:"showCatalogue",
    explain:"是否显示目录",
    type:"boolean",
    default:"true"
  },
  {
    name:"titleTriggerRange",
    explain:"标题触发范围的`height`,从顶部开始计算,为屏幕高度的四分之三+`titleTriggerRange`",
    type:"number",
    default:"0"
  },
  {
    name:"showCatalogueWidth",
    explain:"动态显示目录的宽度",
    type:"number",
    default:"1075"
  },
  {
    name:"screenMaxCatalogue",
    explain:"只有全屏状态下才显示目录",
    type:"boolean",
    default:"false"
  },
  {
    name:"currentTitleID",
    explain:"当前标题ID,可以通过`getCssVar('--current-titleID')`全局获取",
    type:"string",
  }

]
const emitsData = [
  {
    name: 'update:currentTitleID',
    explain: '更新当前标题ID',
    type: 'string'
  }
]
const toImgCropping = ()=>{
  router.push('/component/imgCropping');
}
</script>

<style scoped lang="scss">
.toPath{
  cursor: pointer;
  color: #1890ff;
  text-decoration: underline;
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  user-select: none;
  &:hover{
    color: #40a9ff;
  }
}
</style>