---
name: frontend-accessibility-polish
description: Legacy frontend accessibility polish skill. Use before changing public, cabinet, admin, certificate, test-taking, or animated UI surfaces.
---

# Frontend Accessibility Polish

## Purpose

Keep UI changes accessible, responsive, and reduced-motion friendly.

## When to use

Use for public, cabinet, admin, certificate, test-taking, and animated UI changes.

## When not to use

Do not use for backend-only changes with no rendered UI impact.

## Inputs

Route files, components, form schemas, animation components, and Playwright accessibility tests.

## Outputs

Accessible labels, focus states, semantic structure, reduced-motion support, and test evidence.

## Safety/security boundaries

Do not animate or overlay content in ways that hide errors, block input, or create transient contrast failures.

## Step-by-step workflow

1. Keep forms labelled and keyboard reachable.
2. Preserve `prefers-reduced-motion` behavior.
3. Give meaningful icons accessible names or adjacent text.
4. Add explicit image semantics for certificate/QR previews.
5. Verify responsive layouts after notable UI changes.

## Production checklist

Keyboard access, focus visibility, labels, headings, contrast, reduced motion, and responsive fit are checked.

## Required tests

Run affected e2e tests and accessibility smoke tests where routes changed.

## Failure modes

Unlabelled controls, focus traps, blocked forms, layout overlap, and animation-driven accessibility regressions.

## Example prompts

- "Polish the profile form accessibility."
- "Check certificate verification accessibility."

## Links to local docs

`tests/accessibility/README.md`, `tests/e2e/accessibility-home.spec.ts`, `docs/finalization/accessibility-smoke-test-report.md`.
