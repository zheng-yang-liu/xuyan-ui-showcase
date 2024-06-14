<template>
  <div>
    <xy-calendar
      :currentMonth="state.currentMonth"
      :currentYear="state.currentYear"
      :startDayOfMonday="state.startDayOfMonday"
      @changeDate="changeDate"
    > </xy-calendar>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'
import {Tools} from "yanyan-ui"


const state = reactive({
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
  startDayOfMonday: true,
  diaVisible:''
})
const date = Tools.convertTimeFormat("YYYY-MM-DD", new Date());

const changeDate = (dateInfo:any)=>{

}
import {useCounterStore}from "@/stores/counter"
const user = useCounterStore();

user.increment();

</script>

<style lang="scss">

</style>