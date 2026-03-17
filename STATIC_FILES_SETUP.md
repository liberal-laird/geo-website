# 静态文件设置指南

## 飞书二维码图片

当前项目中的 `feishu.png` 是一个占位符，用于展示联系信息部分的二维码。

### 替换真实的飞书二维码

1. 将您的飞书二维码图片重命名为 `feishu.png`
2. 将其放置在 `src/public` 目录下，替换现有的占位符文件（如果存在）

### 当前实现

- 如果 `src/public/feishu.png` 文件存在且是有效图片，将在 `/feishu.png` 路由提供该图片
- 如果文件不存在或不是有效图片，则显示一个SVG格式的二维码占位符
- 前端通过 `<img src="/feishu.png">` 请求此图片

### 文件位置

- 静态资源路径：`src/public/` (项目静态资源目录)
- 前端引用：`/feishu.png`
- 组件位置：`src/components/Contact/ContactInfo.tsx`

### 开发说明

当用户添加真实的 `feishu.png` 文件到 `src/public` 目录后，无需重启服务器即可生效。