---
name: frontend-nextjs-production
description: Polish production Next.js App Router UI, server/client component boundaries, metadata, states, forms, tables, and i18n consistency.
---

# Frontend Nextjs Production

## Purpose

Keep the UI production-quality while preserving server-side safety and performance.

## When to use

Use for public, cabinet, and admin pages, forms, tables, metadata, loading/error states, and Next.js route behavior.

## When not to use

Do not use for backend-only service changes unless UI behavior changes too.

## Inputs

Route files, components, i18n messages, server data shape, design conventions, and tests.

## Outputs

Production UI, accessible forms, empty/loading/error states, metadata, responsive layouts, and e2e updates.

## Safety/security boundaries

No Prisma, secrets, PDF/Excel generation, or admin-only server libraries in client components.

## Step-by-step workflow

1. Prefer Server Components.
2. Mark Client Components only for interactivity.
3. Add metadata and route states.
4. Use existing UI components and concise Ukrainian copy.
5. Verify mobile, keyboard, and production build behavior.

## Production checklist

No fake CTAs, no hydration warnings, forms validate clearly, admin tables paginate/filter, and public pages have metadata.

## Required tests

Typecheck, e2e route tests, and accessibility smoke for changed surfaces.

## Failure modes

Server-only imports in client, heavy libraries in public bundles, layout shifts, and untranslated production copy.

## Example prompts

- "Polish the admin events form."
- "Add loading and empty states."

## Links to local docs

`docs/architecture/overview.md`, `docs/product/sitemap.md`, `src/components/ui/`.
