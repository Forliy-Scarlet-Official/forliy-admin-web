import { defineStore } from "pinia";
import { eStorage } from "easy-async-storage";
import { themeKey } from "@/layout/layout";
const $e = eStorage();

// 主题Store
export const useStore = defineStore("theme", {
  state: () => {
    return {
      // 0 default; 1 dark;
      theme: 0,
    };
  },
  actions: {
    setThemeState(state: number) {
      this.theme = state;
    },
    initThemeState() {
      this.theme = $e.check(themeKey).status ? Number($e.get(themeKey)) : 0;
    },
  },
});
