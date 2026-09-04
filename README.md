<!--
  这是主页 README 的「模板」。Action 只会替换下面成对锚点 (START/END) 之间的内容，
  锚点以外的文字（包括这段说明、标题、手写介绍）永远不会被脚本动到。
  想改版式 / 加新板块，直接改这个文件即可。
-->

# 你好，我是 LcpMarvel 👋

<!-- INTRO:START -->
主要用 Rust 写一些收拾真实世界脏数据的工具：修复损坏的 JSON、后处理文档解析结果、安全读写 Steam 本地配置，基本原则是不抛异常、不丢数据、不擅自改动。另一条线是 AI 工作流，比如让 Claude Code 接入智谱 GLM，或者让 agent 产出真正有设计感的飞书画板。偶尔也从 Dota 2 的游戏文件里提取点地图素材。
<!-- INTRO:END -->

## 🛠 最近在折腾

<!-- RECENT:START -->
- **[safe-json-repair](https://github.com/LcpMarvel/safe-json-repair)** — A JSON repair library that never throws and never silently drops data <sub>(Rust · 2026-09-01)</sub>
- **[zclaude](https://github.com/LcpMarvel/zclaude)** — Portable Claude Code wrapper for Zhipu/Z.ai GLM — no embedded API keys <sub>(Shell · 2026-08-31)</sub>
- **[feishu-whiteboard-pro](https://github.com/LcpMarvel/feishu-whiteboard-pro)** — A Claude Code / agent skill for building genuinely designed, editable Feishu / Lark (飞书) whiteboards — deliberate composition, real hierarchy, a gated pipeline with pre-render fit-check and independent design critique. <sub>(JavaScript · ★57 · 2026-08-31)</sub>
- **[dota2-map-visual-kit](https://github.com/LcpMarvel/dota2-map-visual-kit)** — Read-only Rust toolkit for extracting Dota 2 map overviews, world-to-pixel projections, and VPK provenance. <sub>(Rust · 2026-08-10)</sub>
- **[steam-local-kit](https://github.com/LcpMarvel/steam-local-kit)** — 跨平台 Rust 库：发现 Steam 安装，安全读取、编辑和恢复本地配置。Cross-platform Rust library for safely managing local Steam configuration. <sub>(Rust · 2026-07-16)</sub>
- **[mineru-refine](https://github.com/LcpMarvel/mineru-refine)** — MinerU 解析结果后处理器：修复伪标题、跨页断句/拆表、页面家具，绝不新增一字、fail-open 不搞崩上游。Rust 核心，Python/JS  绑定。 <sub>(Rust · ★11 · 2026-07-12)</sub>
<!-- RECENT:END -->

## 📊 GitHub 统计

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=LcpMarvel&show_icons=true&hide_border=true&theme=transparent" alt="stats" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=LcpMarvel&layout=compact&hide_border=true&theme=transparent" alt="langs" />
</p>

---

<sub>本主页的「最近在折腾」与「介绍」由 GitHub Actions 每日自动刷新 · 最后更新见 commit 时间</sub>
