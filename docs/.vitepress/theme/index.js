import DefaultTheme from "vitepress/theme";
// 基于element-plus二次封装基础组件
import ZUI from "../../../dist/zl-vue3-ui";
import demo from "vitepress-demoblock/demo.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "../../../dist/style.css";
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 全局注册基础组件
    app.use(ZUI);
    app.use(ElementPlus);
    app.component("demo", demo);
  },
};
