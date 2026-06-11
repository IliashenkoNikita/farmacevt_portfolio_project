# Production Secrets Checklist

Status: WAITING_HOSTING

Rule: no real secret values belong in Git. Set production values in the hosting provider secret store.

## Required Variables

| Variable                     | Scope                  | Status          | Owner                | Evidence | Notes                                           |
| ---------------------------- | ---------------------- | --------------- | -------------------- | -------- | ----------------------------------------------- |
| `DATABASE_URL`               | Server-only            | WAITING_HOSTING | Hosting owner        |          | PostgreSQL connection string.                   |
| `AUTH_SECRET`                | Server-only            | WAITING_HOSTING | Hosting owner        |          | Minimum 32 random characters.                   |
| `AUTH_URL`                   | Server-only            | WAITING_HOSTING | Hosting owner        |          | Auth callback origin if used.                   |
| `APP_URL`                    | Server-only            | WAITING_HOSTING | Hosting owner        |          | Canonical app URL.                              |
| `NEXT_PUBLIC_APP_URL`        | Public                 | WAITING_HOSTING | Hosting owner        |          | Browser-visible app URL.                        |
| `GOOGLE_CLIENT_ID`           | Public/provider        | ACCEPTED_RISK   | Client/hosting owner |          | Required only if Google OAuth is enabled.       |
| `GOOGLE_CLIENT_SECRET`       | Server-only            | ACCEPTED_RISK   | Client/hosting owner |          | Required only if Google OAuth is enabled.       |
| `FACEBOOK_CLIENT_ID`         | Public/provider        | ACCEPTED_RISK   | Client/hosting owner |          | Required only if Facebook OAuth is enabled.     |
| `FACEBOOK_CLIENT_SECRET`     | Server-only            | ACCEPTED_RISK   | Client/hosting owner |          | Required only if Facebook OAuth is enabled.     |
| `APPLE_CLIENT_ID`            | Public/provider        | ACCEPTED_RISK   | Client/hosting owner |          | Required only if Apple OAuth is enabled.        |
| `APPLE_CLIENT_SECRET`        | Server-only            | ACCEPTED_RISK   | Client/hosting owner |          | Required only if Apple OAuth is enabled.        |
| `APPLE_TEAM_ID`              | Server-only            | ACCEPTED_RISK   | Client/hosting owner |          | Required only if Apple OAuth is enabled.        |
| `APPLE_KEY_ID`               | Server-only            | ACCEPTED_RISK   | Client/hosting owner |          | Required only if Apple OAuth is enabled.        |
| `SMTP_HOST`                  | Server-only            | WAITING_HOSTING | Hosting owner        |          | Real mail provider host.                        |
| `SMTP_PORT`                  | Server-only            | WAITING_HOSTING | Hosting owner        |          | Usually 465, 587, or provider-specific.         |
| `SMTP_USER`                  | Server-only            | WAITING_HOSTING | Hosting owner        |          | May be blank only if provider allows.           |
| `SMTP_PASSWORD`              | Server-only            | WAITING_HOSTING | Hosting owner        |          | Required for authenticated SMTP.                |
| `SMTP_FROM`                  | Server-only            | WAITING_HOSTING | Client/hosting owner |          | Approved sender address.                        |
| `FILE_STORAGE_PROVIDER`      | Server-only            | WAITING_HOSTING | Hosting owner        |          | `local`, `s3`, or provider name.                |
| `FILE_STORAGE_BUCKET`        | Server-only            | WAITING_HOSTING | Hosting owner        |          | Required for object storage.                    |
| `FILE_STORAGE_PATH`          | Server-only            | ACCEPTED_RISK   | Hosting owner        |          | Development/local storage only.                 |
| `FILE_STORAGE_ACCESS_KEY`    | Server-only            | WAITING_HOSTING | Hosting owner        |          | Required for object storage.                    |
| `FILE_STORAGE_SECRET_KEY`    | Server-only            | WAITING_HOSTING | Hosting owner        |          | Required for object storage.                    |
| `CERTIFICATE_SIGNING_SECRET` | Server-only            | WAITING_HOSTING | Hosting owner        |          | Verification/signing secret.                    |
| `RATE_LIMIT_SECRET`          | Server-only            | WAITING_HOSTING | Hosting owner        |          | Shared rate-limit secret if applicable.         |
| `SENTRY_DSN`                 | Server-only/public DSN | WAITING_HOSTING | Hosting owner        |          | Error logging DSN if used.                      |
| `HEALTHCHECK_SECRET`         | Server-only            | ACCEPTED_RISK   | Hosting owner        |          | Only needed if health endpoint becomes private. |

## Validation

- Local command: `pnpm env:check`
- Production command: `NODE_ENV=production pnpm env:check`
- `.env.production` and all `.env.*` files are ignored by `.gitignore`; `.env.example` remains committed.
- Production must fail fast if required variables are missing or weak.

## Deployment Platform Notes

Set server-only variables in the deployment platform secret manager. Set `NEXT_PUBLIC_APP_URL` as a public build/runtime variable only; never expose secrets with the `NEXT_PUBLIC_` prefix.
