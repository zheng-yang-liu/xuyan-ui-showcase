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
  },
  {
    value:"Ellipse",
    label:"椭圆",
    icon:"ellipse"
  }
]
let canvas:any = null;
const graphColor= ref("#e8e6e6");
const BGColor= ref("#191919");
let graph:any = null;

class Ellipse extends Graph{
  get centerX(){
    return (this.minX + this.maxX) / 2;
  }
  get centerY(){
    return (this.minY + this.maxY) / 2;
  }
  get radiusX(){
    return (this.maxX - this.minX) / 2;
  }
  get radiusY(){
    return (this.maxY - this.minY) / 2;
  }
  draw(){
    const rotation = 0;  // 椭圆的旋转角度，以弧度表示
    const startAngle = 0; // 椭圆的起始角度，以弧度表示
    const endAngle = 2 * Math.PI; // 椭圆的结束角度，以弧度表示

    // 开始绘制路径
    this._ctx.beginPath();
    this._ctx.ellipse(
      this.centerX*this._dpi, this.centerY*this._dpi,
      this.radiusX*this._dpi,
      this.radiusY*this._dpi,
      rotation,
      startAngle,
      endAngle
    );
    this._ctx.fillStyle = this._color;
    this._ctx.fill();

    // 绘制边框
    this._ctx.strokeStyle = "rgba(255,255,255,1)";
    this._ctx.lineWidth = 3;

    this._ctx.lineCap = "square";
    this._ctx.stroke();
  }
  // 判断是否在椭圆内
  isInside(x:number,y:number):boolean{
    // 计算椭圆方程的左侧值
    const normalizedX = (x - this.centerX) / this.radiusX;
    const normalizedY = (y - this.centerY) / this.radiusY;
    const value = Math.pow(normalizedX,2) + Math.pow(normalizedY,2);

    // 如果值小于或等于1，则点在椭圆内
    return value <= 1;
  }
}
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
  graph.setShape({Ellipse:Ellipse});
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