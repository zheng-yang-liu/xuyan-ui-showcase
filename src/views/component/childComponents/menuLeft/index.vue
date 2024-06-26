<template>
  <div>
    <xy-showcase-page
      introduction="左侧导航组件还具备高度的可定制性，能够根据不同的应用场景和用户需求进行个性化设置。"
      page-title="左侧导航"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText" :effect-height="200">
            <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #topLogo>
        <xy-effect-preview :code="topLogoText" :effect-height="200">
            <topLogo></topLogo>
        </xy-effect-preview>
      </template>
      <template #preIcon>
        <xy-effect-preview :code="preIconText" :effect-height="200">
            <pre-icon></pre-icon>
        </xy-effect-preview>
      </template>
    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import basicUsage from "./basicUsage.vue"
import basicUsageText from './basicUsage.vue?raw';
import topLogo from'./topLogo.vue'
import topLogoText from'./topLogo.vue?raw'
import preIcon from'./preIcon.vue'
import preIconText from'./preIcon.vue?raw'

const catalogue = [
  {
    title: '基础用法',
    id: '1642d0acf8e77f14015d9747ade17389',
    slot: 'basicUsage'
  },
  {
    title:'带有顶部LOGO',
    id:"205d3c82c34a151a9032da0f75069f58",
    slot:'topLogo'
  },
  {
    title:"前置ICON",
    id:"9a87484354a5b534120be61a1f45bc28",
    slot:"preIcon"
  }
]
</script>

<style scoped lang="scss">

</style>