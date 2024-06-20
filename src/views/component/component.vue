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
            :menuLeftStyle="{borderRight:'1px solid #ebeef5'}"
            startID="b3eda810068053e4189e00c61b000b72"
          >
          </xy-menu-left>
        </div>
      </template>
      <template #main>
        <div style="width: 100%;height: 100%;padding: 10px;overflow-y: auto;">
          <router-view></router-view>
        </div>
      </template>
    </xy-classic-page>
  </div>
</template>

<script lang="ts" setup>
import vueComponentString from "@/views/codeTest";
import { ref } from 'vue'
import{Tools} from "yanyan-ui"
import {useRouter}from "vue-router"
import tabBar from "@/components/tabBar.vue"
const menuItems = [
  {
    title: 'xuyan-ui组件预览',
    id: '63e2e6a19d2b7805d82eb20d8c21f615',
    icon: 'iconfont icon-donghua',
    children: [
      {
        title: 'xuyan-ui组件预览',
        id: 'b3eda810068053e4189e00c61b000b72',
        path: '/component/componentPreview',
      }
    ]
  },
]
const data = [
  {
    name: 'name',
    explain: '名称',
    type: 'string'
  },
  {
    name: 'age',
    explain: '年龄',
    type: [{value:'number'}, {value:'array',complexType:'object[]'}]
  },
  {
    name: 'address',
    explain: '地址',
    type: [{value:'address',complexType:"'beijing' | 'shanghai' | 'sichuan' | 'beijing' | 'shanghai' | 'sichuan'"}],
  }
]
const direction = ref('horizontal')
const router = useRouter();



const selectStyle = {
  backgroundColor: '#ecf5ff',
  color: '#409eff'
}

</script>

<style scoped lang="scss">
@import '../../../node_modules/yanyan-ui/assets/style/mixin';
@include scrollbar();
</style>