# Auth And RBAC

- Roles: USER, ADMIN, SUPER_ADMIN, MANAGER, CONTENT_EDITOR, SUPPORT.
- USER accesses only own cabinet data.
- ADMIN manages platform content and exports.
- SUPER_ADMIN manages admins and sensitive settings.
- Admin pages are protected by middleware and server-side checks.
