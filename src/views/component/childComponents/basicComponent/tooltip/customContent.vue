<template>
  <div>
    <xy-tooltip>
      <p>显示更多</p>
      <template #prompt>
        <div class="prompt">这是一段被隐藏的文字</div>
      </template>
    </xy-tooltip>
  </div>
</template>
<style scoped>
p{
  cursor: pointer;
  color: #1890ff;
}
.prompt{
  background-color: #fae7e7;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(234, 156, 156, 0.1);
}
</style>