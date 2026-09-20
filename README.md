<!--
  这是主页 README 的「模板」。Action 只会替换下面成对锚点 (START/END) 之间的内容，
  锚点以外的文字（包括这段说明、标题、手写介绍）永远不会被脚本动到。
  想改版式 / 加新板块，直接改这个文件即可。
-->

# 你好，我是 LcpMarvel 👋

<!-- INTRO:START -->
平时主要用 Rust 和 Go 写解决具体问题的小工具，从本地视频下载、游戏配置管理到给 Agent 用的技能封装。写东西时比较在意失败路径：库不抛异常、配置改坏能恢复、密钥不往工具里硬编码，让程序出错时行为依然可预期。最近也在把 CLI 做得对脚本和 AI Agent 更友好，结构化输出加稳定的退出码，方便被其他程序直接调用。
<!-- INTRO:END -->

## 🛠 最近在折腾

<!-- RECENT:START -->
- **[sph-downloader](https://github.com/LcpMarvel/sph-downloader)** — 微信视频号本地下载 CLI · 纯 Go 单二进制 · 登录一次即可把分享链接下载成 MP4 · --json 输出与稳定退出码，适合脚本和 AI Agent 调用 <sub>(Go · 2026-09-19)</sub>
- **[safe-json-repair](https://github.com/LcpMarvel/safe-json-repair)** — A JSON repair library that never throws and never silently drops data <sub>(Rust · 2026-09-01)</sub>
- **[zclaude](https://github.com/LcpMarvel/zclaude)** — Portable Claude Code wrapper for Zhipu/Z.ai GLM — no embedded API keys <sub>(Shell · 2026-08-31)</sub>
- **[feishu-whiteboard-pro](https://github.com/LcpMarvel/feishu-whiteboard-pro)** — A Claude Code / agent skill for building genuinely designed, editable Feishu / Lark (飞书) whiteboards — deliberate composition, real hierarchy, a gated pipeline with pre-render fit-check and independent design critique. <sub>(JavaScript · ★60 · 2026-08-31)</sub>
- **[dota2-map-visual-kit](https://github.com/LcpMarvel/dota2-map-visual-kit)** — Read-only Rust toolkit for extracting Dota 2 map overviews, world-to-pixel projections, and VPK provenance. <sub>(Rust · 2026-08-10)</sub>
- **[steam-local-kit](https://github.com/LcpMarvel/steam-local-kit)** — 跨平台 Rust 库：发现 Steam 安装，安全读取、编辑和恢复本地配置。Cross-platform Rust library for safely managing local Steam configuration. <sub>(Rust · 2026-07-16)</sub>
<!-- RECENT:END -->

## 📊 GitHub 统计

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=LcpMarvel&show_icons=true&hide_border=true&theme=transparent" alt="stats" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=LcpMarvel&layout=compact&hide_border=true&theme=transparent" alt="langs" />
</p>

---

<sub>本主页的「最近在折腾」与「介绍」由 GitHub Actions 每日自动刷新 · 最后更新见 commit 时间</sub>
