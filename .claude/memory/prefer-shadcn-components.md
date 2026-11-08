---
name: prefer-shadcn-components
description: "Build UI from the project's shadcn primitives (Button, Card, Badge, Input…) and reuse shared components instead of copying code; shadcn CLI quirks"
metadata:
  node_type: memory
  type: feedback
  originSessionId: 535967bd-154c-4fa9-b2e5-30917e10e6a3
  modified: 2026-11-08T18:51:44.773Z
---

When writing new UI, use the shadcn components in `app/components/ui/` wherever one fits: `Button` for buttons, `Card` for card containers, `Badge` for pills and chips, `Separator`, `Label`, `Input` and so on. Style them with `className`; don't hand-build a raw `<button>` or `<article>`. Reuse shared components and avoid redundant code: when several tables or cards need the same piece, write it once and have each use it.

**Why:** on 2026-11-04 the user rejected a row-card file written with a plain `<article>` and `<button>`. On 2026-11-08 they rejected a plan for the same reason: "use shadcn components as well. It is important for me to have them reused. and prevent redundant code."

**How to apply:**
- Check `app/components/ui/` first.
- A missing primitive is added with the shadcn CLI (`yarn shadcn add <name> -y`). Ask before adding one.
- **CLI quirks** (seen adding `badge` on 2026-11-08):
  - It imports `cn` from a module named "cn" and runs an install that adds the unrelated npm package `cn` and upgrades `radix-ui`.
  - Afterwards, restore `package.json` and `yarn.lock` with git and fix the import to `~/lib/utils`. Import `Slot` from `@radix-ui/react-slot`, as `button.tsx` does.
  - Then delete `node_modules/radix-ui/node_modules` and run `yarn install --frozen-lockfile --check-files`. Stale nested Radix packages otherwise break `yarn build` ("Missing ./is-development specifier").
- Watch the existing primitives' quirks:
  - `Button` forces `[&_svg]:size-4` and `whitespace-nowrap`.
  - `Separator`'s `data-vertical:` classes don't match Radix's `data-orientation`, so give it an explicit size.
  - `Card` is a `div`.
- Related: [[invoice-mobile-row-cards]], [[invoice-table-restyle]].
