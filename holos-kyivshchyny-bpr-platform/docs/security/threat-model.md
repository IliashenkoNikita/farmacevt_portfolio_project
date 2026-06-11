# Threat Model

- Assets: personal data, auth sessions, certificates, test answers, uploads, exports, provider documents, audit logs, notification payloads.
- Actors: visitor, registered user, admin, super admin, external verifier, malicious unauthenticated user.
- Trust boundaries: browser/server, public/private files, admin exports, certificate verification, database, notification adapters.
- Mitigations: Zod validation, RBAC, object authorization, security headers, rate limits, upload validation, privacy-safe logs, audit entries, no client-trusted user IDs.
