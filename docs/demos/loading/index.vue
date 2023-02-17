<template>
  <el-button @click="show">loadinng</el-button>
  <div>
    <z-loading :isShow="showLoading">
      <!-- <template #content>
          <div class="loading"></div>
        </template> -->
    </z-loading>
  </div>
</template>

<script setup>
import { ref } from "vue";
const showLoading = ref(false);
const show = () => {
  showLoading.value = !showLoading.value;
  setTimeout(() => {
    showLoading.value = false;
    2;
  }, 2000);
};
</script>

<style lang="scss" scoped>
.loading {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: #000;

  animation: ball-scale infinite linear 0.75s;
}

@keyframes ball-scale {
  0% {
    transform: scale(0.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
