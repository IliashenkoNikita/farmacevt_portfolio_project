---
name: security-csp-xss-csrf
description: Harden CSP, XSS, CSRF/origin checks, safe redirects, external URLs, and browser security headers.
---

# Security CSP XSS CSRF

## Purpose

Protect browser-facing flows and cookie-auth mutations.

## When to use

Use for middleware, headers, forms/actions, rich text fields, redirects, external URLs, and public/admin pages.

## When not to use

Do not use for database-only changes unless content rendering or mutation origin changes.

## Inputs

Middleware, Next config, server actions, forms, URL validators, rendered rich content, and security docs.

## Outputs

Strict production headers, CSRF/origin checks, sanitization/escaping choices, URL validation, tests, and docs.

## Safety/security boundaries

Do not weaken production CSP for development convenience. Do not allow unsafe external redirects or arbitrary user HTML.

## Step-by-step workflow

1. Review headers and CSP by environment.
2. Validate mutation origins for cookie-auth flows.
3. Reject unsafe redirects and external URLs.
4. Avoid raw HTML; sanitize if unavoidable.
5. Add regression tests for unsafe inputs.

## Production checklist

CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSRF/origin, and URL validation are covered.

## Required tests

URL validation, safe redirect, upload content type, and mutation authorization tests.

## Failure modes

Development CSP in production, reflected XSS, CSRF on admin actions, and unsafe recording/provider URLs.

## Example prompts

- "Add CSRF protection to server actions."
- "Review production headers."

## Links to local docs

`middleware.ts`, `next.config.ts`, `docs/security/secure-development.md`.
