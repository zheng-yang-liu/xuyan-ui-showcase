<template>
    <xy-attribute-table :data="data"></xy-attribute-table>
</template>

<script setup lang="ts">
const data = [
  {
    name: 'name',
    explain: '名称',
    type: 'string'
  },
  {
    name: 'age',
    explain: '年龄',
    type:'number',
    default:18
  },
  {
    name: 'address',
    explain: '地址',
    type: [
      {
        value: 'address',
        complexType: "'beijing' | 'shanghai' | 'sichuan' | 'hebei' | 'tianjin' | 'chengdu'"
      }
    ],
  },
  {
    name:"hobby",
    explain:"爱好",
    type:[
      {
        value:"string",
      },
      {
        value:"Array",
        complexType:"string[]"
      }
    ]
  }
]
</script>

<style scoped lang="scss">

</style>