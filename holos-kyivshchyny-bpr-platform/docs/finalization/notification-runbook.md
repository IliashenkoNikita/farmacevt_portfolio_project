# Notification Runbook

## Channels

- Email is the primary supported channel.
- SMS and Viber are modeled for future provider integration.

## Events

- Registration confirmation.
- Event reminder.
- Material availability.
- Test availability.
- Certificate availability.
- Admin failure alerts.

## Delivery Rules

- Respect preferred user channels.
- Do not send marketing messages without consent.
- Store provider response IDs and failure reasons in notification metadata.
- Retry transient failures with capped backoff.

## Operational Review

Review failed notification counts daily during launch week and after each event.
