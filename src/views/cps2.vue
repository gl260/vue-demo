<template>
  <div class="cps2">
    <h2>cps2</h2>

    <lgl-form :data="formData"></lgl-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import LglForm from "@/components/lgl-form/lgl-form.vue";
const formData = reactive({
  width: "120px",
  items: [
    { type: "Input", label: "活动名称", prop: "name", width: "240px" },
    { type: "Input", label: "活动地点", prop: "address" },
    {
      type: "Select",
      label: "活动区域",
      prop: "region",
      placeholder: "请选择活动区域",
      options: [
        { label: "乒乓球", value: "乒乓球1" },
        { label: "羽毛球", value: "羽毛球1" },
        { label: "篮球", value: "篮球1" },
      ],
    },
    {
      type: "Switch",
      label: "是否送达",
      prop: "delivery",
    },
    {
      type: "Checkbox",
      label: "活动性质",
      prop: "type",
      options: [
        { label: "美食线上活动", value: "1" },
        { label: "线下主题活动", value: "2" },
        { label: "单纯品牌曝光", value: "3" },
      ],
    },
    {
      type: "Radio",
      label: "特殊资源",
      prop: "resource",
      options: [
        { label: "线上品牌赞助商", value: "1" },
        { label: "线下场地免费", value: "2" },
      ],
    },
    { type: "Textarea", label: "活动形式", prop: "desc", placeholder: "请输入活动形式" },
    { type: "Data", label: "活动日期", prop: "data1", placeholder: "选择日期" },
    { type: "Time", label: "活动时间", prop: "data2", placeholder: "选择时间" },
    { type: "Datetime", label: "日期时间", prop: "datetime", placeholder: "选择时间时间" },
  ],
  btns: [
    {
      type: "primary",
      label: "创建",
      action: "submit",
      call: (data) => {
        console.log(data);
      },
    },
    {
      type: "primary",
      label: "重置",
      action: "reset",
      call: () => {
        console.log("reset");
      },
    },
  ],
});
</script>

<style lang="less" scoped></style>
