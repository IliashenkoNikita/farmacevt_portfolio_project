---
name: bpr-regulatory-content-audit
description: Audit BPR/CPD provider wording, certificate fields, disclaimers, and legal sign-off boundaries without inventing official approval.
---

# BPR Regulatory Content Audit

## Purpose

Keep BPR/CPD content legally cautious and provider-approval aware.

## When to use

Use for provider documents, accreditation page, official BPR fields, certificate wording, portfolio disclaimers, and legal sign-off docs.

## When not to use

Do not use to assert compliance or approve legal claims.

## Inputs

Client documents, provider docs, certificate text, event official fields, and legal sign-off status.

## Outputs

Disclaimers, nullable official fields, regulatory audit notes, and legal sign-off checklists.

## Safety/security boundaries

Do not invent accreditation, provider approval, regulator registration numbers, or legal compliance.

## Step-by-step workflow

1. Identify official-sounding claims.
2. Check whether an approved source exists.
3. Make official fields nullable and configurable.
4. Add disclaimer where sign-off is missing.
5. Record blocker in finalization docs.

## Production checklist

Official claims are source-backed, sign-off is recorded, and fallback copy avoids false legal claims.

## Required tests

Content tests where feasible and verification that official fields can be blank without breaking pages/PDFs.

## Failure modes

Hardcoded fake accreditation, unapproved legal language, and missing disclaimer in generated certificates.

## Example prompts

- "Audit provider wording before launch."
- "Add legal disclaimer for BPR portfolio."

## Links to local docs

`docs/finalization/legal-provider-signoff.md`, `docs/product/legal-disclaimers.md`, `docs/client/`.
