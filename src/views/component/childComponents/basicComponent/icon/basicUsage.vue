<template>
  <xy-icon icon="tianjia"></xy-icon>
  <div style="padding: 10px 0">自定义样式</div>
  <xy-icon icon="tianjia" :iconStyle="iconStyle"></xy-icon>
</template>

<script setup lang="ts">
const iconStyle = {
  fontSize: '20px',
  color: '#39b3ff'
}

</script>