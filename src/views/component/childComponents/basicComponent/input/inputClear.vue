<template>
  <div>
    <xy-input
      clearable
      v-model="testValue"
      placeholder="请输入"
    ></xy-input>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
const testValue = ref<string>('')

</script>