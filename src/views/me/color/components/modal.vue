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
import { updateColorReqBody } from "@/api/me";
import { rules } from "../color";
import { defineProps, defineEmits, reactive, ref, Ref } from "vue";

const emit = defineEmits(["modelClose", "addColor"]);

const { type } = defineProps({
  type: String,
  show: Boolean,
});

const form: updateColorReqBody = reactive({
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
  form.r = Number(cArr[0]);
  form.g = Number(cArr[1]);
  form.b = Number(cArr[2]);
}

// 提交
const formRef: Ref = ref();

function handleSubmit() {
  formRef.value?.validate((errors: boolean) => {
    if (!errors) {
      setColorToRGB(color.value);
      emit("addColor", form);
    }
  });
}

// 关闭窗口

function handleModelClose() {
  emit("modelClose");
}
</script>
<style lang="scss" scoped></style>
