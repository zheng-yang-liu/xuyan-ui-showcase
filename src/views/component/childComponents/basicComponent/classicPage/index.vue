<template>
  <div>
    <xy-showcase-page
      introduction=""
      page-title=""
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview code="">
          <xy-button @click="toClassicPage">查看效果</xy-button>
        </xy-effect-preview>
      </template>
      <template #Attributes>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import {useRouter} from"vue-router"
const catalogue = [
  {
    title: '基础用法',
    id: '6a1d67db3ca826527cd5f85d38f0907f',
    slot: 'basicUsage'
  },
  {
    title: 'API',
    id: 'c4c424b4d7c175fd405d254056baddcb',
    children: [
      {
        title: "Attributes",
        id: "b6e59b284023d235c01e129c78393988",
        slot: "Attributes"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'direction',
    explain: '配列方向',
    type: [
      {
        value:"directionType",
        complexType:"'horizontal' | 'vertical'"
      }
    ],
  },
  {
    name: 'asideWidth',
    explain: '侧边栏宽度',
    type: 'number',
    default: 200,
  },
  {
    name: 'headerHeight',
    explain: '头部高度',
    type: 'number',
    default: 50,
  },
  {
    name: 'headerStyle',
    explain: '头部样式',
    type: 'CSSStyleValue',
  },
  {
    name: 'sectionStyle',
    explain: 'section样式',
    type: 'CSSStyleValue',
  },
  {
    name: 'asideStyle',
    explain: '侧边栏样式',
    type: 'CSSStyleValue',
  },
  {
    name: 'mainStyle',
    explain: '主体样式',
    type: 'CSSStyleValue',
  }

]
const router = useRouter();

const toClassicPage = ()=>{
  router.push('/pageEffects/classicPage')
}
</script>

<style scoped lang="scss">

</style>