# Accessibility Smoke Test Report

Status: IN_PROGRESS

## Local Automated Coverage

| Check                              | Status | Evidence                                     | Notes                                  |
| ---------------------------------- | ------ | -------------------------------------------- | -------------------------------------- |
| Playwright accessibility home scan | DONE   | `npx pnpm@10.12.1 test:a11y` passed, 1 test  | Re-run on deployed URL when available. |
| Full e2e accessibility smoke       | DONE   | `npx pnpm@10.12.1 test:e2e` passed, 17 tests | Re-run on deployed URL when available. |

## Deployed Manual Checks

| Check                             | Status          | Owner | Evidence | Notes |
| --------------------------------- | --------------- | ----- | -------- | ----- |
| Keyboard navigation               | WAITING_HOSTING | QA    |          |       |
| Visible focus                     | WAITING_HOSTING | QA    |          |       |
| Forms have labels                 | WAITING_HOSTING | QA    |          |       |
| Dialogs accessible                | WAITING_HOSTING | QA    |          |       |
| Reduced motion works              | WAITING_HOSTING | QA    |          |       |
| Certificate verification readable | WAITING_HOSTING | QA    |          |       |
| Admin forms usable by keyboard    | WAITING_HOSTING | QA    |          |       |
