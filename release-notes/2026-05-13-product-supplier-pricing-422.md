---
title: "Saving a product with a null supplier-pricing price now returns a friendly error"
description: "The supplier pricing validator catches null prices and returns a 422 instead of silently coercing to 0 (or 500-ing)."
authors: [product-team]
tags: [fixed]
date: 2026-05-13
---

Saving a product with a missing **Supplier Pricing** price no longer
returns a 500 and no longer silently coerces the missing value to $0.
The endpoint now rejects the save with a 422 validation error so the
form can highlight the offending row.
