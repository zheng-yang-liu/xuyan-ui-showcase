<template>
  <div>
    <xy-button @click="active">开始转换</xy-button>&nbsp;通过控制台查看结果
  </div>
</template>

<script setup lang="ts">
import {Tools} from "yanyan-ui";
import base64Data from "./base64Data.txt?raw"

const active = () =>{
  const file = Tools.base64ToFile(base64Data,'test.png');
  console.log(base64Data);
  console.log('file\n', file);
}
</script>