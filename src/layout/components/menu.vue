<template>
  <div :class="['menu', collapsed ? 'collapsed' : '']">
    <div :class="['icon', collapsed ? 'icon--collapsed' : '']">
      <img
        src="http://q1.qlogo.cn/g?b=qq&nk=2257290268&s=640"
        alt=""
        :class="collapsed ? 'collapsed' : ''"
        @click="collapsed = !collapsed"
      />
      <span class="title" :style="{ color: themeVars.primaryColor }"
        >Forliy Admin</span
      >
    </div>
    <n-menu
      :options="menuOptions"
      :collapsed="collapsed"
      :collapsed-width="74"
      collapse-mode="width"
      :width="270"
      :expanded-keys="expandedKeys"
      :value="currentPage"
    />
  </div>
</template>
<script lang="ts" setup>
import { h, Component, ref, computed, ComputedRef } from "vue";
import { RouteRecordName, RouteRecordRaw, RouterLink } from "vue-router";
import { useRoute } from "vue-router";
import { MenuOption, NIcon, NMenu, useThemeVars } from "naive-ui";
import { routes } from "../../router/index";
import { Key } from "naive-ui/lib/menu/src/interface";

// naive原生主题变量
const themeVars = useThemeVars();

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const collapsed = ref(false);
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
  width: 270px;
  overflow: hidden;
  transition: 0.2s;
  height: 100%;
  box-shadow: 0px 0px 10px 1px rgba($color: #ccc, $alpha: 0.5);
  &.collapsed {
    width: 74px;
    .icon .title {
      flex: 0;
    }
    .icon img {
      width: 50px;
      height: 50px;
    }
  }
  .icon {
    cursor: pointer;
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    transition: 0.2s;
    &--collapsed {
      height: 60px;
    }
    .title {
      transition: 0.2s;
      font-size: 20px;
      margin-top: 10px;
      // color: #6e2234;
      flex: 1;
      overflow: hidden;
      text-align: center;
      white-space: nowrap;
    }
    img {
      &.collapsed {
        transform: rotate(360deg);
      }
      width: 70px;
      height: 70px;
      display: block;
      border-radius: 50%;
      transition: 0.2s;
      &:hover {
        box-shadow: 0 0 1px 4px rgba($color: #6e2234, $alpha: 0.3);
      }
    }
  }
}
</style>
