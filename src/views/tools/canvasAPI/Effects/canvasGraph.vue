<template>
  <div class="graphBox">
    <div class="tools">
      <el-select
        v-model="selectValue"
        placeholder="Select"
        size="large"
        style="width: 140px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <input type="color" v-model="graphColor" class="colorSelect"/>
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted,watch,onBeforeUnmount} from 'vue';
import {DrawGraph} from "yanyan-ui";
const selectValue = ref('Rectangular');
const options = [
  {
    value: 'Rectangular',
    label: '矩形'
  },
  {
    value: 'Circle',
    label: '圆形'
  },
]
let canvas:any = null;
const graphColor= ref("#e8e6e6");
let graph:any = null;

watch(()=>graphColor.value,(newVal)=>{
  graph.changeGraphColor(newVal);
})
watch(()=>selectValue.value,(newVal)=>{
  graph.setCurrentGraph(newVal);
})
onMounted(()=>{
  const ctx = canvas?.getContext('2d');
  graph = new DrawGraph(canvas,ctx);
  graph.init();
  graph.drawShape();
})
//页面销毁
onBeforeUnmount(()=>{
  graph.destruction();
})


</script>
<style scoped lang="scss">
.graphBox{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .tools{
    position: fixed;
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .colorSelect{
      margin-left: 10px;
    }
  }
}
</style>