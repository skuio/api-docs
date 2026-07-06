---
title: API changes — 2026-07-06
description: This release 8 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-07-06
---

This release 8 added API endpoint(s).

<!-- truncate -->

## Added

- `GET //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment` — Show Fulfillment Packet
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment` — Build Fulfillment Packet
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/documents/sync-labels` — Sync Label Documents
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/email` — Send 3PL Email
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/email/preview` — Preview 3PL Email
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/portal-token/rotate` — Rotate Portal Link
- `POST //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment/send` — Send Fulfillment Order
- `PUT //{domain}/api/amazon/{integrationInstance}/draft-inbound-plans/{draft_inbound_plan}/fulfillment` — Update Fulfillment Packet

_Spec version 1.0.0 → 1.0.0._
