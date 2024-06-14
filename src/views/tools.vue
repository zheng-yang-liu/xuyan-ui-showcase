<template>
  <div>
    <xy-classic-page v-model:direction="direction">
      <template #header>
        <el-button>home</el-button>
        <el-button @click="dddddddd">header2</el-button>
      </template>
      <template #aside>
        <div style="background-color: #3c9cff;width: 100%;height: 100%">

        </div>
      </template>
      <template #main>
        <div style="background-color: green;width: 100%;height: 100%">
          <router-view></router-view>
        </div>
      </template>
    </xy-classic-page>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const direction = ref('horizontal')
const router = useRouter();
const dianji = () => {
  console.log('dianji')
  router.push('/component/calendar');
}
const dddddddd = () => {
  direction.value = 'horizontal'
}
</script>