<script setup lang="ts">
import {reactive} from "vue";

interface LoginForm {
  email: string;
  password: string;
}
let form: LoginForm = reactive({
  email: "",
  password: ""
});

</script>

<template>
  <div class="home">
    <div class="login-card">
      <div class="card">
        <div class="login-card__title">Login</div>
        <n-form ref="formRef" :model="form" label-placement="left" size="large">
          <n-form-item label="账号">
            <n-input v-model="form.email" placeholder="应该是邮箱"/>
          </n-form-item>
          <n-form-item label="密码">
            <n-input v-model="form.password" placeholder="应该是密码"/>
          </n-form-item>
          <div class="login-card__btn">
            <n-button type="primary" size="large">登录</n-button>
          </div>
        </n-form>
      </div>
      <div class="bgs">
        <div></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  .login-card {
    cursor: default;
    width: 500px;
    border-radius: 20px;
    box-shadow: 0 0 10px 5px rgba(#8ec5fc, 0.12);
    margin: 150px auto;
    position: relative;
    overflow: hidden;

    .card, .bgs {
      width: 100%;
      height: 100%;
    }

    .card {
      padding: 24px;
      position: relative;
      z-index: 2;
      backdrop-filter: blur(40px);
    }

    .bgs {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;

      div {
        border-radius: 50%;

        &:nth-of-type(1) {
          width: 200px;
          height: 200px;
          background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
          position: absolute;
          //left: -10px;
          //top: -10px;
        }
      }
    }

    &__title {
      color: $primary-color;
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 24px;
    }

    &__btn {
      @include flex(center, center);
      margin-top: 40px;
    }
  }
}
</style>