<template>
  <div class="afterList">
    <div class="afterItem">
      <p>转换前的时间格式：<code>{{date}}</code> </p>
      <p>转换后的的时间格式(YYYY-MM-DD)：<code>{{ afterDate }}</code></p>
    </div>

    <div class="afterItem">
      <p>转换前的时间格式：<code>{{date}}</code> </p>
      <p>转换后的的时间格式(YYYY[ MM ]DD)：<code>{{ afterTimeStamp }}</code></p>
    </div>

    <div class="afterItem">
      <p>转换前的时间格式：<code>{{date}}</code> </p>
      <p>转换后的的时间格式(YYYY年MM月)：<code>{{ afterFormatDateNum }}</code></p>
    </div>

  </div>
</template>

<script setup lang="ts">
import {Tools} from "yanyan-ui";

const date = '2024.10.09';

const afterDate = Tools.convertDateFormatByTemplate(date,'YYYY-MM-DD');

const afterTimeStamp = Tools.convertDateFormatByTemplate(date,"YYYY[ MM ]DD");

const afterFormatDateNum = Tools.convertDateFormatByTemplate(date,"YYYY年MM月");


</script>

<style scoped lang="scss">
.afterList{
  .afterItem:nth-child(2n){
    margin: 20px 0;
  }
  .afterItem{
    font-size: 14px;
  }
}
</style>