import type React from 'react';
import { splitNoteLines } from '~/lib/utils';
import { NoteList } from '../NoteList';

// The delivery note set in settings; nothing when it is empty.
export const Note = ({ note }: { note: string }): React.ReactNode => {
  if (splitNoteLines(note).length === 0) return null;

  return (
    <div className="mb-2 rounded-md border border-slate-200 px-3 py-2 text-xs [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <NoteList text={note} className="leading-relaxed text-slate-700" />
    </div>
  );
};
