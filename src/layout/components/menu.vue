<template>
  <div :class="['menu', collapsed ? 'collapsed' : '']">
    <div class="icon">
      <img src="http://q1.qlogo.cn/g?b=qq&nk=2257290268&s=640" alt="" />
      <span class="title">Forliy Admin</span>
    </div>
    <n-menu
      :options="menuOptions"
      :collapsed="collapsed"
      :collapsed-width="74"
      collapse-mode="width"
      :width="250"
    />
  </div>
</template>
<script lang="ts" setup>
import { h, Component, ref } from "vue"
import { RouteRecordRaw, RouterLink } from "vue-router"
import { NIcon } from "naive-ui"
import type { MenuOption } from "naive-ui"
import { routes } from "../../router/index"
import { keyBy } from "lodash"

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const collapsed = ref(false)
const menuOptions: MenuOption[] = renderMenuOptions(routes[0].children)

function renderMenuOptions(routes) {
  return routes.map((route) => {
    let option: { label: any; key: any; icon: any; [k: string]: any } = {
      label: () =>
        h(
          RouterLink,
          {
            to: { name: route.name },
          },
          { default: () => route?.meta?.title }
        ),
      key: route.name,
      icon: renderIcon(route?.meta?.icon as Component),
    }
    if (route.children) {
      option.children = renderMenuOptions(route.children)
    }
    return option
  })
}
</script>
<style lang="scss" scoped>
.menu {
  width: 250px;
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
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    .title {
      transition: 0.2s;
      font-size: 20px;
      color: #6e2234ff;
      flex: 1;
      overflow: hidden;
      text-align: center;
      white-space: nowrap;
    }
    img {
      width: 70px;
      height: 70px;
      display: block;
      border-radius: 50%;
      transition: 0.2s;
    }
  }
}
</style>
