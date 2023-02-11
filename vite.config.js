import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Markdown from "vite-plugin-md";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.md$/, /\.vue$/],
    }),
    Markdown(),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: "./packages/index.js",
      name: "zl-vue3-ui",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: '@import "./src/asserts/style/globle.scss";', // 添加公共样式
        additionalData: '@import "@/assets/style/globle.scss";',
      },
    },
  },
});
