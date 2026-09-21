import type React from 'react';
import { cn, splitNoteLines } from '~/lib/utils';

export function NoteList({
  text,
  className,
}: {
  text?: string;
  className?: string;
}): React.ReactNode {
  const lines = splitNoteLines(text ?? '');
  if (lines.length === 0) return null;

  return (
    <ul
      className={cn(
        'list-disc space-y-0.5 ps-4 marker:text-brand-600',
        className
      )}
    >
      {lines.map((line, index) => (
        <li key={index}>{line}</li>
      ))}
    </ul>
  );
}
