---
name: taste-redesign-existing-projects
description: Project-local adaptation of Leonxlnx/taste-skill redesign guidance. Use before public, cabinet, or admin UI work to audit typography, spacing, hierarchy, motion, and interface finish.
---

# Taste Redesign Existing Projects

## Source

Adapted for this repository from `Leonxlnx/taste-skill`, especially the `redesign-existing-projects` and `design-taste-frontend` guidance. The upstream project is MIT licensed; see `NOTICE.md`.

## Purpose

Prevent generic, rough, or demo-looking UI while preserving the trust-first tone required for a Ukrainian BPR/CPD education provider.

## When to use

Use before changing public marketing pages, auth pages, cabinet/admin shells, event cards, certificate views, forms, loading states, empty states, or animation.

## Design stance

- This is a regulated professional education platform, not a spectacle site.
- Prefer calm authority, readable density, precise spacing, strong states, and clear hierarchy.
- Motion should feel smooth and helpful: no scroll hijacking, no hidden critical content, no distracting choreography.
- Reuse the existing Next.js, Tailwind v4, and GSAP stack. Do not add visual libraries unless the current stack cannot solve the problem.

## Audit workflow

1. Read the route, component, stylesheet, and existing UI patterns before editing.
2. Identify the highest-impact rough edges: corrupted copy, default fonts, weak contrast, flat hover states, awkward spacing, missing loading/empty/error states, and generic cards.
3. Fix in this order: copy/encoding, typography, palette/surfaces, interaction states, layout rhythm, motion polish, fallback states.
4. Preserve accessibility: keyboard focus, semantic headings, reduced motion, readable text, and non-overlapping responsive layouts.
5. Keep changes reviewable and focused. Do not redesign unrelated flows in the same pass.

## Production checklist

- Visible Ukrainian/Russian/English copy is not mojibake.
- Buttons and links have hover, active, disabled, and focus-visible states.
- Cards and panels use consistent radius, border, surface, and shadow rules.
- Public pages have branded metadata, useful 404 behavior, and no dead-end CTAs.
- Animations are scoped, transform-based, and disabled for reduced motion.
- Mobile layouts retain readable line lengths and no text overflow.

## Required tests

Run format, lint, typecheck, build, and the most relevant Playwright route/a11y tests after UI changes.
