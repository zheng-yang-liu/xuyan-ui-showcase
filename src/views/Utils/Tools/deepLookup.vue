<template>
  <div class="list">
    <div class="item">
      <div>原始数据
        <xy-button
          @click=active
        >开始搜索
        </xy-button>
      </div>
      <xy-code-preview code="原始数据参考calculateItemDepth的原始数据" language="JavaScript"></xy-code-preview>
    </div>
    <div class="item" v-if="showUpData">
      <div>搜索到的数据 <em><code>条件:address===长安区</code></em></div>
      <xy-code-preview :code="showUpdatedList" language="JavaScript"></xy-code-preview>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Tools} from "yanyan-ui";
import {rawData} from "./rawData"
const showUpData = ref(false)
const showUpdatedList = ref('')

const active = ()=>{
  const lookup = Tools.deepLookup(rawData,(item:any)=>item.address==="长安区")
  showUpdatedList.value = JSON.stringify(lookup, null, 2)
  showUpData.value = true
}
</script>

<style scoped lang="scss">
.list{
  display: grid;
  grid-template-columns:repeat(auto-fill,minmax(400px,1fr));
  .item{
    width:100%;
    div{
      max-width: 400px;
      height: 32px;
      line-height: 32px;
      text-align:center;
      margin-bottom:5px ;
      div{
        margin-left: 5px;
      }
    }
    ::v-deep(pre){
       max-width: 400px;
    }
  }
}
</style>
