---
name: auth-production-session-rbac
description: Implement production email/password auth, secure sessions, and RBAC. Use for login, signup, session helpers, role checks, and protected routes.
---

# Auth Production Session RBAC

## Purpose

Replace demo-cookie auth with production-safe authentication, sessions, and authorization helpers.

## When to use

Use for auth actions, session helpers, protected layouts, RBAC helpers, admin/user access, and password/session tests.

## When not to use

Do not use for static public pages unless they depend on session state.

## Inputs

Prisma user/session models, `src/lib/auth/*`, middleware, route requirements, and security docs.

## Outputs

`assertAuthenticated`, `assertAdmin`, `assertSuperAdmin`, `getCurrentUserOrThrow`, object access helpers, tests, and `docs/architecture/auth-rbac.md`.

## Safety/security boundaries

No demo bypass in production. No client-trusted user ID. Use safe auth errors and rate limits.

## Step-by-step workflow

1. Identify current demo auth behavior.
2. Add production password hashing/session persistence.
3. Enforce secure cookie attributes and route protection.
4. Add RBAC and object-level helper tests.
5. Document unsupported OAuth/password-reset items honestly.

## Production checklist

Email/password works; admin and super-admin boundaries hold; sessions expire; sign-out clears cookies; auth routes are rate-limited.

## Required tests

Auth unit tests, RBAC tests, protected-route tests, and object-access denial tests.

## Failure modes

Demo cookie remains active, role from client is trusted, broad admin permission, session fixation, or verbose auth errors.

## Example prompts

- "Replace demo login with real sessions."
- "Add super-admin-only checks."

## Links to local docs

`docs/architecture/auth-rbac.md`, `docs/security/threat-model.md`, `src/lib/auth/`.
