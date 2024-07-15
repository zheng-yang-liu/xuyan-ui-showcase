import {Graph} from "yanyan-ui";

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