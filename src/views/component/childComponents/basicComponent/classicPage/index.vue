<template>
  <div>
    <xy-showcase-page
      introduction=""
      page-title=""
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview code="">

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
    id: 'b1',
    slot: 'basicUsage'
  },
  {
    title: 'API',
    id: 'b2',
    children: [
      {
        title: "Attributes",
        id: "b3",
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