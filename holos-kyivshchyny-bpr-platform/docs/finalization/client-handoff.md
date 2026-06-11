# Client Handoff

## Delivered Repository Areas

- `src/app`: App Router pages and API health route.
- `src/components`: UI, animation, certificate, and admin building blocks.
- `src/server/services`: domain logic for registration, tests, certificates, exports, and notifications.
- `src/lib`: auth, security, validation, sample data, and utilities.
- `prisma/schema.prisma`: database model.
- `tests`: unit, integration, accessibility, and e2e coverage.
- `docs`: architecture, product, security, deployment, and finalization documentation.

## How To Verify

Run:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm test:e2e
pnpm exec prisma validate
```

## Handoff Notes

- Store real secrets outside Git.
- Review `docs/client/CLIENT_FILES_RECONCILIATION.md` before contractual acceptance.
- Treat the current app as demo/UAT ready, not production-live ready.
