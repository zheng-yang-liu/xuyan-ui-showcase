<template>
  <div class="basicUsage">
    <xy-button>default</xy-button>
    <xy-button type="success">success</xy-button>
    <xy-button type="info">info</xy-button>
    <xy-button type="warning">warning</xy-button>
    <xy-button type="danger">danger</xy-button>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.basicUsage{
  width: 500px;
  display: flex;
  justify-content: space-between;
}
</style>