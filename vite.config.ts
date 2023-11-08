import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  envDir: "./env",
  plugins: [vue(), AutoImport({})],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      // "/868154-0-default": "http://127.0.0.1:4523/m1",
      // "/auth": {
      //   target: "http://localhost:11810",
      //   changeOrigin: true,
      //   secure: true,
      //   // rewrite: (path) => path.replace(/^\/api/, ""),
      // },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/style/variables.scss";
          @import "@/assets/style/mixin.scss";
        `,
      },
    },
  },
});
