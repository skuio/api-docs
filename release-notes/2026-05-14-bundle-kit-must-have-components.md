---
title: "Bundles and kits must now have at least one component"
description: "Saving, converting, or batch-converting to a bundle/kit without components is rejected with a friendly 422, eliminating the unexpanded-bundle health alerts."
authors: [product-team]
tags: [fixed, inventory]
date: 2026-05-14
---

Every entry point that creates or converts a product to a bundle or kit
now requires at least one component. Trying to save without components
returns a 422 with the message *"A bundle or kit product must have at
least one component."*

<!-- truncate -->

**✨ What this means for you:**

- You can no longer accidentally save a bundle product with no
  components — a state that previously caused sales-order lines to
  generate without expanding, surfacing as "unexpanded bundle" inventory
  health alerts.
- The guard applies to the regular product form, the v2 Bundle Workshop
  save-components action, type conversion (regular → bundle), and the
  batch-convert tool (rows missing components are skipped with a reason).
- The Inventory Health check has also been tightened: bundle sales-order
  lines whose product has *no* components (legacy or recipe-cleared) no
  longer show up as unexpanded — that's a data-cleanup case, not a real
  health alert.
