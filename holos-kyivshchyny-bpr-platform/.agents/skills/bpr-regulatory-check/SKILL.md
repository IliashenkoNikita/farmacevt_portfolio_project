---
name: bpr-regulatory-check
description: Legacy BPR/CPD regulatory skill. Use when changing BPR events, attendance, testing, certificate generation, provider documents, or public verification.
---

# BPR Regulatory Check

## Purpose

Keep BPR/CPD behavior aligned with client requirements while avoiding unsupported legal claims.

## When to use

Use for BPR event metadata, attendance, testing, certificates, provider documents, specialties, and public verification.

## When not to use

Do not use to approve legal wording or claim official accreditation without provider/legal sign-off.

## Inputs

Event/certificate models, provider docs, certificate templates, test/attendance rules, and legal sign-off docs.

## Outputs

Regulatory-safe fields, certificate behavior, disclaimers, tests, and documentation updates.

## Safety/security boundaries

Legal and regulator-facing text must be signed off by the provider before production launch.

## Step-by-step workflow

1. Check BPR points, hours, provider status, specialties, and official number fields.
2. Keep official fields nullable when sign-off is absent.
3. Ensure eligibility uses registration, attendance, tests, and active-certificate uniqueness.
4. Verify revoked certificates remain publicly verifiable as revoked.
5. Confirm public verification excludes private data.

## Production checklist

Certificates include required public fields, disclaimers are present when needed, and official claims are evidence-backed.

## Required tests

Certificate eligibility, privacy, revocation, and duplicate-active-certificate tests.

## Failure modes

Fake official values, PII exposure, duplicate certificates, and unapproved legal language.

## Example prompts

- "Audit certificate wording."
- "Add provider document sign-off safety."

## Links to local docs

`docs/finalization/bpr-regulatory-audit.md`, `docs/finalization/legal-provider-signoff.md`, `docs/product/certificate-flow.md`.
