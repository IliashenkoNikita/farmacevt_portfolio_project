---
name: backend-repository-service-layer
description: Build thin server actions and route handlers backed by repositories and services. Use when adding or refactoring backend domain flows.
---

# Backend Repository Service Layer

## Purpose

Keep persistence, domain rules, authorization, and UI boundaries clean.

## When to use

Use for server actions, route handlers, repositories, services, jobs, exports, notifications, tests, certificates, and file storage.

## When not to use

Do not use for pure UI styling or presentational component changes.

## Inputs

Route/server action requirements, Prisma models, validation schemas, RBAC helpers, and audit requirements.

## Outputs

Repository modules, service modules, thin actions/routes, tests, and architecture notes.

## Safety/security boundaries

Repositories do not authorize; services enforce authorization and business rules; UI never imports repositories or Prisma.

## Step-by-step workflow

1. Define input schema with Zod.
2. Implement repository query/mutation with minimal selected fields.
3. Implement service business rule and authorization.
4. Keep server action or route handler as validation plus service call.
5. Add tests at the service boundary.

## Production checklist

Thin handlers, audited sensitive changes, object-level checks, pagination for lists, and no server-only imports in client components.

## Required tests

Unit tests for services and integration tests for main flows.

## Failure modes

Business logic in pages, Prisma in client bundles, missing authorization, and duplicated query rules.

## Example prompts

- "Add a real registration service."
- "Move admin export logic out of the UI."

## Links to local docs

`docs/architecture/api-contracts.md`, `src/server/services/`, `src/server/repositories/README.md`.
