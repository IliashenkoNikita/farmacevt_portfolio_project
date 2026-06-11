---
name: bpr-testing-certificates
description: Implement BPR testing, server-side scoring, certificate eligibility, PDF generation, QR verification, and revocation.
---

# BPR Testing Certificates

## Purpose

Provide trustworthy testing and certificate workflows for BPR/CPD completion.

## When to use

Use for tests, attempts, scoring, certificate generation, PDF/QR, verification, revocation, and portfolio points.

## When not to use

Do not use for legal wording approval; use regulatory audit skill for claims.

## Inputs

Registration/attendance state, test definitions, attempts, certificate schema, provider settings, and privacy rules.

## Outputs

Scoring services, certificate services, PDF/QR routes, privacy tests, and certificate docs.

## Safety/security boundaries

Correct answers never go to client before submission. Verification code is non-guessable and separate from internal IDs.

## Step-by-step workflow

1. Enforce eligibility from registration, attendance, and test status.
2. Score server-side and persist attempts.
3. Generate or revoke certificates through services.
4. Render public verification with minimal public fields.
5. Add tests for privacy, revocation, and duplicates.

## Production checklist

PDF downloads, QR verification, revocation, uniqueness, official fields nullable, and privacy limits are implemented.

## Required tests

Test scoring, max attempts, eligibility, certificate generation, and public verification privacy tests.

## Failure modes

Answer leakage, duplicate active certificates, predictable tokens, exposed PII, and false official claims.

## Example prompts

- "Add certificate generation for eligible users."
- "Protect public certificate verification privacy."

## Links to local docs

`docs/product/certificate-flow.md`, `docs/product/testing-flow.md`, `docs/security/certificate-verification-privacy.md`.
