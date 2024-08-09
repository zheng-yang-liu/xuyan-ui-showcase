<template>
  <div class="list">
    <div class="item">
      <xy-button @click="action">转化</xy-button>
      <div class="originalColor" v-for="(item,index) in colorValues" :key="index">
        颜色{{index+1}}:
        <p :style="{backgroundColor:`${item.value}`}"></p>
        颜色值: <code>{{item.value}}</code>
      </div>
    </div>
    <div class="item" v-if="showColor">
      <div style="line-height: 32px;height: 32px">转化后的颜色值</div>
      <div class="originalColor" v-for="(item,index) in afterColor" :key="index">
        颜色{{index+1}}:
        <p :style="{backgroundColor:`${item.value}`}"></p>
        颜色值: <code>{{item.value}}</code>
        解释: <code>{{item.explain}}</code>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {Tools} from "yanyan-ui";
const colorValues = [
  {
    value:"#d14e4e"
  },
  {
    value:"rgb(237,165,9)"
  },
  {
    value:"rgba(200,32,161,0.46)"
  },
  {
    value:"#C820A175"
  },
  {
    value:"rgb(15,78,149)"
  },

];
const afterColor = ref<{value:string,explain:string}[]>([]);
const showColor = ref(false);
const action = () => {
  showColor.value = true;
  afterColor.value = [];
  afterColor.value.push({
    value:Tools.changeColor(colorValues[0].value, 50),
    explain:"颜色值变浅50"
  })
  afterColor.value.push({
    value:Tools.changeColor(colorValues[1].value, -50),
    explain:"颜色值加深"
  })
  afterColor.value.push({
    value:Tools.changeColor(colorValues[2].value, -40),
    explain:"透明度减小40"
  })
  afterColor.value.push({
    value:Tools.changeColor(colorValues[3].value, 30),
    explain:"透明度增大30,透明度越大颜色越深最大为1/FF,最小为0"
  })
  afterColor.value.push({
    value:Tools.changeColor(colorValues[4].value, 30,false),
    explain:"颜色值变浅30,不使用原始颜色类型值"
  })
}

onMounted(()=>{
})
</script>

<style scoped lang="scss">
.list{
  display: flex;
  justify-content: space-between;
   //允许换行
  flex-wrap: wrap;
  .item{
    width: 50%;
    .originalColor{
      line-height: 15px;
      margin: 20px 0;
      font-size: 14px;
      p{
        width: 15px;
        height: 15px;
        display: inline-block;
        margin:0 10px;
      }
    }
  }
}
</style>