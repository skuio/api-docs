---
name: create-and-fulfill-an-order
title: Create and fulfill a sales order
description: Create a customer, place a sales order, dispatch a fulfillment, and read the order back to confirm.
provider: SKU.io
scopes: [customers:write, orders:read, orders:write]
tutorial: https://developer.sku.io/docs/guides/tutorials/create-and-fulfill-order
---

# Create and fulfill a sales order

The full order lifecycle over the API. Base URL is the tenant domain (`https://{tenant}.sku.io`); every request needs `Authorization: Bearer <token>` and `Accept: application/json`. Run one step at a time and read back between steps.

## Required scopes

`customers:write` (step 1), `orders:write` (steps 2–3), `orders:read` (step 4).

## Steps

1. **Create the customer** (skip if they exist and you have their id) — `POST /api/customers` with at least `name`. The new customer is under `data`; keep `data.id`.
2. **Create the sales order** — `POST /api/sales-orders` referencing `customer_id` and one or more `lines` (each by product `sku` or id, with `quantity` and `price`). Dates are app-timezone `m/d/Y` on input. Keep the returned order `id`.
3. **Fulfill the order** — `POST /api/sales-orders/{salesOrder}/fulfill` with a `warehouse_id` and the `lines` to ship. This creates a shipment and moves inventory. A line that can't be fully allocated returns 422 explaining the shortfall.
4. **Read it back** — `GET /api/sales-orders/{salesOrder}` to confirm fulfillment status and shipment records. To poll the dispatch feed instead of one order, use `GET /api/fulfillment-orders`.

## Safety

- `fulfill` moves live inventory and is not a dry run — confirm quantities before calling.
- Prefer reacting to order/shipment [webhooks](https://developer.sku.io/docs/guides/webhooks) over re-polling step 4.

## Reference

- Full tutorial with request bodies: https://developer.sku.io/docs/guides/tutorials/create-and-fulfill-order
- Endpoint reference: https://developer.sku.io/docs/api/post-api-sales-orders , https://developer.sku.io/docs/api/post-api-sales-orders-salesorder-fulfill
- Markdown twins: append `.md` to any docs URL.
