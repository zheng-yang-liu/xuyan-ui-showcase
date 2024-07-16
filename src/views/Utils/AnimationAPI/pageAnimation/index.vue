<template>
  <div>
    <xy-showcase-page
      introduction=""
      page-title=""
      :catalogue="catalogue"
    >
      <template #basicUsage>
        <xy-effect-preview :code="page1">
          <xy-button @click="toPresentation">查看效果</xy-button>
        </xy-effect-preview>
      </template>
      <template #AttributesType>
        <xy-code-preview :code="attributesType" language="typescript"></xy-code-preview>
      </template>

      <template #setAnimationListConfig>
        <p class="APIExplain">生成animationList的config配置</p>
        <xy-attribute-table :data="setAnimationListConfigData"></xy-attribute-table>
      </template>
      <template #animationObserver>
        <p class="APIExplain">动画监听器-执行动画</p>
        <xy-attribute-table :data="animationObserverData"></xy-attribute-table>
      </template>

    </xy-showcase-page>
  </div>
</template>

<script setup lang="ts">
import {useRouter}from"vue-router"
const router = useRouter()
import page1 from "@/views/Utils/AnimationAPI/animationPresentation/pageAnimation/page1.vue?raw"
import attributesType from "./attributesType?raw"
const catalogue = [
  {
    title: '基础用法',
    id: 'e1b20faf7a50b2a15998cca84fd98fa1',
    slot: 'basicUsage'
  },
  {
    title: 'API',
    id: '6b563427555e5763fd0a592b66a228f5',
    children: [
      {
        title: "setAnimationListConfig",
        id: "d3a7c130c02858f85b4f5aeefbace16a",
        slot: "setAnimationListConfig",
      },
      {
        title: "animationObserver",
        id: "95a91c8ec24e423906f65de21b22f30f",
        slot: "animationObserver"
      }

    ]
  },
  {
    title: '参数类型说明',
    id: '45b8b997e05ab8787ef346bdb8921819',
    slot: 'AttributesType',
    explain: '函数参数类型说明'
  }
]
const setAnimationListConfigData = [
  {
    name:"animationList",
    explain:"动画配置列表 -- 均匀变化",
    type:[
      {
        value:"animationList",
        complexType:"查看参数类型说明"
      }
    ]
  },
  {
    name:"framesConfigs",
    explain:"动画帧配置列表",
    type:[
      {
        value:"framesConfigs",
        complexType:"查看参数类型说明"
      }
    ]
  },
  {
    name:"animationRange",
    explain:"动画帧范围",
    type:[
      {
        value:"animationRange",
        complexType:"查看参数类型说明"
      }
    ]
  }
]
const animationObserverData = [
  {
    name:"observerId",
    explain:"需要进行监听交叉操作的元素ID",
    type:"string"
  },
  {
    name:"elementIDList",
    explain:"所有需要操作的元素id",
    type:[
      {
        value:"Array",
        complexType:"string[]"
      }
    ]
  },
  {
    name:"currentPlatingElement",
    explain:"当前页面的id和根元素id(app)",
    type:[
      {
        value:"currentPlatingElement",
        complexType:"查看参数类型说明"
      }
    ]
  },
  {
    name:"animationList",
    explain:"需要操作的元素的配置",
    type:[
      {
        value:"animationList",
        complexType:"查看参数类型说明"
      }
    ]
  },
  {
    name:"animationCriticalList",
    explain:"需要操作的元素的临界值配置",
    type:[
      {
        value:"animationCriticalList",
        complexType:"查看参数类型说明"
      }
    ]
  }
]

const toPresentation = () => {
  router.push({ path:'/animationEffect/page1'});
}
</script>

<style scoped lang="scss">
.APIExplain{
  margin: 5px 0;
  color: #737373;
  font-size: 14px
}
</style>