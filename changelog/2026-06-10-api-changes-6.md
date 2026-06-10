---
title: API changes — 2026-06-10
description: This release 10 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-10
---

This release 10 added API endpoint(s).

<!-- truncate -->

## Added

- `DELETE /api/automation/workflow-credentials/{uuid}` — Delete Workflow Credential
- `GET /api/automation/workflow-credentials` — List Workflow Credentials
- `GET /api/automation/workflow-credentials/lookup` — Lookup Workflow Credentials by Type
- `GET /api/automation/workflow-credentials/{uuid}` — Show Workflow Credential
- `GET /api/automation/workflow-templates` — List Workflow Templates
- `GET /api/automation/workflow-templates/{slug}` — Show Workflow Template
- `POST /api/automation/webhook/upload/{token}` — Webhook: File Upload
- `POST /api/automation/workflow-credentials` — Create Workflow Credential
- `POST /api/automation/workflow-templates/{slug}/instantiate` — Instantiate Workflow Template
- `PUT /api/automation/workflow-credentials/{uuid}` — Update Workflow Credential

_Spec version 1.0.0 → 1.0.0._
