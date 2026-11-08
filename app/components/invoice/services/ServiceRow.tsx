import type React from 'react';
import { memo } from 'react';
import { TableCell } from '../../ui/table';
import { Input } from '../../ui/input';
import { cn } from '~/lib/utils';
import type { ServiceItem } from '~/store/types';
import { isFilledService } from '~/store/invoices/helpers';
import FloatingRow from '../../floating-table/FloatingRow';
import NumberCell from '../../floating-table/NumberCell';
import DeleteCell from '../../floating-table/DeleteCell';
import { CELL, TEXT_INPUT } from '../../floating-table/styles';
import ServiceTypeInput from './ServiceTypeInput';
import { SERVICE_COLUMNS } from './common';
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
  const field = (name: ServiceRowField) => ({
    value: String(serviceItem[name]),
    onChange: (value: string) => update(serviceItem.id, name, value),
  });
  const removeRow = () => remove(serviceItem.id);

  return (
    <FloatingRow
      number={index + 1}
      blank={!isFilledService(serviceItem)}
      className="min-h-13.5"
    >
      <TableCell className={cn(CELL, SERVICE_COLUMNS.service.width)}>
        <ServiceTypeInput
          {...field(SERVICE_ROW_FIELDS.SERVICE_TYPE)}
          className={TEXT_INPUT}
        />
      </TableCell>
      <TableCell className={cn(CELL, SERVICE_COLUMNS.description.width)}>
        <Input
          value={serviceItem.description}
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
          className={cn(TEXT_INPUT, 'cursor-text font-normal')}
        />
      </TableCell>
      <NumberCell
        column={SERVICE_COLUMNS.quantity}
        {...field(SERVICE_ROW_FIELDS.QUANTITY)}
      />
      <NumberCell
        column={SERVICE_COLUMNS.unitPrice}
        isPrice
        addItem={addService}
        removeItem={removeRow}
        {...field(SERVICE_ROW_FIELDS.UNIT_PRICE)}
      />
      <NumberCell
        column={SERVICE_COLUMNS.total}
        look="total"
        isPrice
        removeItem={removeRow}
        {...field(SERVICE_ROW_FIELDS.TOTAL)}
      />
      <DeleteCell onRemove={removeRow} />
    </FloatingRow>
  );
});

export default ServiceRow;
