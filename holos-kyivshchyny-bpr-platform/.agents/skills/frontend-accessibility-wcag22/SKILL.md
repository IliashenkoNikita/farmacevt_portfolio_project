---
name: frontend-accessibility-wcag22
description: Audit and fix WCAG 2.2 AA accessibility for public, cabinet, admin, testing, certificate, and form surfaces.
---

# Frontend Accessibility WCAG22

## Purpose

Make the application keyboard-usable, screen-reader-friendly, and visually accessible.

## When to use

Use for forms, dialogs, tables, navigation, test-taking, certificate verification, animations, and responsive UI changes.

## When not to use

Do not use for backend-only changes with no rendered UI impact.

## Inputs

Pages/components, Playwright accessibility tests, form schemas, and visual states.

## Outputs

Labels, semantic headings, focus states, ARIA where needed, reduced-motion handling, and accessibility tests.

## Safety/security boundaries

Do not hide important errors visually only. Do not animate or overlay content in ways that block form/test completion.

## Step-by-step workflow

1. Check keyboard order and focus visibility.
2. Ensure labels and error messages are associated with fields.
3. Verify semantic headings and landmarks.
4. Respect reduced motion.
5. Run accessibility tests for changed routes.

## Production checklist

WCAG 2.2 AA target, skip link, labels, contrast, keyboard dialogs, alt text, and accessible test-taking.

## Required tests

Playwright/axe tests for changed public, auth, profile, test, verification, and admin form pages.

## Failure modes

Unlabeled controls, focus traps, low contrast, inaccessible errors, and motion-triggered usability regressions.

## Example prompts

- "Audit admin event form accessibility."
- "Fix keyboard access in test builder."

## Links to local docs

`tests/accessibility/README.md`, `tests/e2e/accessibility-home.spec.ts`, `docs/finalization/accessibility-smoke-test-report.md`.
