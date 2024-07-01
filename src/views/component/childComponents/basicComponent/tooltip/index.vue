<template>
  <div>
    <xy-showcase-page
      introduction=""
      page-title=""
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="``">

        </xy-effect-preview>
      </template>
      <template #Attributes>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">


const catalogue = [
  {
    title: '基础用法',
    id: '06a88c666511082d8413fd20286fb6cc',
    slot: 'basicUsage'
  },
  {
    title: 'API',
    id: '3ad485b2a47d4c18ca1a7abc46e40f87',
    children: [
      {
        title: "Attributes",
        id: "0315ab3bb84b16539418dfcd79cd8abf",
        slot: "Attributes"
      }
    ]
  }
]
const attributesData = [
  {
    name: 'code',
    explain: '代码内容',
    type: 'string',
  },
  {
    name: 'language',
    explain: '语言',
    type: 'string',
    default: "xml",
  },
  {
    name: 'round',
    explain: '是否圆角',
    type: 'boolean',
    default: "true",
  }

]
</script>

<style scoped lang="scss">

</style>