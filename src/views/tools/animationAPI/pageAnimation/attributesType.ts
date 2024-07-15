declare const animationObserver:{
    observerId: string,//需要进行监听交叉操作的元素ID
    elementIDList: string[],//所有需要操作的元素id
    // 当前页面的id和根元素id(app)
    currentPlatingElement:{
        currentID: string;
        rootId: string;// 根元素id(app)
    }
    // 需要操作的元素的配置
    animationList:{
        element: { elType: string; el: string; additional?: string };
        config?: {[key:CSSStyleValue]:string};//{marginTop:"100px"}
    };
    // 要操作的元素的临界值配置
    animationCriticalList?:{
        elementID: string;
        config: {
            critical: number,
            exceed?: {styleName:string,value:number}[],
            noExceed?: {styleName:string,value:number}[],
        }
    }
}
declare const setAnimationListConfig:{
    animationList: {
        element: { elType: string; el: string; additional?: string };
    };
    //动画帧配置列表
    framesConfigs:{
        [key: string]: {//元素ID
            [key: string]: {//样式名
                end: number;//结束值
                start: number;//开始值
                unit?: string;//样式值单位 默认为px
                basePx?: number;//基础像素
                ifNumber?: boolean;//样式值是否是数字 默认为true
                specialValueName?: string;//特殊值名 transform: translateX(-50px); //单值
            };
        };
    };
    //动画帧范围
    animationRange:{
        [key: string]:{//元素ID
            end:number;//结束进度值
            start:number;//开始进度值
        }
    }
}