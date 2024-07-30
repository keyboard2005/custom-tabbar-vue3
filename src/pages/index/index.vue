<template>
  <view class="index">
    <text>共10条数据</text>
    <text v-for="item in 10">我是首页！aaasdsa {{ item }}</text>
  </view>
</template>

<script>
export default {
  name: 'Index'
}
</script>


<style>
.index{
  width: 100%;
  height: 100vh;
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}
</style>