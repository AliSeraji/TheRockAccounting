import type { ReactNode } from 'react';
import { splitNoteLines } from '~/lib/utils';
import { NoteList } from '../NoteList';

export const AdditionalNote = ({
  additionalNote,
}: {
  additionalNote: string;
}): ReactNode => {
  if (splitNoteLines(additionalNote).length === 0) return null;

  return (
    <div className="border-2 border-gray-400 rounded-lg p-2 mb-2 bg-gray-50">
      <div className="text-2xs leading-relaxed text-gray-700">
        <span className="text-gray-800 text-2xs font-semibold">توضیحات:</span>
        <NoteList text={additionalNote} />
      </div>
    </div>
  );
};
