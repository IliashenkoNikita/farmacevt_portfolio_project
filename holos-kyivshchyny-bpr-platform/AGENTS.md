# AGENTS.md

This repository is the production MVP for ТОВ «Незалежна інформаційна компанія “Голос Київщини”»: a Ukrainian BPR/CPD educational provider platform.

## Agent Rules

- Before production/finalization work, read `.agents/skills/*/SKILL.md` entries that match the requested phase and record the chosen skills in `docs/finalization/skill-activation-report.md`.
- Use pnpm only.
- Maintain strict TypeScript.
- Put UI and React components in `.tsx`; put backend, domain, security, database, validation, repository, service, job, PDF, QR, Excel, auth, and RBAC logic in `.ts`.
- Run pnpm lint, pnpm typecheck, pnpm test, and pnpm build before final response after code changes.
- Run the most relevant tests after every change and record any skipped gate with the reason.
- Update docs after architecture, data model, authentication, security, or production behavior changes.
- Do not commit secrets or real credentials.
- Do not put secrets in `NEXT_PUBLIC_*` variables.
- Do not invent legal/provider approval, official BPR accreditation status, production hosting evidence, or live integration evidence.
- Do not leave demo-only code, demo-cookie auth, static demo page reads, fake buttons, unfinished-marker comments, filler copy, or placeholder core flows in production paths.
- Preserve accessibility, reduced motion support, server-side authorization, object-level authorization, audit logging, and privacy-safe public verification.
- Do not add unfinished buttons. A CTA must perform a real route/action or protected-flow redirect.
- Create acceptance evidence before final response: changed files, commands run, pass/fail status, remaining blockers, and GO/GO WITH RISKS/NO-GO decision.

## Finalization Skills

- Use `.agents/skills/project-finalization/SKILL.md` before release-readiness passes.
- Use `.agents/skills/security-hardening/SKILL.md` before changing auth, RBAC, uploads, exports, certificates, or public verification.
- Use `.agents/skills/bpr-regulatory-check/SKILL.md` before changing BPR/CPD event, testing, attendance, or certificate behavior.
- Use `.agents/skills/frontend-accessibility-polish/SKILL.md` before changing public or cabinet UI.
- Use `.agents/skills/taste-redesign-existing-projects/SKILL.md` before frontend polish, redesign, motion, or UX review work.
- Use `.agents/skills/frontend-nextjs-production/SKILL.md`, `.agents/skills/frontend-accessibility-wcag22/SKILL.md`, and `.agents/skills/gsap-react-next-animation/SKILL.md` alongside the taste skill when the change touches routes, accessibility, or animation.
- Use `.agents/skills/auth-production-session-rbac/SKILL.md` before changing auth, session, sign-in/sign-up, or protected layouts.
- Use `.agents/skills/documentation-delivery/SKILL.md` before closing client handoff work.
