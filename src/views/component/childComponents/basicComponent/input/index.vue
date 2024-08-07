<template>
  <div>
    <xy-showcase-page
      introduction=""
      page-title="input输入框"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText">
          <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #inputIcon>
        <xy-effect-preview :code="inputIconText">
          <inputIcon></inputIcon>
        </xy-effect-preview>
      </template>
      <template #inputClear>
        <xy-effect-preview :code="inputClearText">
          <inputClear></inputClear>
        </xy-effect-preview>
      </template>
      <template #inputTextarea>
        <xy-effect-preview :code="inputTextareaText">
          <inputTextarea></inputTextarea>
        </xy-effect-preview>
      </template>
      <template #password>
        <xy-effect-preview :code="passwordText">
          <password></password>
        </xy-effect-preview>
      </template>
      <template #inputSlot>
        <xy-effect-preview :code="inputSlotText">
          <inputSlot></inputSlot>
        </xy-effect-preview>
      </template>


      <template #Attributes>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>
      <template #Events>
        <xy-attribute-table :data="eventsData" :columns-no-default="true"></xy-attribute-table>
      </template>
      <template #Slots>
        <xy-attribute-table :data="slotsData" :columns-no-default="true"></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import basicUsage from "./basicUsage.vue"
import basicUsageText from "./basicUsage.vue?raw"
import inputIcon from "./inputIcon.vue"
import inputIconText from "./inputIcon.vue?raw"
import inputClear from "./inputClear.vue"
import inputClearText from "./inputClear.vue?raw"
import inputTextarea from "./inputTextarea.vue"
import inputTextareaText from "./inputTextarea.vue?raw"
import password from "./password.vue"
import passwordText from "./password.vue?raw"
import inputSlot from "./inputSlot.vue"
import inputSlotText from "./inputSlot.vue?raw"

const catalogue = [
  {
    title: '基础用法',
    id: '837c3524ab84a9ae1663d4d6b3379323',
    slot: 'basicUsage'
  },
  {
    title:"输入框图标",
    id:"d6015ca872c645fb92af24b88e37d5ba",
    slot:"inputIcon",
    explain:"可以设置输入框的前置图标和后置图标，以及点击事件"
  },
  {
    title:'一键清空',
    id:'b93c789688567beb8d970d81c24555e2',
    slot:'inputClear',
    explain:'`clearable`属性可以让输入框一键清空已经输入的内容'
  },
  {
    title:'密码框',
    id:'8ed9eb821d731adf05cc88ce3713601d',
    slot:'password',
    explain:'`password`属性可以让输入框变成密码框'
  },
  {
    title:"文本框slot",
    id:"43df4f5f467cf16f1dc11d3f62c1f726",
    slot:"inputSlot",
    explain: "可以设置输入框的前置插槽`prepend`和后置插槽`append`，以及点击事件"
  },
  {
    title: 'API',
    id: 'd0e02544670c02a8c116aab2baa0f67f',
    children: [
      {
        title: "Attributes",
        id: "1563c393dbe897320495e143e38edfa1",
        slot: "Attributes"
      },
      {
        title: "Events",
        id: "a8e7a21914fec6dd472b17392b59322e",
        slot: "Events"
      },
      {
        title: "Slots",
        id: "d8432f9d5e78a6ddd5e81f36bd8f1060",
        slot: "Slots"
      }
    ]
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
    name: 'maxWidth',
    explain: '最大宽度',
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
    explain:"textarea尺寸的改变方式,`none`不允许调整、`both`允许任意调整、`horizontal`允许水平调整、`vertical`允许垂直调整",
    type:[
      {
        value:"sizeType",
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
const eventsData = [
  {
    name:"iconDown",
    explain:"图标点击事件",
    type:[
      {
        value:"Function",
        complexType:"() => void"
      }
    ],
  },
  {
    name:"beforeIconDown",
    explain:"前置图标点击事件",
    type:[
      {
        value:"Function",
        complexType:"() => void"
      }
    ],
  },
  {
    name:"afterIconDown",
    explain:"后置图标点击事件",
    type:[
      {
        value:"Function",
        complexType:"() => void"
      }
    ],
  },
  {
    name:"prependDown",
    explain:"前置slot点击事件",
    type:[
      {
        value:"Function",
        complexType:"() => void"
      }
    ],
  },
  {
    name:"appendDown",
    explain:"后置slot点击事件",
    type:[
      {
        value:"Function",
        complexType:"() => void"
      }
    ],
  }

]
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
</script>
