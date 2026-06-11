---
name: documentation-delivery
description: Legacy documentation delivery skill. Use for client handoff, operational runbooks, release reports, and finalization document updates.
---

# Documentation Delivery

## Purpose

Keep client-facing and operational documentation accurate to the code and evidence.

## When to use

Use for handoff summaries, operational runbooks, release reports, UAT scripts, security reviews, and client file reconciliation.

## When not to use

Do not use to paper over incomplete implementation or failed tests.

## Inputs

Implemented behavior, command results, known risks, client files, security findings, and deployment status.

## Outputs

Updated finalization docs, handoff docs, known risks, acceptance criteria, and release decision.

## Safety/security boundaries

Docs must describe current behavior and remaining risks. Do not claim production readiness without evidence.

## Step-by-step workflow

1. Read the relevant code or command evidence before editing docs.
2. Update only claims that are backed by current behavior.
3. Separate code blockers from client/legal/hosting blockers.
4. Link to local evidence files.
5. Keep GO/NO-GO status current.

## Production checklist

Final delivery report, release checklist, production readiness, UAT, security review, handoff, and client reconciliation are accurate.

## Required tests

No special test for docs-only changes; run markdown/format checks if configured and relevant.

## Failure modes

Stale status, invented evidence, vague blockers, and missing owner for required client/hosting actions.

## Example prompts

- "Update the client handoff summary."
- "Write known risks for go-live."

## Links to local docs

`docs/finalization/`, `docs/client/CLIENT_FILES_RECONCILIATION.md`, `README.md`.
