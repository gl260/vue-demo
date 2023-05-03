<template>
  <div class="lgl-form">
    <!-- <el-dialog v-model="dialogVisible" width="30%" title="新建用户"> </el-dialog> -->
    <!-- <el-form :model="formData" label-width="120px" ref="formRef"> -->
    <el-form :model="ruleForm" :label-width="data.width" ref="formRef">
      <el-form-item
        v-for="(item, index) in data.items"
        :key="index"
        :label="item.label"
        :prop="item.name"
      >
        <el-input
          v-if="item.type === 'Input'"
          v-model="ruleForm[item.prop]"
          :style="{ width: item.width }"
          :placeholder="item.placeholder"
        ></el-input>

        <el-select
          v-if="item.type === 'Select'"
          v-model="ruleForm[item.prop]"
          :placeholder="item.placeholder"
        >
          <template v-for="(iten, index) in item.options" :key="index">
            <el-option :label="iten.label" :value="iten.value" />
          </template>
        </el-select>
      </el-form-item>

      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              v-model="data.date1"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
            />
          </el-form-item>
        </el-col>
        <el-col :span="2" class="text-center"> </el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker v-model="data.date2" placeholder="选择时间" style="width: 100%" />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="是否送达" prop="delivery">
        <el-switch v-model="data.delivery" />
      </el-form-item>
      <el-form-item label="活动类型" prop="type">
        <el-checkbox-group v-model="data.type">
          <el-checkbox label="单人" name="type" />
          <el-checkbox label="双人" name="type" />
          <el-checkbox label="三人" name="type" />
          <el-checkbox label="集体" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="data.resource">
          <el-radio label="线上品牌赞助商" />
          <el-radio label="线下场地免费" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input v-model="data.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
const ruleForm = reactive({});
// const formData = reactive({
//   name: "Hello",
//   region: "",
//   date1: "",
//   date2: "",
//   delivery: false,
//   type: [],
//   resource: "",
//   desc: "",
// });

const onSubmit = () => {};

// 重置逻辑 ---> 注意: 需要在el-form-item上添加prop属性
const formRef = ref();
const onReset = () => {
  // 1.form中的数据全部重置
  formRef.value?.resetFields();
  // 2.将事件出去, content内部重新发送网络请求
};
</script>

<style lang="less" scoped>
.lgl-form {
  margin: 30px;
}
</style>
