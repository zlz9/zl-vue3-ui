<template>
  <button :class="tClass" :disabled="disable">
    <slot>按钮</slot>
  </button>
</template>
<script>
export default {
  name: "zButton",
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  disable: Boolean,
});
const tClass = computed(() => {
  return [
    `z-button`,
    `z-button-${props.type}`,
    props.disable ? "z-button-disable" : "",
  ];
});
</script>

<style lang="scss" scoped>
.z-button {
  border: 0;
  padding: 12px 24px;
  outline: none;
  background: none;
  line-height: 1;
  font-size: 14px;
}
button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.z-button {
  padding: 12px 24px;
  border-radius: 4px;
  border: 1px solid $default;
  &:hover {
    background-color: $defalut-hover;
  }
}
.z-button-default {
  background: $default;
  &:hover {
    background-color: $defalut-hover;
  }
}
.z-button-success {
  background: $success;
  &:hover {
    background-color: $success-hover;
  }
}

.z-button-warning {
  background: $warning;
  &:hover {
    background-color: $warning-hover;
  }
}

.z-button-error {
  background: $error;
  &:hover {
    background-color: $error-hover;
  }
}
.z-button-disable {
  cursor: no-drop;
  opacity: 0.8;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
}
</style>
