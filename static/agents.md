# SKU.io API — Agent Operating Manual

This file is for AI agents integrating with the SKU.io API (an inventory
management / ERP platform for multichannel ecommerce brands).

## Base URL and authentication

- Base URL: `https://{tenant}.sku.io` — every SKU.io account lives on its own
  subdomain. Ask the user for theirs.
- Every request needs `Authorization: Bearer <personal-access-token>` and
  `Accept: application/json`.
- Tokens are created by a human in the SKU.io app: Settings → Developer →
  Personal Access Tokens. There is no OAuth flow for third parties today.
- Tokens carry **scopes** (e.g. `orders:read`, `products:write`,
  `inventory:write`, `webhooks:manage`) and are **deny-by-default**: an
  endpoint outside the token's scopes returns 403 with "This endpoint is not
  available to API tokens." If a call 403s, the token likely needs another
  scope — ask the human to edit the token, don't retry.
- A 401 response means the token is missing, revoked, expired, or sent
  without the `Bearer ` prefix. Tokens may also be IP-allowlisted.

## Finding the right endpoint

1. Fetch the OpenAPI spec once: `https://developer.sku.io/openapi.yaml`
   (~3,200 operations). Operations are tagged by domain (Sales Orders,
   Purchase Orders, Inventory, Products, Amazon, Shopify, …).
2. Prefer `/api/...` paths. `/api/v2/...` is a separate read-mostly BFF layer,
   not a newer version of `/api/`.
3. Never use operations flagged `deprecated: true`.
4. Reference pages live at `https://developer.sku.io/docs/api/<operation-slug>`;
   human-readable guides at `https://developer.sku.io/docs/guides/...`.

## Request conventions

- Lists: `?page=1&per_page=25` (default per_page 10); response envelope is
  Laravel-style: `{ "data": [...], "current_page": 1, "last_page": N,
  "per_page": 25, "total": M }`.
- Filtering: `?filter[status]=open&filter[search]=acme` (Spatie QueryBuilder).
- Sorting: `?sort=-created_at` (prefix `-` for descending).
- Datetimes are UTC in and out (ISO-8601); date-only fields are in the
  tenant's application timezone as `YYYY-MM-DD`.
- Validation failures return 422 with `{ "message": ..., "errors": { field:
  [messages] } }`.
- Platform rate limit: 1,000 requests/min per token/IP; individual tokens can
  carry a lower per-token limit (429 + `Retry-After` — honor it). Some heavy
  endpoints have 30–60/min route limits.
- Note: some endpoints return HTTP 200 even for creates (legacy envelope
  behavior) — check the body's `status` field, not just the HTTP status.

## Safety rules

- DELETE endpoints, bulk-delete, cancel, void, and inventory adjustment
  operations mutate live business data irreversibly. Confirm with a human
  before calling them.
- Do not call endpoints under `/webhooks/` or `/api/webhooks/*/{token}` —
  those are inbound receivers for platform callbacks.
- Multi-step flows (e.g. create sales order → fulfill → ship) should be
  executed one step at a time with verification reads between steps.

## More

- Curated link index: `https://developer.sku.io/llms.txt`
- API changelog: `https://developer.sku.io/changelog`
- Support: support@sku.io
