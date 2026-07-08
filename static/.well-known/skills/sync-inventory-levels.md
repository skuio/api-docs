---
name: sync-inventory-levels
title: Sync inventory levels from an external system
description: Read current stock, diff against a source of truth, and post inventory adjustments for the differences.
provider: SKU.io
scopes: [inventory:read, inventory:write]
tutorial: https://developer.sku.io/docs/guides/tutorials/sync-inventory-levels
---

# Sync inventory levels

Keep SKU.io's on-hand quantities in step with another system (WMS, marketplace, spreadsheet count). Pattern: **read current state → diff against your source of truth → post adjustments for the differences.** Base URL `https://{tenant}.sku.io`; `Authorization: Bearer <token>` + `Accept: application/json`.

## Required scopes

`inventory:read` (steps 1, 4), `inventory:write` (step 3).

## Steps

1. **Read current stock** — `GET /api/v2/inventory-movements`, narrowed to a warehouse and date window (`?filter[warehouse_id]=1&per_page=100&sort=-created_at`). Walk pages via `next_page_url` until `null`.
2. **Diff (your code, not an API call)** — for each SKU compare SKU.io's on-hand to your authoritative count and build a list of non-zero deltas. Skip zero deltas; a no-op adjustment just adds audit noise.
3. **Post adjustments** — for each delta, `POST /api/inventory-adjustments` with a `warehouse_id`, a `reason` (always), and `lines` of `{ sku, quantity_change }`. `quantity_change` is signed (`+2`, `-2`).
4. **Verify** — `GET /api/v2/inventory-adjustments` to confirm what posted.

## Make it incremental

- **Cursor by timestamp:** remember the newest `created_at` you processed and filter `filter[created_at]` next run.
- **React to events:** subscribe to inventory [webhooks](https://developer.sku.io/docs/guides/webhooks) and adjust on pushed changes instead of polling.

## Safety

Inventory adjustments mutate live stock and post immutable movements — confirm the delta list with a human before writing at scale.

## Reference

- Full tutorial: https://developer.sku.io/docs/guides/tutorials/sync-inventory-levels
- Endpoints: https://developer.sku.io/docs/api/get-api-v-2-inventory-movements , https://developer.sku.io/docs/api/post-api-inventory-adjustments
