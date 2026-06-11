# Demo To Production Gap Report

Date: 2026-06-11

## Executive Status

The application is locally healthy for the current demo/UAT implementation: install, lint, typecheck, tests, build, Prisma validation/generation, accessibility smoke, e2e, env check, and security scan all pass when run with the documented local command caveats.

It is not yet a full production application. The main blocker is not UI coverage; the main blocker is that core flows still depend on static demo data, demo-cookie auth, and demo action forms instead of production repositories, services, and persisted database mutations.

Decision remains: **NO-GO for production traffic** until the gaps below are closed and external legal/hosting obligations are evidenced.

## Highest-Priority Code Gaps

| Priority | Gap                                  | Current evidence                                                                                                 | Required production outcome                                                                                                         |
| -------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| P0       | Demo-cookie auth                     | `auth-actions.ts`, `session.ts`, and middleware use `holos-session`/`holos-role` cookies backed by static users. | Real email/password auth, secure DB-backed sessions, rate-limited auth, safe errors, and no role trust from client cookies.         |
| P0       | Static public data                   | Home, events, event detail, experts, accreditation, and verification read `src/lib/constants/demo-data.ts`.      | Public pages read published DB records through repositories/services.                                                               |
| P0       | Admin actions are demo flows         | Most admin pages import `AdminDemoActionForm`; export uses a hardcoded row.                                      | Admin CRUD persists to DB, validates with Zod, enforces RBAC/object checks, writes audit logs, and exports real filtered rows.      |
| P0       | Cabinet actions are demo flows       | Cabinet pages import `CabinetDemoActionForm`.                                                                    | Profile, registrations, materials, tests, certificates, portfolio, and reminders read/write own DB-backed data.                     |
| P0       | Seed does not populate DB            | `prisma/seed.ts` imports demo data and prints values.                                                            | Seed creates safe development data through Prisma upserts without becoming production content.                                      |
| P1       | Repository layer missing             | `src/server/repositories/README.md` exists without concrete repository modules.                                  | Event, speaker, user, profile, registration, material, test, certificate, provider doc, notification, and audit repositories exist. |
| P1       | Services not consistently persistent | Services return objects or operate on provided arrays in several places.                                         | Services enforce business rules and authorization around repository calls.                                                          |
| P1       | File storage incomplete              | Upload validation exists, `FileAsset` exists, but storage adapter/protected download route are not complete.     | Local dev and production object-storage interfaces, DB metadata, protected downloads, and audit logs.                               |
| P1       | Notification delivery incomplete     | Dev notification logs exist; SMTP/jobs are not wired.                                                            | DB-backed notifications, SMTP adapter, scheduled job commands, retries/failure reasons, and privacy-safe logs.                      |
| P1       | Certificate live flow incomplete     | PDF/QR primitives exist; public verification page reads demo certificates.                                       | Eligibility, generation, PDF download, QR verification, revocation, uniqueness, and privacy tests all use DB records.               |

## Demo Dependencies Found

| Area                          | Files                                                                                                                                                                                   |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Static demo source            | `src/lib/constants/demo-data.ts`                                                                                                                                                        |
| Public pages                  | `src/app/[locale]/page.tsx`, `events/page.tsx`, `events/[slug]/page.tsx`, `experts/page.tsx`, `experts/[slug]/page.tsx`, `accreditation/page.tsx`, `certificate/verify/[code]/page.tsx` |
| Auth/session                  | `src/server/actions/auth-actions.ts`, `src/lib/auth/session.ts`, `middleware.ts`                                                                                                        |
| Admin demo forms              | `src/components/demo/action-forms.tsx`, many `src/app/[locale]/admin/**/page.tsx` files                                                                                                 |
| Cabinet demo forms            | `src/components/demo/action-forms.tsx`, many `src/app/[locale]/cabinet/**/page.tsx` files                                                                                               |
| Tests relying on demo cookies | E2E specs that set `holos-session` directly                                                                                                                                             |
| Seed                          | `prisma/seed.ts`                                                                                                                                                                        |

## Production Conversion Plan

1. **Auth and session foundation**
   - Implement production email/password auth and DB sessions.
   - Add required helpers: `assertAuthenticated`, `assertAdmin`, `assertSuperAdmin`, `getCurrentUserOrThrow`, `canAccessOwnResource`, `canManageEvent`, `canManageCertificate`, `canExportAdminData`.
   - Disable demo auth outside explicit development-only mode.

2. **Repository/service foundation**
   - Add repositories for each Prisma model group.
   - Move Prisma calls into repositories and business rules into services.
   - Convert pages/actions gradually from demo arrays to repositories.

3. **Admin production CRUD**
   - Start with events, speakers, registrations, and provider docs.
   - Then materials/uploads, test builder, certificates, exports, and audit log.
   - Add tests for each mutation and denial path.

4. **Cabinet production flows**
   - Profile persistence first.
   - Event registration and materials access second.
   - Tests/certificates/portfolio/reminders after eligibility services exist.

5. **Production integrations**
   - Storage adapter, SMTP notification adapter, job commands, health/observability, and deployment checks.

6. **Final evidence and handoff**
   - Expand unit/integration/e2e/a11y/security tests.
   - Update UAT, admin guide, acceptance matrix, known risks, and GO/NO-GO decision.

## Client Data Boundary

The user will provide real business content and data. The application should provide admin screens and safe seed/development data paths; it must not invent:

- Official provider approval.
- BPR accreditation status.
- Official provider document content.
- Real certificate numbering rules beyond configurable formats.
- Real production credentials or integration evidence.

## External Blockers

| Blocker                                  | Owner                       | Current status  |
| ---------------------------------------- | --------------------------- | --------------- |
| Legal/provider sign-off                  | Client/legal/provider owner | Missing.        |
| Production secrets                       | Hosting/client owner        | Missing.        |
| Staging/production URL                   | Hosting owner               | Missing.        |
| SMTP/SMS/Viber credentials               | Client/hosting owner        | Missing.        |
| Object storage credentials               | Hosting owner               | Missing.        |
| Backup/restore proof                     | Hosting owner               | Missing.        |
| Monitoring/alerts                        | Hosting owner               | Missing.        |
| WAF/rate limits                          | Hosting owner               | Missing.        |
| Manual visual review of block scheme PDF | Client/developer            | Still required. |

## Acceptance Standard For Closing This Report

This report can be retired only when production routes no longer depend on demo arrays or demo-cookie auth, all core mutations persist to PostgreSQL through services/repositories, sensitive actions are audited, tests cover the core flows and denial paths, and external legal/hosting blockers are either completed or explicitly accepted for a non-production/UAT release.
