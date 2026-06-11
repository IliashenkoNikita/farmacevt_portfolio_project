---
name: bpr-events-registration
description: Implement BPR/CPD event catalog and registration flows with profile autofill, eligibility, status management, and duplicate prevention.
---

# BPR Events Registration

## Purpose

Support real event discovery and participant registration for BPR/CPD programs.

## When to use

Use for public events, event detail registration, registration services, attendance, statuses, and event eligibility.

## When not to use

Do not use for certificates or testing except as upstream eligibility inputs.

## Inputs

Event models, profile fields, registration schemas, notification choices, and client requirements.

## Outputs

DB-backed event pages, registration actions, status workflows, tests, and audit entries.

## Safety/security boundaries

Prevent duplicate active registrations and do not trust user identity or event eligibility from the client.

## Step-by-step workflow

1. Query published events with filters.
2. Autofill registration from authenticated profile.
3. Validate organization, EDRPOU, consent, and channel fields.
4. Persist one registration per user/event.
5. Audit admin status changes.

## Production checklist

Published event catalog, detail page, registration, duplicate prevention, status updates, and notifications are wired.

## Required tests

Registration unit/integration tests and Playwright visitor/user flows.

## Failure modes

Duplicate registrations, registration to draft events, missing consent, and stale static event data.

## Example prompts

- "Convert event registration to Prisma."
- "Add attendance status changes."

## Links to local docs

`docs/product/user-flows.md`, `docs/product/admin-flows.md`, `src/server/services/registration-service.ts`.
