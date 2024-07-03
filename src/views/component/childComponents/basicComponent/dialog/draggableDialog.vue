<template>
  <div>
    <xy-button @click="visible=true" style="margin-right: 10px">存在范围限制</xy-button>
    <xy-button @click="visibleDragRange=true">不存在范围限制</xy-button>
    <xy-dialog
      :drag="true"
      default-bottom
      v-model:visible="visible"
    >
      拖拽存在范围限制
    </xy-dialog>

    <xy-dialog
      :drag="true"
      :drag-range="false"
      default-bottom
      v-model:visible="visibleDragRange"
    >
      拖拽不存在范围限制
    </xy-dialog>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
const visible = ref(false);
const visibleDragRange = ref(false);
</script>

<style scoped lang="scss">

</style>