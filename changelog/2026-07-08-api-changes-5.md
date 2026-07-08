---
title: API changes — 2026-07-08
description: This release 12 removed API endpoint(s).
authors: [product-team]
tags: [removed, breaking]
date: 2026-07-08
---

This release 12 removed API endpoint(s).

:::danger Breaking change
This release removes endpoints or adds newly-required request fields. Review the **Removed** and **Changed** sections before upgrading your integration.
:::

<!-- truncate -->

## Removed

- `DELETE /api/integration-instances/{integration_instance}/magento/store/mapping` — Delete Magento Payment Method Mapping **(breaking)**
- `GET /api/integration-instances/{integration_instance}/magento/download-stores` — Download Magento Stores **(breaking)**
- `GET /api/integration-instances/{integration_instance}/magento/store/mapping` — Get Magento Store Mappings **(breaking)**
- `GET /api/integration-instances/{integration_instance}/magento/stores` — Get Magento Stores **(breaking)**
- `GET /api/magento/{integration_instance}/inventory-sources` — List Inventory Sources **(breaking)**
- `GET /api/magento/{integration_instance}/product-attributes` — List Product Attributes **(breaking)**
- `POST /api/integration-instances/{integration_instance}/magento/store/mapping` — Map Magento Stores **(breaking)**
- `POST /api/magento/{integration_instance}/inventory-sources` — Download Inventory Sources **(breaking)**
- `PUT /api/integration-instances/{integration_instance}/magento/download-orders` — Download Magento Orders **(breaking)**
- `PUT /api/integration-instances/{integration_instance}/magento/download-products` — Download Magento Products **(breaking)**
- `PUT /api/magento/{integration_instance}/download-orders` — Download Orders **(breaking)**
- `PUT /api/magento/{integration_instance}/download-products` — Download Products **(breaking)**

_Spec version 1.0.0 → 1.0.0._
