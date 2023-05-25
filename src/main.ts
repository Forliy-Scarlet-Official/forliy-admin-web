import {createApp} from 'vue'
import App from './App.vue'
import Router from "@/router"

// 样式表文件引入
import "normalize.css"
import "@/assets/style/reset.scss"
import "vfonts/RobotoSlab.css"
import "vfonts/FiraCode.css"
import naive from "naive-ui";

// 挂载
const app = createApp(App)
app.use(Router)
app.use(naive)
app.mount('#app')
