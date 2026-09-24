import type { ReactNode } from 'react';
import { NotepadText } from 'lucide-react';
import { splitNoteLines } from '~/lib/utils';
import { NoteList } from '../NoteList';

export const AdditionalNote = ({
  additionalNote,
}: {
  additionalNote: string;
}): ReactNode => {
  if (splitNoteLines(additionalNote).length === 0) return null;

  return (
    <div className="mb-2 flex flex-col rounded-md border border-slate-200 px-3 text-2xs text-slate-900 [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <div className="flex items-center gap-1.5 border-b border-slate-200 py-2 font-bold">
        <NotepadText className="size-3.5 text-brand-600" />
        توضیحات
      </div>
      <NoteList
        text={additionalNote}
        className="py-2 leading-relaxed text-slate-900"
      />
    </div>
  );
};
