<template>
  <div>
    <xy-input v-model="testValue" placeholder="请输入内容"></xy-input>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const testValue = ref<string>('');
</script>