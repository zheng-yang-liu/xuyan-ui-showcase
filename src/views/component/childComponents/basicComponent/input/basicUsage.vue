<template>
  <div>
    <xy-input v-model="testValue" placeholder="请输入内容"></xy-input>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue";
const testValue = ref<string>('');
</script>

<style scoped lang="scss">

</style>