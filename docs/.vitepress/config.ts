import { defineConfig } from 'vitepress'
export default defineConfig({
  // 基本配置
  lang: 'zn-CN', // <html lang="zn-CN">
  base: '/', // base URL , /base/ -> ${host}/base/
  title: 'Richer 的数字花园', // 导航栏的标题，页面的 title 后缀（如果设置了 titleTemplate）
  titleTemplate: '数字花园', // 页面的后缀，会覆盖 title 
  description: 'Richer\'s blog', // html 描述信息
  head: [], // page 的 head 标签配置

  // route
  cleanUrls: false, // /foo.html -> /foo
  rewrites: {}, // 路由重定向

  // 构建配置
  srcDir: '.', // markdown 资源地址
  srcExclude: [], // markdwon 资源排除选项
  outDir: './.vitepress/dist', // 构建产出路径
  cacheDir: './.vitepress/cache', // 缓存路径
  ignoreDeadLinks: false, // 构建时，不会因为死链接而构建失败
  mpa: false, // true, 构建为 MPA 模式（Multi-Page）

  // 主题配置
  appearance: true, // true 根据用户切换主题
  lastUpdated: false, // 是否使用 git 页面的商场时间戳
  themeConfig: {

  },

  // 定制内容配置
  // markdown: {}, // Markdown-it 配置
  // vite: {}, // vite 的配置
  // vue: {}, // @vitejs/plugin-vue 的配置

  // 构建时的钩子
  // buildEnd (siteConfig) {}, // build CLI hook
  // postRender (context) {}, // 当渲染 SSG（静态站点生产）时的钩子
  // transformHead (context) {}, // page head 标签内容处理
  // transformHtml (code, id, ctx) {}, // 转换页面并写入存储时的钩子
  // transformPageData (pageData) {}, // 转换每个页面 pageData 时的钩子
})
