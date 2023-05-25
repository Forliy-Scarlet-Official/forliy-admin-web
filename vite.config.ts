import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"

const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({})
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/style/variables.scss";`
      }
    }
  }
})
