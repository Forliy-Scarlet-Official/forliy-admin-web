<template>
  <n-theme-editor>
    <n-config-provider :theme-overrides="themeOverrides">
      <div id="layout">
        <Menu></Menu>
        <div class="header"></div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </n-config-provider>
  </n-theme-editor>
</template>
<script lang="ts" setup>
import type { GlobalThemeOverrides } from "naive-ui"
import { NThemeEditor } from "naive-ui"
import Menu from "./components/menu.vue"

const themeOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: "#FFFFFFFF",
    primaryColor: "#D44264FF",
    primaryColorHover: "#AD3652FF",
    primaryColorPressed: "#6E2234FF",
    primaryColorSuppl: "#D44264FF",
    errorColor: "#9D4CEDFF",
    errorColorPressed: "#401F60FF",
    errorColorHover: "#7237ADFF",
    errorColorSuppl: "#7237ADFF",
  },
}
</script>
<style lang="scss" scoped>
#layout {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
