# Client Files Reconciliation

Date: 2026-06-10

## Files Received

- `docs/client/Технічне завдання-2.docx`
- `docs/client/Block_scheme.pdf`

## Technical Assignment Coverage

The DOCX technical assignment requires:

- Public site for the Holos Kyivshchyny educational platform.
- Event catalog with filtering by registration of medicines, GMP/GDP, medical devices, and pharmacovigilance.
- Event details with title, date, time, format, location, BPR points, price, banner, description, speaker, program, and registration.
- Expert catalog with profile and conducted events.
- BPR information page with provider documents.
- Contacts page.
- User account with profile, registered events, materials, test results, and certificates.
- Registration form populated from profile data.
- Test constructor and participant testing.
- PDF certificate generation with participant name, event, date, hours, BPR points, unique number, and QR verification.
- Admin tools for events, speakers, materials, tests, certificates, registrations, and Excel export.

Current implementation covers these areas through App Router pages, service helpers, Prisma models, Playwright flows, and finalization docs.

## Block Scheme

`Block_scheme.pdf` is now stored in `docs/client`. No local PDF text parser is installed in this workspace, so the block scheme still needs visual/manual review against:

- Public navigation.
- Registration path.
- Cabinet path.
- Testing path.
- Certificate path.
- Admin path.
- Export/reporting path.

## Remaining Gap

The first blocker, missing client files, is resolved. Production still requires legal approval, deployment secrets, hosting evidence, monitoring, backups, and live integration checks.
