<template>
  <n-theme-editor>
    <n-config-provider :theme-overrides="themeOverrides">
      <div id="layout">
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
        <div class="header"></div>
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </n-config-provider>
  </n-theme-editor>
</template>
<script lang="ts" setup>
import { h, Component, ref } from "vue"
import type { MenuOption, GlobalThemeOverrides } from "naive-ui"
import { NIcon } from "naive-ui"
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5"
import { NThemeEditor } from "naive-ui"
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const collapsed = ref(false)
const menuOptions: MenuOption[] = [
  {
    label: "且听风吟",
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon),
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    children: [
      {
        label: "叙事者",
        key: "narrator",
        icon: renderIcon(PersonIcon),
      },
      {
        label: "羊男",
        key: "sheep-man",
        icon: renderIcon(PersonIcon),
      },
      {
        label: "饮品",
        key: "beverage",
        icon: renderIcon(WineIcon),
        children: [
          {
            label: "威士忌",
            key: "whisky",
          },
        ],
      },
      {
        label: "食物",
        key: "food",
        children: [
          {
            label: "三明治",
            key: "sandwich",
          },
        ],
      },
      {
        label: "过去增多，未来减少",
        key: "the-past-increases-the-future-recedes",
      },
    ],
  },
]

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
}
</style>
