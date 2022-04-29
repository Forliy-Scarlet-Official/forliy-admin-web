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
    <n-data-table :columns="columns" :data="data" :bordered="false" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, h, Ref, reactive } from "vue";
import { DataTableColumns } from "naive-ui";
import { Color, searchColorReqBody } from "@/api/me/index";
const color = new Color();

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
const kw = ref("");
const handleSearch = () => {
  form.name = kw.value;
  getList({ ...form, page: 1 });
};

// 接口
const getList = (form: searchColorReqBody) => {
  color
    .getList(form)
    .then((res) => {
      data.value = res;
    })
    .catch((err) => {});
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
}
</style>
