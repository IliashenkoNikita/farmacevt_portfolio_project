# User Acceptance Test Plan

## Scope

UAT covers public discovery, registration, user cabinet, testing, certificates, public verification, admin content management, attendance, materials, exports, and provider documents.

## Participants

- Provider administrator
- Content manager
- Support operator
- Registered pharmacist user
- Visitor without an account

## Pass Criteria

- Each critical flow completes without JavaScript console errors in production build.
- Required Ukrainian copy, provider name, event data, BPR points, and certificate data are accepted by the client.
- Public verification exposes only approved public fields.
- Admin export is accepted by operations staff.
- Accessibility smoke checks pass for the main pages.

## Exit Criteria

UAT exits when all critical flows pass, client source files have been reconciled, and remaining defects are classified by severity with owners.
