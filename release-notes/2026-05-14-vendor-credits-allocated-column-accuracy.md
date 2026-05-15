---
title: "Vendor Credits list shows the real Allocated total instead of \\$0"
description: "Eager-loaded allocations now include applied_at so the Allocated column accurately reflects applied amounts."
authors: [product-team]
tags: [fixed, purchasing, accounting]
date: 2026-05-14
---

The **Allocated** column on the Vendor Credits list now shows the real
applied total per credit instead of always displaying $0. The repository
was eager-loading allocations without their `applied_at` timestamp, which
the resource needs to compute the applied amount.
