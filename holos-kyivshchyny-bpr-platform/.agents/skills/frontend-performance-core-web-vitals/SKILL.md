---
name: frontend-performance-core-web-vitals
description: Optimize Next.js frontend performance and Core Web Vitals. Use for LCP, INP, CLS, bundle analysis, images, fonts, and dynamic imports.
---

# Frontend Performance Core Web Vitals

## Purpose

Keep public and app routes fast under production conditions.

## When to use

Use for heavy client components, animation, image/font loading, route performance, bundle analysis, and Lighthouse evidence.

## When not to use

Do not use for backend-only data correctness unless query performance affects route latency.

## Inputs

Route structure, bundle/build output, Lighthouse reports, image assets, animation components, and performance budget docs.

## Outputs

Dynamic imports, server-only heavy libraries, optimized media, performance docs, and Lighthouse evidence.

## Safety/security boundaries

Do not move sensitive server logic client-side for performance. Do not lazy-load required form/security behavior incorrectly.

## Step-by-step workflow

1. Keep PDF/QR/Excel/server libraries out of public bundles.
2. Prefer Server Components and streamed data.
3. Optimize images and fonts.
4. Lazy-load non-critical animation.
5. Run build and Lighthouse where a URL exists.

## Production checklist

LCP <= 2.5s, INP <= 200ms, CLS <= 0.1 target, no hydration warnings, and route states are stable.

## Required tests

Build, route smoke tests, and Lighthouse/performance scripts when staging is available.

## Failure modes

Client bundle bloat, layout shift, blocking animations, hydration mismatch, and unoptimized hero/media.

## Example prompts

- "Reduce admin bundle size."
- "Improve public event page LCP."

## Links to local docs

`docs/architecture/performance-budget.md`, `docs/finalization/lighthouse-performance-report.md`, `.github/workflows/performance.yml`.
