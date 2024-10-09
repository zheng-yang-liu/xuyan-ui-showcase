<template>
  <div>
    <xy-showcase-page
      introduction="提供基础工具函数使用"
      page-title="Tools"
      :catalogue="catalogue"
    >
      <template #convertTimeFormat>
        <xy-effect-preview :code="convertTimeFormatText">
          <convertTimeFormat></convertTimeFormat>
        </xy-effect-preview>

        <xy-attribute-table
          :data="convertTimeFormatData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>

      <template #convertDateFormatByTemplate>
        <xy-effect-preview :code="convertDateFormatByTemplateText">
          <convertDateFormatByTemplate></convertDateFormatByTemplate>
        </xy-effect-preview>

        <xy-attribute-table
          :data="convertDateFormatByTemplateData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>

      <template #groupBy>
        <xy-effect-preview :code="groupByText">
          <groupBy></groupBy>
        </xy-effect-preview>
        <xy-attribute-table
          :data="groupByData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #deepCopy>
        <xy-effect-preview :code="deepCopyText">
          <deepCopy></deepCopy>
        </xy-effect-preview>
        <xy-attribute-table
          :data="deepCopyData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #accordingToKeyUnique>
        <xy-effect-preview :code="accordingToKeyUniqueText">
          <accordingToKeyUnique></accordingToKeyUnique>
        </xy-effect-preview>
        <xy-attribute-table
          :data="accordingToKeyUniqueData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #debounce>
        <xy-effect-preview :code="debounceText">
          <debounce></debounce>
        </xy-effect-preview>
        <xy-attribute-table
          :data="debounceData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #base64ToFile>
        <xy-effect-preview :code="base64ToFileText">
          <base64ToFile></base64ToFile>
        </xy-effect-preview>
        <xy-attribute-table
          :data="base64ToFileData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #fileToBase64>
        <xy-effect-preview :code="fileToBase64Text">
          <fileToBase64></fileToBase64>
        </xy-effect-preview>
        <xy-attribute-table
          :data="fileToBase64Data"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #getType>
        <xy-effect-preview :code="getTypeText">
          <getType></getType>
        </xy-effect-preview>
        <xy-attribute-table
          :data="getTypeData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #calculateItemDepth>
        <xy-effect-preview :code="calculateItemDepthText">
          <calculateItemDepth></calculateItemDepth>
        </xy-effect-preview>
        <xy-attribute-table
          :data="calculateItemDepthData"
        ></xy-attribute-table>
      </template>
      <template #deepLookup>
        <xy-effect-preview :code="deepLookupText">
          <deepLookup></deepLookup>
        </xy-effect-preview>
        <xy-attribute-table
          :data="deepLookupData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #throttle>
        <xy-effect-preview :code="throttleText">
          <throttle></throttle>
        </xy-effect-preview>
        <xy-attribute-table
          :data="throttleData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>
      <template #copyText>
        <xy-effect-preview :code="copyTextText">
          <copyText></copyText>
        </xy-effect-preview>
        <xy-attribute-table
          :data="copyTextData"
          :columns-no-default="false"
        ></xy-attribute-table>
      </template>
      <template #changeColor>
        <xy-effect-preview :code="changeColorText">
          <changeColor></changeColor>
        </xy-effect-preview>
        <xy-attribute-table
          :data="changeColorData"
        ></xy-attribute-table>
      </template>
      <template #randomInterval>
        <xy-effect-preview :code="randomIntervalText">
          <randomInterval></randomInterval>
        </xy-effect-preview>
        <xy-attribute-table
          :data="randomIntervalData"
          :columns-no-default="true"
        ></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import convertTimeFormat from"./convertTimeFormat.vue"
import convertTimeFormatText from"./convertTimeFormat.vue?raw"
import convertDateFormatByTemplate from"./convertDateFormatByTemplate.vue"
import convertDateFormatByTemplateText from"./convertDateFormatByTemplate.vue?raw"
import groupBy from"./groupBy.vue"
import groupByText from"./groupBy.vue?raw"
import deepCopy from"./deepCopy.vue"
import deepCopyText from"./deepCopy.vue?raw"
import accordingToKeyUnique from"./accordingToKeyUnique.vue"
import accordingToKeyUniqueText from"./accordingToKeyUnique.vue?raw"
import debounce from "./debounce.vue"
import debounceText from "./debounce.vue?raw"
import base64ToFile from"./base64ToFile.vue"
import base64ToFileText from"./base64ToFile.vue?raw"
import fileToBase64 from "./fileToBase64.vue"
import fileToBase64Text from "./fileToBase64.vue?raw"
import getType from "./getType.vue"
import getTypeText from "./getType.vue?raw"
import calculateItemDepth from "./calculateItemDepth.vue"
import calculateItemDepthText from "./calculateItemDepth.vue?raw"
import deepLookup from "./deepLookup.vue"
import deepLookupText from "./deepLookup.vue?raw"
import throttle from "./throttle.vue"
import throttleText from "./throttle.vue?raw"
import copyText from "./copyText.vue"
import copyTextText from "./copyText.vue?raw"
import changeColor from "./changeColor.vue"
import changeColorText from "./changeColor.vue?raw"
import randomInterval from "./randomInterval.vue"
import randomIntervalText from "./randomInterval.vue?raw"

const catalogue = [
  {
    title: '转换时间格式',
    id: 'a19d557bcfd6b073227b7bb4f6064d1e',
    slot: 'convertTimeFormat',
    explain:"convertTimeFormat"
  },
  {
    title:"根据模板转换日期格式",
    id:"86ca20608c2396fae74a1ac42bb0f6a5",
    slot:'convertDateFormatByTemplate',
    explain:"convertDateFormatByTemplate 可以输出任意格式的日期`YYYY?MM?DD`"

  },
  {
    title:"数组分类",
    id:"500f747af6ac481f5fcc48fccd9c9cf4",
    slot:"groupBy",
    explain:"groupBy"
  },
  {
    title:"深拷贝",
    id:"6ca826e54c2fc517a490d965e140d7f4",
    slot:"deepCopy",
    explain:"deepCopy"
  },
  {
    title:"根据key数组去重",
    id:"d20baa61b26da9222417603dd61098c8",
    slot:"accordingToKeyUnique",
    explain:"accordingToKeyUnique"
  },
  {
    title:"防抖函数",
    id:"7e42fd6ed0585f7d3e1cffca9482e46b",
    slot:"debounce",
    explain:"`debounce`只会在函数最后一次被调用时，执行该函数"
  },
  {
    title:"base64转file",
    id:"dd0d0806a158b993c905aa6b6085d93b",
    slot:"base64ToFile",
    explain:"base64ToFile"
  },
  {
    title:"file转base64",
    id:"a928fef94a6f48a78dc3307b424fc039",
    slot:"fileToBase64",
    explain:"fileToBase64"
  },
  {
    title:"获取数据类型",
    id:"2cc6d6148133df6633d4f10a52ccd35e",
    slot:"getType",
    explain:"getType"
  },
  {
    title:"列表各项添加深度和位置信息",
    id:"99fd158902fd4e14ffe79783e435389a",
    slot:"calculateItemDepth",
    explain:"calculateItemDepth"
  },
  {
    title:"深度搜索",
    id:"368400005b8f22011047aa05dd37e29f",
    explain: "deepLookup",
    slot: "deepLookup"
  },
  {
    title:"节流函数",
    id:"b164a7ddb591397d4c40c5ec1e72baa1",
    explain: "`throttle`每隔一段时间执行一次函数",
    slot: "throttle"
  },
  {
    title:"复制文本",
    id:"88a12fe87191ac7b4fe34cdf46aa3915",
    explain: "copyText",
    slot: "copyText"
  },
  {
    title:"改变颜色",
    id:"bb4261f1ba8241e517e97d1cbcea83ee",
    explain: "changeColor",
    slot: "changeColor"
  },
  {
    title:"区间随机整数",
    id:"406365844b4745fa28ef9143ab77ae04",
    explain: "randomInterval",
    slot: "randomInterval"
  }
]
const convertTimeFormatData = [
  {
    name: 'format',
    explain: '时间格式',
    type: 'string',
  },
  {
    name: 'date',
    explain: '语言',
    type: [
      {
        value:"time Object",
        complexType:'formatDateNum | Date | number'
      }
    ],
  }
]
const convertDateFormatByTemplateData = [
  {
    name:"date",
    explain:"日期字符串 年月日之间必须有任意非数字分隔符",
    type:'string'
  },
  {
    name:"targetFormat",
    explain:"目标的日期格式 `YYYY?MM?DD``?`可以用任意字符替换",
    type:'string'
  },
  {
    name:"return",
    explain:"返回值",
    type:'string'
  }
]
const groupByData = [
  {
    name:"array",
    explain:"原始数组",
    type:[
      {
        value:"Array",
        complexType:"Object[]"
      }
    ]
  },
  {
    name:"rules",
    explain:"分组规则",
    type:[
      {
        value:"string",
      },
      {
        value:"Function",
        complexType:"(item:any)=>any"
      }
    ]
  },
  {
    name:"return",
    explain:"返回值",
    type:[
      {
        value:"object",
        complexType:"{key:Array<any>...} | {true:Array<any>,false:Array<any>}"
      }
    ]
  }
]
const deepCopyData = [
  {
    name:"array",
    explain:"原始数组",
    type:'any'
  },
  {
    name:"return",
    explain:"返回值",
    type:'any'
  }
]
const accordingToKeyUniqueData = [
  {
    name:"array",
    explain:"原始数组",
    type:[
      {
        value:"Array",
        complexType:"Object[]"
      }
    ]
  },
  {
    name:"key",
    explain:"去重的`key`",
    type:'string'
  },
  {
    name:"return",
    explain:"返回值",
    type:[
      {
        value:"Array",
        complexType:"Object[]"
      }
    ]
  }
]
const debounceData = [
  {
    name:"fn",
    explain:"需要防抖的函数",
    type:'Function'
  },
  {
    name:"delay",
    explain:"防抖时间`ms`",
    type:'number'
  },
  {
    name:"return",
    explain:"返回值",
    type:'Function'
  }
]
const base64ToFileData = [
  {
    name:"urlData",
    explain:"`base64`数据",
    type:'string'
  },
  {
    name:"fileName",
    explain:"文件名",
    type:'string'
  },
  {
    name:"return",
    explain:"返回值",
    type:"File"
  }
]
const fileToBase64Data = [
  {
    name:'file',
    explain:'`file`文件对象',
    type:"File"
  },
  {
    name:"callback",
    explain:"回调函数",
    type:[
      {
        value:"Function",
        complexType:"(base64:string)=>void"
      }
    ]
  }
]
const getTypeData = [
  {
    name:"sourceData",
    explain:"源数据",
  },
  {
    name:"return",
    explain:"返回值的类型",
    type:[
      {
        value:"dataType",
        complexType:"'boolean'| |'number' |'string' |'function' |'array' |'date' |'regExp' |'undefined' |'null' |'object' |'blob' |'formData' |'promise'"
      }
    ]
  }
]
const calculateItemDepthData = [
  {
    name:"targetList",
    explain:"目标列表",
    type:[
      {
        value:"Array",
        complexType:"Object[]"
      }
    ]
  },
  {
    name:"indentStep",
    explain:"深度步进值",
    type:'number',
    default:"1"
  },
  {
    name:"initialIndentValue",
    explain:"初始深度值",
    type:'number',
    default:"0"
  },
  {
    name:"currentPos",
    explain:"第一项位置的初始值",
    type:'number',
    default: "0"
  }
]
const deepLookupData = [
  {
    name:'dataList',
    explain:"目标数组",
    type:[
      {
        value:"Array",
        complexType:"Object[]"
      }
    ]
  },
  {
    name:"condition",
    explain:"搜索条件",
    type:[
      {
        value:"Function",
        complexType:"(item:any)=>boolean"
      }
    ]
  },
  {
    name:"return",
    explain:"返回值",
    type:[
      {
        value:"Array",
        complexType:"Object[]"
      }
    ]
  }
]
const throttleData = [
  {
    name:"fn",
    explain:"需要节流的函数",
    type:'Function'
  },
  {
    name:"delay",
    explain:"节流时间`ms`",
    type:'number'
  },
  {
    name:"return",
    explain:"返回值",
    type:'Function'
  }
]
const copyTextData = [
  {
    name:"text",
    explain:"需要复制的文本",
    type:'string'
  },
  {
    name:"ifShowMsg",
    explain:"是否显示提示",
    type:'boolean',
    default:"true"
  },
  {
    name:"return",
    explain:"返回值",
    type:[
      {
        value:"Promise",
        complexType:"Promise<{code:number,message:string}>"
      }
    ]
  }
]
const changeColorData = [
  {
    name:"colorValue",
    explain:"16进制颜色值 或 rgb() 或 rgba()",
    type:'string'
  },
  {
    name:"degree",
    explain:"改变的程度,负数加深颜色or透明度变小；正数颜色变浅or透明度变大",
    type:"number"
  },
  {
    name:"originally",
    explain:"返回结果和原本类型一致,false时输出16进制颜色值",
    type:"boolean",
    default:"true"
  },
  {
    name: "return",
    explain: "返回值",
    type: "string"
  }
]
const randomIntervalData = [
  {
    name:"min",
    explain:"最小值",
    type:'number'
  },
  {
    name:"max",
    explain:"最大值",
    type:'number'
  },
  {
    name:"return",
    explain:"返回值介于`min`和`max`之间的随机数",
    type:'number'
  }
]

</script>

<style scoped lang="scss">

</style>