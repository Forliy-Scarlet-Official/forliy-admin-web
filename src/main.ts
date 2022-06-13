import { createApp } from "vue";
import * as VueRouter from "vue-router";
import { routes } from "./router";
import { setPublicComponents } from "@/utils/publicComponents";

import App from "./App.vue";
// import naive from "naive-ui";

const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

// 注册全局组件
setPublicComponents(app);

app.use(router);
// app.use(naive);
app.mount("#app");
