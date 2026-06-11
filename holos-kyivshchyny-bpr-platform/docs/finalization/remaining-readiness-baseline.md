# Remaining Readiness Baseline

Date: 2026-06-10

## Repository State

| Area                    | Status          | Evidence                                                                             | Notes                                                                                                       |
| ----------------------- | --------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| Technical assignment    | DONE            | `docs/client/Технічне завдання-2.docx`; `docs/client/CLIENT_FILES_RECONCILIATION.md` | DOCX scope reconciled.                                                                                      |
| Block scheme            | IN_PROGRESS     | `docs/client/Block_scheme.pdf`                                                       | PDF present; visual/manual review still required.                                                           |
| Public site             | DONE            | App routes under `src/app/[locale]`; Playwright public tests                         | Covers home, events, experts, BPR, accreditation, contacts, verification.                                   |
| Cabinet                 | DONE            | Cabinet routes and Playwright tests                                                  | Covers profile, events, materials, tests, certificates, portfolio, reminders pages.                         |
| Admin                   | DONE            | Admin routes and Playwright tests                                                    | Covers events, speakers, materials, tests, registrations, certificates, exports, audit, provider documents. |
| Legal/provider approval | WAITING_LEGAL   | `docs/finalization/legal-provider-signoff.md`                                        | No real sign-off evidence provided.                                                                         |
| Production secrets      | WAITING_HOSTING | `.env.example`; `pnpm env:check`                                                     | Real values must be set outside Git.                                                                        |
| Live integrations       | WAITING_HOSTING | `docs/finalization/live-integrations-checklist.md`                                   | Requires deployed environment.                                                                              |
| Operations              | WAITING_HOSTING | `docs/finalization/production-operations-runbook.md`                                 | Requires monitoring, backups, owner contacts, WAF/rate limits.                                              |
| Deployed checks         | WAITING_HOSTING | `docs/finalization/deployed-environment-checks.md`                                   | Requires staging or production URL.                                                                         |

## Inspection Inputs

- `package.json`
- `.env.example`
- `README.md`
- `docs/deployment/*`
- `docs/security/*`
- `prisma/schema.prisma`
- `src/lib/auth/*`
- `src/lib/security/upload-policy.ts`
- `src/server/services/certificate-service.ts`
- `src/app/[locale]/certificate/verify/[code]/page.tsx`
- `src/server/services/notification-service.ts`
- `.github/workflows/*`

## Local Command Baseline

| Command                                                      | Status | Evidence                                                                        |
| ------------------------------------------------------------ | ------ | ------------------------------------------------------------------------------- |
| `npx pnpm@10.12.1 install --frozen-lockfile`                 | DONE   | Passed; lockfile already up to date.                                            |
| `npx pnpm@10.12.1 format`                                    | DONE   | Passed after formatting new docs.                                               |
| `npx pnpm@10.12.1 lint`                                      | DONE   | Passed; no unfinished markers found.                                            |
| `npx pnpm@10.12.1 env:check`                                 | DONE   | Passed locally using `.env.example`.                                            |
| `NODE_ENV=production pnpm env:check` with missing env        | DONE   | Failed as expected with missing required secrets.                               |
| `NODE_ENV=production pnpm env:check` with dummy complete env | DONE   | Passed with non-secret dummy values.                                            |
| `npx pnpm@10.12.1 typecheck`                                 | DONE   | Passed.                                                                         |
| `npx pnpm@10.12.1 test`                                      | DONE   | Passed; 10 test files, 29 tests.                                                |
| `npx pnpm@10.12.1 build`                                     | DONE   | Passed.                                                                         |
| `npx pnpm@10.12.1 prisma:validate`                           | DONE   | Passed with non-secret local `DATABASE_URL`.                                    |
| `npx pnpm@10.12.1 test:a11y`                                 | DONE   | Passed; 1 Playwright accessibility smoke test.                                  |
| `npx pnpm@10.12.1 test:e2e`                                  | DONE   | Passed; 17 Playwright tests.                                                    |
| `npx pnpm@10.12.1 security:scan`                             | DONE   | Passed at high audit threshold; audit reported 1 low and 3 moderate advisories. |

## Current Decision

Status: NO-GO for production.

Reason: legal/provider sign-off, real production secrets, live integration evidence, backup/restore proof, monitoring/alerts, WAF/rate limit configuration, and deployed checks are not complete.
