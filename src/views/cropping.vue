<template>
  <div>
    <xy-img-cropping
      v-model:visible="state.visible"
      @confirmReturn="confirmReturn"
      :uploadApi="upload"
    ></xy-img-cropping>
    <el-button @click="state.visible = true"></el-button>
    <el-button @click="test">点击</el-button>
  </div>
</template>

<script setup lang="ts">
import {reactive} from "vue"
import {Tools} from "yanyan-ui"
const state = reactive({
  visible:false,
})
import {upload} from "@/api/index"

const confirmReturn = async (file:File|string)=>{
  console.log(file);
  // const res = await upload(file)
  // console.log(res)
}
import {getLink} from "@/api/index"
const test = async ()=>{
  const res = await getLink()
  console.log(res)
}

const dianji = ()=>{

}


</script>

<style lang="scss">

</style>