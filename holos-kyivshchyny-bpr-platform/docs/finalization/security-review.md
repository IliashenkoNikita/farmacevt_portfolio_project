# Security Review

## Implemented Controls

- Server-side authorization helpers cover authentication, admin roles, super admin routes, ownership checks, material visibility, test access, certificate download, and public certificate verification.
- Public certificate verification excludes email, phone, workplace, and internal user IDs.
- Spreadsheet export escapes values beginning with formula-control characters.
- Upload policy validates extension, MIME type, size, safe storage name, and trusted HTTPS recording hosts.
- Production security headers are configured in `next.config.ts`; development CSP is relaxed only to support React debugging.
- Audit model supports admin and regulated activity records.

## Remaining Risks

- Better Auth wiring and live provider callbacks need environment-specific verification.
- Rate limiting is listed as a dependency but should be connected to deployed API actions before production traffic.
- External object storage malware scanning is not represented in local code.
- Penetration testing and dependency review must run in CI on the production branch.

## Required Follow-Up

- Add deployment-level WAF/rate limits.
- Enable dependency alerts and secret scanning.
- Store all secrets in the hosting provider vault.
- Review privacy and retention policy with Ukrainian legal counsel.
