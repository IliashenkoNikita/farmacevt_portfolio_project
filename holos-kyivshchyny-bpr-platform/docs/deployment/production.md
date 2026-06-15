# Production Deployment

- Set environment variables, run database migrations, build with pnpm build, configure file storage, enable backups, configure monitoring, and validate rollback.
- `pnpm build` runs `prisma generate` before `next build`; keep this in place for Vercel so `@prisma/client` exposes `PrismaClient` during TypeScript checks.
- Use HTTPS with HSTS and secure cookies.
- Configure Better Auth database adapter and real email/OAuth providers.
