<template>
  <div class="app">
    <router-link to="/home"><button>首页</button></router-link>
    <router-link to="/about"><button>关于</button></router-link>
    <router-link to="/cps"><button>开发组件</button></router-link>
    <router-link to="/cps2"><button>开发组件2</button></router-link>
    <router-link to="/propro"><button>excel表格2</button></router-link>
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="less" scoped></style>
