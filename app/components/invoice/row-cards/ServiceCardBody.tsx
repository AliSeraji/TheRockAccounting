import { useEffect, useRef, type ReactNode } from 'react';
import { Input } from '../../ui/input';
import { Label } from '../../ui/label';
import SuggestInput from '../SuggestInput';
import {
  SERVICE_OPTIONS,
  SERVICE_ROW_FIELDS,
  type ServiceRowField,
} from '../services/types';
import { cn, convertToPersianDigits } from '~/lib/utils';
import type { ServiceItem } from '~/store/types';
import { SERVICE_PRICE_LABEL } from './fields';
import NumberField from './NumberField';
import PriceStrip from './PriceStrip';
import { CARD_INPUT, CARD_LABEL } from './styles';
import { formatAmount } from './summary';

// Filtered as ServiceTypeInput does: an exact option still lists them all.
const serviceOptions = (value: string): string[] => {
  const query = value.trim();
  return !query || SERVICE_OPTIONS.includes(query)
    ? SERVICE_OPTIONS
    : SERVICE_OPTIONS.filter((option) => option.includes(query));
};

const TEXT_INPUT = cn(CARD_INPUT, 'px-3 text-right');

// The body of an open service card. Without `update` it only shows the
// service, as in a saved invoice; its type then stays in the card's header.
export default function ServiceCardBody({
  service,
  update,
  addService,
  autoFocus = false,
}: {
  service: ServiceItem;
  update?: (id: number, field: ServiceRowField, value: string) => void;
  // Enter in the description or the unit price adds a service, as in the
  // desktop table.
  addService?: () => void;
  autoFocus?: boolean;
}): ReactNode {
  const typeRef = useRef<HTMLLabelElement>(null);

  // SuggestInput takes no ref, so its input is found in the label.
  useEffect(() => {
    if (autoFocus) typeRef.current?.querySelector('input')?.focus();
  }, [autoFocus]);

  const change = (field: ServiceRowField) =>
    update && ((value: string) => update(service.id, field, value));

  return (
    <>
      {update && (
        <Label ref={typeRef} className="flex flex-col gap-1 font-normal">
          <span className={CARD_LABEL}>شرح خدمات</span>
          <SuggestInput
            value={service.serviceType}
            onChange={(value) =>
              update(service.id, SERVICE_ROW_FIELDS.SERVICE_TYPE, value)
            }
            options={serviceOptions(service.serviceType)}
            getKey={(option) => option}
            renderOption={(option) => option}
            onSelect={(option) =>
              update(service.id, SERVICE_ROW_FIELDS.SERVICE_TYPE, option)
            }
            isSelected={(option) => option === service.serviceType}
            placeholder="انتخاب یا نوشتن خدمت"
            className={TEXT_INPUT}
          />
        </Label>
      )}
      <div className="grid grid-cols-[minmax(0,1fr)_5.5rem] items-start gap-2">
        {update ? (
          <Label className="flex min-w-0 flex-col gap-1 font-normal">
            <span className={CARD_LABEL}>توضیحات</span>
            <Input
              value={service.description}
              onChange={(e) =>
                update(
                  service.id,
                  SERVICE_ROW_FIELDS.DESCRIPTION,
                  e.target.value
                )
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter') addService?.();
              }}
              className={TEXT_INPUT}
            />
          </Label>
        ) : (
          <div className="flex min-w-0 flex-col gap-1">
            <span className={CARD_LABEL}>توضیحات</span>
            <p className="m-0 min-h-11 rounded-[10px] bg-slate-50 px-3 py-2.5 text-sm text-slate-900 wrap-break-word">
              {convertToPersianDigits(service.description.trim()) || '—'}
            </p>
          </div>
        )}
        <NumberField
          label="مقدار"
          value={service.quantity}
          onChange={change(SERVICE_ROW_FIELDS.QUANTITY)}
        />
      </div>
      <PriceStrip
        label={SERVICE_PRICE_LABEL}
        price={service.unitPrice}
        onPriceChange={change(SERVICE_ROW_FIELDS.UNIT_PRICE)}
        addItem={addService}
        total={formatAmount(service.total)}
      />
    </>
  );
}
