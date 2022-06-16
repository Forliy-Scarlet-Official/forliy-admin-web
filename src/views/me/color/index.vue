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
        <n-button
          size="large"
          type="primary"
          @click="
            showModal = true;
            type = 'add';
          "
          >添加</n-button
        >
      </div>
    </div>
    <data-table
      :tableColumns="columns"
      :tableData="data"
      :dropdownOptions="dropdownOptions"
      @dropdownClick="dropdownClick"
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
    :type="type"
    @model-close="handleModelClose"
    @add-color="addColor"
  ></modal-vue>
</template>
<script lang="ts" setup>
import DataTable from "@/components/dataTable.vue";
import ModalVue from "./components/modal.vue";
import { useMessage, NButton, NInput, NPagination } from "naive-ui";
import { ref, onMounted, Ref, reactive } from "vue";
import {
  useColorResponsitories,
  SearchColorReqBody,
  UpdateColorReqBody,
} from "@/api/me/index";
import { dropdownOptions, listItem, columns } from "./color";

const color = useColorResponsitories();

const data: Ref<listItem[]> = ref([]);

/**
 * modal
 * type: 添加/修改
 */
const showModal = ref(false);
const type = ref("");
const handleModelClose = () => {
  showModal.value = false;
};
// 查询
let form: SearchColorReqBody = reactive({
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

/**
 * 请求
 */
const message = useMessage();
// 请求--查询
const getList = (form: SearchColorReqBody) => {
  Promise.all([
    color.getList(form),
    color.getCount({ name: String(form.name) }),
  ]).then((vals: any) => {
    data.value = vals[0];
    total.value = vals[1];
  });
};
// 请求--添加
const addColor = (form: UpdateColorReqBody) => {
  color.add(form).then(() => {
    message.success("添加颜色成功");
    showModal.value = false;
  });
};
// 请求--修改
const editColor = () => {};
// 请求--删除
const deleteColor = () => {};

// 分页方法
const handlePageChange = (page: number) => {
  form.page = page;
  getList({ ...form });
};
const handlePageSizeChange = (pageSize: number) => {
  form.limit = pageSize;
  getList({ ...form, page: 1 });
};

/**
 * 右键菜单
 */
const dropdownClick = (key: string) => {
  key == "edit" ? editColor() : deleteColor();
};

onMounted(() => {
  getList(form);
});
</script>
<style lang="scss">
.color-preview {
  border-radius: 50%;
  transition: 0.2s;
  width: 20px;
  height: 20px;
  &:hover {
    border-radius: 4px;
    width: 40px;
  }
}
</style>
<style lang="scss" scoped>
.page {
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
