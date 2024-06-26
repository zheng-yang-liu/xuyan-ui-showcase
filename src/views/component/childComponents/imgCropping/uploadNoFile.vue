<template>
  <div>
    <el-button @click="visible=true">上传base64数据</el-button>
    <xy-img-cropping
      title="图像裁剪上传base64"
      v-model:visible="visible"
      @confirmReturn="confirmReturn"
      :uploadParamIsFile="false"
    >
    </xy-img-cropping>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false)

const confirmReturn = async(file:File|string)=>{
  console.log(file);
  //网络请求
}
</script>

<style scoped lang="scss">

</style>