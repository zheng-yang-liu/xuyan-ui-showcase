<template>
  <div>
    <xy-classic-page v-model:direction="direction">
      <template #header>
        <el-button @click="dianji">hom99999e</el-button>
        <el-button @click="dddddddd">head99999er2</el-button>
      </template>
      <template #aside>
        <div style="background-color: #3c9cff;width: 100%;height: 100%">
          <i class="iconfont icon-shouye"></i>
        </div>
      </template>
      <template #main>
        <div style="background-color: #ececec;width: 100%;height: 100%">
          <xy-effect-preview :code="codeText">
            <template #effect>
              <el-button>按钮</el-button>
            </template>
          </xy-effect-preview>
        </div>
      </template>
    </xy-classic-page>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const direction = ref('horizontal')
const dianji = () => {
  direction.value = 'vertical'
}
const dddddddd = () => {
  direction.value = 'horizontal'
}
const codeText =
`<p></p>`
</script>