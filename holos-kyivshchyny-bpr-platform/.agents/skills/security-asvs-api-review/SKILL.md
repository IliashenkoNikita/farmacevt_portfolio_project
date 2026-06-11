---
name: security-asvs-api-review
description: Perform defensive OWASP ASVS/API review for auth, authorization, validation, rate limiting, CSRF, uploads, exports, certificates, and logging.
---

# Security ASVS API Review

## Purpose

Find and fix production web/API security issues defensively.

## When to use

Use before or after changes to auth, RBAC, APIs/actions, uploads, exports, test submissions, certificate verification, or admin workflows.

## When not to use

Do not use for offensive testing, exploit payload generation, persistence, evasion, phishing, malware, or unauthorized attack workflows.

## Inputs

Server actions, route handlers, services, middleware, validation schemas, security docs, and tests.

## Outputs

Security fixes, validation, rate limits, audit coverage, tests, and security reports.

## Safety/security boundaries

Defensive and authorized only. Avoid exploit payload detail in docs/tests beyond safe unit fixtures.

## Step-by-step workflow

1. Map trust boundaries and roles.
2. Check access control, validation, CSRF/origin, rate limits, logging, and data exposure.
3. Add or strengthen server-side controls.
4. Add regression tests.
5. Record remaining risks and NO-GO blockers.

## Production checklist

BOLA/BFLA, mass assignment, XSS, CSRF, upload abuse, answer leakage, certificate enumeration, PII logs, and Excel injection are addressed.

## Required tests

Authorization, privacy, upload validation, rate-limit behavior where practical, and export escaping tests.

## Failure modes

Client-side-only checks, verbose errors, unsafe redirects, secrets in public env, and untested sensitive routes.

## Example prompts

- "Review certificate verification security."
- "Harden admin mutations."

## Links to local docs

`docs/security/threat-model.md`, `docs/security/privacy.md`, `docs/finalization/security-report.md`.
