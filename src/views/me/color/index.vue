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
        <n-button size="large" type="primary" @click="showModal = true"
          >添加</n-button
        >
      </div>
    </div>
    <data-table
      :tableColumns="columns"
      :tableData="data"
      :dropdownOptions="dropdownOptions"
    ></data-table>
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
  <modal-vue
    :show="showModal"
    :req="color"
    @model-close="handleModelClose"
  ></modal-vue>
</template>
<script lang="ts" setup>
import DataTable from "@/components/dataTable.vue";
import ModalVue from "./components/modal.vue";
import { ref, onMounted, Ref, reactive } from "vue";
import { Color, searchColorReqBody } from "@/api/me/index";
import { dropdownOptions, listItem, columns } from "./color";

const color = new Color();
const data: Ref<listItem[]> = ref([]);

// modal
const showModal = ref(false);
const handleModelClose = () => {
  showModal.value = false;
};

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

const handlePageChange = (page: number) => {
  form.page = page;
  getList({ ...form });
};
const handlePageSizeChange = (pageSize: number) => {
  form.limit = pageSize;
  getList({ ...form, page: 1 });
};

// 请求-查询
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
