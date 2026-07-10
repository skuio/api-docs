---
title: API changes — 2026-05-04
description: This release includes 1 addition, 2 changes. 1 breaking change — action required.
authors: [product-team]
tags: [added, changed, breaking]
date: 2026-05-04
---

This release includes 1 addition, 2 changes. 1 breaking change — action required.

:::danger Breaking changes — action required
This release removes endpoints or tightens request requirements. Review the **Breaking changes** section below before upgrading your integration.
:::

<!-- truncate -->

> 📖 Full endpoint details are in the [API reference](/docs/api/introduction).

## ⚠️ Breaking changes

### Incompatible changes

#### Reporting
- **Changed** `GET /api/reporting/sales-channel-coverage/paginated` — Get Sales Channel Coverage (Paginated)
  - new parameter(s): `in_stock_only`, `sort`
  - removed parameter(s): `filter[search_supplier]`

## Added

### Reporting
- `GET /api/reporting/sales-channel-coverage/export` — Export Sales Channel Coverage (CSV)

## Changed

### Fulfillments
- `GET /api/v2/sales-order-fulfillments` — List Fulfillments
  - new parameter(s): `filter[archived_at.is_not_empty]`, `filter[backordered]`, `filter[cost.between]`, `filter[created_at.greater_than]`, `filter[customer_address]`, `filter[customer_city]`, `filter[customer_company]`, `filter[customer_country]`, `filter[customer_country_code]`, `filter[customer_email]`, `filter[customer_name]`, `filter[customer_phone]`, `filter[customer_province]`, `filter[customer_province_code]`, `filter[customer_reference]`, `filter[customer_zip]`, `filter[fulfilled_at.between]`, `filter[fulfilled_shipping_method]`, `filter[fulfillment_number]`, `filter[fulfillment_sequence]`, `filter[id.greater_than]`, `filter[integration_instance_ids]`, `filter[item_name]`, `filter[item_nominal_code]`, `filter[item_price.between]`, `filter[item_quantity.greater_than]`, `filter[item_sku]`, `filter[packing_slip_printed]`, `filter[packing_slip_printed_at.is_not_empty]`, `filter[requested_shipping_method]`, `filter[sales_channel_type_name]`, `filter[sales_order_shipping_method]`, `filter[sales_order_tags]`, `filter[search]`, `filter[store]`, `filter[tracking_number]`, `filter[updated_at.greater_than]`, `filter[warehouse]`, `filter_groups`

_Spec version 1.0.0 → 1.0.0._
