---
title: API changes — 2026-08-20
description: This release includes 21 additions, 4 removals. 4 breaking changes — action required.
authors: [product-team]
tags: [added, removed, breaking]
date: 2026-08-20
---

This release includes 21 additions, 4 removals. 4 breaking changes — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Removed endpoints

#### Odoo 3PL
- **Removed** `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods
- **Removed** `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/{shippingMethodId}/mapping` — Update Shipping Method Mapping

#### Trackstar
- **Removed** `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/bulk-map` — Bulk Map Shipping Methods
- **Removed** `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/{trackstar_shipping_method}/mapping` — Update Shipping Method Mapping

## Added

### Odoo 3PL
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/mappings/bulk` — Bulk Map Shipping Methods
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/mappings/{shippingMethod}` — Map Shipping Method
- `GET /api/odoo-3pl/{integration_instance}/shipping-methods/routing` — Get Shipping Routing
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/routing/fallback` — Set Fallback
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/routing/families/{shippingCarrier}` — Set Carrier Family Default
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/routing/methods/{shippingMethod}` — Set Shipping Method Override
- `POST /api/odoo-3pl/{integration_instance}/shipping-methods/routing/rules` — Add Text Rule
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/routing/rules/reorder` — Reorder Text Rules
- `DELETE /api/odoo-3pl/{integration_instance}/shipping-methods/routing/rules/{rule}` — Delete Text Rule
- `PUT /api/odoo-3pl/{integration_instance}/shipping-methods/routing/rules/{rule}` — Update Text Rule

### Shopify
- `GET /api/shopify/{integrationInstance}/order-tags` — List Observed Order Tags

### Trackstar
- `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/mappings/bulk` — Bulk Map Shipping Methods
- `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/mappings/{shippingMethod}` — Map Shipping Method
- `GET /api/trackstar/integration-instances/{integration_instance}/shipping-methods/routing` — Get Shipping Routing
- `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/routing/fallback` — Set Fallback
- `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/routing/families/{shippingCarrier}` — Set Carrier Family Default
- `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/routing/methods/{shippingMethod}` — Set Shipping Method Override
- `POST /api/trackstar/integration-instances/{integration_instance}/shipping-methods/routing/rules` — Add Text Rule
- `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/routing/rules/reorder` — Reorder Text Rules
- `DELETE /api/trackstar/integration-instances/{integration_instance}/shipping-methods/routing/rules/{rule}` — Delete Text Rule
- `PUT /api/trackstar/integration-instances/{integration_instance}/shipping-methods/routing/rules/{rule}` — Update Text Rule

_Spec version 1.0.0 → 1.0.0._
