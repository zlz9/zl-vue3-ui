## zl-vue3-ui 是一个基于 element-plus 封装的 ui 组件库

- 文档 [文档](https://zlz9.github.io/docs/)。

## 快速上手

```js
npm install zl-vue3-ui
```

```js
//main.js
import ZUI from "zl-vue3-ui";
import "../node_modules/zl-vue3-ui/dist/style.css";
const app = createApp(App);
app.use(ZUI);
app.mount("#app");
```

```js
// 支持按需引入
import { zSearch } from "zl-vue3-ui";
```
