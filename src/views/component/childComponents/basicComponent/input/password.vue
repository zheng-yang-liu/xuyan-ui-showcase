<template>
 <xy-input
   v-model="testValue"
   placeholder="请输入密码"
   password
 ></xy-input>
</template>

<script setup lang="ts">
import {ref} from "vue"
const testValue = ref<string>('')
</script>