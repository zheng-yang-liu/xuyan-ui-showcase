<template>
  <div>
    <xy-showcase-page
      introduction="用于对图片的裁剪"
      page-title="图像裁剪"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview code="" >
          <template #effect>
            <el-button @click="visible=true">图像裁剪</el-button>
          </template>
        </xy-effect-preview>
      </template>
    </xy-showcase-page>
    <xy-img-cropping v-model:visible="visible"></xy-img-cropping>
  </div>
</template>

<script setup lang="ts">
import{ref,reactive} from "vue";

const visible = ref(false)
const catalogue = [
  {
    title:"基础用法",
    id:"26eaff5ae8e63d0a31ea769bf561a3e2",
    slot:"basicUsage"
  },
  {
    title:"xyImgCropping API",
    children:[
      {
        title:"属性"
      }
    ]
  }
]
</script>

<style scoped lang="scss">

</style>