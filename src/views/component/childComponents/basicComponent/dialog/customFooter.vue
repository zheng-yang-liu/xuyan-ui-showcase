<template>
  <div>
    <xy-button @click="visible=true">打开弹框</xy-button>
    <xy-dialog v-model:visible="visible">
      这是对话框的内容
      <template #footer>
        <xy-button @click="visible=false">取消</xy-button>
        <xy-button type="primary" @click="visible=false" style="margin-left: 10px">确定</xy-button>
      </template>
    </xy-dialog>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const visible = ref(false);
</script>

<style scoped lang="scss">

</style>