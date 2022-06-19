import { createApp } from "vue";
import * as VueRouter from "vue-router";
import { createPinia } from "pinia";
import { routes } from "./router";
import { setPublicComponents } from "@/utils/publicComponents";

import App from "./App.vue";

const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const pinia = createPinia();

// 注册全局组件
setPublicComponents(app);

app.use(pinia);
app.use(router);
app.mount("#app");
