<template>
  <div>
   <xy-button @click="action">kaishi</xy-button>{{ count}}
    <div class="box">
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
      <div class="item"></div>
    </div>
    <xy-attribute-table :data="slotsData" :columns-no-default="true"></xy-attribute-table>

    <xy-attribute-table :data="attributesData"></xy-attribute-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { AnimationUtils } from 'yanyan-ui'
const count = ref(0)

const action = ()=>{
  // 使用示例
  // 使用示例
  AnimationUtils.numberAnimate(
    1000,                        // 持续时间
    0,                           // 起始值
    100,                         // 结束值
    (value:number) => {
      console.log(value);        // 回调函数，每帧调用一次
      count.value = value
    },
    'ease-in'
  );
}
const slotsData = [
  {
    name: 'prepend',
    explain: '前置slot',
    type: 'slot',
  },
  {
    name: 'append',
    explain: '后置slot',
    type: 'slot',
  }
]
const attributesData = [
  {
    name: 'width',
    explain: '宽度',
    type: 'number',
    default:'0'
  },
  {
    name: 'height',
    explain: '高度',
    type: 'number',
    default: "0",
  },
  {
    name: 'size',
    explain: '尺寸',
    type: [
      {
        value:"inputSize",
        complexType:"'small' | 'default' | 'large'"
      }
    ],
    default: "default",
  },
  {
    name:"disabled",
    explain:"是否禁用",
    type:"boolean",
    default:"false"
  },
  {
    name:"focusoutColor",
    explain:"失去焦点时边框的颜色",
    type:"string",
    default:"#c0c4cc"
  },
  {
    name:"focusColor",
    explain:"获取焦点时边框的颜色",
    type:"string",
    default:"#409eff"
  },
  {
    name:"clearable",
    explain:"是否可清空",
    type:"boolean",
    default:"false"
  },
  {
    name:"placeholder",
    explain:"占位符，提示文字，输入框为空时显示",
    type:"string",
  },
  {
    name:"beforeIcon",
    explain:"输入框前置图标",
    type:"string",
  },
  {
    name:"afterIcon",
    explain:"输入框后置图标",
    type:"string",
  },
  {
    name:"iconCanClick",
    explain:"输入框图标是否可点击",
    type:"boolean",
    default:"true"
  },
  {
    name:"password",
    explain:"是否是密码框",
    type:"boolean",
    default:"false"
  },
  {
    name:"textarea",
    explain:"是否是文本域",
    type:"boolean",
    default:"false"
  },
  {
    name:"textChangeSize",
    explain:"textarea尺寸的改变方式,none--不允许调整、both--允许任意调整、horizontal--允许水平调整、vertical--允许垂直调整",
    type:[
      {
        value:"textChangeSizeType",
        complexType: "'none' | 'both' | 'horizontal'|'vertical'"
      }
    ],
    default:"both",
  },
  {
    name:"autoSize",
    explain:"textarea是否自动高度",
    type:"boolean",
    default:"false"
  },
  {
    name:"prependStyle",
    explain:"前置slot样式",
    type:[
      {
        value:'object',
        complexType:"CSSProperties{}"
      }
    ],
  },
  {
    name:"appendStyle",
    explain:"后置slot样式",
    type:[
      {
        value:'object',
        complexType:"CSSProperties{}"
      }
    ],
  },
  {
    name:'minLength',
    explain:'最小长度',
    type:'number',
  },
  {
    name:'maxLength',
    explain:'最大长度',
    type:'number',
  },
  {
    name:'bgColor',
    explain:'背景颜色',
    type:'string',
    default:'white'
  }



]
</script>

<style scoped lang="scss">
.box{
  display: grid;
  grid-template-columns: 1fr 2fr 1.2fr 1fr;
  .item{
    width: 100%;
    height: 100%;
    background-color: #e0f0ff;
    min-height: 40px;
    border: 1px solid #d8d8d8;
  }
}
</style>
