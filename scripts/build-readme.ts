/**
 * 拉取自己最新的公开仓库 → 拼出「最近在折腾」板块；
 * 把这些动态喂给 GitHub Models 写一段「介绍」；
 * 然后只回填 README.template.md 里成对锚点之间的内容，产出 README.md。
 *
 * 设计取向：少兜底、早抛异常。缺 token / 接口异常一律直接 throw，
 * 让 Action 红着退出，而不是默默生成一个半成品 README 覆盖掉好好的主页。
 */

const GH_USER = process.env.GH_USER ?? "LcpMarvel";
const GH_TOKEN = process.env.GH_TOKEN;
const MODEL = process.env.MODEL ?? "openai/gpt-4o";
const RECENT_LIMIT = 6;

if (!GH_TOKEN) throw new Error("缺少 GH_TOKEN：在 workflow 里把 GITHUB_TOKEN 传进来");

type Repo = {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  pushed_at: string;
};

async function gh<T>(path: string): Promise<T> {
  const res = await fetch(`https://api.github.com${path}`, {
    headers: {
      authorization: `Bearer ${GH_TOKEN}`,
      accept: "application/vnd.github+json",
      "user-agent": "profile-readme-bot",
    },
  });
  if (!res.ok) throw new Error(`GitHub API ${path} → ${res.status} ${await res.text()}`);
  return res.json() as Promise<T>;
}

function fmtDate(iso: string): string {
  // 用 commit 信息里能看的日期即可，时区差一天无所谓
  return iso.slice(0, 10);
}

async function buildRecent(): Promise<{ markdown: string; repos: Repo[] }> {
  const all = await gh<Repo[]>(`/users/${GH_USER}/repos?sort=pushed&per_page=100`);
  const repos = all
    // 排除 fork、归档，以及承载本主页的 profile 仓库（名字恒等于用户名）
    .filter((r) => !r.fork && !r.archived && r.name.toLowerCase() !== GH_USER.toLowerCase())
    .sort((a, b) => b.pushed_at.localeCompare(a.pushed_at))
    .slice(0, RECENT_LIMIT);

  if (repos.length === 0) throw new Error(`${GH_USER} 没有可展示的公开仓库`);

  const rows = repos.map((r) => {
    const meta = [r.language, r.stargazers_count > 0 ? `★${r.stargazers_count}` : null]
      .filter(Boolean)
      .join(" · ");
    const desc = r.description?.trim() || "—";
    const tail = meta ? ` <sub>(${meta} · ${fmtDate(r.pushed_at)})</sub>` : ` <sub>(${fmtDate(r.pushed_at)})</sub>`;
    return `- **[${r.name}](${r.html_url})** — ${desc}${tail}`;
  });

  return { markdown: rows.join("\n"), repos };
}

async function buildIntro(repos: Repo[]): Promise<string> {
  const noLlm = process.env.NO_LLM === "1";
  if (noLlm) {
    return "_（介绍文案待补充：在仓库 Variables 里去掉 NO_LLM 即可启用自动生成）_";
  }

  const context = repos
    .map((r) => `- ${r.name}: ${r.description ?? "无描述"} [${r.language ?? "?"}]`)
    .join("\n");

  const body = {
    model: MODEL,
    temperature: 0.7,
    messages: [
      {
        role: "system",
        content:
          "你在帮一位开发者写 GitHub 主页的自我介绍。要求：中文，2-3 句，自然不浮夸，" +
          "可以从最近的项目里提炼出关注方向，不要逐条罗列项目，不要用「热爱」「致力于」这类套话。直接输出正文，不要加引号或标题。",
      },
      { role: "user", content: `这是我最近活跃的仓库，请据此写介绍：\n${context}` },
    ],
  };

  // GitHub Models：用 GITHUB_TOKEN 即可鉴权，需要 workflow 里 permissions: models: read
  const res = await fetch("https://models.github.ai/inference/chat/completions", {
    method: "POST",
    headers: {
      authorization: `Bearer ${GH_TOKEN}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub Models → ${res.status} ${await res.text()}`);

  const data = (await res.json()) as { choices: { message: { content: string } }[] };
  const text = data.choices?.[0]?.message?.content?.trim();
  if (!text) throw new Error("GitHub Models 返回空内容");
  return text;
}

function fillBlock(template: string, key: string, content: string): string {
  const start = `<!-- ${key}:START -->`;
  const end = `<!-- ${key}:END -->`;
  const i = template.indexOf(start);
  const j = template.indexOf(end);
  if (i === -1 || j === -1 || j < i) throw new Error(`模板里找不到成对锚点 ${key}`);
  return template.slice(0, i + start.length) + "\n" + content + "\n" + template.slice(j);
}

const template = await Bun.file("README.template.md").text();
const { markdown: recent, repos } = await buildRecent();
const intro = await buildIntro(repos);

let out = fillBlock(template, "INTRO", intro);
out = fillBlock(out, "RECENT", recent);

await Bun.write("README.md", out);
console.log(`README.md 已生成：${repos.length} 个仓库，介绍 ${intro.length} 字`);
