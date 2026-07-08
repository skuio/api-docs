---
name: manage-products
title: Create, look up, and update products
description: Get SKUs into the catalog, resolve a SKU to a product id, and keep product records current.
provider: SKU.io
scopes: [products:read, products:write]
tutorial: https://developer.sku.io/docs/guides/tutorials/import-products
---

# Manage products

Before you can sell, count, or fulfill anything, the product must exist in the catalog. Base URL `https://{tenant}.sku.io`; `Authorization: Bearer <token>` + `Accept: application/json`.

## Required scopes

`products:write` (create/update), `products:read` (look up/list).

## Steps

1. **Create** — `POST /api/products` with at least `sku` and `name` (optionally `type`, `unit_cost`, `barcode`). The response returns the created product with its `id`. For a large catalog, either loop this call or use the dedicated bulk Product Import endpoints (file upload, processed asynchronously).
2. **Look up by SKU** — `GET /api/products/by-sku?sku=WDG-003` to resolve a SKU to a product without knowing its id. `404` = not in catalog yet (create it); `200` returns the product incl. `id`.
3. **Update** — `PUT /api/products/{id}` with only the fields you're changing.
4. **List / verify** — `GET /api/v2/products` (paginated, filterable, sortable): `?filter[search]=widget&sort=sku&per_page=25`.

## Idempotency

`sku` is the natural key. Before creating, look it up (step 2) so a re-run of your importer updates instead of erroring on a duplicate.

## Reference

- Full tutorial: https://developer.sku.io/docs/guides/tutorials/import-products
- Endpoints: https://developer.sku.io/docs/api/post-api-products , https://developer.sku.io/docs/api/get-api-products-by-sku , https://developer.sku.io/docs/api/put-api-products-id , https://developer.sku.io/docs/api/get-api-v-2-products
