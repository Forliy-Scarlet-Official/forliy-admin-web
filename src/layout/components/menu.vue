<template>
  <n-layout-sider
    class="menu"
    collapse-mode="width"
    :width="270"
    :collapsed-width="74"
    bordered
    show-trigger="arrow-circle"
    style="height: 100%"
  >
    <n-menu
      :options="menuOptions"
      :collapsed-width="74"
      :expanded-keys="expandedKeys"
      :value="currentPage"
    />
  </n-layout-sider>
</template>
<script lang="ts" setup>
import { h, Component, computed, ComputedRef } from "vue";
import { RouteRecordRaw, RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { MenuOption, NIcon, NMenu, useThemeVars, NLayoutSider } from "naive-ui";
import { routes } from "../../router/index";
import { Key } from "naive-ui/lib/menu/src/interface";

// naive原生主题变量
const themeVars = useThemeVars();

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions: MenuOption[] | undefined = renderMenuOptions(
  routes[0].children
);

//当前选中菜单并展开（key）
const route = useRoute();
const currentPage = computed(() => {
  return String(route.name);
});
const expandedKeys: ComputedRef<Key[]> = computed(() => {
  const arr = route.matched.map((item) => {
    return String(item.name);
  });
  return arr;
});

//渲染左侧菜单
function renderMenuOptions(routes: RouteRecordRaw[] | undefined) {
  return routes?.map((route, index) => {
    let option: MenuOption = {
      label: () =>
        h(
          RouterLink,
          {
            to: { name: route.name },
          },
          { default: () => route?.meta?.title }
        ),
      icon: renderIcon(route?.meta?.icon as Component),
      key: String(route.name),
    };
    if (route.children) {
      option.children = renderMenuOptions(route.children);
    }
    return option;
  });
}
</script>
<style lang="scss" scoped>
.menu {
  transition: 0.2s;
  height: 100%;
}
</style>
