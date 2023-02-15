import { defineConfig } from "vitepress";
import demoblock from "vitepress-demoblock";
export default defineConfig({
  title: "zl-vue3-ui 高阶ui组件",
  description: "基于Element-plus基础组件封装使用",
  lang: "cn-ZH",
  base: "/zl-vue3-ui/",
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: "zl-vue3-ui",
    outline: 3,
    socialLinks: [{ icon: "github", link: "" }],
    nav: [
      { text: "组件", link: "/components/button/" },
      { text: "快速上手", link: "/components/install/" },
    ],
    sidebar: {
      "/components/": [
        {
          items: [
            { text: "基础组件", link: "/components/input/" },
            { text: "按钮", link: "/components/button/" },
            { text: "输入框", link: "/components/input/" },
            { text: "评论组件", link: "/components/comment/" },
            { text: "搜素组件", link: "/components/search/" },
          ],
        },
      ],
    },
  },
  markdown: {
    config: (md) => {
      md.use(demoblock);
    },
  },
});
