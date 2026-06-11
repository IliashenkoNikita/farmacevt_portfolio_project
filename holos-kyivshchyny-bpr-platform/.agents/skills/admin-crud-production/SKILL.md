---
name: admin-crud-production
description: Build production admin CRUD for events, speakers, materials, tests, certificates, registrations, provider docs, exports, and audit logs.
---

# Admin CRUD Production

## Purpose

Make admin workflows persist real database changes and expose usable non-programmer operations.

## When to use

Use for admin pages, server actions, forms, tables, bulk actions, exports, publish/archive, and audit trails.

## When not to use

Do not use for public browsing or cabinet-only flows except where admin state affects eligibility.

## Inputs

Admin route files, Prisma models, Zod schemas, repository/service functions, and UX requirements.

## Outputs

CRUD pages/actions, validation, loading/empty/error states, audit logs, tests, and docs.

## Safety/security boundaries

Every mutation requires server-side admin authorization and CSRF/origin protection where applicable.

## Step-by-step workflow

1. Identify the admin object and allowed roles.
2. Implement form schema and service mutation.
3. Add list pagination/search/filter.
4. Audit sensitive actions.
5. Test non-admin denial and successful admin path.

## Production checklist

Create/edit/delete/archive/publish flows persist, errors are visible, exports are real, and destructive actions are confirmed.

## Required tests

Admin service tests and Playwright UAT for key admin tasks.

## Failure modes

Fake buttons, mock export rows, unaudited status changes, and admin-only libraries leaking to public bundles.

## Example prompts

- "Make admin events CRUD real."
- "Add provider document publishing."

## Links to local docs

`docs/product/admin-flows.md`, `docs/finalization/manual-uat-script.md`, `src/app/[locale]/admin/`.
