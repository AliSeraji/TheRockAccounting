---
name: invoice-tablist-option-c-trial
description: "Invoice tablist restyled to \"Option C\" segmented control on trial; how to restore the previous version if the user rejects it"
metadata: 
  node_type: memory
  type: project
  originSessionId: 10be6c67-9319-44a6-a4fe-0e4106bb80a0
  modified: 2026-09-17T06:52:42.386Z
---

On 2026-09-17 `app/components/receipt_issue/Tablist/index.tsx` was restyled to the Claude Design "Option C" segmented control (cream track, white active pill, active description line below). The user is trialing it and may ask to revert.

**Why:** User explicitly said they might not like it and would ask to bring it back to what it was.

**How to apply:** To revert, restore the pre-change file with `git cat-file -p 455099d3d93daa89a0f19b4b69c1eb494c6e613a > app/components/receipt_issue/Tablist/index.tsx` (blob written with `git hash-object -w`; the file was not committed at the time). Mobile tablist and `app/routes/receipts/index.tsx` were not touched. Settings tablist was not changed either.
