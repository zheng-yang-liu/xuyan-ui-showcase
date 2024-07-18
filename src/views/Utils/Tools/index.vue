<template>
  <div>
    <xy-showcase-page
      introduction=""
      page-title=""
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
        ></xy-attribute-table>

      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import convertTimeFormat from"./convertTimeFormat.vue"
import convertTimeFormatText from"./convertTimeFormat.vue?raw"
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



const catalogue = [
  {
    title: '转换时间格式',
    id: 'a19d557bcfd6b073227b7bb4f6064d1e',
    slot: 'convertTimeFormat',
    explain:"convertTimeFormat"
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
    explain:"debounce 只会在函数最后一次被调用时，执行该函数"
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
    id:"a928fef94a6f48a78dc3307b424fc039",
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
    id:"e653c2cab27bc9107acb4830d304b1f4",
    explain: "deepLookup",
    slot: "deepLookup"
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
    explain:"去重的key",
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
    explain:"防抖时间",
    type:'number'
  },
  {
    name:"return",
    explain:"返回值",
    type:'Function'
  }
]
const fileToBase64Data = [
  {
    name:'file',
    explain:'file文件对象',
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


</script>

<style scoped lang="scss">

</style>