# Observability Runbook

## Health Checks

- Probe `/api/health` every minute.
- Alert after three consecutive failures.
- Capture response status, latency, deployment version, and region.

## Application Signals

- Authentication failures by provider and route.
- Registration creation and update failures.
- Test attempt submission failures.
- Certificate generation and revocation failures.
- Export creation failures.
- Notification send and retry failures.

## Dashboards

- HTTP 5xx rate.
- P95 and P99 response time.
- Database connection saturation.
- Job queue delay for notifications.
- Storage upload failures.

## Incident Triage

1. Check deploy status.
2. Check database availability.
3. Check auth provider and SMTP/storage status.
4. Review audit log for recent admin changes.
5. Roll back only after preserving logs and export evidence.
