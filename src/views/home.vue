<template>
  <div>
    <p v-if="isMaximized">浏览器当前处于最大化状态</p>
    <p v-else>浏览器当前<em>不在</em>最大化状态</p>
    <p>浏览器最大高度{{ screenAvailHei }}</p>
    <p>浏览器最大宽度{{screenAvailWid}}</p>
    <p>浏览器当前高度{{winOuterHei}}</p>
    <p>浏览器当前宽度{{winOuterWid}}</p>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onBeforeUnmount } from 'vue';
  const isMaximized = ref(false);
  const winOuterHei = ref(0);
  const winOuterWid = ref(0);
  const screenAvailHei = ref(0);
  const screenAvailWid = ref(0);
  const init = ()=>{
  winOuterHei.value = window.outerHeight;
  winOuterWid.value = window.outerWidth;
  screenAvailHei.value = screen.availHeight;
  screenAvailWid.value = screen.availWidth;
}
  const ifMaximizing = ()=>{
    return window.outerHeight === screen.availHeight && window.outerWidth === screen.availWidth;
  }
  onMounted(() => {

    init();
    isMaximized.value = window.outerHeight === screen.availHeight && window.outerWidth === screen.availWidth
    window.addEventListener('resize', () => {
      isMaximized.value = ifMaximizing();
      init()
    })
  });
</script>

<style scoped>
/* Your styles here */
</style>
