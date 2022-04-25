import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    base: "/",
    host: "0.0.0.0",
    port: 1145,
    proxy: {
      "/mock": {
        target: "http://127.0.0.1:4523/mock/868154",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/mock/, ""),
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
  },
})
