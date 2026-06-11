---
name: security-object-authorization
description: Enforce object-level authorization for profiles, registrations, materials, tests, certificates, exports, and admin resources.
---

# Security Object Authorization

## Purpose

Prevent IDOR/BOLA and cross-user data access.

## When to use

Use for any read/write with a resource ID, slug, certificate code, registration, material, attempt, export, or admin object.

## When not to use

Do not use for completely public published content unless private fields are included.

## Inputs

Current session, resource ownership fields, role permissions, service/repository methods, and tests.

## Outputs

Access helper functions, service checks, denial behavior, and authorization tests.

## Safety/security boundaries

Do not trust object IDs or user IDs from forms/search params. Use DB ownership checks server-side.

## Step-by-step workflow

1. Identify actor, action, resource, and owner.
2. Load resource with minimal fields needed to authorize.
3. Apply owner/admin/super-admin rules.
4. Return safe 404/403 behavior as appropriate.
5. Add denial and success tests.

## Production checklist

Own-resource access, admin management rules, export permissions, certificate privacy, and material eligibility are enforced.

## Required tests

IDOR denial tests for cabinet data, materials, attempts, certificates, admin routes, and exports.

## Failure modes

Filtering only in UI, passing `userId` from client, broad admin access, and leaking private data through public verification.

## Example prompts

- "Prevent users from downloading others' certificates."
- "Add object checks to material downloads."

## Links to local docs

`src/lib/auth/authorization.ts`, `src/lib/auth/permissions.ts`, `tests/unit/authorization-finalization.test.ts`.
