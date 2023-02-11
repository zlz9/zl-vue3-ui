<template>
  <div :class="zClass">
    <input
      type="text"
      :value="modelValue"
      @input="input"
      :placeholder="placeholder"
      :disabled="disabled"
    />
    <span class="clear-icon" :style="clearStyle" @click="clearInput">
      <i>x</i></span
    >
  </div>
</template>
<script>
export default {
  name: "zInput",
};
</script>
<script setup>
import { computed } from "vue";
const props = defineProps({
  modelValue: String | Number, //传递的值
  placeholder: String, //默认提示
  disabled: Boolean, //是否禁用
  clearable: Boolean, //是否可清空
});
const emit = defineEmits(["update:modelValue"]);
const input = (e) => {
  emit("update:modelValue", e.target.value);
};
const zClass = computed(() => {
  return [
    "z-input",
    {
      "z-input-disabled": props.disabled,
    },
  ];
});
const clearStyle = computed(() => {
  return [
    {
      display: props.clearable ? (props.modelValue ? "block" : "none") : "none",
    },
  ];
});
const clearInput = () => {
  emit("update:modelValue", "");
};
</script>

<style lang="scss" scoped>
.z-input {
  display: inline-block;
  min-width: 250px;
  position: relative;
  input {
    outline: none;
    border: 1px solid $border;
    line-height: 1;
    padding: 10px 8px;
    width: 100%;
    font-size: 14px;
    color: $color;
    border-radius: 4px;
    transition: all 0.15s ease;
    &:focus {
      border-color: $success;
    }
  }
  .clear-icon {
    position: absolute;
    top: 7px;
    right: 3px;
    cursor: pointer;
  }
}

.z-input-disabled {
  input {
    cursor: no-drop;
  }
}
</style>
