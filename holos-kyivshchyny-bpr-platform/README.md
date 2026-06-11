# Holos Kyivshchyny BPR Platform

Full-stack MVP for ТОВ «Незалежна інформаційна компанія “Голос Київщини”». The app supports public BPR/CPD event discovery, registration, cabinet workflows, testing, certificate generation and verification, admin management, exports, notifications, audit logging, and production security controls.

## Tech Stack

Next.js App Router, React, strict TypeScript, Tailwind CSS v4, shadcn-style components, GSAP, React Hook Form, Zod, Prisma, PostgreSQL, Better Auth package integration path, PDF generation with pdf-lib, QR generation with qrcode, Excel export with ExcelJS, Nodemailer dev email adapter, rate-limiter-flexible package, Vitest, Playwright, and axe.

## Local Setup

```bash
pnpm install
cp .env.example .env
pnpm seed
pnpm dev
```

Open http://localhost:3000/uk.

## Database

Set DATABASE_URL to PostgreSQL, then run Prisma migrations in production. The seed script prints demo data and is structured for Prisma upsert migration.

## Demo Credentials

- Super admin: superadmin@holos.example / demo-password
- Admin: admin@holos.example / demo-password
- User: user1@holos.example / demo-password

The demo sign-in form accepts these emails and sets secure HTTP-only demo cookies for protected flows.

## Main Routes

Public: /uk, /uk/events, /uk/experts, /uk/bpr, /uk/accreditation, /uk/about, /uk/contacts, /uk/certificate/verify/[code].
Cabinet: /uk/cabinet and profile/events/materials/tests/certificates/bpr-portfolio/license-reminders.
Admin: /uk/admin and events/speakers/materials/tests/registrations/certificates/exports/audit-log/provider-documents.

## Commands

```bash
pnpm lint
pnpm typecheck
pnpm env:check
pnpm prisma:validate
pnpm test
pnpm build
pnpm test:a11y
pnpm test:e2e
pnpm security:scan
```

## Production Checklist

Configure real PostgreSQL, Better Auth database adapter, auth secrets, OAuth providers, email provider, file storage, monitoring, backup schedule, legal accreditation documents, and production SMS/Viber providers. The seeded provider documents show a demo disclaimer and must not be treated as official accreditation.

## Security Notes

The app includes security headers, route protection, role checks, object-level authorization helpers, Zod schemas, rate-limit middleware, upload validation, privacy-safe verification, and audit-log service primitives. Public certificate verification never exposes birth date, phone, email, workplace, internal IDs, raw test answers, or private profile data.
