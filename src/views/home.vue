<template>
  <div>
    <!--<calendar-->
    <!--  :currentMonth="state.currentMonth"-->
    <!--  :currentYear="state.currentYear"-->
    <!--  :startDayOfMonday="state.startDayOfMonday"-->
    <!--  @changeDate="changeDate"-->
    <!--&gt; </calendar>-->

    <xy-test>再见</xy-test>
  </div>
</template>

<script setup lang="ts">
import calendar from '@/components/calendar.vue'
import {reactive} from 'vue'
import {Tools} from "yanyan-ui"

const state = reactive({
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
  startDayOfMonday: true
})
const date = Tools.setDate(state.currentYear,state.currentMonth+1,1);
console.log(date,'date');
const changeDate = (dateInfor:dateListItem)=>{
  console.log(dateInfor,'date');
}
</script>

<style lang="scss">

</style>