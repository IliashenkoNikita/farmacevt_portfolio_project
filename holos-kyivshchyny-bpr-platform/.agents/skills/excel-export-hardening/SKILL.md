---
name: excel-export-hardening
description: Implement secure admin Excel exports from real database rows with audit logs, metadata, and formula-injection defenses.
---

# Excel Export Hardening

## Purpose

Generate reliable XLSX exports without leaking secrets or enabling spreadsheet formula injection.

## When to use

Use for participants, registrations, certificates, test results, BPR portfolio, and admin export routes/actions.

## When not to use

Do not use for CSV-like display tables or client-side export libraries.

## Inputs

Export filters, authenticated admin, repository queries, ExcelJS service, audit requirements, and PII policy.

## Outputs

Server-side XLSX generation, metadata sheets/rows, formula escaping, audit events, and tests.

## Safety/security boundaries

Admin-only, server-side only, no raw secrets/tokens, no raw verification tokens by default, and least-PII fields.

## Step-by-step workflow

1. Authorize export role.
2. Query filtered DB rows with pagination/streaming considerations.
3. Escape formula-like cell values.
4. Include generatedAt, generatedBy, and filters.
5. Write audit log and return safe download.

## Production checklist

Exports reflect DB, are audited, avoid excessive PII, and pass formula-injection tests.

## Required tests

Formula escaping, admin-only access, metadata inclusion, and audit write tests.

## Failure modes

Mock rows, client-side ExcelJS bundle, formula injection, unbounded memory use, and token leakage.

## Example prompts

- "Export real participant rows."
- "Harden Excel export values."

## Links to local docs

`src/server/services/export-service.ts`, `tests/unit/export.test.ts`, `docs/security/privacy.md`.
