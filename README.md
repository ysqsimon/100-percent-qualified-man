## 项目说明（中文）

理想男友打分器，是一个带点玩笑和自嘲意味的小网站：从女生视角，把恋爱中的“条条框框”拆成 100 道小题，用 5 分制快速作答，最终计算一个 0–100 的分数。

它不是评判，不是标签，更不是人生 KPI。人不是清单，关系也不是考试。这个项目更像是一个轻松的梳理与对话引子——
- 用一点点戏谑看看“理想型”的想象与现实的距离；
- 和自己、和对方聊聊彼此在意的点；
- 保持善意与边界，不拿分数当真。

如果某些题目不适合你，请把它当作一次温柔的讨论契机，而非“标准答案”。

## About This Project (English)

This “Qualified Man Scoring” site is a playful, tongue‑in‑cheek quiz: from a girl’s perspective, 100 bite‑size prompts rated on a 5‑point scale, producing a score from 0 to 100.

It’s not a judgment, label, or life KPI. People aren’t checklists, and relationships aren’t exams. Think of it as a light conversation starter:
- Gently reflect on the gap between an “ideal type” and reality;
- Talk about what actually matters to you and your partner;
- Keep kindness and boundaries; don’t take the score too seriously.

If any items don’t fit your context, treat them as prompts for discussion—not “correct answers.”

## Getting Started

```bash
pnpm install
pnpm run dev
```

## Deploy to GitHub Pages

1) Create a GitHub repo and push this project. Ensure your default branch is `main`.

2) In GitHub → Settings → Pages:
- Source: GitHub Actions

3) The included workflow `.github/workflows/deploy.yml` will:
- Install deps with pnpm
- Build with a base path derived from the repo name
- Upload and deploy to Pages

4) Push to `main` and wait for the workflow. Your site will be live at:
`https://<your-username>.github.io/<repo-name>/`

Notes:
- The workflow copies `dist/index.html` to `dist/404.html` for SPA routing.
- If you use a custom domain or user/organization page, adjust the `--base` accordingly.
