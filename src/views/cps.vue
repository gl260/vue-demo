<template>
  <div class="cps">
    <h2>cps</h2>

    <lgl-tabs :selectedId="selectedId" :items="items" @change="handleChange"> </lgl-tabs>

    <!-- <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="时间" width="180" />
      <el-table-column prop="name" label="名字" width="180" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="handle" label="操作">
        <template #default="scope">
          <el-button size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table> -->

    <lgl-table
      :tableData="tableData"
      :columns="columns"
      @edit="editBtn"
      @delete="deleteBtn"
    ></lgl-table>

    <el-form v-if="show" :model="formData" ref="formRef">
      <el-form-item label="时间" prop="date">
        <el-input v-model="formData.date"></el-input>
      </el-form-item>
      <el-form-item label="名字" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="formData.address"></el-input>
      </el-form-item>
      <el-button @click="handleResetClick">重置</el-button>
    </el-form>

    <el-button type="primary">弹出form表单</el-button>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

import LglTabs from "@/components/lgl-tabs/lgl-tabs.vue";
import LglTable from "@/components/lgl-table/lgl-table.vue";

const selectedId = ref(1);
const formRef = ref();
const handleResetClick = () => {
  formRef.value?.resetFields();
};
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
// 子组件传过来的index
const handleChange = (e) => {
  console.log("点击了选项卡", e);
};
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
const columns = ref([
  { id: 1, prop: "date", title: "时间" },
  { id: 2, prop: "name", title: "名字" },
  { id: 3, prop: "address", title: "地址" },
  {
    id: 3,
    prop: "hacdle",
    title: "操作",
    action: true,
    actions: [
      { fnName: "delete", title: "删除" },
      { fnName: "edit", title: "编辑" },
    ],
  },
]);

const deleteBtn = (index, row) => {
  console.log(index, row);
};
const show = ref(false);
const formData = reactive({
  date: "",
  name: "",
  address: "",
});
const editBtn = (index, row) => {
  console.log(index, row);
  show.value = true;
  for (const key in formData) {
    console.log(key); // date name address
    formData[key] = row[key];
  }
};
</script>

<style lang="less" scoped></style>
