# Production Operations Runbook

Status: WAITING_HOSTING

## Health

| Check                        | Status          | Owner         | Evidence                           | Notes                        |
| ---------------------------- | --------------- | ------------- | ---------------------------------- | ---------------------------- |
| `/api/health` exists         | DONE            | Developer     | `src/app/api/health/route.ts`      |                              |
| Returns app version/status   | DONE            | Developer     | `version`, `status`, `checks` JSON |                              |
| Checks database connectivity | DONE            | Developer     | Safe `SELECT 1` check              | Reports degraded on failure. |
| Does not expose secrets      | DONE            | Developer     | No env values returned             |                              |
| Can be monitored externally  | WAITING_HOSTING | Hosting owner |                                    | Needs deployed URL.          |

## Monitoring

| Item                   | Status          | Owner                 | Evidence | Notes                 |
| ---------------------- | --------------- | --------------------- | -------- | --------------------- |
| Monitoring URL         | WAITING_HOSTING | Hosting owner         |          |                       |
| Alert destination      | WAITING_HOSTING | Client/hosting        |          | Email/Slack/phone.    |
| Uptime check           | WAITING_HOSTING | Hosting owner         |          | Target `/api/health`. |
| Error logging provider | WAITING_HOSTING | Hosting owner         |          | Sentry or equivalent. |
| Owner/contact          | WAITING_CLIENT  | Client business owner |          |                       |

## Backups

| Item                       | Status          | Owner                 | Evidence | Notes                                   |
| -------------------------- | --------------- | --------------------- | -------- | --------------------------------------- |
| Database backup schedule   | WAITING_HOSTING | Hosting owner         |          | Daily minimum recommended.              |
| File storage backup policy | WAITING_HOSTING | Hosting owner         |          | Include provider docs and certificates. |
| Restore test date          | WAITING_HOSTING | Hosting owner         |          |                                         |
| Restore test result        | WAITING_HOSTING | Hosting owner         |          |                                         |
| RPO/RTO assumptions        | WAITING_CLIENT  | Client/hosting        |          |                                         |
| Owner/contact              | WAITING_CLIENT  | Client business owner |          |                                         |

## Incident Response

| Severity | Definition                                                             | First response target | Owner          |
| -------- | ---------------------------------------------------------------------- | --------------------- | -------------- |
| SEV1     | Auth, data leak, certificate verification outage, database unavailable | 15 minutes            | WAITING_CLIENT |
| SEV2     | Registration/test/certificate/admin core flow degraded                 | 1 hour                | WAITING_CLIENT |
| SEV3     | Non-critical page/content issue                                        | 1 business day        | WAITING_CLIENT |

### First 15 Minutes

- [ ] Confirm incident scope.
- [ ] Preserve logs.
- [ ] Identify last deployment/admin change.
- [ ] Assign incident owner.
- [ ] Notify client business owner.
- [ ] Decide rollback, disable feature, or continue investigation.

### Auth Compromise

- [ ] Rotate auth secrets.
- [ ] Revoke sessions.
- [ ] Review admin accounts.
- [ ] Review audit log.

### Database Compromise

- [ ] Disable public writes if needed.
- [ ] Snapshot current database.
- [ ] Rotate database credentials.
- [ ] Start legal/privacy notification assessment.

### Leaked Secret

- [ ] Revoke leaked credential.
- [ ] Rotate dependent service credentials.
- [ ] Search logs and Git history.
- [ ] Redeploy with new secrets.

### Certificate Verification Issue

- [ ] Preserve affected certificate IDs.
- [ ] Disable generation if integrity is uncertain.
- [ ] Keep public verification privacy-safe.
- [ ] Notify legal/provider owner.

### Rollback

- [ ] Roll back deployment.
- [ ] Confirm database compatibility.
- [ ] Confirm `/api/health`.
- [ ] Re-run smoke tests.

## Rate Limiting And WAF

| Route/Area               | App-level status | Deployment-level status | Owner             | Notes                                              |
| ------------------------ | ---------------- | ----------------------- | ----------------- | -------------------------------------------------- |
| Auth routes              | IN_PROGRESS      | WAITING_HOSTING         | Developer/hosting | Rate-limit package present; deployment WAF needed. |
| Certificate verification | IN_PROGRESS      | WAITING_HOSTING         | Developer/hosting | Protect from scraping.                             |
| Registration             | IN_PROGRESS      | WAITING_HOSTING         | Developer/hosting | Protect from spam.                                 |
| Contact form             | IN_PROGRESS      | WAITING_HOSTING         | Developer/hosting | Protect from spam.                                 |
| Admin export             | DONE             | WAITING_HOSTING         | Developer/hosting | Protected route plus deployment controls.          |
