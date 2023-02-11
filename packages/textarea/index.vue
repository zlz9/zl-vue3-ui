<template>
  <div :class="zClass">
    <textarea
      name=""
      id=""
      :cols="cols"
      :rows="rows"
      :value="modelValue"
      @input="input"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
      @focus="focus"
      @blur="blur"
      :maxlength="maxlength"
      :style="zStyle"
    ></textarea>
    <div class="max-length-inline">{{ n }}/{{ props.maxlength }}</div>
  </div>
</template>
<script>
export default {
  name: "z-textarea",
};
</script>

<script setup>
import { computed, ref } from "vue";
const emit = defineEmits(["update:modelValue", "focus", "blur"]);
const n = ref(0);
const props = defineProps({
  modelValue: String,
  placeholder: String,
  disabled: Boolean,
  readonly: Boolean,
  maxlength: Number,
  resize: {
    type: Boolean,
    default: true,
  },
  rows: {
    type: Number,
    default: 4,
  },
  cols: {
    type: Number,
    default: 50,
  },
});
const input = (e) => {
  n.value = e.target.value.length;
  emit("update:modelValue", e.target.value);
  if (n.value > props.maxlength) {
    n.value = props.maxlength;
  }
};
const zClass = computed(() => {
  return {
    "z-textarea": true,
    "z-textarea-disabled": props.disabled,
  };
});
const focus = (e) => {
  emit("focus", e);
};
const blur = (e) => {
  emit("blur", e);
};
const zStyle = computed(() => {
  return {
    resize: props.resize ? "auto" : "none",
  };
});
</script>

<style lang="scss" scoped>
.z-textarea {
  width: auto;
  height: auto;
  display: inline-block;
  overflow: hidden;
  position: relative;
  textarea {
    padding: 8px 8px 10px 8px;
    outline: none;
    border-radius: 4px;
    font-size: 14px;
    font-family: auto;
    color: $color;
    &:focus {
      border: 1px solid $primary;
    }
  }
  textarea::placeholder {
    color: #c6c8cc;
  }
  .max-length-inline {
    line-height: 20px;
    font-size: 12px;
    text-align: right;
    padding: 0 10px;
    color: #6d9af4;
    position: absolute;
    bottom: 10px;
    widows: 100%;
    box-sizing: border-box;
  }
}
.z-textarea-disabled {
  textarea: {
    cursor: no-drop;
  }
}
</style>
