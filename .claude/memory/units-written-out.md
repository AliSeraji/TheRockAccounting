---
name: units-written-out
description: Write units as words in the UI, e.g. «مترمربع» not «م²»
metadata:
  type: feedback
---

Write a unit out in words in labels and totals: «مترمربع», not «م²» (and by the same logic «مترمکعب», not «م³»).

**Why:** on 2026-11-09, reviewing the table mockups, the user said "remember to write square meter rather than m^2".

**How to apply:** use the written-out unit in new desktop UI and mockups. The phone cards still use `STONE_MEASURE_UNIT = 'م²'` and `BLOCK_MEASURE_UNIT = 'م³'` in `invoice/row-cards/fields.ts`. Phones are out of scope unless the user asks, so mention it rather than changing them. Related: [[invoice-table-restyle]].
