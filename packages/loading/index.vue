<template>
  <Teleport to="body">
    <div class="z-loading" v-if="isShow">
      <!-- 主体内容 -->

      <div class="z-loading-content">
        <slot name="content">
          <div class="loading"></div>
          <div class="title">加载中。。。</div>
        </slot>
      </div>
    </div>
  </Teleport>
</template>
<script>
export default {
  name: "zLoading",
};
</script>
<script setup>
import { ref } from "vue";
const props = defineProps({
  isShow: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.loading {
  position: relative;
  width: 40px;
  height: 40px;
}

.loading:before,
.loading:after {
  position: absolute;
  width: 10px;
  height: 10px;
  content: "";
  border-radius: 100%;
  background-color: #000;
}

.loading:before {
  transform: translate(0, 0);
  animation: ball-circle-before infinite 1.5s linear;
}

.loading:after {
  transform: translate(30px, 30px);
  animation: ball-circle-after infinite 1.5s linear;
}

@keyframes ball-circle-after {
  0% {
    transform: translate(30px, 30px);
  }

  25% {
    transform: translate(0, 30px);
  }

  50% {
    transform: translate(0, 0);
  }

  75% {
    transform: translate(30px, 0);
  }

  100% {
    transform: translate(30px, 30px);
  }
}

@keyframes ball-circle-before {
  0% {
    transform: translate(0, 0);
  }

  25% {
    transform: translate(30px, 0);
  }

  50% {
    transform: translate(30px, 30px);
  }

  75% {
    transform: translate(0, 30px);
  }

  100% {
    transform: translate(0, 0);
  }
}
.z-loading {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #bebaba;
  opacity: 0.3;
  .z-loading-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 200px;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
