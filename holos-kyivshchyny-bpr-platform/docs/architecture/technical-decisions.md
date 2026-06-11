# Technical Decisions

- Next.js App Router was selected after checking the current official Next.js installation and App Router documentation.
- Better Auth was selected as the auth package path after checking current Better Auth docs; the demo uses HTTP-only cookies while production should enable its database adapter and providers.
- Prisma with PostgreSQL follows current Prisma Next.js guidance and provides typed schema, migrations, and seed support.
- pdf-lib is used for PDF certificate generation because it is actively maintained for JavaScript PDF creation and modification.
- qrcode is used for QR PNG/data URL generation.
- ExcelJS is used for XLSX participant, certificate, and test-result exports.
- Nodemailer is used for the development email adapter; SMS and Viber are implemented as dev adapters that log scheduled messages.
- rate-limiter-flexible is included for production-ready rate limiting, while middleware uses an in-memory limiter for local demo mode.
