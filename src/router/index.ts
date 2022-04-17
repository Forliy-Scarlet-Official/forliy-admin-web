import * as i from "@vicons/ionicons5"
import { RouteRecordRaw } from "vue-router"

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "index",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        name: "index",
        path: "index",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          icon: i.HomeOutline,
        },
      },
      {
        name: "test1",
        path: "test1",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "111",
          icon: i.HomeOutline,
        },
        children: [
          {
            name: "test2",
            path: "test2",
            component: () => import("@/views/home/index.vue"),
            meta: {
              title: "首页",
              icon: i.HomeOutline,
            },
          },
        ],
      },
    ],
  },
]
