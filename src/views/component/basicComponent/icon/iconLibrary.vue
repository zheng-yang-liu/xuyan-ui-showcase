<template>
  <div class="icon-list">
    <div v-for="item in iconFont.glyphs" :key="item.name" class="iconItem" @click="clickIconItem(item)">
      <xy-icon :icon="item.font_class"></xy-icon>
      <div style="padding: 10px 0">{{item.name}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconFont from "yanyan-ui/assets/iconFont/iconfont.json"
import {Tools} from "yanyan-ui"
const clickIconItem = async(item:any)=>{

  const iconCode = `<xy-icon icon="${iconFont.font_family} ${iconFont.css_prefix_text}${item.font_class}"></xy-icon>`
  await Tools.copyText(iconCode);
}

</script>

<style scoped lang="scss">
.icon-list{
  display:grid;
  grid-template-columns: repeat(auto-fill, 100px);
  .iconItem{
    margin: 10px;
    cursor: pointer;
    text-align: center;
    display: inline-block;
  }
}

</style>