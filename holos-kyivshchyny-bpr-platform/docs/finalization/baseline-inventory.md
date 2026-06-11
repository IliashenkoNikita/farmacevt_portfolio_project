# Baseline Inventory

Date: 2026-06-11

## Project Snapshot

| Area             | Inventory                                                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Package manager  | `pnpm@10.12.1` declared in `package.json`. Plain `pnpm` is not on this shell PATH; baseline commands used `npx pnpm@10.12.1` as the pinned launcher. |
| Runtime observed | Node.js `25.2.1` from `C:\nvm4w\nodejs\node.exe`.                                                                                                    |
| Framework        | Next.js App Router. Build reports Next.js `16.2.9` with Turbopack.                                                                                   |
| Language         | Strict TypeScript with `.tsx` UI and `.ts` backend/domain files.                                                                                     |
| Styling/UI       | Tailwind CSS v4, shadcn-style local components, GSAP client animation components.                                                                    |
| Database         | Prisma schema targets PostgreSQL through `DATABASE_URL`.                                                                                             |
| Tests            | Vitest unit/integration tests and Playwright e2e/a11y tests.                                                                                         |
| CI               | GitHub Actions CI, security, performance workflows plus Dependabot are present.                                                                      |

## Client Source Files

| File                                         | Status       | Notes                                                                                                                                                                 |
| -------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `docs/client/Технічне завдання-2.docx`       | Present/read | Text extraction confirms requirements for public site, events, cabinet, registration, materials, testing, certificates, admin, exports, and BPR provider positioning. |
| `docs/client/Block_scheme.pdf`               | Present      | No local PDF text extractor is available; visual/manual review remains required.                                                                                      |
| `docs/client/CLIENT_FILES_RECONCILIATION.md` | Present      | Summarizes scope and notes PDF visual review need.                                                                                                                    |

## Route Structure

| Route group | Current routes                                                                                                                                                                                                                                                      |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Public      | `/[locale]`, `/[locale]/events`, `/[locale]/events/[slug]`, `/[locale]/experts`, `/[locale]/experts/[slug]`, `/[locale]/bpr`, `/[locale]/accreditation`, `/[locale]/about`, `/[locale]/contacts`, `/[locale]/certificate/verify/[code]`                             |
| Auth        | `/[locale]/auth/sign-in`, `/[locale]/auth/sign-up`, `/[locale]/auth/callback`                                                                                                                                                                                       |
| Cabinet     | `/[locale]/cabinet`, `/profile`, `/events`, `/materials`, `/tests`, `/certificates`, `/bpr-portfolio`, `/license-reminders`                                                                                                                                         |
| Admin       | `/[locale]/admin`, `/events`, `/events/new`, `/events/[id]/edit`, `/speakers`, `/speakers/new`, `/speakers/[id]/edit`, `/materials`, `/tests`, `/tests/new`, `/tests/[id]/edit`, `/registrations`, `/certificates`, `/exports`, `/audit-log`, `/provider-documents` |
| API         | `/api/health`                                                                                                                                                                                                                                                       |

## Auth And Session Implementation

| Area                  | Current state                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Sign-in               | `src/server/actions/auth-actions.ts` reads static demo users and sets `holos-session` and `holos-role` cookies.                       |
| Session helper        | `src/lib/auth/session.ts` reads `holos-session` and resolves user from static demo data.                                              |
| Middleware protection | `middleware.ts` redirects cabinet routes without `holos-session` and admin routes without role cookie value `ADMIN` or `SUPER_ADMIN`. |
| Better Auth           | `src/lib/auth/better-auth.ts` exists, but the live sign-in path is still demo-cookie based.                                           |
| RBAC helpers          | `src/lib/auth/permissions.ts` and `src/lib/auth/authorization.ts` include permission and object-access primitives.                    |
| Production gap        | Role is trusted from cookie, sessions are not DB-backed, and real email/password auth is not active.                                  |

## Prisma Schema

Models are present for `User`, `Account`, `Session`, `VerificationToken`, `Profile`, `EventCategory`, `Event`, `Speaker`, `EventSpeaker`, `Registration`, `Material`, `Test`, `Question`, `QuestionOption`, `TestAttempt`, `TestAnswer`, `Certificate`, `CertificateVerification`, `Notification`, `AuditLog`, `ProviderDocument`, `FileAsset`, and `AppSetting`.

Indexes and uniqueness already cover major paths: user email, event slug, registration user/event, certificate number, verification code, event status/date, registration status, material visibility, test event, notification schedule/status, audit actor/action, and provider docs.

## Database Access Patterns

| Area          | Current state                                                                                                                                                                     |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Prisma client | `src/lib/db/client.ts` provides a server-side Prisma client.                                                                                                                      |
| Repositories  | `src/server/repositories/README.md` exists, but repository modules are not implemented.                                                                                           |
| Services      | Service helpers exist for audit, certificates, exports, notifications, registrations, and tests. Several operate on in-memory/demo inputs rather than persistent repository data. |
| Seed          | `prisma/seed.ts` currently imports `demoData` and prints mapped values; it does not populate the database.                                                                        |

## Demo Data Usage

Production-facing demo dependencies remain in:

- Public home, events, event detail, experts, accreditation, and certificate verification pages.
- Auth/session actions and helpers.
- Cabinet pages through `CabinetDemoActionForm`.
- Admin pages through `AdminDemoActionForm`.
- E2E setup through direct `holos-session` cookies.
- Seed script through `src/lib/constants/demo-data.ts`.

## Admin And Cabinet Implementation

| Area          | Current state                                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Admin UI      | Routes exist for all required sections, but many forms post demo actions and redirect with success query params.                        |
| Cabinet UI    | Routes exist for profile, events, materials, tests, certificates, portfolio, and reminders, but many actions are demo completion flows. |
| Admin exports | `exportParticipantsAction` generates a workbook from a hardcoded row and records an audit service call.                                 |
| Audit service | `writeAudit` exists but returns an object rather than persisting to Prisma.                                                             |

## File Upload, Notifications, Certificates, Exports

| Area          | Current state                                                                                                                                 |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Upload policy | `src/lib/security/upload-policy.ts` validates allowed extensions, MIME, size, and trusted recording URLs.                                     |
| Storage       | `FileAsset` model exists, but storage adapter and protected download route are not production-complete.                                       |
| Notifications | `src/server/services/notification-service.ts` schedules and logs dev notifications; SMTP and worker jobs are not wired.                       |
| Certificates  | `src/server/services/certificate-service.ts` supports PDF and QR generation primitives, but live pages still verify static demo certificates. |
| Excel         | `src/server/services/export-service.ts` has workbook generation and formula escaping tests, but admin export action uses demo rows.           |

## Security Controls

| Control                     | Current state                                                                                                                            |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Headers                     | `next.config.ts` sets CSP, `nosniff`, referrer policy, permissions policy, frame denial, and HSTS.                                       |
| Rate limiting               | `middleware.ts` has in-memory limits for auth, certificate verification, and tests; production distributed rate limiting remains needed. |
| Env validation              | `tools/env-check.ts` enforces required local and production variables and rejects weak production values.                                |
| Public verification privacy | Existing unit tests cover allowed public fields, but live verification page still reads demo certificates.                               |
| Upload validation           | Unit tests cover file and recording URL policy.                                                                                          |
| Secret scanning             | Security workflow includes Gitleaks, Semgrep, Trivy, and CodeQL.                                                                         |

## Tests

| Suite               | Baseline result                              |
| ------------------- | -------------------------------------------- |
| Unit/integration    | `pnpm test`: 11 files, 30 tests passed.      |
| Accessibility smoke | `pnpm test:a11y`: 1 Playwright test passed.  |
| E2E                 | `pnpm test:e2e`: 19 Playwright tests passed. |

## Baseline Commands

| Command                            | Result                         | Notes                                                                                                                   |
| ---------------------------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| `pnpm install`                     | Failed                         | Plain `pnpm` is not on PATH in this shell.                                                                              |
| `npx pnpm@10.12.1 install`         | Passed                         | Lockfile up to date. pnpm warned that dependency build scripts are awaiting approval.                                   |
| `npx pnpm@10.12.1 format`          | Failed then passed             | New Markdown skill/docs files required Prettier formatting; `format:write` was run and the rerun passed.                |
| `npx pnpm@10.12.1 lint`            | Failed then passed             | Initial failure came from `AGENTS.md` containing literal unfinished-marker names; wording was changed and rerun passed. |
| `npx pnpm@10.12.1 typecheck`       | Passed                         | `tsc --noEmit`.                                                                                                         |
| `npx pnpm@10.12.1 test`            | Passed                         | 30 tests passed.                                                                                                        |
| `npx pnpm@10.12.1 build`           | Passed                         | Next.js production build succeeded.                                                                                     |
| `npx pnpm@10.12.1 prisma validate` | Failed then passed             | Initial failure: `DATABASE_URL` missing. Rerun with non-secret local dummy URL passed.                                  |
| `npx pnpm@10.12.1 prisma generate` | Passed                         | Prisma Client generated with non-secret local dummy `DATABASE_URL`.                                                     |
| `npx pnpm@10.12.1 env:check`       | Passed                         | Local environment validation passed.                                                                                    |
| `npx pnpm@10.12.1 test:a11y`       | Passed                         | 1 Playwright a11y smoke passed.                                                                                         |
| `npx pnpm@10.12.1 test:e2e`        | Passed                         | 19 Playwright tests passed.                                                                                             |
| `npx pnpm@10.12.1 security:scan`   | Passed at configured threshold | Audit found 1 low and 3 moderate advisories; high threshold passed, then lint passed.                                   |
| `npx pnpm@10.12.1 ci:all`          | Failed then passed             | Initial failure came from missing shell `DATABASE_URL`; rerun with non-secret local dummy URL passed.                   |

## Known Baseline Limitations

- Current app is build/test green but still demo-backed in core production paths.
- Plain `pnpm` command is unavailable in this shell; pinned `npx pnpm@10.12.1` was required.
- Prisma commands need a `DATABASE_URL`; local validation used a non-secret dummy PostgreSQL URL.
- No real production secrets, hosting URL, monitoring, backups, legal sign-off, or live integration evidence are present.
- `Block_scheme.pdf` still needs manual visual review.
