<template>
  <div>
    <xy-button @click="actionGroup">开始分类</xy-button>
    通过控制台查看结果
  </div>
</template>

<script setup lang="ts">
import {Tools} from "yanyan-ui";
const arrayList = [
  {
    name:"张三",
    age:18,
    address:"北京"
  },
  {
    name:"李四",
    age:20,
    address:"上海"
  },
  {
    name:"王五",
    age:17,
    address:"北京"
  },
  {
    name:"赵六",
    age:20,
    address:"上海"
  },
  {
    name:"孙七",
    age:18,
    address:"北京"
  },
  {
    name:"周八",
    age:20,
    address:"上海"
  },
  {
    name:"吴九",
    age:16,
    address:"北京"
  },
  {
    name:"郑十",
    age:20,
    address:"上海"
  }
]
const actionGroup = ()=>{
  console.log('原始数据\n',arrayList);
  console.log('按照年龄分组\n',Tools.groupBy(arrayList,'age'));
  console.log('年龄小于18\n',Tools.groupBy(arrayList,(item:any)=>item.age<18));
  //返回值类型
  //return:{
  // true:Array<any>,满足条件的元素
  // false:Array<any>不满足条件的元素
  // }|{key:Array<any>...}返回值为对象时，key值为分组的键值
}
</script>