<template>
  <!-- <n-theme-editor> -->
  <!-- <n-config-provider :theme-overrides="themeOverrides">-->
  <n-config-provider :theme="dark ? darkTheme : null">
    <n-layout position="absolute" style="bottom: 0; top: 0; left: 0; right: 0">
      <layout-header
        @on-theme-change="dark = !dark"
        :dark="dark"
      ></layout-header>
      <n-layout position="absolute" style="top: 64px" id="layout" has-sider>
        <layout-menu></layout-menu>
        <n-layout-content class="content">
          <!-- 面包屑 -->
          <bread-crumb></bread-crumb>
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
  <!-- </n-theme-editor> -->
</template>
<script lang="ts" setup>
import {
  GlobalThemeOverrides,
  useMessage,
  NThemeEditor,
  NConfigProvider,
  NLayout,
  NLayoutContent,
  darkTheme,
} from "naive-ui";
import { ref } from "vue";
import LayoutMenu from "./components/menu.vue";
import LayoutHeader from "./components/header.vue";
import BreadCrumb from "./components/breadcrumb.vue";
import bus from "@/utils/bus";

const dark = ref(false);

const message = useMessage();
bus.on("onError", (msg) => {
  message.error(String(msg));
});

// const themeOverrides: GlobalThemeOverrides = {
//   common: {
//     baseColor: "#FFFFFFFF",
//     primaryColor: "#D44264FF",
//     primaryColorHover: "#AD3652FF",
//     primaryColorPressed: "#6E2234FF",
//     primaryColorSuppl: "#D44264FF",
//     errorColor: "#9D4CEDFF",
//     errorColorPressed: "#401F60FF",
//     errorColorHover: "#7237ADFF",
//     errorColorSuppl: "#7237ADFF",
//   },
// };
</script>
<style lang="scss" scoped>
#layout {
  display: flex;
  .content {
    padding: 20px;
  }
}
</style>
