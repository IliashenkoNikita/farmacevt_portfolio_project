---
name: gsap-react-next-animation
description: Use GSAP safely in React/Next.js with @gsap/react, scoped refs, cleanup, reduced motion, and production performance boundaries.
---

# GSAP React Next Animation

## Purpose

Keep animations polished, scoped, accessible, and non-blocking.

## When to use

Use for GSAP components, scroll/reveal animations, animated metrics, transitions, and animation performance fixes.

## When not to use

Do not use for forms, tests, admin workflows, or certificates unless animation is already part of the UI.

## Inputs

Client animation components, reduced motion hook, existing GSAP usage, and performance/accessibility constraints.

## Outputs

Scoped `useGSAP` animations, cleanup, reduced-motion branches, lazy loading, and tests where useful.

## Safety/security boundaries

Do not animate critical state in a way that hides validation, blocks input, or causes contrast/layout issues.

## Step-by-step workflow

1. Keep GSAP in client components only.
2. Register plugins once.
3. Scope animations to refs.
4. Respect `prefers-reduced-motion`.
5. Prefer transform/opacity and avoid scroll hijacking.

## Production checklist

No hydration mismatch, no blocking forms, no layout shift, and no GSAP in server components.

## Required tests

Build, e2e smoke for affected pages, and reduced-motion review.

## Failure modes

Unscoped timelines, missing cleanup, hidden content, scroll hijacking, and heavy animation in core workflows.

## Example prompts

- "Polish hero animation safely."
- "Fix reduced-motion support."

## Links to local docs

`docs/architecture/animation-system.md`, `src/components/animation/`.
