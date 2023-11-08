<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { JSEncrypt } from "jsencrypt";
import Api from "@/api";

const publicKey = import.meta.env.VITE_APP_PUBLIC_KEY;
const loginRef = ref();
let model = reactive({
  type: "pwd", // 邮箱+密码的方式固定为 pwd
  email: "",
  password: "", // 密码（通过RSA公钥加密后的base64字符串）
});

// 加密
const encrypt = new JSEncrypt();
const encryptPwd = (str: string): string => {
  return encrypt.encrypt(str) || "";
};

// 登录
const onLogin = async () => {
  let form = { ...model, password: encryptPwd(model.password) };
  // if (!form.password) {
  //   return;
  // }
  const res = await Api.auth.login(form);
  // TODO 登陆成功跳转
};

onMounted(() => {
  encrypt.setPublicKey(publicKey);
});
</script>

<template>
  <n-form
    ref="loginRef"
    :model="model"
    label-placement="left"
    label-width="auto"
    size="large"
  >
    <n-form-item label="邮箱">
      <n-input v-model:value="model.email" placeholder="请输入邮箱" />
    </n-form-item>
    <n-form-item label="密码">
      <n-input
        v-model:value="model.password"
        placeholder="请输入密码"
        type="password"
        show-password-on="mousedown"
        @keyup.enter="onLogin"
      />
    </n-form-item>
    <n-button
      size="large"
      type="primary"
      style="width: 100%; justify-content: center"
      @click="onLogin"
    >
      登录
    </n-button>
  </n-form>
</template>

<style scoped lang="scss"></style>
