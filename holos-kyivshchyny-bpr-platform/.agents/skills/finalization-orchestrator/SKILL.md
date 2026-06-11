---
name: finalization-orchestrator
description: Coordinate full production finalization for the Holos Kyivshchyny BPR platform. Use before multi-phase release, baseline, gap analysis, handoff, or GO/NO-GO work.
---

# Finalization Orchestrator

## Purpose

Coordinate production-hardening work across code, tests, security, data, operations, and client handoff.

## When to use

Use for baseline inventory, phase planning, acceptance evidence, release gates, and final delivery reports.

## When not to use

Do not use as a substitute for specialist skills when changing auth, database, security, frontend accessibility, or BPR certificates.

## Inputs

Repository files, client docs under `docs/client`, package scripts, current finalization docs, and user acceptance criteria.

## Outputs

Updated plans, finalization reports, acceptance matrices, command evidence, and GO/GO WITH RISKS/NO-GO decisions.

## Safety/security boundaries

Do not claim production readiness without passing evidence. Do not invent legal, hosting, monitoring, backup, or integration proof.

## Step-by-step workflow

1. Read `AGENTS.md`, `README.md`, `docs/product/*`, and relevant existing finalization docs.
2. Activate the minimum specialist skills for the phase.
3. Inventory current behavior before editing.
4. Separate coding blockers from client/legal/hosting blockers.
5. After changes, run relevant pnpm gates and record results.

## Production checklist

Build, typecheck, tests, auth, database, uploads, exports, certificates, security, deployment docs, UAT, monitoring, backups, and legal sign-off are addressed or explicitly blocked.

## Required tests

Run the relevant subset first, then `pnpm lint`, `pnpm typecheck`, `pnpm test`, and `pnpm build` before claiming delivery after code changes.

## Failure modes

Scope drift, unrecorded skipped tests, fake readiness claims, and mixing legal/hosting blockers with code defects.

## Example prompts

- "Finalize the production baseline."
- "Prepare a GO/NO-GO release decision."

## Links to local docs

`README.md`, `docs/finalization/`, `docs/product/`, `docs/client/CLIENT_FILES_RECONCILIATION.md`.
