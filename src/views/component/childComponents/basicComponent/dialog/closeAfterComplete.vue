<template>
  <div>
    <xy-button @click="visible=true">打开弹框</xy-button>
    <xy-dialog
      v-model:visible="visible"
      default-bottom
      :confirmCallback="confirmCallback"
    >
      这是对话框的内容
    </xy-dialog>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const visible = ref(false);
const confirmCallback = async () => {
  const waitFor = (ms: number) => new Promise(r => setTimeout(r, ms));
  await waitFor(3000);
  console.log("关闭弹框")
  return true
}
</script>

<style scoped lang="scss">

</style>