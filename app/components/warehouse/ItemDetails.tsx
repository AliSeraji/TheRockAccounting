import type { ReactNode } from 'react';
import { Card } from '../ui/card';
import { Field, FieldContent, FieldTitle } from '../ui/field';
import { FieldTypes, type FormFieldConfig } from './constants';
import { EMPTY, formatDateTime, formatNumber, formatPrice } from './format';

type DetailItem = { notes: string; date: string };

const formatValue = (type: FieldTypes, value: string): string => {
  switch (type) {
    case FieldTypes.PRICE:
      return value ? `${formatPrice(value)} ریال` : EMPTY;
    case FieldTypes.NUMBER:
    case FieldTypes.CALCULATED:
      return formatNumber(value);
    default:
      return value || EMPTY;
  }
};

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <Card className="border-0 bg-slate-50 shadow-none rounded-sm">
      <Field className="gap-1 px-3 py-2">
        <FieldTitle className="text-xs font-normal text-slate-500">
          {label}
        </FieldTitle>
        <FieldContent className="text-sm font-medium text-slate-800">
          {value}
        </FieldContent>
      </Field>
    </Card>
  );
}

export default function ItemDetails<T extends DetailItem>({
  item,
  fields,
}: {
  item: T;
  fields: FormFieldConfig<T>[];
}): ReactNode {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {fields.map(({ key, label, type }) => (
        <DetailRow
          key={key}
          label={label}
          value={formatValue(type, String(item[key] ?? ''))}
        />
      ))}
      <DetailRow label="زمان ثبت/ویرایش" value={formatDateTime(item.date)} />
      <div className="sm:col-span-2">
        <DetailRow label="توضیحات" value={item.notes || EMPTY} />
      </div>
    </div>
  );
}
