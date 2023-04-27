---
title: My Document
description: This is my document
author: John Doe
tags: [vitepress, markdown, documentation]
lang: en-US
sidebar: true
sidebarDepth: 2
editLink: true
lastUpdated: true
---

# Vitepress 学习笔记

## Frontmatter

Frontmatter 定义必须位于 Markdown 文件的顶部，放置在三点划线之间，支持 YAML 格式和 JSON 格式：

```yaml
---
title: Vitepress 学习笔记
editLink: true
---
```

```json
---
{
  "title": "Vitepress 学习笔记",
  "editLink": true
}
---
```

Frontmatter 用于定义运行时变量，可以是**预定义变量**，也可以是**自定义变量**，这些变量在 Markdown 文件中可以通过 `$frontmatter` 调用：

```markdown
---
title: Vitepress 学习笔记
editLink: true
---

# {{ $frontmatter.title }}
```

### Frontmatter 中的预定义变量

|配置项 | 类型 | 默认值 | 说明|
|------|-----|--------|-----|
|title|string|空|文档标题|
|description|string|空|文档描述|
|head|array|空|文档头部需要引入的|HTML|代码|
|author|string|空|文档作者|
|tags|array|空|文档标签|
|lang|string|en-US|文档语言|
|layout|string|Layout.vue|指定文档使用的布局组件|
|permalink|string|空|文档的永久链接|
|frontmatter|object|空|在页面元数据之外添加额外的元数据|
|comments|boolean|false|是否启用评论功能|
|editLink|boolean/object|false|是否在页面中显示编辑链接|
|notFound|boolean|false|是否将该页面标记为|404|页面|
|redirect|string|空|将该页面重定向到指定的页面|
|frontmatterComputed|object|空|为|frontmatter|属性添加计算属性|
|lastUpdated|boolean|true|是否在页面中显示最后更新时间|
|contributors|boolean|false|是否启用贡献者列表|

## 运行时 API


## CLI

### vitepress dev

指定目录为根目录运行 vitepress 本地 dev server，默认为当前目录，在当前目录运行时，可以省略 dev 命令

```sh
vitepress

vitepress dev [root]

```

参数

- `--open [path]` 启动时是否打开浏览器
- `--port <port>` 设置端口
- `--base <path>` baseUrl 设置，默认 `/`
- `--cors` 是否启用 CORS
- `--strictPort` 如果端口号被使用，是否退出
- `--force` 忽略缓存和预构建资源

### vitepress build
生产模式构建

```sh
vitepress build [root]
```

- `--mpa` 实验特性，以 MPA 模式构建
- `--base <path>` baseUrl 设置， 默认 `/`
- `--target <target>` 转译目标，默认 `modules` 
- `--outDir <dirL>` 输出路径，默认 `.vitepress/dist`
- `--minify [minifier]` 是否开启/禁用最小化打包，默认 `esbuild`，`boolean | terser | esbuild`
- `--assetsInlineLimit <number>` 静态资源打包成 base64 位的资源大小上限，默认 4096 字节

### vitepress preview
本地预览打包构建产物

```sh
vitepress preview [root]
```

- `--base <path>` baseUrl
- `port <port>` 端口号

### vitepress init

当前目录初始化项目

```sh
vitepress init
```


## 默认主题


