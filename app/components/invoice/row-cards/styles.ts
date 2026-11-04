// Shared look of the row cards' inputs. 16px text (text-base) keeps iOS from
// zooming in on focus, and h-11 gives a 44px touch target.
export const CARD_INPUT =
  'h-11 rounded-[10px] border-slate-200 bg-white text-center text-base text-slate-900';

export const CARD_LABEL = 'text-[11.5px] text-slate-600';

// A label over the start of an input, inset by the input's padding (px-3) so
// it lines up with the text instead of the border.
export const CARD_FIELD_LABEL = `${CARD_LABEL} ps-3`;

// Words (a stone or block type, its code, a service) read better a size below
// the numbers. iOS zooms in on a field under 16px when it takes focus.
export const CARD_TEXT_SIZE = 'text-sm';

// A read-only value, laid out like an input so a saved row reads the same.
export const CARD_VALUE =
  'flex h-11 items-center justify-center rounded-[10px] bg-slate-50 text-base text-slate-900';

// The app's easing curve (see the keyframe animations in app.css).
export const EASE = [0.4, 0, 0.2, 1] as const;
