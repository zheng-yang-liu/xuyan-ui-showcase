<template>
  <div>
    <xy-showcase-page
      introduction="用于对图片的裁剪，点击确定后默认不会立即关闭，等待网络请求返回后再关闭或使用`@confirmReturn`回调进行请求处理"
      page-title="图像裁剪"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText" >
          <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #fixedCroppingSize>
        <xy-effect-preview :code="fixedCroppingSizeText">
          <fixedCroppingSize></fixedCroppingSize>
        </xy-effect-preview>
      </template>
      <template #uploadBase64>
        <xy-effect-preview :code="uploadNoFileText">
            <uploadNoFile></uploadNoFile>
        </xy-effect-preview>
      </template>

      <template #xyImgCroppingProps>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>
      <template #xyImgCroppingEvent>
        <xy-attribute-table :data="eventData" :columns-no-default="true"></xy-attribute-table>
      </template>
    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import basicUsage from "./basicUsage.vue"
import basicUsageText from "./basicUsage.vue?raw"
import uploadNoFile from "./uploadNoFile.vue"
import uploadNoFileText from "./uploadNoFile.vue?raw"
import fixedCroppingSize from "./fixedCroppingSize.vue"
import fixedCroppingSizeText from "./fixedCroppingSize.vue?raw"


const catalogue = [
  {
    title:"基础用法",
    id:"26eaff5ae8e63d0a31ea769bf561a3e2",
    slot:"basicUsage"
  },
  {
    title:"固定裁剪尺寸",
    id:"1defc5416439f56bb00028410d061489",
    slot:"fixedCroppingSize"
  },
  {
    title:"上传base64数据",
    explain:"用于图片数据需要使用`base64`格式进行数据上传情况",
    id:"fa1d5d2966d8618459a6c8ec33bfa7cb",
    slot:"uploadBase64"
  },
  {
    title:"API",
    children:[
      {
        title:"Attributes",
        slot:'xyImgCroppingProps'
      },
      {
        title:"Events",
        slot:"xyImgCroppingEvent"
      }
    ]
  }
]
const attributesData = [
  {
    name:"visible",
    explain:"是否显示裁剪框",
    type:"boolean",
    default:"false"
  },
  {
    name:'title',
    explain:"弹框标题",
    type:"string",
    default:"图像裁剪"
  },
  {
    name:"previewSizeFixed",
    explain:"是否固定裁剪尺寸",
    type:"boolean",
    default:"false"
  },
  {
    name:"uploadParamIsFile",
    explain:"上传参数是否为`file`类型",
    type:"boolean",
    default:"true"
  },
  {
    name:"clickOnExternalClose",
    explain:"点击外部关闭弹框",
    type:"boolean",
    default:"false"
  },
  {
    name:"fileSize",
    explain:"文件大小限制",
    type:"number",
    default:"4"
  },
  {
    name:"immediateClose",
    explain:"是否立即关闭,等待网络请求返回后再关闭",
    type:"boolean",
    default:"false"
  }
]
const eventData = [
  {
    name:"confirmReturn",
    explain:"确认裁剪的函数回调",
    type:[{value:"Function",complexType:"(file:File|string)=>void"}]
  }
]

</script>

<style scoped lang="scss">

</style>