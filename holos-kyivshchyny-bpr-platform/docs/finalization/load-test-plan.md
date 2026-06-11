# Load Test Plan

Status: WAITING_HOSTING

## Safety Rules

- Test only an authorized deployment.
- Do not target third-party systems such as OAuth providers, SMTP providers, SMS/Viber providers, or payment systems.
- Start with low traffic and stop on elevated error rate.

## Proposed Scope

| Endpoint/Flow            | Target RPS | Duration  | Status          | Evidence | Notes                           |
| ------------------------ | ---------- | --------- | --------------- | -------- | ------------------------------- |
| Home page                | 5          | 5 minutes | WAITING_HOSTING |          |                                 |
| Events listing           | 5          | 5 minutes | WAITING_HOSTING |          |                                 |
| Event detail             | 3          | 5 minutes | WAITING_HOSTING |          |                                 |
| Certificate verification | 2          | 5 minutes | WAITING_HOSTING |          | Avoid private data exposure.    |
| Auth sign-in page view   | 1          | 5 minutes | WAITING_HOSTING |          | Do not brute force credentials. |

## Metrics To Record

- P50/P95/P99 response time.
- HTTP 4xx/5xx rate.
- Database CPU/connection usage.
- Application memory.
- Error logs.
- Bottlenecks and mitigation owners.
