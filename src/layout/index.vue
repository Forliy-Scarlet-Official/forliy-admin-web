<template>
  <n-theme-editor>
<!--    <n-config-provider :theme-overrides="themeOverrides">-->
    <n-config-provider>
      <div id="layout">
        <layout-menu></layout-menu>
        <div class="right">
          <layout-header></layout-header>
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </n-config-provider>
  </n-theme-editor>
</template>
<script lang="ts" setup>
import {GlobalThemeOverrides, useMessage, NThemeEditor, NConfigProvider} from "naive-ui";
import LayoutMenu from "./components/menu.vue";
import LayoutHeader from "./components/header.vue";
import bus from "@/utils/bus";

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
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;

  .right {
    width: 100%;

    .content {
      position: relative;
    }
  }
}
</style>
