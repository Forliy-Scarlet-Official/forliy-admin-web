import { App, Component } from "vue";
import { Add } from "@vicons/ionicons5";

const compMap: Component = {
  IAdd: Add,
};

/**
 * 注册全局组件
 */
export const setPublicComponents = (app: App<Element>) => {
  for (let i in compMap) {
    app.component(i, compMap[i]);
  }
};
