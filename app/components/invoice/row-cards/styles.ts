// Shared look of the row cards' inputs. 16px text (text-base) keeps iOS from
// zooming in on focus, and h-11 gives a 44px touch target.
export const CARD_INPUT =
  'h-11 rounded-[10px] border-slate-200 bg-white text-center text-base text-slate-900';

export const CARD_LABEL = 'text-[11.5px] text-slate-600';

// A read-only value, laid out like an input so a saved row reads the same.
export const CARD_VALUE =
  'flex h-11 items-center justify-center rounded-[10px] bg-slate-50 text-base text-slate-900';

// The app's easing curve (see the keyframe animations in app.css).
export const EASE = [0.4, 0, 0.2, 1] as const;
