import {
  convertToEnDigits,
  convertToPersianDigits,
  formatRialAmount,
  persianNumberToText,
} from '~/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useInvoiceStore } from '~/store/useInvoiceStore';
import { memo, useCallback } from 'react';

const InvoiceSummary = memo(function InvoiceSummary(): React.ReactNode {
  const discount = useInvoiceStore((state) => state.discount);
  const setDiscount = useInvoiceStore((state) => state.setDiscount);
  const tax = useInvoiceStore((state) => state.tax);
  const setTax = useInvoiceStore((state) => state.setTax);
  const received = useInvoiceStore((state) => state.received);
  const setReceived = useInvoiceStore((state) => state.setReceived);
  const totalPaymentAmount = useInvoiceStore(
    (state) => state.totals.totalPaymentAmount
  );

  const handlePercentageDisplay = (value: string) => {
    return convertToEnDigits(value) === '0'
      ? convertToPersianDigits('0')
      : convertToPersianDigits(value) + '%';
  };

  const handlePercentageAmount = (
    value: string,
    set: (value: string) => void
  ) => {
    let raw = convertToEnDigits(value.trim())
      .replace(/%/g, '')
      .replace(/\//g, '.');

    if (raw === '') {
      set('0');
      return;
    }

    if (raw === '.') raw = '0.';
    if (raw === '-.') raw = '-0.';
    if (raw.startsWith('-', 0)) raw = raw.replace(/^-/, '');
    if (!/^-?\d*\.?\d*$/.test(raw)) return;

    raw = raw.replace(/^(-?)0+(\d)/, (_, sign, digit) =>
      digit === '.' ? `${sign}0${digit}` : `${sign}${digit}`
    );
    const numValue = parseFloat(raw);
    if (numValue < 0 || numValue > 100) {
      set('0');
      return;
    }
    set(raw);
  };

  const handleDiscountChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handlePercentageAmount(e.target.value, setDiscount);
    },
    [setDiscount]
  );

  const handleTaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      handlePercentageAmount(e.target.value, setTax);
    },
    [setTax]
  );

  const handleReceivedChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let value = convertToEnDigits(e.target.value.trim())
        .replace(/\//g, '.')
        .replace(/[,٬]/g, '');
      if (value === '') {
        setReceived('');
        return;
      }
      if (!/^-?\d*\.?\d*$/.test(value)) return;
      value = value
        .replace(/^(-?)0+(\d)/, (_, digit) =>
          digit === '.' ? `0${digit}` : `${digit}`
        )
        .replace(/^-/, '');

      setReceived(value);
    },
    [setReceived]
  );

  return (
    <Card className="border-slate-200 bg-white/90 backdrop-blur col-span-1">
      <CardHeader className="p-5 bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <CardTitle className="text-slate-800">خلاصه مالی</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <Label className="text-slate-700">تخفیف</Label>
          <Input
            value={handlePercentageDisplay(discount)}
            onChange={handleDiscountChange}
            className="border-slate-200 rounded-lg focus:ring-slate-400"
            placeholder="مبلغ تخفیف"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-700">مالیات</Label>
          <Input
            value={handlePercentageDisplay(tax)}
            onChange={handleTaxChange}
            className="border-slate-200 rounded-lg focus:ring-slate-400"
            placeholder="مبلغ مالیات"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-700">دریافتی</Label>
          <Input
            value={formatRialAmount(convertToPersianDigits(received))}
            onChange={handleReceivedChange}
            className="border-slate-200 rounded-lg focus:ring-slate-400"
            placeholder="مبلغ دریافتی"
          />
        </div>
        <div className="border-t border-slate-200 pt-4">
          <div className="flex justify-between items-center text-lg font-bold text-slate-800">
            <span>مبلغ قابل پرداخت:</span>
            <span className="text-green-600">
              {formatRialAmount(convertToPersianDigits(totalPaymentAmount))}
            </span>
          </div>
          <p className="text-sm text-slate-500 mt-2">
            {persianNumberToText(convertToPersianDigits(totalPaymentAmount))}
          </p>
        </div>
      </CardContent>
    </Card>
  );
});

export default InvoiceSummary;
