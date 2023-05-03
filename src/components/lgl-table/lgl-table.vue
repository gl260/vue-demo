<template>
  <div class="lgl-table">
    <el-table :data="tableData" style="width: 100%">
      <template v-for="item in columns" :key="item.id">
        <el-table-column :prop="item.prop" :label="item.title" v-if="!item.action" />
        <el-table-column :label="item.title" v-else>
          <template #default="scope">
            <template v-for="iten in item.actions">
              <el-button
                size="small"
                v-if="iten.fnName === 'delete'"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
              >
                {{ iten.title }}
              </el-button>
              <el-button size="small" v-else @click="handleEdit(scope.$index, scope.row)">{{
                iten.title
              }}</el-button>
            </template>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script setup>
const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
  columns: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["delete", "edit"]);
const handleDelete = (index, row) => {
  // console.log(index, row);
  emit("delete", index, row);
};
const handleEdit = (index, row) => {
  // console.log(index, row);
  emit("edit", index, row);
};
</script>

<style lang="less" scoped></style>
