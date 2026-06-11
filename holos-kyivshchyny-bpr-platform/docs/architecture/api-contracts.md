# API Contracts

- Server actions parse all inputs with Zod.
- Registration accepts event slug, organization, EDRPOU, comments, consent, and notification channel.
- Test submission accepts attempt ID and option IDs; correct answers are never sent to the client before submission.
- Certificate generation returns a PDF byte array and public verification URL.
- Export services return XLSX buffers and write audit entries.
