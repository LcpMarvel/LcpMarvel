<!--
  这是主页 README 的「模板」。Action 只会替换下面成对锚点 (START/END) 之间的内容，
  锚点以外的文字（包括这段说明、标题、手写介绍）永远不会被脚本动到。
  想改版式 / 加新板块，直接改这个文件即可。
-->

# 你好，我是 LcpMarvel 👋

<!-- INTRO:START -->
最近主要在写 AI Agent Skill：把 TTS 配音、BPMN 流程建模、选题成稿这类具体活儿封装成 Claude Code、Codex 等工具能直接调用的技能，豆包和 Gemini 的语音合成各做了一层更可控的封装。顺手维护一个 Rust 单二进制的微信视频号本地自动化 CLI，同样能被各类 agent 当技能调用。眼下比较关注的，是怎么让 agent 在语音、流程图这些细分领域真正干得了活。
<!-- INTRO:END -->

## 🛠 最近在折腾

<!-- RECENT:START -->
- **[volce-tts-director](https://github.com/LcpMarvel/volce-tts-director)** — 火山引擎豆包中文 TTS skill：多音字校对、语音指令、引用上文与音频生成，可通过 npx skills 安装。 <sub>(Python · 2026-10-10)</sub>
- **[sph](https://github.com/LcpMarvel/sph)** — 微信视频号本地自动化 CLI · Rust 单二进制 · 发布/定时/批量/下载 · 自带 Agent Skill，Claude Code / Codex 等 90+ AI 工具可直接调用（npx skills add LcpMarvel/sph） <sub>(Rust · ★1 · 2026-10-09)</sub>
- **[briefcast](https://github.com/LcpMarvel/briefcast)** — Turn any topic into a listener-ready text brief — an AI agent skill for research, verification, and ear-first writing <sub>(Python · 2026-09-30)</sub>
- **[tramito-skill](https://github.com/LcpMarvel/tramito-skill)** — Tramito BPMN assistant skill — describe a business process, get a standard BPMN 2.0 file plus an online viewer link (bpmn-js rendered, one-click PNG export). 流程图助手公开技能。 <sub>(JavaScript · 2026-09-29)</sub>
- **[tramito-layout](https://github.com/LcpMarvel/tramito-layout)** — A BPMN layout compiler: ELK-BPMN JSON in → laid-out BPMN 2.0 XML out. elkjs placement + hand-rolled edge routing + LLM-friendly validation diagnostics. <sub>(TypeScript · ★1 · 2026-09-29)</sub>
- **[gemini-tts-director](https://github.com/LcpMarvel/gemini-tts-director)** — An AI agent skill for expressive Gemini TTS: voice discovery, readable scripts, character casting, native dialogue, and crowd mixing. <sub>(Python · 2026-09-28)</sub>
<!-- RECENT:END -->

## 📊 GitHub 统计

<p align="center">
  <img height="165" src="https://github-readme-stats.vercel.app/api?username=LcpMarvel&show_icons=true&hide_border=true&theme=transparent" alt="stats" />
  <img height="165" src="https://github-readme-stats.vercel.app/api/top-langs/?username=LcpMarvel&layout=compact&hide_border=true&theme=transparent" alt="langs" />
</p>

---

<sub>本主页的「最近在折腾」与「介绍」由 GitHub Actions 每日自动刷新 · 最后更新见 commit 时间</sub>
