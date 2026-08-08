---
title: API changes — 2026-08-08
description: This release includes 5 additions.
authors: [product-team]
tags: [added]
date: 2026-08-08
---

This release includes 5 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Sales Credits
- `GET /api/sales-credits/{salesCredit}/attachments` — List Sales Credit Documents
- `POST /api/sales-credits/{salesCredit}/attachments` — Upload Sales Credit Document
- `DELETE /api/sales-credits/{salesCredit}/attachments/{attachment}` — Delete Sales Credit Document
- `GET /api/sales-credits/{salesCredit}/attachments/{attachment}/download` — Download Sales Credit Document
- `GET /api/sales-credits/{salesCredit}/attachments/{attachment}/view` — View Sales Credit Document Inline

_Spec version 1.0.0 → 1.0.0._
