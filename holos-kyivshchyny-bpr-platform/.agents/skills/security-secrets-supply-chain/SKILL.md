---
name: security-secrets-supply-chain
description: Manage environment secrets, public env exposure, dependency audits, secret scanning, Dependabot, CodeQL, Semgrep, and supply-chain evidence.
---

# Security Secrets Supply Chain

## Purpose

Keep credentials out of Git and maintain defensible dependency/CI scanning.

## When to use

Use for env files, CI security workflows, dependency updates, audit scripts, secret scanning, and release evidence.

## When not to use

Do not use to request or store real secret values in source files.

## Inputs

`.env.example`, env validation scripts, package files, GitHub workflows, Dependabot config, and security reports.

## Outputs

Env validation, CI scan config, docs, and security evidence.

## Safety/security boundaries

Never print or commit real secrets. Treat `NEXT_PUBLIC_*` values as public.

## Step-by-step workflow

1. Review required secrets and weak default detection.
2. Ensure `.env*` secrets are ignored.
3. Configure dependency and secret scanning.
4. Run `pnpm audit` or configured scan.
5. Record critical/high findings and blockers.

## Production checklist

No secrets committed, strong production values required, scans configured, Dependabot active, and advisories triaged.

## Required tests

`pnpm env:check`, `pnpm security:scan`, and CI workflow validation where feasible.

## Failure modes

Secrets in public env, weak defaults accepted in production, scan failures ignored, and unreviewed third-party scripts.

## Example prompts

- "Harden production secrets checklist."
- "Review CI security workflow."

## Links to local docs

`.env.example`, `tools/env-check.ts`, `.github/workflows/security.yml`, `docs/finalization/production-secrets-checklist.md`.
