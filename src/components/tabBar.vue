<template>
  <div class="tabBar">
    <div class="logo" @click="goIndex">
      <img src="@/assets/logo.png">
      <p>xuyan</p>
    </div>
    <div class="tab">
      <template v-for="(item,index) in tabList">
        <div :class="{'currentIndex':currentIndex===index}">{{item.name}}</div>
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import{useRouter}from"vue-router"
const props = defineProps({
  currentIndex:{
    type:Number,
    default:1
  }
})
const tabList = [
  {name:'指南',path:''},
  {name:'组件',path:'/component'},
  {name:'工具',path:''}
]
const router = useRouter()

const goIndex = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
$logoSize: 20px;
.tabBar{
  padding: 0 20px;
  width:100%;
  height:100%;
  @include display-flex(center);
  border-bottom: 1px solid #dedfe3;
  .logo{
    cursor:pointer;
   img{
     width:$logoSize;
     height:$logoSize;
   }
    p{
      float: right;
      font-size: 20px;
      line-height: 20px;
      text-align: center;
      margin-left: 6px;
      color:#409eff;
    }
  }
  .tab{
    margin-left: auto;
    @include display-flex(center);
    div{
      margin: 0 10px;
      cursor: pointer;
    }
    div:hover{
      color: #3c9cff;
    }
    .currentIndex{
      color: #3c9cff;
    }
  }
}
</style>
