<template>
  <div class="afterList">
    <div class="afterItem">
      <p>转换前的时间格式(Date对象)：<code>{{date}}</code> </p>
      <p>转换后的的时间格式(YYYY-MM-DD)：<code>{{ afterDate }}</code> </p>
    </div>

    <div class="afterItem">
      <p>转换前的时间格式(时间戳)：<code>{{timeStamp}}</code> </p>
      <p>转换后的的时间格式(YYYY-MM-DD HH:mm:ss)：<code>{{ afterTimeStamp }}</code>  </p>
    </div>

    <div class="afterItem">
      <p>转换前的时间格式(formatDateNum时间对象)：<code>{{formatDateNum}}</code> </p>
      <p>转换后的的时间格式(YYYY年MM月DD日 HH时mm分s秒)：<code>{{ afterFormatDateNum }}</code> </p>
    </div>

  </div>
</template>

<script setup lang="ts">
import {Tools} from "yanyan-ui";
const date = new Date();
const timeStamp = date.getTime();
const formatDateNum = {
  year:2021,
  month:1,
  day:1,
  hour:10,
  minute:9,
  second:8
}
const afterDate = Tools.convertTimeFormat('YYYY-MM-DD',date);

const afterTimeStamp = Tools.convertTimeFormat('YYYY-MM-DD HH:mm:ss',timeStamp);

const afterFormatDateNum = Tools.convertTimeFormat('YYYY年MM月DD日 HH时mm分s秒',formatDateNum);

//时间格式对应转换方式
//YYYY -- 年
//MM -- 月 | M -- 月(不补0)
//DD -- 日 | D -- 日(不补0)
//HH -- 时 | H -- 时(不补0)
//mm -- 分 | m -- 分(不补0)
//ss -- 秒 | s -- 秒(不补0)
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