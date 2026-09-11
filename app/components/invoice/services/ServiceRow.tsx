import type React from 'react';
import { memo } from 'react';
import { Trash2 } from 'lucide-react';
import { TableCell, TableRow } from '../../ui/table';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import PersianNumericInput from '../PersianNumericInput';
import { convertToPersianDigits } from '~/lib/utils';
import type { ServiceItem } from '~/store/types';
import ServiceTypeInput from './ServiceTypeInput';
import { SERVICE_ROW_FIELDS, type ServiceRowField } from './types';

const ServiceRow = memo(function ServiceRow({
  serviceItem,
  index,
  update,
  remove,
  addService,
}: {
  serviceItem: ServiceItem;
  index: number;
  update: (id: number, field: ServiceRowField, value: string) => void;
  remove: (id: number) => void;
  addService: () => void;
}): React.ReactNode {
  const numericCell = (
    field: ServiceRowField,
    readOnly: boolean = false,
    isPrice: boolean = false
  ) => (
    <PersianNumericInput
      value={String(serviceItem[field])}
      onChange={(v) => update(serviceItem.id, field, v)}
      className={`border-0 text-center focus-visible:ring-offset-3 text-sm h-8 ${readOnly ? 'cursor-default' : 'cursor-text'}`}
      readOnly={readOnly}
      isPrice={isPrice}
      addItem={isPrice && !readOnly ? addService : undefined}
    />
  );

  return (
    <TableRow className="w-full flex flex-row hover:bg-slate-50 transition-colors">
      <TableCell className="w-[3%] border-x-[0.5px] border-r border-slate-200 p-2 text-center text-slate-700 font-medium">
        {convertToPersianDigits(index + 1)}
      </TableCell>
      <TableCell className="w-[22%] border-x-[0.5px] border-slate-200 p-1">
        <ServiceTypeInput
          value={serviceItem[SERVICE_ROW_FIELDS.SERVICE_TYPE]}
          onChange={(v) =>
            update(serviceItem.id, SERVICE_ROW_FIELDS.SERVICE_TYPE, v)
          }
        />
      </TableCell>
      <TableCell className="w-[10%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(SERVICE_ROW_FIELDS.QUANTITY)}
      </TableCell>
      <TableCell className="w-[15%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(SERVICE_ROW_FIELDS.UNIT_PRICE, false, true)}
      </TableCell>
      <TableCell className="w-[20%] border-x-[0.5px] border-slate-200 p-1">
        {numericCell(SERVICE_ROW_FIELDS.TOTAL, true, true)}
      </TableCell>
      <TableCell className="w-[25%] border-x-[0.5px] border-slate-200 p-1">
        <Input
          value={serviceItem[SERVICE_ROW_FIELDS.DESCRIPTION]}
          onChange={(e) =>
            update(
              serviceItem.id,
              SERVICE_ROW_FIELDS.DESCRIPTION,
              e.target.value
            )
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter') addService();
          }}
          className="border-0 text-center focus-visible:ring-offset-3 text-sm h-8 cursor-text"
        />
      </TableCell>
      <TableCell className="w-[5%] border-x-[0.5px] border-l border-slate-200 p-1 text-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => remove(serviceItem.id)}
          className="text-red-500 hover:text-red-700 hover:bg-red-50 h-8 w-8 p-0 hover:cursor-pointer"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
});

export default ServiceRow;
