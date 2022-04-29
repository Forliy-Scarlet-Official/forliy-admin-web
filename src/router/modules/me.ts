import * as i from "@vicons/ionicons5";
export default [
  {
    name: "me",
    path: "me",
    redirect: "/me/color",
    component: () => import("@/views/me/index.vue"),
    meta: {
      title: "今天的我",
      icon: i.AccessibilityOutline,
    },
    children: [
      {
        name: "color",
        path: "color",
        component: () => import("@/views/me/color/index.vue"),
        meta: {
          title: "颜色",
          icon: i.ColorPaletteOutline,
        },
      },
      {
        name: "charactor",
        path: "charactor",
        component: () => import("@/views/me/color/index.vue"),
        meta: {
          title: "角色/性格",
          icon: i.FitnessOutline,
        },
      },
      {
        name: "hair",
        path: "hair",
        component: () => import("@/views/me/color/index.vue"),
        meta: {
          title: "发型",
          icon: i.EggOutline,
        },
      },
      {
        name: "face",
        path: "face",
        component: () => import("@/views/me/color/index.vue"),
        meta: {
          title: "形象/外貌",
          icon: i.HappyOutline,
        },
      },
    ],
  },
];
