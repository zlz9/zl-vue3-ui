<template>
  <div class="zl-container">
    <ZVList @indexChange="handleIndexChange" :dataLength="data.list.length">
      <div class="v-list-item" v-for="item in lastData" :key="item">
        {{ item }}
      </div>
    </ZVList>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from "vue";
const startIndex = ref();
const endIndex = ref();
// 原始数据
const data = reactive({ list: [] });

for (let i = 0; i < 200; i++) {
  data.list.push(i);
}

// 索引改变
const handleIndexChange = (start, end) => {
  startIndex.value = start;
  endIndex.value = end;
};

// 截取显示的数据
const lastData = computed(() => {
  return data.list.slice(startIndex.value, endIndex.value);
});
</script>

<style lang="scss" scoped>
.zl-container {
  width: 35vw;
  height: 90vh;
  border: 1px solid red;
  overflow: hidden;
}
.v-list-item {
  height: 160px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding-left: 50px;
}
</style>
