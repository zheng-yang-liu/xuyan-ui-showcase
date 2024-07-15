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
import {DrawGraph,Graph} from "yanyan-ui";
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
  {
    value:"Triangle",
    label:"三角形"
  }
]
let canvas:any = null;
const graphColor= ref("#e8e6e6");
let graph:any = null;

// 三角形
class Triangle extends Graph{
  //用于绘制图形
  draw(){
    const vertexX = (this.maxX - this.minX) / 2;
    console.log(this.minX,this.minY,this.maxX,this.maxY)
    this._ctx.beginPath();
    this._ctx.moveTo(this.maxX*this._dpi,this.maxY*this._dpi);
    this._ctx.lineTo((this.minX+vertexX)*this._dpi,this.minY*this._dpi);
    this._ctx.lineTo(this.minX*this._dpi,this.maxY*this._dpi);
    this._ctx.lineTo(this.maxX*this._dpi,this.maxY*this._dpi);
    this._ctx.fillStyle = this._color;
    this._ctx.fill();

    // 绘制边框
    this._ctx.strokeStyle = "rgba(255,255,255,1)";
    this._ctx.lineWidth = 3;
    this._ctx.lineCap = "square";
    this._ctx.stroke();
  }
  //用于判断是否在图形内
  isInside(x: number, y: number): boolean {
    const vertexX = (this.maxX - this.minX) / 2;
    const A = [this.maxX, this.maxY];
    const B = [this.minX + vertexX, this.minY];
    const C = [this.minX, this.maxY];

    // 向量叉积函数
    const crossProduct = (v1: number[], v2: number[]): number => {
      return v1[0] * v2[1] - v1[1] * v2[0];
    };

    // 点到顶点的向量
    const vectorPA = [A[0] - x, A[1] - y];
    const vectorPB = [B[0] - x, B[1] - y];
    const vectorPC = [C[0] - x, C[1] - y];

    // 向量叉积
    const cross1 = crossProduct(vectorPA, vectorPB);
    const cross2 = crossProduct(vectorPB, vectorPC);
    const cross3 = crossProduct(vectorPC, vectorPA);

    // 判断叉积符号是否一致
    const isSameSign = (a: number, b: number, c: number): boolean => {
      return (a >= 0 && b >= 0 && c >= 0) || (a <= 0 && b <= 0 && c <= 0);
    };

    return isSameSign(cross1, cross2, cross3);
  }

}

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
  graph.setShape({Triangle:Triangle});
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