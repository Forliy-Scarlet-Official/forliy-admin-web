import { createApp } from "vue"
import * as VueRouter from "vue-router"
import { routes } from "./router"

import App from "./App.vue"
import naive from "naive-ui"

const app = createApp(App)

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

app.use(naive)
app.use(router)
app.mount("#app")
