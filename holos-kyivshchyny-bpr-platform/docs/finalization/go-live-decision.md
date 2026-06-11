# Go-Live Decision

Date: 2026-06-10

## Decision

Status: NO-GO for production.

The app is suitable for demo/UAT continuation, but production launch must wait for legal/provider approval, real production secrets, live integration evidence, backup/restore proof, monitoring and alerting, incident ownership, WAF/rate limits, deployed checks, and security workflow evidence.

## GO Criteria

| Criterion                                 | Status          | Evidence                                                                                                       | Notes                              |
| ----------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| Legal/provider sign-off complete          | WAITING_LEGAL   | `legal-provider-signoff.md`                                                                                    | Required for official BPR claims.  |
| Production secrets configured outside Git | WAITING_HOSTING | `production-secrets-checklist.md`                                                                              | Required.                          |
| Live integrations verified                | WAITING_HOSTING | `live-integrations-checklist.md`                                                                               | Required.                          |
| Backup and restore tested                 | WAITING_HOSTING | `production-operations-runbook.md`                                                                             | Required.                          |
| Monitoring and error alerts active        | WAITING_HOSTING | `production-operations-runbook.md`                                                                             | Required.                          |
| Incident owner assigned                   | WAITING_CLIENT  | `production-operations-runbook.md`                                                                             | Required.                          |
| WAF/rate limit configured                 | WAITING_HOSTING | `production-operations-runbook.md`                                                                             | Required.                          |
| Full UAT passed                           | WAITING_HOSTING | `manual-uat-script.md`                                                                                         | Required.                          |
| Build/typecheck/test pass                 | DONE            | `format`, `lint`, `typecheck`, `test`, `build`, `test:a11y`, `test:e2e`, `prisma:validate` all passed locally. | Re-run in CI/deployed environment. |
| Critical/high security findings fixed     | IN_PROGRESS     | Local `security:scan` passed high threshold.                                                                   | Needs CI/staging evidence.         |
| No secrets committed                      | IN_PROGRESS     | Git ignore and scan workflow                                                                                   | Needs Gitleaks run evidence.       |
| Certificate verification works            | DONE            | Playwright/unit tests                                                                                          | Recheck deployed URL.              |
| Admin core workflows work                 | DONE            | Playwright tests                                                                                               | Recheck deployed URL.              |

## GO WITH RISKS Criteria

Not applicable until client/legal/hosting explicitly accept remaining non-critical risks in writing.

## NO-GO Triggers

| Trigger                                                 | Current Status                                                      |
| ------------------------------------------------------- | ------------------------------------------------------------------- |
| Legal/provider sign-off missing for official BPR claims | BLOCKED                                                             |
| Production secrets not configured                       | BLOCKED                                                             |
| Database migrations not verified in deployment          | BLOCKED                                                             |
| Backups not tested                                      | BLOCKED                                                             |
| Critical security issue remains                         | WAITING_HOSTING                                                     |
| Secrets leaked                                          | IN_PROGRESS: no local secret evidence; Gitleaks CI evidence pending |
| Public verification leaks private data                  | DONE: current code avoids this                                      |

## Next Actions

1. Client assigns business owner and legal/provider approver.
2. Legal/provider owner completes `legal-provider-signoff.md`.
3. Hosting owner configures production secrets and runs `NODE_ENV=production pnpm env:check`.
4. Hosting owner deploys staging and verifies `/api/health`.
5. QA runs `manual-uat-script.md` and `deployed-environment-checks.md`.
6. Security owner reviews CI scan outputs and fixes critical/high findings.
7. Hosting owner completes backup/restore test and monitoring setup.
