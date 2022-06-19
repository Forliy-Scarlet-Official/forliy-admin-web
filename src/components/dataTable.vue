<template>
  <!-- 表格主体 -->
  <n-data-table
    :columns="tableColumns"
    :data="tableData"
    :bordered="false"
    :row-props="rowProps"
  />
  <!-- 右键菜单 -->
  <n-dropdown
    placement="bottom-start"
    trigger="manual"
    :x="x"
    :y="y"
    :on-clickoutside="onClickoutside"
    :options="dropdownOptions"
    :show="showDropdown"
    @select="handleDropSelect"
  >
  </n-dropdown>
</template>

<script lang="ts" setup>
import { defineProps, ref, Ref, nextTick, defineEmits } from "vue";
import { DropdownOption, NDataTable, NDropdown } from "naive-ui";
defineProps({
  tableColumns: Array as any,
  tableData: Array as any,
  dropdownOptions: Array as any,
});
const emit = defineEmits(["dropdownClick"]);

/**
 * 右键菜单相关
 */
const x = ref(0);
const y = ref(0);
const showDropdown = ref(false);
const selectedRowProps: Ref<any> = ref({});
const handleDropSelect = (key: string | number, option: DropdownOption) => {
  emit("dropdownClick", selectedRowProps.value, key, option);
  showDropdown.value = false;
  clearSelectedRowProps();
};
const onClickoutside = () => {
  showDropdown.value = false;
  clearSelectedRowProps();
};
const rowProps = (row: any) => {
  return {
    onContextmenu: (e: MouseEvent) => {
      selectedRowProps.value = row;
      e.preventDefault();
      showDropdown.value = false;
      nextTick().then(() => {
        showDropdown.value = true;
        x.value = e.clientX;
        y.value = e.clientY;
      });
    },
  };
};
const clearSelectedRowProps = () => {
  selectedRowProps.value = {};
};
</script>

<style lang="scss" scoped></style>
