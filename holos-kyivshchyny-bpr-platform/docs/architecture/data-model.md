# Data Model

- User, Profile, roles, events, categories, speakers, registrations, materials, tests, attempts, certificates, verification records, notifications, audit logs, provider documents, files, and app settings are represented in Prisma.
- Important indexes include unique user email, event slug, certificate number, verification code, registration user-event pair, notification schedule/status, and audit actor.
- Event lifecycle flows from draft to published to archived; registration flows from pending to confirmed, attended, completed, or cancelled.
- Certificates are issued after registration, attendance, and test eligibility rules pass.
