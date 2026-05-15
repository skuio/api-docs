---
title: "Imports no longer clear values for columns you leave out"
description: "Omitting a column from an import CSV now leaves that field untouched instead of blanking it."
authors: [product-team]
tags: [fixed, inventory]
date: 2026-05-12
---

Importing a CSV that did not include every column could previously **clear** the values for the missing columns. That is fixed.

<!-- truncate -->

If a column is not present in your import file, SKU.io now leaves the existing value in place rather than overwriting it with a blank. This also covers supplier pricing fields on products — partial product imports keep the supplier pivot data that wasn't part of the file. You can now safely import a narrow CSV to update just a few fields without disturbing the rest of the record.
