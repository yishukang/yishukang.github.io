# Yishu Kang 个人作品站

这是一个 Astro 静态作品站，适合直接部署到 `username.github.io`。站点包含英文版和中文版：

- 英文：`/`、`/about`、`/work`、`/cv`、`/contact`
- 经验详情：`/experience/byd-london-promotion-support`、`/experience/haier-horizon-greenwich-event-planning`
- 中文：`/zh/`、`/zh/about`、`/zh/work`、`/zh/cv`、`/zh/contact`
- 中文经验详情：`/zh/experience/byd-london-promotion-support`、`/zh/experience/haier-horizon-greenwich-event-planning`

## 本地运行

```bash
npm install
npm run dev
```

开发地址默认是 `http://localhost:4321/`。

## 构建与预览

```bash
npm run build
npm run preview
```

`npm run build` 会生成 `dist/`，GitHub Pages 发布的就是这个目录。

## Google Analytics 4

网站已经预留 GA4 统计代码。只有配置了 `PUBLIC_GA_MEASUREMENT_ID` 时，页面才会加载 Google Analytics；不配置时不会输出 GA 脚本。

### 绑定到自己的 Google 账户

1. 打开 `https://analytics.google.com`，使用你自己的 Google 账户登录。
2. 如果是第一次使用，点击 `Start Measuring`；如果已经有账户，在左下角进入 `Admin`。
3. 创建一个 GA4 Property，名称可以写 `Yishu Kang Portfolio`。
4. 添加 `Web` data stream，网站 URL 填你的 GitHub Pages 地址，例如：

```text
https://<username>.github.io
```

5. 创建后进入这个 Web stream，复制 `Measurement ID`，格式类似：

```text
G-XXXXXXXXXX
```

6. 在 GitHub 仓库中打开 `Settings → Secrets and variables → Actions → Variables`。
7. 新增 Repository variable：

```text
Name: PUBLIC_GA_MEASUREMENT_ID
Value: G-XXXXXXXXXX
```

8. 重新 push 或手动运行 `Deploy to GitHub Pages` workflow。部署完成后，GA4 通常需要一些时间开始显示数据，可以在 GA4 的 `Realtime` 页面查看是否收到访问。

本地测试可以复制 `.env.example` 为 `.env`，把里面的 ID 改成真实值：

```bash
cp .env.example .env
```

`.env` 已在 `.gitignore` 中，不会提交到 GitHub。

## 上线前需要替换的信息

1. 打开 `astro.config.mjs`，把：

```js
site: "https://<username>.github.io"
```

改成你的 GitHub Pages 地址，例如：

```js
site: "https://yishukang.github.io"
```

2. 打开 `src/i18n/ui.ts`，替换：

- 中文姓名
- 中英文 tagline
- About 文案
- 邮箱与电话
- LinkedIn / 小红书链接文字与 URL

3. 把人像图片命名为 `hero.jpg`，放进：

```text
public/images/portrait/hero.jpg
```

首页和 About 页会自动使用这张图片。如果图片路径不存在，浏览器会显示默认灰阶占位区域。

4. 把简历 PDF 放进：

```text
public/cv/yishu-kang-cv.pdf
```

CV 页面会在 `/cv` 和 `/zh/cv` 内嵌显示这个 PDF，并提供打开/下载链接。

5. 两个经验详情页的图片可以放进：

```text
public/images/experience/
```

对应文件名：

```text
public/images/experience/byd-london-01.jpg
public/images/experience/byd-london-02.jpg
public/images/experience/haier-horizon-greenwich-01.jpg
public/images/experience/haier-horizon-greenwich-02.jpg
```

如果这些图片不存在，网站会显示统一的灰阶占位骨架。

## 新增或替换作品

每个作品对应 `src/content/work/` 里的一个 `.md` 文件。

新增作品步骤：

1. 把图片放到对应目录：

```text
public/images/xiaohongshu/
public/images/posters/
public/images/events/
```

2. 复制模板：

```text
src/content/work/_template.md
```

3. 改 frontmatter，例如：

```md
---
title_en: "Spring Skincare Edit"
title_zh: "春季护肤选品"
category: "xiaohongshu"
date: 2025-03-14
image: "/images/xiaohongshu/xhs-01-spring-skincare.jpg"
aspect: "3/4"
description_en: "Cover series for a seasonal skincare story."
description_zh: "为春季护肤主题设计的封面系列。"
featured: true
---
```

如果 `image` 留空，网站会自动显示极简灰阶占位骨架；填入图片路径后会显示真实图片。

分类可选：

- `xiaohongshu`
- `poster`
- `event`

常用比例：

- 小红书封面：`3/4`
- 海报：`4/5` 或 `2/3`
- 活动现场图：`16/9`

## GitHub Pages 部署

推荐创建名为 `<username>.github.io` 的仓库，这样网站部署在根路径，不需要配置 Astro `base`。

部署步骤：

1. push 到 GitHub 的 `main` 分支。
2. 打开仓库 Settings → Pages。
3. Source 必须选择 `GitHub Actions`，不要选择 `Deploy from a branch`。如果选了 branch，GitHub Pages 会用 Jekyll 直接读取源码里的 `.astro` 文件，导致 “Invalid YAML front matter” 报错。
4. 等 Actions 跑完，访问 `https://<username>.github.io`。

仓库里已经包含 `public/.nojekyll`，构建后会进入 `dist/.nojekyll`，用于明确告诉 GitHub Pages 不要对发布产物运行 Jekyll。

## 当前不包含

- 暗色模式
- 博客系统
- 联系表单后端
- 访问分析
- 自定义域名配置
