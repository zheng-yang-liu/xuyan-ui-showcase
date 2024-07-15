<template>
  <div class="graphBox">
    <div class="tools">
      背景颜色:<input type="color" v-model="BGColor" class="colorSelect"/>
      <template v-for="item in options">
        <div
          class="graphical"
          :class="item.value===selectValue?'select':'noSelect'"
          @click="selectValue=item.value"
        >
          <xy-icon :icon="`iconfont icon-${item.icon}`"></xy-icon>
          <p>{{ item.label }}</p>
        </div>
      </template>

      <input type="color" v-model="graphColor" class="colorSelect"/>
      <xy-icon icon="iconfont icon-xiazai" title="下载" @click="downCanvas"></xy-icon>
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script lang="ts" setup>
import {ref,onMounted,watch,onBeforeUnmount} from 'vue';
import {DrawGraph,Graph} from "yanyan-ui";
const selectValue = ref('Rectangular');
const options = [
  {
    value: 'Rectangular',
    label: '矩形',
    icon:"juxing"
  },
  {
    value: 'Circle',
    label: '圆形',
    icon:'yuanxing'
  },
  {
    value:"Triangle",
    label:"三角形",
    icon:"sanjiaoxing"
  }
]
let canvas:any = null;
const graphColor= ref("#e8e6e6");
const BGColor= ref("#191919");
let graph:any = null;


watch(()=>BGColor.value,(newVal)=>{
  graph.changeCanvasBG(newVal);
})
watch(()=>graphColor.value,(newVal)=>{
  graph.changeGraphColor(newVal);
})
watch(()=>selectValue.value,(newVal)=>{
  graph.setCurrentGraph(newVal);
})
const downCanvas = ()=>{
  graph.downloadCanvas();
}
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
      margin: 0 10px;
    }
  }

  .graphical{
    text-align: center;
    cursor: pointer;
    margin: 0 10px;
    padding: 5px;
    p{
      margin: 0;
      font-size: 12px;
    }
  }
  .select{
    border: 1px solid #014da1;
    border-radius: 5px;
  }
}
</style>