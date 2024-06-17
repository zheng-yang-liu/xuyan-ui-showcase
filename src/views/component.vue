<template>
  <div>
    <xy-classic-page v-model:direction="direction">
      <template #header>
        <tabBar></tabBar>
      </template>
      <template #aside>
        <div style="width: 100%;height: 100%">
          <xy-menu-left
            :menuItems="menuItems"
            :expandAll="true"
            :defaultStyle="false"
            :select-style="selectStyle"
          >
          </xy-menu-left>
        </div>
      </template>
      <template #main>
        <div style="width: 100%;height: 100%">
          <xy-effect-preview :code="codeText">
            <template #effect>
              <el-button @click="dddddddd">按钮</el-button>
            </template>
          </xy-effect-preview>
          <router-view></router-view>
        </div>
      </template>
    </xy-classic-page>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import{Tools} from "yanyan-ui"
import {useRouter}from "vue-router"
import tabBar from "@/components/tabBar.vue"
import hljs from "highlight.js";
const menuItems = [
  {
    title: '工具函数',
    id: '2',
    icon: 'iconfont icon-donghua',
    children: [
      {
        title: '图标动画',
        icon: 'iconfont icon-kuaidiyuan-xianxing',
        id: '2-1',
        children: [
          {
            title: 'svg动画',
            id: '2-1-1',
            icon: 'iconfont icon-dian',
            children: [
              {
                title: 'svg描边',
                submenuIndent: '10',
                id: '2-1-1-1',
                icon: 'iconfont icon-kuaidiyuan-xianxing',
                children: [
                  {
                    title: 'svg白的描边',
                    submenuIndent: '20',
                    id: '2-1-1-1-1',
                    icon: 'iconfont icon-dian',
                    path:"/component/calendar"
                  },
                  {
                    title: 'svg黑的描边',
                    path: '/home',
                    icon: 'iconfont icon-dian',
                    id: '2-1-1-1-2',
                  }
                ]
              },
              {
                title: 'svg填充',
                icon: 'iconfont icon-kuaidiyuan-xianxing',
                id: '2-1-1-2',
                children: [
                  {
                    title: 'svg白的填充',
                    id: '2-1-1-2-1',
                    icon: 'iconfont icon-dian',
                    path: '/system/user/list',
                  },
                  {
                    title: 'svg黑的填充',
                    id: '2-1-1-2-2',
                    icon: 'iconfont icon-dian',
                    path: '/system/user/list',
                  }
                ]
              }
            ]
          },
          {
            title: 'canvas动画',
            path: '/system/user/add',
            icon: 'iconfont icon-dian',
            id: '2-1-2',
          }
        ]
      },
      {
        title: '防抖函数',
        icon: 'iconfont icon-kuaidiyuan-xianxing',
        id: '2-2',
        children: [
          {
            title: '节流',
            path: '/system/role/list',
            icon: 'iconfont icon-dian',
            id: '2-2-1',
          },
          {
            title: '防抖',
            path: '/system/role/add',
            icon: 'iconfont icon-dian',
            id: '2-2-2',
          }
        ]
      },
      {
        title: '深拷贝',
        path: '/system/menu',
        id: '2-3',
        icon: 'iconfont icon-kuaidiyuan-xianxing',
      },

    ]
  },
  {
    title: '数据类型',
    id:'3',
    icon: 'iconfont icon-kuaidiyuan-xianxing',
    children: [
      {
        title: '基本数据类型',
        id: '3-1',
        icon: 'iconfont icon-kuaidiyuan-xianxing',
        children: [
          {
            title: 'string',
            id: '3-1-1',
            path: '/system/user/list',
            icon: 'iconfont icon-dian'
          },
          {
            title: 'number',
            path: '/system/user/add',
            icon: 'iconfont icon-dian'
          }
        ]
      },
      {
        title: 'object',
        path: '/system/menu',
        icon: 'iconfont icon-kuaidiyuan-xianxing',
        id: '3-2',
      }
    ]
  },
]
const direction = ref('horizontal')
const router = useRouter();

const dianji = () => {
  router.push("/component/calendar")
}
const dddddddd = () => {
  highlightCode()
}
const highlightCode = () => {
  navigator.clipboard.writeText('props.code')
    .then(() => {
      Tools.showMsg('success', '代码已复制')
    })
    .catch(err => {
      Tools.showMsg('error', '复制失败'+err)
    });
};
const selectStyle = {
  backgroundColor: '#ecf5ff',
  color: '#409eff'
}
const codeText =
`<p></p>`
</script>

<style scoped lang="scss">

</style>