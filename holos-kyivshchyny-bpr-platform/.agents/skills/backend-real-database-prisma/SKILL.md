---
name: backend-real-database-prisma
description: Replace demo data with real Prisma/PostgreSQL persistence. Use for schema, migrations, Prisma Client, seed data, and DB-backed application flows.
---

# Backend Real Database Prisma

## Purpose

Move production behavior from static demo arrays to Prisma-backed PostgreSQL models.

## When to use

Use when reading or mutating users, events, registrations, materials, tests, certificates, provider docs, notifications, audit logs, or settings.

## When not to use

Do not use inside client components or public browser bundles. Do not use for UI-only changes.

## Inputs

`prisma/schema.prisma`, `src/lib/db/client.ts`, seed files, service requirements, and page/server action data needs.

## Outputs

Schema updates, migrations or migration notes, repository calls, seed updates, and Prisma validation evidence.

## Safety/security boundaries

Never trust client user IDs. Select only required fields. Keep legal/accreditation fields nullable unless approved.

## Step-by-step workflow

1. Confirm the model and index already exist or add the minimum safe schema change.
2. Keep Prisma calls server-only.
3. Use repositories for queries and services for business rules.
4. Add pagination and required `select` projections.
5. Run `pnpm prisma:validate`, `pnpm prisma generate`, and relevant tests.

## Production checklist

No production route depends on static demo arrays; uniqueness and indexes support the flow; migrations are documented.

## Required tests

Repository/service unit tests or integration tests for each changed data path plus Prisma validation.

## Failure modes

N+1 queries, overfetching PII, missing unique constraints, unsafe cascade behavior, and static demo fallback in production paths.

## Example prompts

- "Convert event pages to DB reads."
- "Add repository queries for certificates."

## Links to local docs

`docs/architecture/data-model.md`, `docs/deployment/database.md`, `docs/finalization/database-report.md`.
