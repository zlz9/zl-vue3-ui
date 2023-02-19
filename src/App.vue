<template>
  <div>
    <zSearch
      @search="search"
      :listData="listData"
      :hotList="hotList"
      @checkTitle="checkTitle"
    >
    </zSearch>
  </div>
</template>

<script setup>
import { zSearch } from "../packages";
import { reactive } from "vue";
// 搜索触发的函数
const search = (title) => {
  console.log(title);
};
// 点击tag标签和热搜榜触发的函数
const checkTitle = (item) => {
  console.log(item);
};
// 搜索栏滚动数据
const listData = reactive([
  "进击的巨人",
  "无职转生",
  "jojo的奇妙冒险",
  "黑色五叶草",
  "名侦探柯南",
]);
//top前十
const hotList = reactive([
  "进击的巨人",
  "东京美食家",
  "死神",
  "海贼王",
  "火影忍者",
  "电锯人",
  "至两千年前的你",
  "想要成为影之实力者",
  "不死者之王",
  "咒术回战",
]);
</script>

<style lang="scss" scoped></style>
