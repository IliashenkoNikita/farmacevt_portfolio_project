# Deployed Environment Checks

Status: WAITING_HOSTING

Run this checklist only against an authorized deployed environment.

## Manual UAT

| Check                                        | Status          | Owner     | Evidence | Notes |
| -------------------------------------------- | --------------- | --------- | -------- | ----- |
| Visitor opens home page                      | WAITING_HOSTING | QA        |          |       |
| Visitor browses events                       | WAITING_HOSTING | QA        |          |       |
| Visitor filters events                       | WAITING_HOSTING | QA        |          |       |
| Visitor opens event detail                   | WAITING_HOSTING | QA        |          |       |
| User signs up                                | WAITING_HOSTING | QA        |          |       |
| User signs in                                | WAITING_HOSTING | QA        |          |       |
| User completes profile                       | WAITING_HOSTING | QA        |          |       |
| User registers for event                     | WAITING_HOSTING | QA        |          |       |
| User sees event in cabinet                   | WAITING_HOSTING | QA        |          |       |
| User accesses materials                      | WAITING_HOSTING | QA        |          |       |
| User takes test                              | WAITING_HOSTING | QA        |          |       |
| User receives/generated certificate          | WAITING_HOSTING | QA        |          |       |
| User downloads certificate PDF               | WAITING_HOSTING | QA        |          |       |
| Public verifier scans QR                     | WAITING_HOSTING | QA        |          |       |
| Public verification page shows minimal data  | WAITING_HOSTING | QA        |          |       |
| Admin signs in                               | WAITING_HOSTING | QA        |          |       |
| Admin creates event                          | WAITING_HOSTING | QA        |          |       |
| Admin edits event                            | WAITING_HOSTING | QA        |          |       |
| Admin creates speaker                        | WAITING_HOSTING | QA        |          |       |
| Admin uploads material                       | WAITING_HOSTING | QA        |          |       |
| Admin creates test                           | WAITING_HOSTING | QA        |          |       |
| Admin views registrations                    | WAITING_HOSTING | QA        |          |       |
| Admin exports participants to Excel          | WAITING_HOSTING | QA        |          |       |
| Admin marks attendance                       | WAITING_HOSTING | QA        |          |       |
| Admin generates certificate                  | WAITING_HOSTING | QA        |          |       |
| Admin revokes certificate                    | WAITING_HOSTING | QA        |          |       |
| Admin views audit log                        | WAITING_HOSTING | QA        |          |       |
| Admin uploads provider documents             | WAITING_HOSTING | QA        |          |       |
| License reminder flow works or is documented | WAITING_HOSTING | QA/client |          |       |

## Performance

| Metric                       | Status          | Owner      | Evidence | Notes |
| ---------------------------- | --------------- | ---------- | -------- | ----- |
| Lighthouse deployed URLs run | WAITING_HOSTING | QA/hosting |          |       |
| LCP                          | WAITING_HOSTING | QA/hosting |          |       |
| INP/TBT if lab-only          | WAITING_HOSTING | QA/hosting |          |       |
| CLS                          | WAITING_HOSTING | QA/hosting |          |       |
| Performance score            | WAITING_HOSTING | QA/hosting |          |       |
| Accessibility score          | WAITING_HOSTING | QA/hosting |          |       |
| Best Practices score         | WAITING_HOSTING | QA/hosting |          |       |
| SEO score                    | WAITING_HOSTING | QA/hosting |          |       |
| Screenshots/output attached  | WAITING_HOSTING | QA/hosting |          |       |

## Accessibility

| Check                                  | Status          | Owner     | Evidence                              | Notes                                 |
| -------------------------------------- | --------------- | --------- | ------------------------------------- | ------------------------------------- |
| Keyboard navigation smoke test         | WAITING_HOSTING | QA        |                                       |                                       |
| Visible focus                          | WAITING_HOSTING | QA        |                                       |                                       |
| Forms have labels                      | DONE            | Developer | Component patterns and e2e a11y smoke | Recheck deployed pages.               |
| Dialogs accessible                     | WAITING_HOSTING | QA        |                                       |                                       |
| Reduced motion works                   | DONE            | Developer | Animation helpers                     | Recheck deployed pages.               |
| Certificate verification page readable | DONE            | Developer | Playwright coverage                   | Recheck deployed page.                |
| Admin form usable by keyboard          | WAITING_HOSTING | QA        |                                       |                                       |
| axe/Playwright a11y scan               | DONE            | Developer | `pnpm test:a11y`                      | Re-run on deployed URL if configured. |

## Load Test

| Check                                              | Status          | Owner          | Evidence                              | Notes |
| -------------------------------------------------- | --------------- | -------------- | ------------------------------------- | ----- |
| Safe load test script or plan                      | DONE            | Developer      | `docs/finalization/load-test-plan.md` |       |
| Authorized deployment only                         | WAITING_HOSTING | Hosting owner  |                                       |       |
| Home/events/certificate verify/auth tested lightly | WAITING_HOSTING | QA/hosting     |                                       |       |
| Target RPS documented                              | WAITING_CLIENT  | Client/hosting |                                       |       |
| Response times documented                          | WAITING_HOSTING | QA/hosting     |                                       |       |
| Error rate documented                              | WAITING_HOSTING | QA/hosting     |                                       |       |
| Bottlenecks documented                             | WAITING_HOSTING | QA/hosting     |                                       |       |

## Security

| Check                              | Status          | Owner            | Evidence                         | Notes                       |
| ---------------------------------- | --------------- | ---------------- | -------------------------------- | --------------------------- |
| Dependency scan in CI              | IN_PROGRESS     | Developer        | `.github/workflows/security.yml` | Needs GitHub run evidence.  |
| CodeQL                             | IN_PROGRESS     | Developer        | `.github/workflows/security.yml` | Needs GitHub run evidence.  |
| Gitleaks                           | IN_PROGRESS     | Developer        | `.github/workflows/security.yml` | Needs GitHub run evidence.  |
| Semgrep or equivalent              | IN_PROGRESS     | Developer        | `.github/workflows/security.yml` | Needs GitHub run evidence.  |
| Trivy or equivalent                | IN_PROGRESS     | Developer        | `.github/workflows/security.yml` | Needs GitHub run evidence.  |
| OWASP ZAP baseline against staging | WAITING_HOSTING | Security/hosting |                                  | Requires staging URL.       |
| False positives documented         | WAITING_HOSTING | Security/hosting |                                  |                             |
| Critical/high findings fixed       | WAITING_HOSTING | Security/hosting |                                  | Required before production. |
