# Security Scan Report

Status: IN_PROGRESS

## Local/CI Commands

| Command                    | Status          | Evidence                                                                                                  | Notes                                   |
| -------------------------- | --------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `pnpm security:scan`       | DONE            | Passed locally; audit reported 1 low and 3 moderate advisories, no high/critical at configured threshold. | Runs dependency audit and lint locally. |
| GitHub CodeQL              | WAITING_HOSTING | `.github/workflows/security.yml`                                                                          | Needs GitHub Actions run.               |
| Gitleaks                   | WAITING_HOSTING | `.github/workflows/security.yml`                                                                          | Needs GitHub Actions run.               |
| Semgrep                    | WAITING_HOSTING | `.github/workflows/security.yml`                                                                          | Needs GitHub Actions run.               |
| Trivy                      | WAITING_HOSTING | `.github/workflows/security.yml`                                                                          | Needs GitHub Actions run.               |
| OWASP ZAP staging baseline | WAITING_HOSTING |                                                                                                           | Requires staging URL and approval.      |

## Findings

| Finding                                 | Severity | Status | Owner     | Evidence             | Notes                                              |
| --------------------------------------- | -------- | ------ | --------- | -------------------- | -------------------------------------------------- |
| No local critical/high finding recorded | DONE     | DONE   | Developer | `pnpm security:scan` | CI scan evidence still required before production. |

## Production Rule

Critical or high findings must be fixed, downgraded with evidence, or explicitly accepted in writing before production.
