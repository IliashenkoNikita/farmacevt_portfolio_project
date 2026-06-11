# Architecture Overview

- Next.js App Router hosts public, cabinet, admin, auth, and verification routes under locale segments.
- Server actions and service modules own mutations for registration, tests, certificates, exports, notifications, and audit logs.
- Prisma schema models the production PostgreSQL database. Demo pages use deterministic seed data for local operation without a database connection.
- Protected layouts and middleware enforce route-level access; server helpers enforce role and object-level checks.
