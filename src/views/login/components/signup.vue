<script setup lang="ts">
import { reactive, ref } from "vue";

const signRef = ref();
let model = reactive({
  email: "",
});
const onSignup = () => {};
</script>

<template>
  <n-form
    ref="signRef"
    :model="model"
    label-placement="left"
    label-width="auto"
    size="large"
  >
    <n-form-item label="邮箱">
      <n-input v-model:value="model.email" placeholder="输入邮箱地址进行注册" />
    </n-form-item>
    <n-button
      size="large"
      type="primary"
      style="width: 100%; justify-content: center"
      @click="onSignup"
    >
      验证邮箱
    </n-button>
  </n-form>
</template>

<style scoped lang="scss"></style>
