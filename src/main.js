import { createApp } from "vue";
import App from "./App.vue";
// import ZUI from "../packages/index";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// import ZUI from "zl-vue3-ui";
// import "../node_modules/zl-vue3-ui/dist/style.css";
import ZUI from "../../zl-vue3-ui/packages/";
import { zButton } from "zl-vue3-ui";
const app = createApp(App);
app.use(ZUI);
app.use(ElementPlus);
app.mount("#app");
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
