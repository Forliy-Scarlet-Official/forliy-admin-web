import * as i from "@vicons/ionicons5"
export default [
  {
    name: "me",
    path: "me",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "今天的我",
      icon: i.HomeOutline,
    },
  },
]
