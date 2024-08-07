<template>
  <div>
    <xy-showcase-page
      introduction="属性列表"
      page-title="对组件的属性进行展示"
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
    id: '49559d974908abd08a305553c97851b9',
    slot: 'basicUsage'
  },
  {
    title: 'API',
    id: '808db7ae581a79042aabe721074c8e2a',
    children:[
      {
        title:"Attributes",
        id:"0f08545013d2e5f534d84f026659fb17",
        slot:"Attributes"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'data',
    explain: '数据',
    type: [
      {
        value: 'Array',
        complexType: `{
          name:string,
          explain:string,
          type:string | {value:string,complexType?:string}[],
          default?:string
        }[]`
      }
    ]
  },
  {
    name: 'promptTopOffset',
    explain: '类型提示`Tooltip`距离顶部的偏移量',
    type: 'number',
    default:"5",
  },
  {
    name:"promptXOffset",
    explain:"类型提示`Tooltip`距离左侧的偏移量",
    type:"number",
    default:"0"
  },
  {
    name:"columnsNoDefault",
    explain:"是否显示默认值列",
    type:"boolean",
    default:"false"
  }

]
</script>

<style scoped lang="scss">

</style>