<template>
  <n-layout-header bordered class="header">
    <div class="logo">
      <img
        class="logo__img"
        src="http://q1.qlogo.cn/g?b=qq&nk=2257290268&s=640"
      />
      <div class="logo__text">Forliy Admin</div>
    </div>
    <div class="right">
      <n-button @click="changeTheme" text class="change-theme btn">
        <n-icon size="30">
          <Sunny v-if="dark" />
          <MoonOutline v-else />
        </n-icon>
      </n-button>
    </div>
  </n-layout-header>
</template>
<script lang="ts" setup>
import { NLayoutHeader, NIcon, NButton } from "naive-ui";
import { MoonOutline, Sunny } from "@vicons/ionicons5";
import { defineEmits, defineProps } from "vue";
const { dark } = defineProps({
  dark: Boolean,
});

const emit = defineEmits(["onThemeChange"]);
const changeTheme = () => {
  emit("onThemeChange");
};
</script>
<style lang="scss" scoped>
.header {
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .btn {
    cursor: pointer;
  }
  .logo {
    font-size: 18px;
    display: flex;
    align-items: center;
    cursor: pointer;
    &__img {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
    }
    &__text {
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
