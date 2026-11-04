import { useState } from 'react';

// Which row card is open (one at a time) and which one should focus its
// first field.
export function useOpenRow<T extends { id: number }>(
  items: T[],
  isFilled: (item: T) => boolean,
  // Off for services, which most invoices leave empty.
  openLoneBlank: boolean = true
) {
  const last = items.at(-1);
  const lastId = last?.id ?? null;
  // A lone blank row is a fresh invoice, so it opens ready to fill in. A
  // saved invoice opened for editing starts with every card closed.
  const loneBlank = openLoneBlank && items.length === 1 && !isFilled(items[0]);

  const [openId, setOpenId] = useState(loneBlank ? lastId : null);
  const [focusId, setFocusId] = useState<number | null>(null);
  const [seenLastId, setSeenLastId] = useState(lastId);

  // Reacts to the last row changing while rendering, React's pattern for
  // state that follows props.
  if (lastId !== seenLastId) {
    setSeenLastId(lastId);
    // New rows take the next id up and start blank, so this is a row just
    // added rather than an invoice loaded or a row deleted.
    const added =
      last !== undefined &&
      seenLastId !== null &&
      last.id > seenLastId &&
      !isFilled(last);
    if (added) {
      setOpenId(last.id);
      setFocusId(last.id);
    } else if (loneBlank) {
      setOpenId(lastId);
      setFocusId(null);
    }
  }

  const toggle = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
    // Focus only follows adding a row, never reopening one.
    setFocusId(null);
  };

  const open = items.some((item) => item.id === openId) ? openId : null;
  return { openId: open, focusId: focusId === open ? focusId : null, toggle };
}
