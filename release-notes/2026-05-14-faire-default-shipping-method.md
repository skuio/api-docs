---
title: "Faire integration simplified: one default shipping method instead of per-method mapping"
description: "Faire never sends a shipping method on imported orders, so the per-method override table has been replaced with a single Default Shipping Method autocomplete."
authors: [product-team]
tags: [improved, integrations, shipping]
date: 2026-05-14
---

The Faire integration's Shipping settings have been simplified. Because
Faire never sends a shipping method on imported orders, the old "Override
Shipping Method" toggle plus per-method mapping table had no data to
work with. They've been replaced with a single **Default Shipping
Method** autocomplete that's applied to every imported Faire sales
order at both import and fulfillment-instruction time.

<!-- truncate -->

Find it at **Integrations → Faire → Settings → Shipping**. Existing
mappings are migrated to the new single-default model on first save.
