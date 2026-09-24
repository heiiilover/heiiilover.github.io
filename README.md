# 我的个人网站

这是一个可以免费部署到 GitHub Pages 的中英双语静态个人网站，不需要安装依赖或运行构建命令。

## 本地预览

双击 `index.html`，用浏览器打开首页。顶部导航可以进入作品集、博客和简历页面；右上角的 `EN` / `中文` 按钮切换语言。英文页面也可以用 `index.html?lang=en` 打开。

`preview-desktop.png` 和 `preview-mobile.png` 是本地排版截图，不属于发布内容。

## 当前内容

- `index.html`：个人主页与联系方式
- `portfolio.html`：作品集示例位置
- `blog.html`：博客入口（目前没有文章）
- `resume.html`：简历结构
- `style.css`：页面样式
- `script.js`：自动更新页脚年份
- `i18n.js`：英文翻译和语言切换
- `avatar.png`：网站头像
- `project-src/mips-cpu-axi`：独立 GitHub 仓库的本地准备目录，不进入网站仓库

网站资料来自公开的 GitHub 个人介绍和仓库，以及你明确提供的 FinCUABuild 协作者身份。主页没有公开 GitHub 资料里的详细街道地址或邮箱。博客尚无文章。

头像使用 DiceBear 的 [Adventurer](https://www.dicebear.com/styles/adventurer/) 风格，原作者 Lisa Wischofsky，按 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 署名；由 DiceBear API 以 `Nana` 种子生成。

## 发布计划

可把网站根目录中的 HTML、CSS、JS、SVG 和 `avatar.png` 上传到 `heiiilover.github.io` 仓库并启用 GitHub Pages，网站地址将是 `https://heiiilover.github.io/`。`project-src/` 和预览截图由 `.gitignore` 排除，MIPS CPU 项目单独发布到 `mips-cpu-axi` 仓库。GitHub Pages 对公开仓库免费。
