---
name: field-style-redesign
description: "2026-11-05 restyle of dropdowns, search boxes and form inputs; user leans to direction G (segmented) with changes; mobile filters must stay as they are"
metadata:
  node_type: memory
  type: project
  originSessionId: 91f8ef1e-b18b-4d06-b274-93c1832d00e0
  modified: 2026-11-05T16:07:56.392Z
---

On 2026-11-05 the user asked for a modern restyle of every dropdown, search box and form input, before the invoice date filter is built. The options are mocked up on a private Design canvas: https://claude.ai/artifact/UYU6TKYZN4oa842QCLc41W (pages: دور اول A–D, دور دوم E–H, «G · نسخه ۲»).

- Round 1 (A–D: fill or outline variations) disappointed them ("I expected more"). Bolder ideas landed better.
- They like **G (segmented)**: filters with ≤3 options become a segmented control (cream track, white active segment with bronze text). The date filter is a dropdown with presets and a from/to range. Form fields have a white border and a gold focus ring.
- Their changes to G:
  1. **Don't change the mobile list filters.** Search, the filter button with its badge, the chips and the bottom `FilterSheet` stay exactly as they are. The date filter only becomes another pill group in the sheet.
  2. The "today" button uses H's shape (calendar icon, «امروز», a count pill, filled when on) in G's bronze and cream colors.
  3. The label placed inside the segmented track was rejected. **They chose option 3:** an icon at the start of each filter control, with its name in a tooltip.
- **Date filter on phones:** a pill group inside the existing pull-up `FilterSheet`, with no new header button.
- **Animations:** desktop and phone filters must animate the same way. Use the built-in shadcn/Tailwind animations (`tw-animate-css`) first, and `motion` only when nothing simpler works.

The approved plan is `C:\Users\Ali\.claude\plans\before-we-implement-this-squishy-treasure.md`. Phase A is the restyle; phase B is the date filter.

Status on 2026-11-05: both phases are built, uncommitted and not yet browser-tested by the user.
- Field look lives in the `ui/` primitives: `input`, `select` (exports `menuSurfaceClass`/`menuItemClass`) and `segmented-control` (`SegmentedControl`, `IconTitle`).
- `app.css` now imports `tw-animate-css` and `shadcn/tailwind.css`, so shadcn's `data-open:` animations work.
- Date filter files: `lib/jalali.ts`, `hooks/useToday.ts` and `invoices/DateFilter.tsx`, plus the `ListFilter` fields `desktop`, `panel` and `valueLabel`.

**Why:** they review every visual change and pick from mockups; simple code was asked for explicitly.
**How to apply:** never restyle the mobile filter UX. Keep animation code to utility classes. Related: [[prefer-shadcn-components]], [[review-diffs-before-writing]].
