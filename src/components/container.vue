<template>
  <div class="container">
    <h2>container</h2>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
/* 用 include 语法去使用 Mixin 注册的代码块 */
@include b(container) {
}
</style>
