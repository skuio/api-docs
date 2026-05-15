---
title: "Fulfilled sales order lines preserve their warehouse during upstream syncs"
description: "Shopify order-edit cascades and other action-handler updates can no longer overwrite the warehouse of a sales order line that has already been fulfilled."
authors: [product-team]
tags: [fixed, orders, fulfillment, integrations]
date: 2026-05-14
---

The Sales Order update action handler now treats fulfilled lines as
**warehouse-locked**. Shopify order-edit cascades and other upstream
syncs can update other line attributes but no longer overwrite the
warehouse on an already-fulfilled line — preserving the historical
record of where the units actually shipped from.
