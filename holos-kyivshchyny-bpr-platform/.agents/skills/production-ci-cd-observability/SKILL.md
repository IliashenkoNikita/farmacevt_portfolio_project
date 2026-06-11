---
name: production-ci-cd-observability
description: Configure CI/CD, health checks, observability, monitoring docs, scheduled jobs, release gates, and deployed environment checks.
---

# Production CI CD Observability

## Purpose

Make production operation verifiable and repeatable.

## When to use

Use for GitHub workflows, health endpoint, logs, monitoring, jobs, deployment docs, performance CI, and operations runbooks.

## When not to use

Do not use to claim live hosting evidence without a deployed URL and actual run output.

## Inputs

Package scripts, CI workflows, `/api/health`, env checks, monitoring provider choices, and hosting docs.

## Outputs

CI workflows, health checks, observability docs, operations runbooks, and deployed checklists.

## Safety/security boundaries

Health endpoints must not expose secrets. Logs must be privacy-safe.

## Step-by-step workflow

1. Verify scripts exist and CI uses frozen lockfile.
2. Ensure health checks include safe app/database status.
3. Add security/performance workflows where feasible.
4. Document monitoring, alerts, backups, WAF/rate limits, and incident owners.
5. Record environment-specific blockers.

## Production checklist

CI, security scans, performance checks, health, monitoring, backup/restore, incident response, and WAF/rate limits are configured or blocked.

## Required tests

CI-equivalent local commands, health route tests where present, and workflow lint review.

## Failure modes

Secrets in logs, fake monitoring evidence, no staging URL, and skipped scans without explanation.

## Example prompts

- "Add production health check evidence."
- "Update CI release gates."

## Links to local docs

`.github/workflows/`, `docs/finalization/production-operations-runbook.md`, `src/app/api/health/route.ts`.
