---
name: review-diffs-before-writing
description: User wants to review every code change as a VS Code diff and approve it before it is written
metadata: 
  node_type: memory
  type: feedback
  originSessionId: f8d04a97-d1b9-4a27-bcc8-72e0fd54974c
  modified: 2026-09-11T16:34:34.065Z
---

Never write code changes without the user's approval. Every Edit/Write must go through the approval prompt so the user can review the diff in VS Code first.

**Why:** The user wants to see and approve each change before it lands in their files (said 2026-09-11, after edits were auto-applied to StoneTypeInput.tsx).

**How to apply:** Make changes with Edit/Write so the VS Code diff approval shows up (enforced by `permissions.ask` in `.claude/settings.local.json`). Keep each edit small and focused so the diff is easy to review. If an edit is rejected, ask what to change instead of retrying the same edit.
