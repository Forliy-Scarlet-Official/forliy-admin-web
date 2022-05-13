<template>
  <n-modal
    v-model:show="show"
    preset="dialog"
    :on-after-leave="handleModelClose"
  >
    <template #header>颜色管理</template>
    <n-form :model="form">
      <n-form-item label="名称">
        <n-input v-model:value="form.name" />
      </n-form-item>
      <n-form-item label="颜色">
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
import { Color, updateColorReqBody } from "@/api/me";
import { defineProps, defineEmits, reactive, ref } from "vue";
const { req } = defineProps({
  show: Boolean,
  req: Color,
});

const form: updateColorReqBody = reactive({
  name: "",
  r: 0,
  g: 0,
  b: 0,
  a: 255,
});
const color = ref("rgb(0,0,0)");
function setColorToRGB(color: string) {
  const cstring = color.replace(/[rgb()]/g, "");
  const carr = cstring.split(",");
  form.r = Number(carr[0]);
  form.g = Number(carr[1]);
  form.b = Number(carr[2]);
}

function handleSubmit() {
  setColorToRGB(color.value);
  // console.log(form);
  req?.add(form).then((res) => {});
}

const emit = defineEmits(["modelClose"]);
function handleModelClose() {
  emit("modelClose");
}
</script>
<style lang="scss" scoped></style>
