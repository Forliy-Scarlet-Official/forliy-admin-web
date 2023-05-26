import * as VueRouter from "vue-router"

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      name: "layout",
      path: "/",
      redirect: "/home",
      component: () => import("@/layout/index.vue"),
      children: [
        {name: "welcome", path: "/welcome", component: () => import("@/views/welcome/index.vue")},
        {name: "home", path: "/home", component: () => import("@/views/home/index.vue")},
      ]
    }
  ],
})

export default router