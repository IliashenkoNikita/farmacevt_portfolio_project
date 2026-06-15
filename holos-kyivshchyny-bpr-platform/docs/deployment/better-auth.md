# Better Auth Configuration

Better Auth is configured in:

- `src/lib/auth/better-auth.ts`
- `src/app/api/auth/[...all]/route.ts`
- `src/lib/auth/auth-client.ts`

## Required Environment Variables

Set these in Vercel for Production, Preview, and Development:

```env
BETTER_AUTH_SECRET=<random 32+ character high-entropy secret>
BETTER_AUTH_URL=https://farmacevt-portfolio-project.vercel.app
NEXT_PUBLIC_APP_URL=https://farmacevt-portfolio-project.vercel.app
APP_URL=https://farmacevt-portfolio-project.vercel.app
DATABASE_URL=<your hosted PostgreSQL/CockroachDB connection string>
```

`AUTH_SECRET` and `AUTH_URL` are still accepted as compatibility aliases, but `BETTER_AUTH_SECRET` and `BETTER_AUTH_URL` are the canonical Better Auth names.

## Secret Generation

On Windows PowerShell:

```powershell
$bytes = New-Object byte[] 48
$rng = [System.Security.Cryptography.RandomNumberGenerator]::Create()
$rng.GetBytes($bytes)
[Convert]::ToBase64String($bytes)
$rng.Dispose()
```

Put the generated value into `BETTER_AUTH_SECRET`.

## Database Update

The Prisma schema includes the required Better Auth fields and the `Verification` table. Before using Better Auth against a hosted database, apply the schema:

```powershell
npx pnpm@10.12.1 prisma db push
```

For a production migration workflow, replace `db push` with a proper Prisma migration baseline before final go-live.
