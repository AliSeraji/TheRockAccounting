interface Props {
  description: string;
  discount: string;
  tax: string;
  received: string;
}

export default function SalesNote({
  description,
  discount,
  tax,
  received,
}: Props): React.ReactNode {
  return (
    <div className="border-2 border-black p-4 mb-6 bg-gray-50">
      <div className="flex gap-8">
        <div className="flex-1">
          <p className="text-sm leading-relaxed text-gray-700">
            <span className="font-bold text-black">توضیحات: </span>
            {description ||
              'سنگ های فوق طبق متراژ سفارش دهنده و خریدار بارگیری و تا تسویه حساب کامل نزد فریدار امانت می باشد. لازم به ذکر است فرستنده و کارخانه هیچ تعهدی در قبال پرداخت کرایه و تخلیه نداشته و به عهده گیرنده می باشد.'}
          </p>
        </div>
        <div className="space-y-2 text-left min-w-30">
          <div className="flex justify-between">
            <span className="text-black">تخفیف</span>
            <span className="font-semibold">{discount || ''}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">مالیات</span>
            <span className="font-semibold">{tax || ''}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-black">دریافتی</span>
            <span className="font-semibold">{received || ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
