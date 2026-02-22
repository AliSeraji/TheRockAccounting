import type { ReactNode } from 'react';

export const AdditionalNote = ({
  additionalNote,
}: {
  additionalNote: string;
}): ReactNode => {
  if (!additionalNote) return null;

  return (
    <div className="border-2 border-gray-400 rounded-lg p-2 mb-2 bg-gray-50">
      <p className="text-xs leading-relaxed text-gray-700">
        <span className="text-gray-800 text-xs font-semibold">توضیحات:</span>
        {additionalNote}
      </p>
    </div>
  );
};
