import { h } from "vue";
import { DataTableColumns, DropdownOption } from "naive-ui";
// 右键菜单
export const dropdownOptions: DropdownOption[] = [
  {
    label: "编辑",
    key: "edit",
  },
  {
    label: () => h("span", { style: { color: "red" } }, "删除"),
    key: "delete",
  },
];
// 表格
export type listItem = {
  id: number;
  name: string;
  a: number;
  r: number;
  g: number;
  b: number;
};
export const columns: DataTableColumns<listItem> = [
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
//表单验证
export const rules = {
  name:{
    required: true,
    message: '请输入颜色名称',
    trigger: 'blur'
  },
  color:{
    required: true,
    message: '请选择颜色',
    trigger: 'change'
  }
}