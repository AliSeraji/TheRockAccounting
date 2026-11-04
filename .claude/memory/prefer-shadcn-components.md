---
name: prefer-shadcn-components
description: "Build UI from the project's shadcn primitives (Button, Card, Separator, Label, Input…) instead of raw <button>/<article>/<div> styled by hand"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 535967bd-154c-4fa9-b2e5-30917e10e6a3
  modified: 2026-11-04T17:46:20.674Z
---

When writing new UI, use the shadcn components in `app/components/ui/` wherever one fits: `Button` for buttons, `Card` for card containers, `Separator`, `Label`, `Input` and so on. Style them with `className`; don't hand-build a raw `<button>` or `<article>`.

**Why:** on 2026-11-04 the user rejected a row-card file written with a plain `<article>` and `<button>`: "also use shadcn components as well. for button and article and other possible things."

**How to apply:**
- Check `app/components/ui/` first.
- A missing primitive is added with the shadcn CLI (CLAUDE.md), not by hand. Ask before adding one, since it adds a dependency.
- Watch the existing primitives' quirks:
  - `Button` forces `[&_svg]:size-4` and `whitespace-nowrap`.
  - `Separator`'s `data-vertical:` classes don't match Radix's `data-orientation`, so give it an explicit size.
  - `Card` is a `div`.
- Related: [[invoice-mobile-row-cards]].
