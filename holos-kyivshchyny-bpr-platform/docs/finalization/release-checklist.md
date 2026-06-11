# Release Checklist

## Code Gate

- `pnpm lint`
- `pnpm typecheck`
- `pnpm test`
- `pnpm build`
- `pnpm test:e2e`
- `pnpm exec prisma validate`

## Product Gate

- Public event catalog, event detail, registration, profile, cabinet, testing, certificate download, public verification, and admin flows verified.
- Admin export includes metadata and formula-injection protection.
- Certificate eligibility prevents duplicate active certificates.
- Upload policy accepts approved document/image formats and rejects scripts.

## Operations Gate

- Production database URL, auth secret, OAuth credentials, SMTP credentials, storage credentials, and public app URL configured outside Git.
- Backup and restore procedure rehearsed against a non-production database.
- Monitoring receives health endpoint checks from `/api/health`.
- Incident response owner and client escalation contact confirmed.

## Release Decision

Current decision: `GO WITH RISKS` for client demo and UAT. Production is blocked by legal sign-off, hosting credentials, and live integration evidence.
