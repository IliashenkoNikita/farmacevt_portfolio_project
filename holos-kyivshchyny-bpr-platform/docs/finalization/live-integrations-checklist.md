# Live Integrations Checklist

Status: WAITING_HOSTING

Use this checklist against the deployed staging or production environment. Do not mark items DONE without evidence.

## Login/Auth

| Check                      | Status          | Owner          | Evidence | Notes                                    |
| -------------------------- | --------------- | -------------- | -------- | ---------------------------------------- |
| Email/password sign-up     | WAITING_HOSTING | QA/hosting     |          |                                          |
| Email/password sign-in     | WAITING_HOSTING | QA/hosting     |          |                                          |
| Password reset             | WAITING_HOSTING | QA/hosting     |          | Needs mail provider.                     |
| Session persistence        | WAITING_HOSTING | QA/hosting     |          |                                          |
| Logout                     | WAITING_HOSTING | QA/hosting     |          |                                          |
| Protected cabinet redirect | WAITING_HOSTING | QA/hosting     |          |                                          |
| Protected admin redirect   | WAITING_HOSTING | QA/hosting     |          |                                          |
| Google OAuth if enabled    | ACCEPTED_RISK   | Client/hosting |          | Disabled until credentials are provided. |
| Facebook OAuth if enabled  | ACCEPTED_RISK   | Client/hosting |          | Disabled until credentials are provided. |
| Apple OAuth if enabled     | ACCEPTED_RISK   | Client/hosting |          | Disabled until credentials are provided. |

## Email

| Check                            | Status          | Owner      | Evidence | Notes |
| -------------------------------- | --------------- | ---------- | -------- | ----- |
| Registration confirmation        | WAITING_HOSTING | QA/hosting |          |       |
| Event reminder one day before    | WAITING_HOSTING | QA/hosting |          |       |
| Event reminder 30 minutes before | WAITING_HOSTING | QA/hosting |          |       |
| Access link email                | WAITING_HOSTING | QA/hosting |          |       |
| Material availability email      | WAITING_HOSTING | QA/hosting |          |       |
| Test availability email          | WAITING_HOSTING | QA/hosting |          |       |
| Certificate issued email         | WAITING_HOSTING | QA/hosting |          |       |
| Password reset email             | WAITING_HOSTING | QA/hosting |          |       |

## File Storage

| Check                                   | Status          | Owner      | Evidence                                        | Notes                    |
| --------------------------------------- | --------------- | ---------- | ----------------------------------------------- | ------------------------ |
| Upload event banner                     | WAITING_HOSTING | QA/hosting |                                                 |                          |
| Upload speaker photo                    | WAITING_HOSTING | QA/hosting |                                                 |                          |
| Upload provider document                | WAITING_HOSTING | QA/hosting |                                                 |                          |
| Upload learning material                | WAITING_HOSTING | QA/hosting |                                                 |                          |
| Private material download authorization | WAITING_HOSTING | QA/hosting |                                                 |                          |
| Public image delivery                   | WAITING_HOSTING | QA/hosting |                                                 |                          |
| Delete/revoke file                      | WAITING_HOSTING | QA/hosting |                                                 |                          |
| File size/type validation               | DONE            | Developer  | `src/lib/security/upload-policy.ts`; unit tests | Local validation exists. |

## Database

| Check                             | Status          | Owner             | Evidence                      | Notes                         |
| --------------------------------- | --------------- | ----------------- | ----------------------------- | ----------------------------- |
| Migration deploy                  | WAITING_HOSTING | Hosting owner     |                               |                               |
| Seed/bootstrap admin              | WAITING_HOSTING | Hosting owner     |                               |                               |
| Rollback notes                    | IN_PROGRESS     | Developer/hosting | `docs/deployment/database.md` | Needs hosting-specific steps. |
| Connection pool check             | WAITING_HOSTING | Hosting owner     |                               |                               |
| Migration backup-before-run check | WAITING_HOSTING | Hosting owner     |                               |                               |

## Certificates

| Check                                     | Status          | Owner     | Evidence            | Notes                                |
| ----------------------------------------- | --------------- | --------- | ------------------- | ------------------------------------ |
| Generate PDF                              | DONE            | Developer | Unit/e2e coverage   | Needs deployed storage confirmation. |
| Download PDF from cabinet                 | DONE            | Developer | Playwright coverage | Needs deployed storage confirmation. |
| Admin generates certificate               | DONE            | Developer | Playwright coverage | Needs deployed DB confirmation.      |
| QR code scans correctly                   | WAITING_HOSTING | QA/client |                     | Requires deployed public URL.        |
| Public verification page works            | DONE            | Developer | Playwright coverage | Needs deployed smoke test.           |
| Revoked certificate shows revoked status  | DONE            | Developer | Unit coverage       | Needs deployed smoke test.           |
| Duplicate active certificate is prevented | DONE            | Developer | Unit coverage       |                                      |

## Notifications

| Check                              | Status          | Owner                 | Evidence            | Notes                                                                             |
| ---------------------------------- | --------------- | --------------------- | ------------------- | --------------------------------------------------------------------------------- |
| Dev adapter disabled in production | BLOCKED         | Developer/hosting     |                     | Current service includes dev adapter; production adapter must be wired with SMTP. |
| Real SMTP adapter active           | WAITING_HOSTING | Hosting owner         |                     |                                                                                   |
| SMS/Viber disabled or configured   | WAITING_CLIENT  | Client business owner |                     |                                                                                   |
| Failed notifications are logged    | IN_PROGRESS     | Developer/hosting     | Prisma model exists | Needs production adapter evidence.                                                |
