---
title: "Vendor credits now default to the linked PO's currency and lock when activity exists"
description: "Currency is selectable on new vendor credits, defaults intelligently to the PO or supplier currency, and locks automatically once a PO link or activity is present."
authors: [product-team]
tags: [improved, purchasing, accounting]
date: 2026-05-13
---

When you create a vendor credit, the currency now defaults to the linked
PO's currency (falling back to the supplier's default pricing-tier
currency, then your tenant default) instead of always assuming USD. Once
the credit is linked to a PO or has any allocation or payment recorded,
the currency field locks so it can't be accidentally changed.

<!-- truncate -->

**✨ What this means for you:**

- Suppliers billed in non-USD currencies (EUR, GBP, CNY, etc.) no longer
  require manual currency-switching on every credit.
- Once activity is recorded against a credit, you can't accidentally
  flip its currency and corrupt the running balance.

You'll see the change on the Create Vendor Credit dialog and on the
Vendor Credit detail page.
