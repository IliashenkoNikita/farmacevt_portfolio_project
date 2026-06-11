---
name: cabinet-user-flows
description: Implement production personal cabinet flows for profile, events, materials, tests, certificates, BPR portfolio, and license reminders.
---

# Cabinet User Flows

## Purpose

Deliver secure, DB-backed user self-service workflows.

## When to use

Use for cabinet pages, profile mutations, own registrations, material access, tests, certificates, portfolio, and license reminders.

## When not to use

Do not use for admin-only workflows or public marketing content.

## Inputs

Session user, profile schema, registrations, test attempts, certificates, notification preferences, and route requirements.

## Outputs

Cabinet pages/actions, services, object authorization tests, and UAT coverage.

## Safety/security boundaries

Users only access their own data. Never accept target user IDs from the browser without ownership checks.

## Step-by-step workflow

1. Load current user from server session.
2. Query own data through services.
3. Validate mutations with Zod.
4. Enforce ownership before reads and writes.
5. Add empty/loading/error states and tests.

## Production checklist

Profile, events, materials, tests, certificates, portfolio, and reminders are DB-backed and privacy-safe.

## Required tests

Object-level authorization tests and e2e cabinet flows.

## Failure modes

IDOR, answer leakage, profile overwrites, cross-user certificate access, and static demo action forms.

## Example prompts

- "Make my certificates page real."
- "Add profile update persistence."

## Links to local docs

`docs/product/user-flows.md`, `src/app/[locale]/cabinet/`, `docs/security/privacy.md`.
