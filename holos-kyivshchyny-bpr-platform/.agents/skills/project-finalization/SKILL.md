---
name: project-finalization
description: Legacy project release-readiness skill for Holos Kyivshchyny. Use before final delivery reports, release readiness passes, and GO/NO-GO updates.
---

# Project Finalization

## Purpose

Finalize the Holos Kyivshchyny BPR platform with evidence-based release decisions.

## When to use

Use before release-readiness passes, final delivery reports, and client handoff updates.

## When not to use

Do not use to claim production readiness while legal, hosting, integration, or test evidence is missing.

## Inputs

`AGENTS.md`, `README.md`, `docs/product/requirements.md`, finalization docs, package scripts, and recent implementation files.

## Outputs

Release report updates, risk records, command evidence, and GO/GO WITH RISKS/NO-GO decision.

## Safety/security boundaries

Do not invent legal approval, secrets, deployment evidence, monitoring, backups, or live integration proof.

## Step-by-step workflow

1. Read `AGENTS.md`, `README.md`, `docs/product/requirements.md`, and relevant implementation files.
2. Map requested behavior to routes, services, Prisma models, tests, and docs.
3. Run the relevant local gate.
4. Record open risks in finalization docs.
5. Keep production decision tied to evidence.

## Production checklist

Build, unit/e2e tests, security docs, regulatory docs, deployment docs, and client blockers are current.

## Required tests

Run `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, and e2e/a11y where relevant after code changes.

## Failure modes

Overstated readiness, skipped tests without explanation, and untracked external blockers.

## Example prompts

- "Prepare the final delivery report."
- "Update the GO/NO-GO decision."

## Links to local docs

`docs/finalization/final-delivery-report.md`, `docs/finalization/go-live-decision.md`, `docs/client/CLIENT_FILES_RECONCILIATION.md`.
