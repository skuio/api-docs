---
title: "International addresses without province codes now accept free-text input"
description: "Address forms for non-US/CA countries (like China) no longer break on the province field — they fall back to a plain text input."
authors: [product-team]
tags: [fixed, orders, shipping]
date: 2026-05-12
---

If you ship to countries whose regions don't have ISO province codes — China,
Japan, and many others — the address dialogs across SKU.io now accept a plain
text input for the State / Province field instead of a broken autocomplete.

<!-- truncate -->

Previously the province autocomplete tried to render duplicate or empty
entries for countries without a published province list, which made it
impossible to save certain international addresses on customer records,
purchase orders, and shipping destinations. The form now detects the
missing province set and switches to a free-text input automatically.
