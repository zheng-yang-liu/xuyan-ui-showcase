<template>
  <div>
    <xy-showcase-page
      introduction="左侧导航组件还具备高度的可定制性，能够根据不同的应用场景和用户需求进行个性化设置。"
      page-title="左侧导航"
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="basicUsageText" :effect-height="200">
            <basicUsage></basicUsage>
        </xy-effect-preview>
      </template>
      <template #topLogo>
        <xy-effect-preview :code="topLogoText" :effect-height="200">
            <topLogo></topLogo>
        </xy-effect-preview>
      </template>
      <template #preIcon>
        <xy-effect-preview :code="preIconText" :effect-height="200">
            <pre-icon></pre-icon>
        </xy-effect-preview>
      </template>
      <template #showOnlyOneSubmenu>
        <xy-effect-preview :code="showOnlyOneSubmenuText">
          <showOnlyOneSubmenu></showOnlyOneSubmenu>
        </xy-effect-preview>
      </template>

      <template #attributes>
        <xy-attribute-table :data="attributesData"></xy-attribute-table>
      </template>
      <template #events>
        <xy-attribute-table :data="eventData" :columnsNoDefault="true"></xy-attribute-table>
      </template>
    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import basicUsage from "./basicUsage.vue"
import basicUsageText from './basicUsage.vue?raw';
import topLogo from './topLogo.vue'
import topLogoText from './topLogo.vue?raw'
import preIcon from './preIcon.vue'
import preIconText from './preIcon.vue?raw'
import showOnlyOneSubmenu from "./showOnlyOneSubmenu.vue"
import showOnlyOneSubmenuText from "./showOnlyOneSubmenu.vue?raw"

const catalogue = [
  {
    title: '基础用法',
    id: '1642d0acf8e77f14015d9747ade17389',
    slot: 'basicUsage'
  },
  {
    title:'带有顶部LOGO',
    id:"205d3c82c34a151a9032da0f75069f58",
    slot:'topLogo'
  },
  {
    title:"前置ICON",
    id:"9a87484354a5b534120be61a1f45bc28",
    slot:"preIcon"
  },
  {
    title:"展示多个菜单子项",
    explain:"切换菜单的不同子菜单时隐藏已经打开的子菜单项",
    id:"acdd93fd9078d0de09a3ccaaf2c415c6",
    slot:"showOnlyOneSubmenu"
  },
  {
    title:"API",
    id:"5d93ac9f30ec428c3cd0bca33a30ce4a",
    children:[
      {
        title:"Attributes",
        id:"3e5deda6c4364fc72285e22085ef13c7",
        slot:"attributes"
      },
      {
        title:"Events",
        id:"b1",
        slot: "events"
      }
    ]
  }
]
const attributesData = [
  {
    name:"menuItems",
    explain:"菜单列表",
    type:[
      {
        value:"Array",
        complexType:`{ title: string,
          id: string,
          indentValue?: number,
          listPosition?: number,
          icon?: string,
          children?: Array<menuItem>,
          path?: string }`
      }
    ],
  },
  {
    name:"height",
    explain:"菜单项高度",
    type:"number",
    default:"40"
  },
  {
    name:"width",
    explain:"菜单宽度",
    type:"number",
    default:"200"
  },
  {
    name:"submenuIndentConfig",
    explain:"子菜单缩进配置",
    type:[
      {
        value:"object",
        complexType:`{
          autoIndent: boolean,
          indentValue: number,
          currentIndent: number
        }`
      }
    ],
    default:`{
      autoIndent: true,
      indentValue: 10,
      currentIndent: 0
    }`
  },
  {
    name:"startID",
    explain:"初始Id",
    type:"string",
  },
  {
    name:"selectStyle",
    explain:"选中item样式",
    type:[
      {
        value:"object",
        complexType: "CSSStyleValue"
      }
    ],
  },
  {
    name:"itemStyle",
    explain:"item的样式",
    type:[
      {
        value:"object",
        complexType: "CSSStyleValue"
      }
    ]
  },
  {
    name:"expandAll",
    explain:"是否全部展开",
    type:"boolean",
    default:"false"
  },
  {
    name:"selfJump",
    explain:"是否采用自身的跳转方式`router.push`,false时父组件需`@click`处理点击事件",
    type:"boolean",
    default:"true"
  },
  {
    name:"mouseOverStyle",
    explain:"鼠标悬浮item的样式",
    type:[
      {
        value:"object",
        complexType: "CSSStyleValue"
      }
    ],
  },
  {
    name:"defaultStyle",
    explain:"是否使用自带的默认样式",
    type:"boolean",
    default:"true"
  },
  {
    name: "fillingDefaultIcon",
    explain: "是否填充默认图标",
    type: "boolean",
    default: "false"
  },
  {
    name: "menuLeftStyle",
    explain: "menuLeft的样式",
    type: [
      {
        value: "object",
        complexType: "CSSStyleValue"
      }
    ]
  },
  {
    name: "isTheHeightSet",
    explain: "是否自动设置menuLeft的高度",
    type: "boolean",
    default: "false"
  },
  {
    name:"needPath",
    explain:"是否需要path",
    type:"boolean",
    default:"true"
  },
  {
    name:"areAllClickable",
    explain:"是否全部可选",
    type:"boolean",
    default:"false"
  },
  {
    name:"selectFirstItem",
    explain:"默认选中第一个可选item",
    type:"boolean",
    default:"false"
  },
  {
    name:"logoSlotStyle",
    explain:"logo插槽样式",
    type:[
      {
        value:"object",
        complexType: "CSSStyleValue"
      }
    ],
  },
  {
    name:"itemTitleStyle",
    explain:"itemTitle文字样式",
    type:[
      {
        value:"object",
        complexType: "CSSStyleValue"
      }
    ],
  },
  {
    name:"indent",
    explain:"是否缩进",
    type:"boolean",
    default:"true"
  },
  {
    name:"initByRouter",
    explain:"根据路由初始化currentID",
    type:"boolean",
    default:"false"
  },
  {
    name:"showPrompt",
    explain:"提示",
    type:"boolean",
    default:"true"
  },
  {
    name:"showOnlyOneSubmenu",
    explain:"仅展示一个子菜单项",
    type:"boolean",
    default:"true"
  },
  {
    name:"showScrollBar",
    explain:"是否显示滚动条",
    type:"boolean",
    default:"false"
  }
]
const eventData = [
  {
    name: "clickItem",
    explain: "点击item时触发",
    type: [
      {
        value:'Function',
        complexType:"(item)=>void"
      }
    ],
  }
]
</script>

<style scoped lang="scss">

</style>