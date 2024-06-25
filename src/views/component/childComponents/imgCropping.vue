<template>
  <div>
    <xy-showcase-page
      introduction="用于对图片的裁剪"
      page-title="图像裁剪"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="croppingCode.basicUsage" >
          <template #effect>
            <el-button @click="visible=true">图像裁剪</el-button>
          </template>
        </xy-effect-preview>
        <xy-img-cropping
          v-model:visible="visible"
          @confirmReturn="confirmReturn"
        >
        </xy-img-cropping>
      </template>
      <template #fixedCroppingSize>
        <xy-effect-preview :code="croppingCode.fixedCroppingSize" >
          <template #effect>
            <el-button @click="visibleFixedSize=true">固定尺寸</el-button>
          </template>
        </xy-effect-preview>
        <xy-img-cropping
          title="固定裁剪尺寸"
          v-model:visible="visibleFixedSize"
          @confirmReturn="confirmReturn"
          :previewSizeFixed="true"
        >
        </xy-img-cropping>
      </template>
      <template #uploadBase64>
        <xy-effect-preview :code="croppingCode.uploadBase64" >
          <template #effect>
            <el-button @click="visibleUploadBase64=true">上传base64</el-button>
          </template>
        </xy-effect-preview>
        <xy-img-cropping
          title="图像裁剪上传base64"
          v-model:visible="visibleUploadBase64"
          @confirmReturn="confirmReturn"
          :uploadParamIsFile="false"
        >
        </xy-img-cropping>
      </template>

      <template #xyImgCroppingProps>
        <xy-attribute-table :data="propsData"></xy-attribute-table>
      </template>
      <template #xyImgCroppingEvent>
        <xy-attribute-table :data="eventData" :columns="eventClums"></xy-attribute-table>
      </template>
    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import{ref,reactive} from "vue";
import{croppingCode}from"./codeText"
const visible = ref(false)
const visibleFixedSize = ref(false)
const visibleUploadBase64 = ref(false)
const eventClums = [
  {
    name: '属性名',
    key: 'name',
    width: '1fr'
  },
  {
    name: '说明',
    key: 'explain',
    width: '2fr'
  },
  {
    name: '类型',
    key: 'type',
    width: '1fr'
  },
]
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
    explain:"用于图片数据需要使用base64格式进行数据上传情况",
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
const propsData = [
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
    explain:"上传参数是否为file类型",
    type:"boolean",
    default:"true"
  },
  {
    name:"closeOnClickModal",
    explain:"点击外部关闭弹框",
    type:"boolean",
    default:"false"
  },
  {
    name:"fileSize",
    explain:"文件大小限制",
    type:"number",
    default:"4"
  }
]
const eventData = [
  {
    name:"confirmReturn",
    explain:"确认裁剪的函数回调",
    type:[{value:"Function",complexType:"(file:File|string)=>void"}]
  }
]

const confirmReturn = async(file:File|string)=>{
  console.log(file);
  //网络请求
}
</script>

<style scoped lang="scss">

</style>