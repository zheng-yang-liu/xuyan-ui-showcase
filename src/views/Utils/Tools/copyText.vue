<template>
  <div class="list">
    <div class="item">
      <xy-button @click="copy">点击复制下面的文字</xy-button>
      <xy-button @click="copyMsg">点击复制自定义msg</xy-button>
      <xy-code-preview
        :code="copyTxt"
        style="width: 200px;margin: 10px 0"
      ></xy-code-preview>
    </div>
    <div class="item">
      <xy-input textarea height="150" width="400"></xy-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Tools} from "yanyan-ui";
const copyTxt = "春风和煦,炎阳似火"
const copy = async()=>{
  await Tools.copyText(copyTxt,false);
}
const copyMsg = async()=>{
  const res = await Tools.copyText(copyTxt,false);
  if(res.code === 200){
    Tools.showMsg('success',"自定义Msg"+res.message)
  }
  if(res.code === 100){
    Tools.showMsg('error',"自定义Msg"+res.message)
  }
}
</script>

<style scoped lang="scss">
.list{
  .item{
    div{
      margin: 5px 0;
    }
    div:nth-child(2){
      margin-left: 5px;
    }
  }
}
</style>