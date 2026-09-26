---
title: API changes — 2026-09-26
description: This release includes 16 additions, 2 changes.
authors: [product-team]
tags: [added, changed]
date: 2026-09-26
---

This release includes 16 additions, 2 changes.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Amazon
- `GET /api/amazon/unified/recovery/settings/{integrationInstance}` — Get Recovery Settings
- `PUT /api/amazon/unified/recovery/settings/{integrationInstance}` — Update Recovery Settings
- `GET /api/amazon/unified/recovery/sourcing-cost-export` — Download Sourcing Cost File
- `GET /api/amazon/unified/reimbursement-cases/ai-status` — Get Reimbursement Case AI Status
- `GET /api/amazon/unified/reimbursement-cases/assignees` — List Reimbursement Case Assignees
- `POST /api/amazon/unified/reimbursement-cases/bulk-assign` — Bulk Assign Reimbursement Cases
- `POST /api/amazon/unified/reimbursement-cases/bulk-dismiss` — Bulk Dismiss Reimbursement Cases
- `POST /api/amazon/unified/reimbursement-cases/export-case-texts` — Export Reimbursement Case Texts
- `GET /api/amazon/unified/reimbursement-cases/session` — Get Filing Session Queue
- `GET /api/amazon/unified/reimbursement-cases/transitions` — Get Reimbursement Case Transitions
- `GET /api/amazon/unified/reimbursement-cases/{reimbursementCase}/attachments` — List Reimbursement Case Attachments
- `GET /api/amazon/unified/reimbursement-cases/{reimbursementCase}/attachments/{key}` — Download Reimbursement Case Attachment
- `PATCH /api/amazon/unified/reimbursement-cases/{reimbursementCase}/case-text` — Update Reimbursement Case Text
- `POST /api/amazon/unified/reimbursement-cases/{reimbursementCase}/case-text` — Generate Reimbursement Case Text
- `POST /api/amazon/unified/reimbursement-cases/{reimbursementCase}/file` — File Reimbursement Case
- `POST /api/amazon/unified/reimbursement-cases/{reimbursementCase}/record-response` — Record Amazon Response

## Changed

### Amazon
- `DELETE /api/amazon/unified/reimbursement-cases/{reimbursementCase}` — Delete Reimbursement Case
  - new response code(s): `422`
- `POST /api/amazon/unified/reimbursement-cases/{reimbursementCase}/transition` — Transition Reimbursement Case Status
  - new response code(s): `409`

_Spec version 1.0.0 → 1.0.0._
