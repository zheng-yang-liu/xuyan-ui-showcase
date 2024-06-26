<template>
  <div>
    <xy-showcase-page
      introduction="以下为xuyan-ui的全部组件,点击预览查看详情"
      page-title="xuyan-ui组件预览"
      :catalogue="catalogue"
    >

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
const catalogue = [
  {
    title:'基础组件',
    slot: 'basicComponents'
  }
]
</script>

<style scoped lang="scss">

</style>