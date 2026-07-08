---
name: search-the-sku-api
title: Find the right SKU.io endpoint
description: Locate the correct operation for a task using the OpenAPI spec, per-domain chunks, and the docs — before making any call.
provider: SKU.io
docs: https://developer.sku.io
---

# Find the right SKU.io endpoint

SKU.io exposes ~3,200 operations across ~165 domains. Don't guess a path — resolve it from the machine-readable surface first.

## Prerequisites

- Base URL: `https://{tenant}.sku.io` (each account is on its own subdomain — ask the user for theirs).
- Auth: `Authorization: Bearer <personal-access-token>` + `Accept: application/json` on every request.
- Tokens are scoped and deny-by-default. Note the scope a target operation needs before calling it.

## Steps

1. **Start narrow, not with the 6 MB spec.** Fetch the per-domain catalog `https://developer.sku.io/openapi/index.json`, pick the domain (e.g. `sales-orders`, `inventory`, `amazon`), then fetch just that chunk: `https://developer.sku.io/openapi/<domain>.yaml`. Only fall back to the full `https://developer.sku.io/openapi.yaml` if you need to search across domains.
2. **Prefer `/api/...` paths.** `/api/v2/...` is a separate read-mostly BFF layer, not a newer version — most resources have no `/api/v2/` write equivalent.
3. **Skip anything flagged `deprecated: true`.** Never use it in a new integration.
4. **Read the human page for shape.** Each operation has a reference page at `https://developer.sku.io/docs/api/<operation-slug>` and a cheap markdown twin at the same URL + `.md`. The [Common Operations](https://developer.sku.io/docs/guides/common-operations) page lists the handful of endpoints most integrations actually use, grouped by domain, with method + path + scope.
5. **Confirm the scope.** Each operation declares its required scope. If the token lacks it, the call returns 403 "not available to API tokens" — the human must add the scope; do not retry.

## Conventions to expect

- Lists: `?page=1&per_page=25` (default 10); Laravel envelope `{ data, current_page, last_page, per_page, total }`.
- Filter: `?filter[status]=open&filter[search]=acme`. Sort: `?sort=-created_at`.
- Datetimes are UTC (ISO-8601); date-only fields are the tenant's app timezone as `YYYY-MM-DD`.
- Validation failures → 422 `{ message, errors: { field: [messages] } }`.

## See also

- Agent operating manual: `https://developer.sku.io/agents.md`
- Curated link index: `https://developer.sku.io/llms.txt`
- Error catalog: `https://developer.sku.io/errors.json`
- MCP server: `claude mcp add skuio-docs -- npx -y @skuio/docs-mcp` (search_docs / fetch_doc / get_openapi)
