<template>
  <div class="about">
    <h2>mockjs</h2>
    <button @click="getData">获取商品数据</button>
    <button @click="addData">添加商品数据</button>
    <button @click="getDataById(7)">根据id获取商品</button>
  </div>
</template>

<script setup>
import axios from "axios";
import GlRequest from "@/service/index";
const getData = async () => {
  const res = await GlRequest.get("/test/goodslist");
  console.log(res.data);
};

const addData = async () => {
  const res = await axios.post("/test/addgoods", {
    name: "魅族",
    price: 3999,
    count: 999,
    img: "",
  });
  console.log(res.data);
};

const getDataById = async (id) => {
  const res = await axios.get("/test/getgoods/${id}");
  console.log(res.data);
};
</script>

<style lang="less" scoped></style>
