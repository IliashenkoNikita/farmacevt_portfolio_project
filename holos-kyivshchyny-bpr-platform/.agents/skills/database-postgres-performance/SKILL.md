---
name: database-postgres-performance
description: Review PostgreSQL/Prisma indexes, constraints, query shape, pagination, migrations, seed data, and backup/restore performance risks.
---

# Database Postgres Performance

## Purpose

Keep production database behavior correct and scalable enough for client launch.

## When to use

Use for Prisma schema review, indexes, relations, uniqueness, pagination, export query sizing, migrations, seed, and backups.

## When not to use

Do not use for purely visual UI changes.

## Inputs

`prisma/schema.prisma`, repository queries, admin lists, exports, and deployment database docs.

## Outputs

Index/schema updates, query improvements, database report, and backup/restore docs.

## Safety/security boundaries

Avoid destructive migrations without explicit review. Do not expose PII for convenience.

## Step-by-step workflow

1. Check constraints and indexes against access patterns.
2. Review list/export queries for pagination and overfetching.
3. Avoid N+1 with includes/selects chosen deliberately.
4. Validate Prisma schema and generate client.
5. Document migration and backup/restore implications.

## Production checklist

Required unique/indexes exist, admin tables paginate, verification query is efficient, and exports avoid loading unbounded data blindly.

## Required tests

Prisma validate/generate, repository tests, and export service tests.

## Failure modes

Missing indexes, slow admin filters, duplicate certificates, unbounded exports, and unsafe cascade deletes.

## Example prompts

- "Audit Prisma schema indexes."
- "Optimize certificate verification query."

## Links to local docs

`docs/architecture/data-model.md`, `docs/deployment/backup-restore.md`, `prisma/schema.prisma`.
