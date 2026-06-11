# Staging Demo Deployment On Vercel

Date: 2026-06-11

Purpose: deploy the current app as a client-facing staging/UAT demo. This is not a production launch. The app still contains demo-cookie auth and static demo data in core flows.

Official references:

- Vercel Next.js docs: https://vercel.com/docs/frameworks/full-stack/nextjs
- Vercel environment variables docs: https://vercel.com/docs/environment-variables

## Recommended Path

Use Vercel for the fastest client demo because this is a Next.js App Router project and Vercel handles Next.js builds, preview deployments, generated URLs, and environment variables directly.

## Preflight

From the app directory:

```powershell
cd "D:\downloads D\farmacevt_portfolio_project\holos-kyivshchyny-bpr-platform"
npx pnpm@10.12.1 install
npx pnpm@10.12.1 format
npx pnpm@10.12.1 lint
npx pnpm@10.12.1 typecheck
npx pnpm@10.12.1 test
npx pnpm@10.12.1 build
```

If validating Prisma locally:

```powershell
$env:DATABASE_URL="postgresql://user:pass@localhost:5432/holos"
npx pnpm@10.12.1 prisma validate
npx pnpm@10.12.1 prisma generate
```

## GitHub Import Flow

1. Create a private GitHub repository.
2. Push the project.
3. In Vercel, choose **Add New Project** and import the GitHub repository.
4. If the GitHub repository root is `farmacevt_portfolio_project`, set Vercel **Root Directory** to:

```text
holos-kyivshchyny-bpr-platform
```

5. Keep framework as **Next.js**.
6. Keep install/build defaults unless Vercel asks:

```text
Install Command: pnpm install
Build Command: pnpm build
Output Directory: .next
```

7. Add environment variables before the first deployment.

## Minimum Environment Variables For Client Demo

Use staging-safe values. Do not use production secrets unless this is a secured production environment.

```env
AUTH_SECRET="replace-with-random-staging-secret-32-plus-chars"
AUTH_URL="https://your-vercel-preview-or-domain"
APP_URL="https://your-vercel-preview-or-domain"
NEXT_PUBLIC_APP_URL="https://your-vercel-preview-or-domain"
CERTIFICATE_SIGNING_SECRET="replace-with-random-staging-certificate-secret"
RATE_LIMIT_SECRET="replace-with-random-staging-rate-limit-secret"

SMTP_HOST="localhost"
SMTP_PORT="1025"
SMTP_USER=""
SMTP_PASSWORD=""
SMTP_FROM="no-reply@example.test"
EMAIL_SERVER_HOST="localhost"
EMAIL_SERVER_PORT="1025"
EMAIL_FROM="no-reply@example.test"

FILE_STORAGE_PROVIDER="local"
FILE_STORAGE_PATH="./uploads"
FILE_STORAGE_BUCKET=""
FILE_STORAGE_ACCESS_KEY=""
FILE_STORAGE_SECRET_KEY=""

SENTRY_DSN=""
HEALTHCHECK_SECRET=""
SMS_PROVIDER_KEY=""
VIBER_PROVIDER_KEY=""
```

For a cleaner health check, also create a staging PostgreSQL database and set:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?sslmode=require"
```

If `DATABASE_URL` is missing or unreachable, `/api/health` will still respond but report database as `unavailable`.

## After Deploy

Open:

```text
https://your-deployment-url/uk
https://your-deployment-url/api/health
```

Demo credentials currently active:

```text
superadmin@holos.example / demo-password
admin@holos.example / demo-password
user1@holos.example / demo-password
```

## Client Demo Script

Show these routes:

```text
/uk
/uk/events
/uk/events/farmakonahliad-2026
/uk/experts
/uk/bpr
/uk/accreditation
/uk/auth/sign-in
/uk/cabinet
/uk/admin
/uk/certificate/verify/verify_demo_active_8YK4mP
```

Positioning for the client:

- This is a staging demo/UAT link.
- Public pages, cabinet pages, admin pages, tests, certificate preview/verification, and exports are visible.
- Real production data, real authentication, real PostgreSQL CRUD, real notifications, file storage, and legal/provider approval are still the next production phase.

## Vercel CLI Alternative

From the app directory:

```powershell
cd "D:\downloads D\farmacevt_portfolio_project\holos-kyivshchyny-bpr-platform"
npx vercel@latest login
npx vercel@latest
```

When prompted:

- Link to an existing project: choose **No** for the first deployment.
- Project name: `holos-kyivshchyny-bpr-platform`
- Framework: Next.js
- Root directory: current directory
- Build command: `pnpm build`

Use the Vercel dashboard to add environment variables, then redeploy.

## Current Release Decision

For a client walkthrough: **GO WITH RISKS** as a staging demo.

For real users or production traffic: **NO-GO** until demo auth/data is replaced, legal/provider approval is recorded, production secrets are configured, monitoring/backups exist, and live integrations are verified.
