<template>
  <div>
    <xy-showcase-page
      introduction="提供图标使用"
      page-title="图标"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText">
          <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #iconLibrary>
        <iconLibrary></iconLibrary>
      </template>

      <template #Attributes>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import basicUsage from "./basicUsage.vue"
import iconLibrary from "./iconLibrary.vue"
import basicUsageText from "./basicUsage.vue?raw"

const catalogue = [
  {
    title: '基础用法',
    id: '491b11074c5342cf8c97ce15b6de0e30',
    slot: 'basicUsage'
  },
  {
    title:"图标库",
    id:"aa79c33ae9bbaec4a1950df6d163b15b",
    slot:"iconLibrary"
  },
  {
    title: 'API',
    id: '4150dc9a3d98da94bdaa2e7d82367066',
    children: [
      {
        title: "Attributes",
        id: "6eb98b65f947bc47194b8304a1e205ee",
        slot: "Attributes",
        explain:"提供常用图标进行使用，点图图标复制代码"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'icon',
    explain: '图标名',
    type: 'string',
  },
  {
    name: 'iconStyle',
    explain: '图标样式',
    type: [
      {
        value:"object",
        complexType:"CSSStyleValue"
      }
    ],
  }

]
</script>

<style scoped lang="scss">

</style>