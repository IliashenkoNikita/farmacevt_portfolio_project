---
name: email-notifications-smtp
description: Implement DB-backed notifications, SMTP email sending, reminder jobs, dev adapter boundaries, and retry/error tracking.
---

# Email Notifications SMTP

## Purpose

Send and track production notifications without pretending dev logs are real delivery.

## When to use

Use for registration confirmations, reminders, access links, test/certificate emails, license reminders, and notification jobs.

## When not to use

Do not use for UI-only notification banners or to configure real provider credentials in Git.

## Inputs

SMTP env vars, Notification model, event/license schedules, user channels, and privacy rules.

## Outputs

Notification service, SMTP adapter, dev adapter, job commands, tests, and runbook updates.

## Safety/security boundaries

No real secrets in Git. No PII-heavy logs. SMS/Viber remain placeholders unless real providers are configured.

## Step-by-step workflow

1. Persist scheduled notification records.
2. Implement dev and SMTP adapters behind an interface.
3. Add jobs for reminders and retries.
4. Record failure reasons safely.
5. Document provider setup and testing.

## Production checklist

SMTP validated, dev adapter explicit, notification statuses stored, retry path documented, and jobs separate from UI.

## Required tests

Scheduling tests, adapter tests with mocks, retry/failure tests, and env validation tests.

## Failure modes

Console logs treated as delivery, secrets committed, duplicate sends, and leaking sensitive payloads.

## Example prompts

- "Wire certificate issued emails."
- "Add event reminder worker."

## Links to local docs

`docs/product/notification-flow.md`, `docs/finalization/notification-runbook.md`, `src/server/services/notification-service.ts`.
