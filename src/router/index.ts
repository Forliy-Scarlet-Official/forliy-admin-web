export const routes = [
  {
    path: "/",
    redirect: "index",
    component: () => import("@/layout/index.vue"),
    children: [
      {
        name: "index",
        path: "index",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
]
