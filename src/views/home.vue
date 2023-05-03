<template>
  <div class="home">
    <h2>home</h2>
    <!-- <rate :value="score" @update-rate="update" /> -->
    你的评分是 {{ score }}
    <rate v-model="score">随机评分</rate>
    <!-- <rate :model-value="score" @update:model-value="update" /> -->
    <div class="container"></div>
    <!-- <img src="@/assets/img/1.png" alt="" />
    <img src="@/assets/img/2.png" alt="" />
    <img src="@/assets/img/3.png" alt="" />
    <img src="@/assets/img/4.png" alt="" /> -->

    <!-- 图片懒加载方式 -->
    <div v-for="item in imgs" :key="item.id">
      <!-- <img :src="item.src" alt="" /> -->

      <!-- 1.方式一: 使用vue-lazyload插件 -->
      <!-- <img v-lazy="item.src" alt="" /> -->

      <!-- 2.方式二: IntersectionObserver 这个API 交叉观察器 以指令的方式 -->
      <!-- 3.方式三: 元素的offsetTop 也是以指令的方式 -->
      <img v-lazy :src="item.src" alt="" />
    </div>

    <lgl-tabs
      :selectedId="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
    ></lgl-tabs>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Rate from "@/components/Rate/Rate.vue";

import LglTabs from "@/components/lgl-tabs/lgl-tabs.vue";
const selectedId = ref(1);
const items = ref([
  { label: "热门" },
  { label: "服饰" },
  { label: "鞋包" },
  { label: "手机" },
  { label: "电脑" },
  { label: "食品" },
  { label: "男装" },
  { label: "女装" },
]);
const handleChange = (e) => {
  console.log("点击了选项卡", e);
};

const score = ref(3);
function update(num) {
  score.value = num;
}
// 在vite中拿动态的图片资源需要这样写 - 当资源直接来自于服务器是不需要这样写
// 但是在webpack中只要用require()包裹就好了
// new URL 创建一个新的url对象
// import.meta 对象包含关于当前模块的信息
const getAssetURL = (image) => {
  // 参数一: 相对路径
  // 参数二: 当前路径的URL
  return new URL(`../assets/img/${image}`, import.meta.url).href;
};
const imgs = ref([
  { id: 1, src: getAssetURL("1.png") },
  { id: 2, src: getAssetURL("2.png") },
  { id: 3, src: getAssetURL("3.png") },
  { id: 4, src: getAssetURL("4.png") },
]);
</script>

<style lang="less" scoped>
.home {
  .container {
    height: 100vh + 500px;
    background: rgba(23, 23, 23, 0.5);
  }
  img {
    width: 100%;
  }
}
</style>
