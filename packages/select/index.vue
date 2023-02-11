<template>
  <div class="z-select">
    <input
      type="text"
      readonly
      @focus="focus"
      v-clickOutSide
      :value="selectValue"
    />
    <div class="z-position-box" v-if="positonShow">
      <li
        v-for="(item, index) in options"
        :key="index"
        @click="change(item)"
        :class="{ 'item-disabled-li': item.disabled }"
      >
        {{ item.label }}
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: "z-select",
};
</script>
<script setup>
import { ref } from "vue";
const positonShow = ref(false);
const selectValue = ref("");
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
    disabled: Boolean,
  },
});
const focus = () => {};
const vClickOutSide = {
  beforeMount(el) {
    let hander = (e) => {
      if (!props.options.disabled) {
        if (el.contains(e.target)) {
          positonShow.value = true;
        } else {
          positonShow.value = false;
        }
      }
    };
    document.addEventListener("click", hander);
  },
};
const change = (item) => {
  if (!item.disabled) {
    selectValue.value = item.lable;
    positonShow.value = false;
  }
};
</script>

<style lang="scss" scoped>
.z-select {
  display: inline-block;
  height: 40px;
  position: relative;
  input {
    border: 1px solid $border;
    padding: 8px 10px;
    outline: none;
    width: 100%;
    box-sizing: border-box;
  }
  .z-position-box {
    width: 100%;
    height: auto;
    overflow: hidden;
    position: absolute;
    top: 42px;
    border: 1px solid $border;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    li {
      list-style: none;
      line-height: 40px;
      padding: 0 10px;
      box-sizing: border-box;
      cursor: pointer;
      &:hover {
        background: #f0f0f0;
      }
    }
    li.item-disabled-li {
      cursor: no-drop;
      color: #808080;
      background: #f0f0f0;
    }
  }
}
</style>
