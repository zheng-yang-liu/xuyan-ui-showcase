<template>
  <div :style="{width:props.width+'px'}" class="calendar" :class="[props.showOutsideBorder?'showOutsideBorder':'']">
    <div class="calendarTop" v-if="showTop">
      <img src="@/assets/icon/previous.png" @click="previous"/>
      <div>{{state.currentYear}}年{{state.currentMonth+1}}月</div>
      <img src="@/assets/icon/next.png" @click="nextMonth"/>
      <div class="returnNow" @click="returnNow" v-show="!state.ifToday">
        <img src="@/assets/icon/retuan.png"/>
        <span>返回今天</span>
      </div>
    </div>
    <template v-for="item in calendarTitle" :key="item">
      <div class="calendarTitle"
        :style="{minHeight:props.minHeight/2+'px'}"
      >{{`周${item}`}}</div>
    </template>
    <template v-for="(item,index) in state.dateListItem" :key="index">
      <div class="calendarDay"
        :style="{minHeight:props.minHeight+'px'}"
        :class="[item.date === baseDate ? 'baseFontColor':'',
          item.date === state.currentDate&&item.ifCurrentMonth ? 'currentDate' : '',
          item.ifCurrentMonth?'':'noCurrentMonth']"
        @click="changeDate(item)"
      >
        <div>{{item.day}}</div>
        <div>{{item.content}}</div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
  import {reactive,onMounted ,watch,computed} from 'vue'

  const emit = defineEmits(['changeDate'])
  //转换时间格式 YYYY-MM-DD
  const setDate = (year:number, month:number, day:number) => {
    return `${year}-${month<10?`0${month}`:month}-${day<10?`0${day}`:day}`;
  }
  const props = defineProps({
    //是否区分不同月份
    ifDivisionMonth:{
      type: Boolean,
      default: true
    },
    //是否星期一开始
    startDayOfMonday:{
      type: Boolean,
      default: true
    },
    width:{
      type:Number,
      default: 500
    },
    minHeight:{
      type:Number,
      default: 80
    },
    dayContent:{
      type: Array as () => dayContent[],
      default: ()=>[]
    },
    showTop:{
      type: Boolean,
      default: true
    },
    showOutsideBorder:{
      type: Boolean,
      default: true
    }
  })
  type dayContent = {
    date: string,
    content: string
  }
  const state = reactive({
    dateListItem:[] as dateListItem[],
    currentYear: new Date().getFullYear(),
    currentMonth: new Date().getMonth(),
    currentDay: new Date().getDate(),
    currentDate:setDate(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()),
    ifToday: true,
    ifCurrentMonth: true
  })
  const baseDate = setDate(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate());

  const calendarTitle = computed(()=>{
    initCalendar();
    return props.startDayOfMonday ? ['一','二','三','四','五','六','日'] : ['日','一','二','三','四','五','六'];
  })

  /*
  *获取某日期所在月份的日历天数
  *@param year: 年份
  *@param month: 月份
  *@param startDayOfMonday: 是否以星期一开始，true为星期一开始，false为星期日开始
  *@return: 返回一个数组，包含当前月份的日历天数
  */
  function createCalendar(year:number, month:number, startDayOfMonday:boolean = true):dateListItem[] {
    //星期日开始还是星期一开始
    let startDayOfWeek = startDayOfMonday ? 1 : 0;
    let date = new Date(year, month, 1);
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let daysInPrevMonth = new Date(year, month, 0).getDate();
    let dayOfWeek = date.getDay();
    let prevMonthDays = dayOfWeek - startDayOfWeek;
    let nextMonthDays = 42 - prevMonthDays - daysInMonth;

    // 创建一个数组，用于存放日历天数
    let calendar:dateListItem[] = [];
    // 上一个月的最后几天
    for (let i = prevMonthDays; i > 0; i--) {
      calendar.push({ ifCurrentMonth: false, day: daysInPrevMonth - i + 1, date: setDate(year, month, daysInPrevMonth - i + 1)});
    }
    // 当前月份的天数
    for (let i = 1; i <= daysInMonth; i++) {
      calendar.push({ ifCurrentMonth: true, day: i, date: setDate(year, month + 1, i)});
    }
    // 下一个月的前几天
    for (let i = 1; i <= nextMonthDays; i++) {
      calendar.push({ ifCurrentMonth: false, day: i, date: setDate(year, month + 2, i)});
    }
    props.dayContent.forEach((item)=>{
      let index = calendar.findIndex((value)=>value.date === item.date);
      if(index !== -1){
        calendar[index].content = item.content;
      }
    })
    return calendar;
  }
  const initCalendar = () =>{
    state.dateListItem = createCalendar(state.currentYear,state.currentMonth,props.startDayOfMonday)
  }
  watch(()=>[state.currentYear,state.currentMonth],()=>{
    initCalendar();
  })
  const changeDate = (item:dateListItem) =>{
    if(!item.ifCurrentMonth)return;
    state.currentDate = item.date;
    emit('changeDate',item);
    if(item.date !== baseDate){
      state.ifToday = false;
    }else{
      state.ifToday = true;
    }
  }
  const returnNow = () => {
    state.currentDate = baseDate;
    state.ifToday = true;
    if(!state.ifCurrentMonth){
      state.currentYear = new Date().getFullYear();
      state.currentMonth = new Date().getMonth();
      state.ifCurrentMonth = true;
      initCalendar();
    }
  }
  const previous = () =>{
    if(state.currentMonth === 0){
      state.currentYear -= 1;
      state.currentMonth = 11;
    }else{
      state.currentMonth -= 1;
    }
    state.ifToday = false;
    state.ifCurrentMonth = false;
    initCalendar();
  }
  const nextMonth = () =>{
    if (state.currentMonth === 11) {
      state.currentYear += 1;
      state.currentMonth = 0;
    } else {
      state.currentMonth += 1;
    }
    state.ifToday = false;
    state.ifCurrentMonth = false;
    initCalendar();
  }

  onMounted(()=>{
    initCalendar();
  })
</script>

<style lang="scss" scoped>
  $iconSize:20px;
  .showOutsideBorder{
    border: 1px solid #ccc;
  }
  .calendar{
    display:grid;
    grid-template-columns: repeat(7,1fr);
    .calendarTop{
      @include flexCenter;
      grid-column-start: span 7;
      min-height: 50px;
      border-bottom: 1px solid #ccc;
      position:relative;
      .returnNow{
        @include flexCenter;
        position: absolute;
        right: 10px;
        &:hover{
          cursor: pointer;
        }
      }
      img{
        width: $iconSize;
        height: $iconSize;
        padding : 0 5px;
      }
    }
    .calendarTitle{
      @include flexCenter;
    }
    .calendarDay{
      text-align: center;
      padding: 10px;
      box-sizing: border-box;
      &:hover{
        cursor: pointer;
      }
    }
    .baseFontColor{
      color:#3c9cff;
    }
    .currentDate{
      background-color: #3c9cff;
      color: #fff;
      border-radius:10px;
    }
    .noCurrentMonth{
      color: #ccc;
    }
  }
</style>