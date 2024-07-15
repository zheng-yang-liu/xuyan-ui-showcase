/**
 * 绘制对象
 * */
export declare class DrawGraph {
  /**
   * 构造函数 - 创建一个绘图对象。
   * @param canvas - 画布元素。
   * @param ctx - 画布上下文。
   */
  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  );

  /**
   * 初始化绘图
   * @param width - 画布宽度
   * @param height - 画布高度
   * @param canvasBG - 画布背景颜色
   * @param graphColor - 图形颜色
   */
  init(width: number, height: number, canvasBG: string, graphColor: string): void;

  /**
   * 销毁绘图
   */
  destruction(): void;

  /**
   * 设置自定义图形
   * @param customShape - 自定义图形
   */
  setShape(customShape: Object): void;

  /**
   * 设置当前图形
   * @param currentGraph - 当前图形
   */
  setCurrentGraph(currentGraph: string): void;

  /**
   * 改变填充颜色
   * @param graphColor - 填充颜色
   */
  changeGraphColor(graphColor: string): void;
}

/**
 * 表示图形的总类-用于自定义图形时继承此类。
 * */
export declare class Graph{
  /**
   * 构造函数 - 创建一个图形。
   * @param color - 图形的颜色。
   * @param startX - 起始的 X 坐标。
   * @param startY - 起始的 Y 坐标。
   * @param ctx - 绘图上下文。
   * @param width - 画布的宽度。
   * @param height - 画布的高度。
   * @param dpi - DPI 缩放系数。
   */
  constructor(
    color:string,
    startX:number,
    startY:number,
    ctx:CanvasRenderingContext2D,
    width:number,
    height:number,
    dpi:number
  );
  /**
   * 设置终止的 X 坐标。
   * @param value - 新的终止 X 坐标。
   */
  endX(value:number):void;
  /**
   * 设置终止的 Y 坐标。
   * @param value - 新的终止 Y 坐标。
   */
  endY(value:number):void;
}

