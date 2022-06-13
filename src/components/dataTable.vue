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
import { defineProps, ref, nextTick, defineEmits } from "vue";
import {
  DataTableColumns,
  DropdownOption,
  NDataTable,
  NDropdown,
} from "naive-ui";
defineProps({
  tableColumns: Array<any>,
  tableData: Array<any>,
  dropdownOptions: Array<any>,
});
const emit = defineEmits(["dropdownClick"]);

/**
 * 右键菜单相关
 */
const x = ref(0);
const y = ref(0);
const showDropdown = ref(false);
const handleDropSelect = (key: string | number, option: DropdownOption) => {
  emit("dropdownClick", key, option);

  showDropdown.value = false;
};
const onClickoutside = () => {
  showDropdown.value = false;
};
const rowProps = () => {
  return {
    onContextmenu: (e: MouseEvent) => {
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
</script>

<style lang="scss" scoped></style>
