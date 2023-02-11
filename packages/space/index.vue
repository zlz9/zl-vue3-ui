<template>
  <div class="z-space"></div>
</template>

<script>
import { useSlots, h, ref, computed } from "vue";
export default {
  name: "z-space",
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Array,
      default: [20, 10],
    },
  },
  setup(props) {
    const $slots = useSlots();
    const slotList = ref([]);
    const zStyle = computed(() => {
      return {
        display: props.inline ? "inline-flex" : "flex",
        gap: props.inline
          ? `${props.size[0]}px`
          : `${props.size[0]}px.${props.size[1]}px`,
        "flex-direction": props.inline ? "inherit" : "colum",
        "flex-wrap": "wrap",
        "algin-items": "center",
        with: "fit-content",
      };
    });
    $slots.default().forEach((item, index) => {
      slotList.value.push(
        h(
          "div",
          {
            className: "z-space-item",
            style: "width:fit-content",
          },
          item
        )
      );
    });
    return () => [
      h(
        "div",
        {
          className: "z-space",
          style: zStyle.value,
        },
        slotList.value
      ),
    ];
    console.log(slotList.value);
  },
};
</script>

<style lang="scss" scoped>
.z-space {
  display: inline-flex;
  gap: 10px 10px;
}
</style>
