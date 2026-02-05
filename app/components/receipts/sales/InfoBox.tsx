interface Props {
  buyer: string;
  phone: string;
  project: string;
  address: string;
}

export default function SalesInfoBox({
  buyer,
  phone,
  project,
  address,
}: Props): React.ReactNode {
  return (
    <div className="border-2 border-gray-400 rounded-lg p-3 mb-4 bg-gray-50">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-black">نام شرکت/خانم/آقای:</span>
          <span className="font-semibold flex-1 pb-1">{buyer || ''}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-black">تلفن:</span>
          <span className="font-semibold flex-1  pb-1">{phone}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-black">پروژه:</span>
          <span className="font-semibold flex-1  pb-1">{project}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-black">آدرس:</span>
          <span className="font-semibold flex-1  pb-1">{address}</span>
        </div>
      </div>
    </div>
  );
}
