<template>
  <div>
    <xy-button @click="action">获取2~15之间的随机整数</xy-button>
    {{random}}
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {Tools} from "yanyan-ui";
const random = ref(0);
const action = () =>{
  random.value = Tools.randomInterval(2, 15);
}
</script>