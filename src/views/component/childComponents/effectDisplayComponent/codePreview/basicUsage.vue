<template>
  <div>
    <xy-code-preview :code="code" ></xy-code-preview>
  </div>
</template>

<script setup lang="ts">
const code = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div class="heart"></div>
</body>
</html>`

</script>

<style scoped lang="scss">

</style>