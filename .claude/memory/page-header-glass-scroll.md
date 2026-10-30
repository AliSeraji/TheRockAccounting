---
name: page-header-glass-scroll
description: User chose the glass page-header layout on 2026-10-29 (content and tabs scroll under the fixed PageHeader; tabs not sticky); variants they rejected
metadata:
  node_type: memory
  type: feedback
  originSessionId: 816ad51f-dbc0-432d-a58d-f4400fde273c
  modified: 2026-10-29T15:05:00.247Z
---

On 2026-10-29 the user picked the layout used by the tabbed pages (receipts, warehouse, settings) and by customers. The fixed glass `PageHeader` (`bg-white/75 backdrop-blur-md`) floats over one scroll box, which starts right under the logo bar with `pt-16 md:pt-20 lg:pt-24` padding. The tabs are ordinary content inside that box, not sticky, so tabs and content both scroll under the glass header. On phones the PageHeader is about 25% shorter, with smaller text (the base classes; `md:` restores the desktop sizes).

**Variants they rejected:**
- Sticky tabs: content scrolled under the tabs, and the tabs parked behind the glass header.
- A fixed tab bar with only the content scrolling.
- Clipping the scroll area just below the header: content passed under the header's shadow before being cut off.

**Why:** they compared these variants on the actual app and said the glass look was "well enough" and "nice".

**How to apply:** don't reintroduce `sticky` tabs, and don't clip the scroll box below the PageHeader. When a new page uses `PageHeader`, give its scroll box the same top padding. If the PageHeader's height changes, adjust that padding to match.
