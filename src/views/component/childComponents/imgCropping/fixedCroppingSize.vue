<template>
  <div>
    <el-button @click="visible=true">固定尺寸</el-button>
    <xy-img-cropping
      title="固定裁剪尺寸"
      v-model:visible="visible"
      @confirmReturn="confirmReturn"
      :previewSizeFixed="true"
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