<script setup lang="ts">
import { onMounted, reactive } from "vue";
// import api from "@/api"
import Signup from "./components/signup.vue";
import Login from "./components/login.vue";

let form = reactive({
  email: "",
  password: "",
  type: "pwd",
});

onMounted(() => {});
</script>

<template>
  <div class="login">
    <n-card class="login-card">
      <n-tabs size="large" animated default-value="login">
        <n-tab-pane name="login" tab="登录">
          <login />
        </n-tab-pane>
        <n-tab-pane name="signup" tab="注册">
          <signup />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </div>
</template>

<style scoped lang="scss">
.login {
  width: 100%;
  height: 100%;
  @include flex(center, flex-start);

  &-card {
    box-shadow: $main-shadow;
    width: 500px;
    height: auto;
    margin-top: 100px;
  }
}
</style>