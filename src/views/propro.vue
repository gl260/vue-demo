<template>
  <div class="propro">
    <h2>xlsx</h2>
    <el-button @click="exportData">导出Excel</el-button>
    <!-- <el-upload>导入文件Excel</el-upload> -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script setup>
// import xlsx from "xlsx"; // 报错 没有默认导出
// import * as xlsx from "xlsx";
import jsonToExcel from "@/utils/jsonToExcel";
const tableData = [
  {
    date: "2016-05-03",
    name: "大大怪将军",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "小小怪下士",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "粗心超人",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "开行超人",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const header = {
  date: "时间",
  name: "名字",
  address: "地点",
};

const exportData = () => {
  console.log("导出数据");
  jsonToExcel(tableData, header);
};

const list = [
  {
    id: 1001,
    parentId: 0,
    name: "中国",
  },
  {
    id: 1002,
    parentId: 1001,
    name: "湖南",
  },
  {
    id: 1003,
    parentId: 1001,
    name: "广东",
  },
  {
    id: 1004,
    parentId: 1003,
    name: "广州市",
  },
  {
    id: 1005,
    parentId: 1003,
    name: "佛山市",
  },
  {
    id: 1006,
    parentId: 1002,
    name: "长沙市",
  },
  {
    id: 1007,
    parentId: 1002,
    name: "湘潭市",
  },
  {
    id: 1008,
    parentId: 1004,
    name: "天河区",
  },
  {
    id: 1009,
    parentId: 1005,
    name: "顺德区",
  },
];
// console.log(list);

const listToTree = (data) => {
  let obj = {};
  data.map((item) => {
    obj[item.id] = item;
  });
  // console.log(obj);
  let res = [];

  data.map((item) => {
    debugger;
    const parent = obj[item.parentId];
    // console.log(parent);

    if (parent) {
      // 判断parent中有没有children 没有则创建 有就直接把item push到children里
      parent.children = parent.children || [];
      parent.children.push(item);
    } else {
      res.push(item);
    }
    console.log("res", res);
  });

  return res;
};
listToTree(list);
</script>

<style lang="less" scoped></style>
