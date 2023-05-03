<template>
  <div class="lgl-form">
    <!-- <el-dialog v-model="dialogVisible" width="30%" title="新建用户"> </el-dialog> -->
    <!-- <el-form :model="formData" label-width="120px" ref="formRef"> -->
    <el-form :model="ruleForm" :label-width="data.width" ref="ruleFormRef">
      <el-form-item
        v-for="(item, index) in data.items"
        :key="index"
        :label="item.label"
        :prop="item.prop"
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

        <el-switch v-if="item.type === 'Switch'" v-model="ruleForm[item.prop]" />

        <el-checkbox-group v-if="item.type === 'Checkbox'" v-model="ruleForm[item.prop]">
          <template v-for="(iten, index) in item.options" :key="index">
            <el-checkbox :label="iten.value">{{ iten.label }}</el-checkbox>
          </template>
        </el-checkbox-group>

        <el-radio-group v-if="item.type === 'Radio'" v-model="ruleForm[item.prop]">
          <template v-for="(iten, index) in item.options" :key="index">
            <el-radio :label="iten.value">{{ iten.label }}</el-radio>
          </template>
        </el-radio-group>

        <el-input
          v-if="item.type === 'Textarea'"
          v-model="ruleForm[item.prop]"
          type="textarea"
          :placeholder="item.placeholder"
        />

        <el-col :span="item.span || 5" v-if="item.type === 'Data'">
          <el-date-picker
            v-model="ruleForm[item.prop]"
            :placeholder="item.placeholder"
            type="date"
            style="width: 100%"
          />
        </el-col>

        <el-col :span="item.span || 5" v-if="item.type === 'Time'">
          <el-time-picker
            v-model="ruleForm[item.prop]"
            :placeholder="item.placeholder"
            style="width: 100%"
          />
        </el-col>

        <el-col :span="item.span || 5" v-if="item.type === 'Datetime'">
          <el-date-picker
            v-model="ruleForm[item.prop]"
            :placeholder="item.placeholder"
            type="datetime"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>

      <el-form-item>
        <template v-for="(btn, index) in data.btns" :key="index">
          <el-button :type="btn.type" @click="callSelf(ruleFormRef, btn.action, btn.call)">
            {{ btn.label }}
          </el-button>
        </template>

        <!-- <el-button @click="onReset(ruleFormRef)">重置1</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { nextTick, reactive, ref } from "vue";

const props = defineProps({
  data: {
    type: Object,
    default: () => ({}),
  },
});
const ruleFormRef = ref();
const ruleForm = reactive({});
// const ruleForm = reactive({
//   name: "Hello",
//   region: "",
//   date1: "",
//   date2: "",
//   delivery: false,
//   type: [],
//   resource: "",
//   desc: "",
// });

const callSelf = (formRef, action, callback) => {
  if (action === "submit") {
    submitForm(formRef, callback);
  } else if (action === "reset") {
    // console.log("点击了重置");
    onReset();
  } else {
    callback && callback();
  }
};

const submitForm = async (formRef, callback) => {
  if (!formRef) return;
  await formRef.validate((valid, fields) => {
    if (valid) {
      console.log("submit!");
      callback && callback(ruleForm);
    } else {
      console.log("error submit!", fields);
      return;
    }
  });
};

// 重置逻辑 ---> 注意: 需要在el-form-item上添加prop属性

const onReset = () => {
  // if (!formRef) return;
  // 1.form中的数据全部重置
  ruleFormRef.value?.resetFields();
};
</script>

<style lang="less" scoped>
.lgl-form {
  margin: 30px;
}
</style>
