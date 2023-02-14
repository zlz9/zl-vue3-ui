<template>
  <div>
    输入的值:{{ text }}
    <br />
    <z-input v-model="text" placeholder="请输入"></z-input>
  </div>
  <br />
  <div>
    禁用状态
    <br />
    <z-input v-model="text" placeholder="请输入" disabled></z-input>
  </div>
</template>

<script setup>
import { ref } from "vue";
const text = ref("");
</script>

<style lang="scss" scoped></style>
