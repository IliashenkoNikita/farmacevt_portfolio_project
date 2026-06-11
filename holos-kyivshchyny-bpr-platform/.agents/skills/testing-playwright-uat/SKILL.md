---
name: testing-playwright-uat
description: Build production unit, integration, Playwright, accessibility, and UAT coverage for public, cabinet, admin, testing, certificate, upload, and export flows.
---

# Testing Playwright UAT

## Purpose

Prove core flows work and regressions are caught.

## When to use

Use when adding/fixing tests, UAT scripts, e2e flows, accessibility checks, and command evidence.

## When not to use

Do not use to mask real failures with brittle waits or skipped assertions.

## Inputs

User flows, seeded data, route behavior, service rules, Playwright config, and finalization docs.

## Outputs

Unit/integration/e2e tests, UAT scripts, accessibility checks, traces/screenshots on failure, and command records.

## Safety/security boundaries

Use safe seeded data. Avoid real credentials and real external providers in tests.

## Step-by-step workflow

1. Add focused unit tests for domain rules.
2. Add integration tests for service flows.
3. Add Playwright tests using role/label/text locators.
4. Avoid fixed timeouts and brittle CSS selectors.
5. Run relevant test command and record evidence.

## Production checklist

Auth, registration, profile, materials, tests, certificates, verification, admin CRUD, exports, uploads, and accessibility are covered.

## Required tests

Relevant unit/integration/e2e plus `pnpm test`, `pnpm test:e2e`, and `pnpm test:a11y` before final production claims.

## Failure modes

Brittle tests, demo-only assertions, no negative auth tests, and skipped e2e without documented reason.

## Example prompts

- "Add UAT for admin creates event."
- "Test certificate verification privacy."

## Links to local docs

`tests/`, `playwright.config.ts`, `docs/finalization/manual-uat-script.md`.
