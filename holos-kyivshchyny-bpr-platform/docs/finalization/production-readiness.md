# Production Readiness

## Ready

- Next.js production build succeeds locally.
- Strict TypeScript and unit tests are part of the local gate.
- Playwright e2e tests cover the primary public, user, and admin flows.
- Production CSP remains strict; `unsafe-eval` is only enabled for development.
- Prisma schema includes indexes for event discovery, registrations, material access, audit searches, provider documents, and certificates.
- `/api/health` returns a simple liveness response.

## Needs External Evidence

- The client technical assignment and block scheme are now stored in `docs/client`; the PDF block scheme still needs visual/manual review.
- Legal wording for certificates, provider documents, consent, and privacy needs provider approval.
- Real SMTP, storage, OAuth, backup, monitoring, and domain configuration are not present in the repository.
- Load testing and production Lighthouse results must run against deployed infrastructure.

## Decision

`GO WITH RISKS` for demo/UAT. `NO-GO` for real production traffic until legal and deployment evidence is provided and verified.
