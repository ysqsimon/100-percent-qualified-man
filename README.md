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
