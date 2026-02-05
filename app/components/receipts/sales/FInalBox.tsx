import { convertToPersianDigits, persianNumberToText } from '~/lib/utils';

export default function PriceBox({
  total,
}: {
  total: number;
}): React.ReactNode {
  return (
    <div className="border-2 border-black p-4 mb-8">
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold text-black">مبلغ قابل پرداخت</span>
        </div>
        <div className="text-center">
          <span className="text-sm text-black">
            {persianNumberToText(convertToPersianDigits(total))}
          </span>
        </div>
        <div className="text-xl font-bold text-black">
          {convertToPersianDigits(total)}
        </div>
      </div>
    </div>
  );
}
