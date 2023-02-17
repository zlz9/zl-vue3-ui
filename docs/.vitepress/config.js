import { defineConfig } from "vitepress";
import demoblock from "vitepress-demoblock";
export default defineConfig({
  title: "zl-vue3-ui 高阶ui组件",
  description: "基于Element-plus基础组件封装使用",
  lang: "cn-ZH",
  base: "/docs/",
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: "zl-vue3-ui",
    outline: 3,
    socialLinks: [{ icon: "github", link: "" }],
    nav: [
      { text: "组件", link: "/components/comment/" },
      { text: "快速上手", link: "/components/install/" },
    ],
    sidebar: {
      "/components/": [
        {
          items: [
            { text: "评论组件", link: "/components/comment/" },
            { text: "搜索组件", link: "/components/search/" },
            { text: "loading组件", link: "/components/loading/" },
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
