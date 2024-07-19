<template>
  <div class="list">
    <div class="item"></div>
    <div class="item"></div>
  </div>
</template>

<script setup lang="ts">
const magString = "magString"
</script>

<style scoped lang="scss">
.list{
  width: 60%;
  height: 500px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .item{
    width: 400px;
    height: 100px;
    background-color: white;
  }
}
</style>