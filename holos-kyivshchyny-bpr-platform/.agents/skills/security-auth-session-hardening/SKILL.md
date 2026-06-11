---
name: security-auth-session-hardening
description: Harden authentication, password handling, cookies, sessions, rate limits, and auth error behavior.
---

# Security Auth Session Hardening

## Purpose

Make auth resistant to common production failures while preserving user privacy.

## When to use

Use for sign-in/sign-up, password reset, cookie/session settings, auth rate limits, and auth logs.

## When not to use

Do not use for general RBAC object checks unless auth/session behavior changes.

## Inputs

Auth actions/routes, user/session models, env secrets, middleware, and auth tests.

## Outputs

Secure cookie/session behavior, safe errors, password hashing, rate limits, tests, and docs.

## Safety/security boundaries

Do not log passwords/tokens. Do not keep demo login bypass in production. Do not expose secret values.

## Step-by-step workflow

1. Ensure passwords are hashed with an approved library.
2. Use secure, httpOnly, sameSite cookies.
3. Enforce session expiry and sign-out.
4. Rate-limit auth routes.
5. Use generic errors and privacy-safe logs.

## Production checklist

Strong `AUTH_SECRET`, HTTPS cookies in production, no role cookie trust, no demo password defaults, and reset/OAuth limits documented.

## Required tests

Session helper tests, sign-in failure tests, RBAC denial tests, and env validation.

## Failure modes

Role stored as trusted client cookie, session fixation, weak secrets, user enumeration, and leaked auth logs.

## Example prompts

- "Harden sign-in."
- "Remove demo-cookie auth."

## Links to local docs

`docs/architecture/auth-rbac.md`, `src/lib/auth/`, `middleware.ts`.
