// A column of a floating table. The unit shows under the label, and a
// start-aligned column holds text (a name or a description).
export type FloatingColumn = {
  label: string;
  width: string;
  unit?: string;
  align?: 'start';
};

// The row-number column every invoice table starts with; FloatingRow draws
// its badge.
export const ROW_NUMBER_COLUMN = {
  label: 'ردیف',
  width: 'w-[3%]',
} satisfies FloatingColumn;

// The delete button's column at the end of an editable row.
export const DELETE_COLUMN = {
  label: '',
  width: 'w-[5%]',
} satisfies FloatingColumn;
