---
name: file-storage-upload-security
description: Build secure file upload, storage adapters, metadata persistence, and protected downloads for BPR materials and provider documents.
---

# File Storage Upload Security

## Purpose

Store files safely and control access to private materials.

## When to use

Use for file uploads, material downloads, provider documents, images, storage keys, MIME validation, and external recording URLs.

## When not to use

Do not use for text-only form changes.

## Inputs

Allowed file policy, `FileAsset` model, admin upload requirements, material visibility, and storage environment variables.

## Outputs

Storage service, upload validation, protected download route, audit logs, and tests.

## Safety/security boundaries

Block executable/script/HTML/unsanitized SVG files, path traversal, arbitrary server-side fetches, and public exposure of private files.

## Step-by-step workflow

1. Validate extension, MIME, size, and filename.
2. Generate safe storage keys.
3. Persist metadata in DB.
4. Enforce material/provider-doc access through services.
5. Audit uploads/deletes and denied sensitive access where useful.

## Production checklist

Local dev adapter, object storage interface, protected routes, allowlist validation, and malware-scan adapter placeholder are present.

## Required tests

Upload validation, traversal rejection, unauthorized download denial, and external URL validation tests.

## Failure modes

Path traversal, executable upload, public private materials, trusting browser MIME only, and PII-heavy file logs.

## Example prompts

- "Add protected material download."
- "Harden provider document uploads."

## Links to local docs

`docs/security/file-upload-policy.md`, `src/lib/security/upload-policy.ts`, `prisma/schema.prisma`.
