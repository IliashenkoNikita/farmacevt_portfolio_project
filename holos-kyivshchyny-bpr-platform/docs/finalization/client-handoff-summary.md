# Client Handoff Summary

Status: IN_PROGRESS

## Delivered

| Area                               | Status      | Evidence                                            | Notes                                           |
| ---------------------------------- | ----------- | --------------------------------------------------- | ----------------------------------------------- |
| Public site                        | DONE        | Routes and e2e tests                                |                                                 |
| Events/courses                     | DONE        | Routes, demo data, admin pages                      |                                                 |
| Event registration                 | DONE        | Forms, service logic, e2e tests                     |                                                 |
| Personal cabinet                   | DONE        | Cabinet routes and e2e tests                        |                                                 |
| Materials                          | DONE        | Cabinet/admin routes and upload policy              |                                                 |
| Testing                            | DONE        | Service logic and tests                             |                                                 |
| BPR/CPD certificates               | DONE        | PDF and verification services                       | Legal wording pending.                          |
| PDF download                       | DONE        | Cabinet/admin e2e tests                             | Storage verification pending.                   |
| QR verification                    | DONE        | Service and public verification route               | Deployed QR scan pending.                       |
| Admin dashboard                    | DONE        | Admin routes and e2e tests                          |                                                 |
| Excel export                       | DONE        | Export service with metadata and formula protection |                                                 |
| Notifications/reminders            | IN_PROGRESS | Notification scheduling service                     | Production SMTP adapter and live sends pending. |
| Provider/accreditation information | DONE        | Public page and admin provider documents            | Legal approval pending.                         |
| BPR portfolio                      | DONE        | Cabinet route                                       | UAT pending.                                    |
| License renewal reminders          | DONE        | Cabinet route                                       | UAT pending.                                    |

## Not Ready For Production

- Legal/provider sign-off is missing.
- Real production secrets are not configured in hosting.
- Live auth/email/storage/database integrations are not verified.
- Backup/restore test is not complete.
- Monitoring, alerting, incident owner, and WAF/rate limits are not confirmed.
- Deployed UAT, Lighthouse, accessibility, load, and security scan evidence is not complete.

## Local Validation Evidence

- `npx pnpm@10.12.1 install --frozen-lockfile`: passed.
- `npx pnpm@10.12.1 format`: passed.
- `npx pnpm@10.12.1 lint`: passed.
- `npx pnpm@10.12.1 env:check`: passed locally.
- `NODE_ENV=production pnpm env:check`: fails with missing required secrets and passes with dummy complete values.
- `npx pnpm@10.12.1 prisma:validate`: passed with non-secret local `DATABASE_URL`.
- `npx pnpm@10.12.1 typecheck`: passed.
- `npx pnpm@10.12.1 test`: passed, 10 files and 29 tests.
- `npx pnpm@10.12.1 build`: passed.
- `npx pnpm@10.12.1 test:a11y`: passed.
- `npx pnpm@10.12.1 test:e2e`: passed, 17 tests.
- `npx pnpm@10.12.1 security:scan`: passed high threshold; 1 low and 3 moderate advisories reported.

## Handoff Package

- `docs/client/CLIENT_FILES_RECONCILIATION.md`
- `docs/finalization/legal-provider-signoff.md`
- `docs/finalization/production-secrets-checklist.md`
- `docs/finalization/live-integrations-checklist.md`
- `docs/finalization/production-operations-runbook.md`
- `docs/finalization/deployed-environment-checks.md`
- `docs/finalization/go-live-decision.md`
