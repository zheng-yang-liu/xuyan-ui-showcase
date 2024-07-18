<template>
  <div>
    <xy-button @click="getFile">获取文件</xy-button>&nbsp;通过控制台查看结果
  </div>
</template>

<script setup lang="ts">
import {Tools} from "yanyan-ui";
const getFile = ()=>{
  const input = document.createElement('input');
  input.type = 'file';
  input.onchange = (e)=>{
    const file = e.target.files[0];
    Tools.fileToBase64(file,(baseStr)=>{
      console.log('file\n',file);
      console.log(baseStr);
    });
  }
  input.click();
}
</script>