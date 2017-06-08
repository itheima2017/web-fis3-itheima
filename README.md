# 开发说明

## 前言

组件化网站开发框架

## 技术栈

fis3 + gulp + scss + ejs

## 安装

```bash
npm i
npm start
```

## 浏览器查看

http://127.0.0.1:8080/dist/pages/

## 编译发布

```bash
npm run dist
```

`\release\dist\` 下就是发布文件，可直接查看 `\release\dist\pages\index.html`

## 命令行

名称 | 说明
-----|--------------
npm start         | 开启浏览器，所见即所得
npm run open      | 打开预览www目录
npm run release   | 编译并更新www目录
npm run clear     | 清空编译临时文件
npm run dist      | 发布release 到目录./release
