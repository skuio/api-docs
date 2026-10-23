---
title: API changes — 2026-10-23
description: This release includes 22 additions.
authors: [product-team]
tags: [added]
date: 2026-10-23
---

This release includes 22 additions.

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## Added

### Mercury
- `GET /api/mercury/instances` — List Mercury Instances
- `GET /api/mercury/instances/initialize` — Initialize Mercury Connection
- `DELETE /api/mercury/instances/{instance}` — Disconnect Mercury Instance
- `PATCH /api/mercury/instances/{instance}` — Update Mercury Instance
- `GET /api/mercury/instances/{instance}/approvers` — List Mercury Payment Approvers
- `POST /api/mercury/instances/{instance}/test-connection` — Test Mercury Connection
- `GET /api/mercury/instances/{instance}/webhook` — Get Mercury Webhook Status
- `POST /api/mercury/instances/{instance}/webhook` — Register Mercury Webhook
- `POST /api/mercury/payment-batches` — Initiate Mercury Payment Batch
- `GET /api/mercury/payment-requests` — List Mercury Payment Requests
- `POST /api/mercury/payment-requests/{request}/approve` — Approve Mercury Payment Request
- `POST /api/mercury/payment-requests/{request}/decline` — Decline Mercury Payment Request
- `POST /api/mercury/payments/reconcile` — Reconcile Mercury Payments
- `GET /api/mercury/recipients` — List Mercury Recipients
- `POST /api/mercury/recipients` — Create Mercury Recipient
- `POST /api/mercury/recipients/invite` — Invite Mercury Recipient
- `POST /api/mercury/recipients/sync` — Sync Mercury Recipients
- `DELETE /api/mercury/recipients/{recipient}/match` — Unmatch Mercury Recipient
- `POST /api/mercury/recipients/{recipient}/match` — Match Mercury Recipient To Supplier
- `GET /api/mercury/webhook-events` — List Mercury Webhook Events
- `GET /api/mercury/webhook-events/{id}` — Get Mercury Webhook Event
- `POST /api/mercury/webhook-events/{id}/replay` — Replay Mercury Webhook Event

_Spec version 1.0.0 → 1.0.0._
