import * as React from 'react';
import { Textarea, type TextareaProps } from './textarea';

const BULLET = '• ';

// The stored value is plain lines; the textarea shows each line with a bullet.
const toDisplay = (value: string): string =>
  value === ''
    ? ''
    : value
        .split('\n')
        .map((line) => BULLET + line)
        .join('\n');

const fromDisplay = (text: string): string =>
  text
    .split('\n')
    .map((line) => line.replace(/^•\s?/, ''))
    .join('\n');

// Caret position in the displayed text for the value typed before the caret.
const displayCaret = (textBeforeCaret: string): number => {
  const value = fromDisplay(textBeforeCaret);
  return value.length + value.split('\n').length * BULLET.length;
};

interface BulletTextareaProps extends Omit<
  TextareaProps,
  'value' | 'onChange'
> {
  value: string;
  onValueChange: (value: string) => void;
}

export function BulletTextarea({
  value,
  onValueChange,
  onKeyDown,
  ...props
}: BulletTextareaProps): React.ReactNode {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  const pendingCaret = React.useRef<number | null>(null);

  React.useLayoutEffect(() => {
    if (pendingCaret.current !== null && ref.current) {
      ref.current.setSelectionRange(pendingCaret.current, pendingCaret.current);
      pendingCaret.current = null;
    }
  });

  const update = (text: string, caret: number) => {
    pendingCaret.current = displayCaret(text.slice(0, caret));
    onValueChange(fromDisplay(text));
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    update(e.target.value, e.target.selectionStart);
  };

  // Backspace/Delete next to a bullet removes the whole line break, so lines
  // can be joined again.
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    onKeyDown?.(e);
    const el = e.currentTarget;
    const { selectionStart: start, selectionEnd: end, value: text } = el;
    if (e.defaultPrevented || start !== end) return;

    const lineBreak = '\n' + BULLET;
    if (e.key === 'Backspace' && text.slice(0, start).endsWith(lineBreak)) {
      e.preventDefault();
      const cut = start - lineBreak.length;
      update(text.slice(0, cut) + text.slice(start), cut);
    } else if (e.key === 'Delete' && text.startsWith(lineBreak, start)) {
      e.preventDefault();
      update(
        text.slice(0, start) + text.slice(start + lineBreak.length),
        start
      );
    }
  };

  return (
    <Textarea
      {...props}
      ref={ref}
      value={toDisplay(value)}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
