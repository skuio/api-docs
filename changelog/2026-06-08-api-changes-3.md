---
title: API changes — 2026-06-08
description: This release 6 added API endpoint(s).
authors: [product-team]
tags: [added]
date: 2026-06-08
---

This release 6 added API endpoint(s).

<!-- truncate -->

## Added

- `GET /api/record-locks/{recordType}/{recordId}` — Get Lock State
- `POST /api/record-locks/{recordType}/{recordId}/acquire` — Acquire Lock
- `POST /api/record-locks/{recordType}/{recordId}/heartbeat` — Heartbeat Lock
- `POST /api/record-locks/{recordType}/{recordId}/release` — Release Lock
- `POST /api/record-locks/{recordType}/{recordId}/request-edit` — Request Edit Access
- `POST /api/record-locks/{recordType}/{recordId}/takeover` — Take Over Lock

_Spec version 1.0.0 → 1.0.0._
