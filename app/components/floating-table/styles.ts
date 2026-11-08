// The desktop tables' floating rows: each row is a white card on the cream
// body of its card. Phones never render these tables.

// A white card floating on the cream body: a row, or a list's pagination.
export const SURFACE =
  'rounded-xl border border-slate-200 bg-white shadow-[0_1px_2px_rgba(64,55,45,0.05)]';

// A row. `group` lets the delete button react to the row's hover, and
// *:min-w-0 lets cells holding inputs shrink to their width.
export const ROW = `group flex w-full min-h-12 items-center ${SURFACE} transition-[border-color,box-shadow,background-color] duration-150 *:min-w-0 hover:border-brand-300 hover:shadow-[0_8px_20px_-10px_rgba(140,98,57,0.4)] focus-within:border-brand-300 motion-reduce:transition-none`;

// A row nothing has been typed into yet.
export const ROW_BLANK =
  'border-dashed border-slate-300 bg-white/55 shadow-none hover:shadow-none';

// A cell holding an input.
export const CELL = 'px-1 py-0';

// Invoice tables keep their columns readable on a narrow desktop by
// scrolling sideways instead of squeezing.
export const MIN_TABLE_WIDTH = 'min-w-200 lg:min-w-0';

// The inputs' looks, merged over ui/input, which already gives the brand
// focus border and ring.
export const FIELD_INPUT =
  'h-8.5 rounded-lg border-transparent bg-slate-50 px-1 text-center text-sm shadow-none hover:border-slate-200 focus-visible:bg-white';

export const CODE_INPUT =
  'h-7.5 rounded-[7px] border-transparent bg-slate-100 px-1 text-center font-medium text-slate-800 hover:border-slate-200 focus-visible:bg-white md:text-[13px]';

export const TEXT_INPUT =
  'h-8.5 rounded-lg border-transparent bg-transparent px-2 text-start text-sm font-medium hover:border-slate-200 focus-visible:bg-white';

// A computed value (an area, a total) that reads as text.
export const RESULT_INPUT =
  'h-8.5 cursor-default rounded-lg border-transparent bg-transparent px-1 text-center text-sm text-slate-700 shadow-none hover:border-transparent focus-visible:border-transparent focus-visible:ring-0';

// A code shown read-only, like CODE_INPUT.
export const CODE_CHIP =
  'rounded-[7px] bg-slate-100 px-2.5 text-[13px] text-slate-800';

// The body of a card holding a floating table: cream on desktop so the white
// rows stand out. Phones keep the plain p-1.
export const CREAM_BODY = 'p-1 md:bg-slate-50 md:px-4 md:pb-4 md:pt-3';
