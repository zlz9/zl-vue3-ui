<template>
  <div>
    <zSearch
      @search="search"
      :listData="listData"
      :hotList="hotList"
      @checkTitle="checkTitle"
    >
    </zSearch>
    <z-select></z-select>
  </div>
</template>

<script setup>
import { zSearch } from "../packages";
import { reactive } from "vue";
const search = (title) => {
  console.log(title);
};
const checkTitle = (item) => {
  console.log(item);
};
const listData = reactive([
  "斗罗大陆",
  "斗破苍穹",
  "吞噬星空",
  "凡人修仙传",
  "一念永恒",
]);
const hotList = reactive([
  "斗罗大陆",
  "斗破苍穹",
  "吞噬星空",
  "凡人修仙传",
  "一念永恒",
  "完美世界",
  "鬼灭之刃",
  "间谍过家家",
  "武动乾坤",
  "神印王座",
]); //前十
</script>

<style lang="scss" scoped></style>
