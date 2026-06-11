---
name: security-hardening
description: Legacy defensive security-hardening skill. Use before changing auth, RBAC, uploads, exports, certificates, public verification, or admin workflows.
---

# Security Hardening

## Purpose

Preserve production security controls while changing sensitive application flows.

## When to use

Use for authentication, authorization, uploads, exports, certificate verification, admin mutations, and public privacy surfaces.

## When not to use

Do not use for offensive testing, exploit development, phishing, malware, persistence, evasion, or unauthorized workflows.

## Inputs

Auth/RBAC code, server actions, route handlers, upload policy, export service, certificate service, middleware, and security docs.

## Outputs

Security fixes, tests, audit coverage, privacy checks, and updated security docs.

## Safety/security boundaries

Defensive and authorized only. Do not expose secrets, PII-heavy logs, or exploit payload details.

## Step-by-step workflow

1. Identify protected resources and trust boundaries.
2. Enforce server-side authorization and object-level checks.
3. Validate inputs with schemas.
4. Preserve strict public certificate privacy.
5. Add tests and update security docs.

## Production checklist

Access control, uploads, exports, certificates, CSP/CSRF, rate limits, audit logs, and privacy controls are verified.

## Required tests

Run affected unit/integration tests plus `pnpm test`; run e2e/a11y when user-facing flows changed.

## Failure modes

Client-only authorization, IDOR/BOLA, formula injection, file upload abuse, answer leakage, and false readiness claims.

## Example prompts

- "Harden public certificate verification."
- "Review admin export security."

## Links to local docs

`docs/security/`, `docs/finalization/security-review.md`, `tests/unit/authorization-finalization.test.ts`.
