<template>
  <div class="rate" :style="fontStyle">
    {{ rate }}
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  value: {
    type: Number,
    default: 0,
  },
  theme: {
    type: String,
    default: "orange",
  },
});

let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value));

// 支持主题 - 黑 百 红 橙 黄 绿 蓝
const themeObj = {
  black: "#000",
  white: "#fff",
  red: "#f5222d",
  orange: "#fa541c",
  yellow: "#fadb14",
  green: "#73d13d",
  blue: "#40a9ff",
};
const fontStyle = computed(() => {
  return `color: ${themeObj[props.theme]}`;
});
</script>

<style lang="less" scoped></style>
