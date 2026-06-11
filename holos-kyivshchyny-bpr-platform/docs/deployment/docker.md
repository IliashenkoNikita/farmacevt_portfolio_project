# Docker Deployment

Date: 2026-06-11

This Docker setup is intended for local staging/demo checks and private repository readiness. It does not remove the current production blockers: demo-cookie auth, static demo data, missing legal/provider approval, and missing live integrations.

## Files

- `Dockerfile` builds a production Next.js standalone image.
- `.dockerignore` keeps secrets, dependencies, build output, uploads, reports, and logs out of the Docker build context.
- `docker-compose.yml` runs the app with a local PostgreSQL container.

## Local Docker Run

From the app directory:

```powershell
cd "D:\downloads D\farmacevt_portfolio_project\holos-kyivshchyny-bpr-platform"
docker compose up --build
```

Open:

```text
http://localhost:3000/uk
http://localhost:3000/api/health
```

Stop:

```powershell
docker compose down
```

Remove the local database volume if you intentionally want a clean database:

```powershell
docker compose down -v
```

## Image Build Only

```powershell
docker build -t holos-kyivshchyny-bpr-platform:staging .
```

## Environment Notes

The compose file uses local non-secret demo values. For staging or production hosting, configure real values in the hosting secret store instead of committing them to Git.

Required runtime variables:

- `DATABASE_URL`
- `AUTH_SECRET`
- `AUTH_URL`
- `APP_URL`
- `NEXT_PUBLIC_APP_URL`
- `CERTIFICATE_SIGNING_SECRET`
- `RATE_LIMIT_SECRET`
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_FROM`
- `FILE_STORAGE_PROVIDER`

## Git Push Notes

Recommended: push `holos-kyivshchyny-bpr-platform` as its own private GitHub repository.

If pushing from the parent `farmacevt_portfolio_project` repository, the parent `.gitignore` now ignores the unrelated `elite-frontend-security-animation-skills/` folder and generated artifacts across nested projects.

Before push:

```powershell
npx pnpm@10.12.1 format
npx pnpm@10.12.1 lint
npx pnpm@10.12.1 typecheck
npx pnpm@10.12.1 test
npx pnpm@10.12.1 build
git status --ignored --short
```

Confirm these remain ignored:

- `.env`
- `.env.*` except `.env.example`
- `node_modules/`
- `.next/`
- `test-results/`
- `coverage/`
- `playwright-report/`
- `uploads/`
- `*.log`
- `*.tsbuildinfo`
