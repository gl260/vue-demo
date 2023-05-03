<template>
  <div class="lgl-tabs">
    <div v-for="(item, index) in items" :key="index" @click="tabBtn(index)">
      {{ item.label }}
    </div>
  </div>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  selectedId: {
    type: [Number, String],
    default: "1",
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["change"]);
const tabBtn = (index) => {
  emit("change", index);
};
</script>

<style lang="less" scoped>
.lgl-tabs {
  display: flex;
}
.lgl-tabs > div {
  padding: 8px 16px;
}
</style>
