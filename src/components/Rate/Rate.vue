<template>
  <div :style="fontStyle">
    <slot></slot>
    <!-- 建议鼠标事件改为 mouseenter/mouseleave 不然会有mouseout的冒泡事件，每划过一个星星执行一次mouseout -->
    <div class="rate" @mouseout="mouseOut">
      <span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>

      <span class="hollow" :style="fontWidth">
        <span @click="onRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
      </span>
      <span></span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, watch, computed, ref } from "vue";
const props = defineProps({
  modelValue: {
    type: Number,
    default: 3,
  },
  theme: {
    type: String,
    default: "orange",
  },
});
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value));

// 宽度
let width = ref(props.modelValue);
// mouseout 指针不再包含在这个元素或其子元素中时
function mouseOut() {
  width.value = props.modelValue;
}
// mouseover 鼠标移入元素
function mouseOver(i) {
  width.value = i;
}
const fontWidth = computed(() => `width:${width.value}em;`);
// let emits = defineEmits(["update-rate"]);
let emits = defineEmits(["update:modelValue"]);
function onRate(num) {
  // emits("update-rate", num);
  emits("update:modelValue", num);
}
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

<style lang="less" scoped>
.rate {
  position: relative;
  display: inline-block;
  font-size: 2em;
}
.rate > span.hollow {
  position: absolute;
  display: inline-block;
  top: 0;
  left: 0;
  width: 0;
  overflow: hidden;
}
</style>
