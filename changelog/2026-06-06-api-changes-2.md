---
title: API changes — 2026-06-06
description: This release 10 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-06-06
---

This release 10 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `DELETE /api/automation/workflow-credentials/{uuid}` — Delete Workflow Credential **(breaking)**
- `GET /api/automation/workflow-credentials` — List Workflow Credentials **(breaking)**
- `GET /api/automation/workflow-credentials/lookup` — Lookup Workflow Credentials by Type **(breaking)**
- `GET /api/automation/workflow-credentials/{uuid}` — Show Workflow Credential **(breaking)**
- `GET /api/automation/workflow-templates` — List Workflow Templates **(breaking)**
- `GET /api/automation/workflow-templates/{slug}` — Show Workflow Template **(breaking)**
- `POST /api/automation/webhook/upload/{token}` — Webhook: File Upload **(breaking)**
- `POST /api/automation/workflow-credentials` — Create Workflow Credential **(breaking)**
- `POST /api/automation/workflow-templates/{slug}/instantiate` — Instantiate Workflow Template **(breaking)**
- `PUT /api/automation/workflow-credentials/{uuid}` — Update Workflow Credential **(breaking)**

_Spec version 1.0.0 → 1.0.0._
