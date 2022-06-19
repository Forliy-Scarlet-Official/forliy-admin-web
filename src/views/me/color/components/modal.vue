<template>
  <n-modal
    v-model:show="show"
    preset="dialog"
    :on-after-leave="handleModelClose"
  >
    <template #header>颜色管理</template>
    <n-form :model="form" :rules="rules" ref="formRef">
      <n-form-item label="名称" path="name">
        <n-input v-model:value="form.name" />
      </n-form-item>
      <n-form-item label="颜色" path="color">
        <n-color-picker
          :modes="['rgb']"
          v-model:value="color"
          :show-alpha="false"
        />
      </n-form-item>
    </n-form>
    <template #action>
      <n-button @click="handleSubmit">提交</n-button>
    </template>
  </n-modal>
</template>
<script lang="ts" setup>
import { UpdateColorReqBody } from "@/api/me";
import { rules } from "../color";
import {
  defineProps,
  defineEmits,
  defineExpose,
  reactive,
  ref,
  Ref,
} from "vue";
import {
  NModal,
  NForm,
  NFormItem,
  NInput,
  NButton,
  NColorPicker,
} from "naive-ui";

const emit = defineEmits(["modelClose", "submit"]);
const { type, show } = defineProps({
  type: Number,
  show: Boolean,
});

let form: Ref<UpdateColorReqBody> = ref({
  name: "",
  r: 0,
  g: 0,
  b: 0,
  a: 255,
});

// 处理颜色字符串
const color = ref("rgb(0,0,0)");

function setColorToRGB(color: string) {
  const cString = color.replace(/[rgb()]/g, "");
  const cArr = cString.split(",");
  form.value.r = Number(cArr[0]);
  form.value.g = Number(cArr[1]);
  form.value.b = Number(cArr[2]);
}
function setRgbToColor(form: UpdateColorReqBody) {
  color.value = `rgb(${form.r},${form.g},${form.b})`;
}

// 提交
const formRef: Ref = ref();

function handleSubmit() {
  formRef.value?.validate((errors: boolean) => {
    if (!errors) {
      setColorToRGB(color.value);
      emit("submit", form.value);
    }
  });
}

// 关闭窗口

function handleModelClose() {
  emit("modelClose");
  form.value = {
    name: "",
    r: 0,
    g: 0,
    b: 0,
    a: 255,
  };
  color.value = "rgb(0,0,0)";
  setColorToRGB(color.value);
}

// 数据回显
const initForm = (row: UpdateColorReqBody) => {
  form.value = { ...row };
  setRgbToColor(row);
};
defineExpose({
  initForm,
});
</script>
<style lang="scss" scoped></style>
