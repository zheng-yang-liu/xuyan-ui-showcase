<template>
  <div class="list">
    <div class="item">
      <div>转换前
        <xy-button
          @click=active
        >开始转换
        </xy-button>
      </div>
      <xy-code-preview :code="formatData" language="JavaScript"></xy-code-preview>
    </div>
    <div class="item" v-if="showUpData">
      <div>转换后</div>
      <xy-code-preview :code="showUpdatedList" language="JavaScript"></xy-code-preview>
    </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Tools} from "yanyan-ui";
import {rawData} from "./rawData"
const formatData = JSON.stringify(rawData, null, 2)
const showUpData = ref(false)
const showUpdatedList = ref('')

const active = ()=>{
  const {updatedList,nextPos} = Tools.calculateItemDepth(
    rawData,
    10,
    0,
    0
  )
  showUpdatedList.value = JSON.stringify(updatedList, null, 2)
  showUpData.value = true
}
</script>

<style scoped lang="scss">
.list{
  display:flex;
  justify-content:space-between;
  .item{
    width:47%;
    div{
      height: 32px;
      line-height: 32px;
      text-align:center;
      margin-bottom:5px ;
      div{
        margin-left: 5px;
      }
    }
  }
}
</style>
