<template>
  <div class="page">
    <div class="search">
      <div class="search-form">
        <n-input
          v-model:value="kw"
          size="large"
          type="text"
          placeholder="搜索名称"
          clearable
          @keyup.enter="handleSearch"
        />
      </div>
      <div class="search-add">
        <n-button size="large" type="primary">
          <template #icon>
            <n-icon>
              <i-add />
            </n-icon>
          </template>
          添加
        </n-button>
      </div>
    </div>
    <n-data-table
      :columns="columns"
      :data="data"
      :bordered="false"
      :row-props="rowProps"
    />
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
    <div class="pagination">
      <n-pagination
        v-model:page="form.page"
        :item-count="total"
        :on-update:page="handlePageChange"
        :on-update:page-size="handlePageSizeChange"
        show-size-picker
        :page-sizes="[10, 20, 50]"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, h, Ref, reactive, nextTick } from "vue";
import { DataTableColumns, DropdownOption, NButton } from "naive-ui";
import { Color, searchColorReqBody } from "@/api/me/index";
const color = new Color();

// 右键菜单
const showDropdown = ref(false);
const dropdownOptions: DropdownOption[] = [
  {
    label: "编辑",
    key: "edit",
  },
  {
    label: () => h("span", { style: { color: "red" } }, "删除"),
    key: "delete",
  },
];
const x = ref(0);
const y = ref(0);
const handleDropSelect = () => {
  showDropdown.value = false;
};
const onClickoutside = () => {
  showDropdown.value = false;
};
const rowProps = (row: listItem) => {
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

// 表格
type listItem = {
  id: number;
  name: string;
  a: number;
  r: number;
  g: number;
  b: number;
};
const columns: DataTableColumns<listItem> = [
  {
    title: "名称",
    key: "name",
  },
  {
    title: "alpha",
    key: "a",
  },
  {
    title: "r",
    key: "r",
  },
  {
    title: "g",
    key: "g",
  },
  {
    title: "b",
    key: "b",
  },
  {
    title: "预览",
    key: "actions",
    render(row) {
      return h("div", {
        style: `width:50px;height:20px;background:rgba(${row.r},${row.g},${row.b},${row.a})`,
      });
    },
  },
];
const data: Ref<listItem[]> = ref([]);

// 查询
let form: searchColorReqBody = reactive({
  limit: 10,
  page: 1,
  name: "",
});
const total = ref(0);
const kw = ref("");
const handleSearch = () => {
  form.name = kw.value;
  getList({ ...form, page: 1 });
};

// 分页
const handlePageChange = (page: number) => {
  form.page = page;
  getList({ ...form });
};
const handlePageSizeChange = (pageSize: number) => {
  form.limit = pageSize;
  getList({ ...form, page: 1 });
};

// 接口
const getList = (form: searchColorReqBody) => {
  Promise.all([
    color.getList(form),
    color.getCount({ name: String(form.name) }),
  ]).then((vals) => {
    data.value = vals[0];
    total.value = vals[1];
  });
};

onMounted(() => {
  getList(form);
});
</script>
<style lang="scss" scoped>
.page {
  padding: 20px;
  .search {
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
