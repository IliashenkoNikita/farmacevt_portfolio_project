---
name: client-handoff-go-live
description: Prepare client handoff, admin training, UAT, known risks, acceptance matrix, delivery report, and GO/GO WITH RISKS/NO-GO decision.
---

# Client Handoff Go Live

## Purpose

Package implementation evidence and remaining responsibilities for client decision-making.

## When to use

Use for final client reports, training guides, UAT, demo scripts, risk registers, acceptance matrices, and release decisions.

## When not to use

Do not use to hide code blockers or replace actual tests.

## Inputs

Implemented features, command results, security/legal/hosting status, UAT results, and client requirements.

## Outputs

Handoff summary, admin guide, UAT script, known risks, acceptance matrix, delivery report, and final decision.

## Safety/security boundaries

Do not claim legal/provider sign-off, backups, monitoring, or live integrations unless evidence exists.

## Step-by-step workflow

1. Summarize implemented features by requirement.
2. Record commands run and failures.
3. Separate code, legal, client, and hosting blockers.
4. Update GO criteria and known risks.
5. Produce concise final response with evidence.

## Production checklist

All core flows implemented, tests pass, secrets absent, legal sign-off complete or blocked, staging UAT done, backups/monitoring configured.

## Required tests

Full local gate and UAT/e2e evidence before GO or GO WITH RISKS claims.

## Failure modes

Overstated readiness, missing user/admin documentation, untracked risks, and no owner for external blockers.

## Example prompts

- "Create client delivery report."
- "Decide GO/NO-GO after final checks."

## Links to local docs

`docs/finalization/client-handoff-summary.md`, `docs/finalization/acceptance-matrix.md`, `docs/finalization/go-live-decision.md`.
