---
title: API changes — 2026-10-28
description: This release includes 11 additions, 10 removals. 10 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-10-28
---

This release includes 11 additions, 10 removals. 10 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Agent Console
- **Removed** `GET /api/support/agent/links/jira/{key}/requesters` — List Issue Requesters

#### Store Email Layouts
- **Removed** `GET /api/store-email-layouts` — List Brand Layouts
- **Removed** `POST /api/store-email-layouts` — Create Store Brand Layout
- **Removed** `DELETE /api/store-email-layouts/{id}` — Delete Store Brand Layout
- **Removed** `GET /api/store-email-layouts/{id}` — Get Brand Layout
- **Removed** `PUT /api/store-email-layouts/{id}` — Update Brand Layout
- **Removed** `POST /api/store-email-layouts/{id}/reset` — Reset Brand Layout
- **Removed** `GET /api/store-email-layouts/{id}/versions` — List Brand Layout Versions
- **Removed** `GET /api/store-email-layouts/{id}/versions/{versionId}` — Get Brand Layout Version
- **Removed** `POST /api/store-email-layouts/{storeId}/ai-edit/stream` — AI Edit Brand Layout (stream)

## Added

### Agent Console
- `GET /api/support/agent/links/devhq/{key}/requesters` — List Issue Requesters

### Quotes
- `GET /api/quotes/{quote}/comments/{comment}/attachment` — Download Quote Comment Attachment
- `POST /api/quotes/{quote}/lines/import` — Import Quote Lines
- `POST /api/quotes/{quote}/lines/resolve-skus` — Resolve Quote Line SKUs

### Stock Takes
- `GET /api/stock-takes/template` — Download Stock Take Template

### Store Email Templates
- `POST /api/store-email-templates/ai-batches` — Start Email Template AI Batch
- `GET /api/store-email-templates/ai-batches/{batch}` — Get Email Template AI Batch
- `POST /api/store-email-templates/ai-batches/{batch}/accept-all` — Accept All Email Template AI Proposals
- `POST /api/store-email-templates/ai-batches/{batch}/cancel` — Cancel Email Template AI Batch
- `POST /api/store-email-templates/ai-batches/{batch}/proposals/{proposal}/accept` — Accept Email Template AI Proposal
- `POST /api/store-email-templates/ai-batches/{batch}/proposals/{proposal}/reject` — Reject Email Template AI Proposal

_Spec version 1.0.0 → 1.0.0._
