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
    <div className="border-2 border-gray-400 rounded-lg p-2 pb-1 mb-4 bg-gray-50 text-xs">
      <div className="grid grid-cols-1 gap-4">
        <div className="flex items-start gap-2">
          <span className="text-gray-800">نام شرکت/خانم/آقای:</span>
          <span className=" flex-1 pb-1">{buyer || ''}</span>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex items-start gap-2">
            <span className="text-gray-800">پروژه:</span>
            <span className=" flex-1 pb-1">{project}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-gray-800">تلفن:</span>
            <span className=" flex-1 pb-1">{phone}</span>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-gray-800">آدرس:</span>
          <span className=" flex-1 text-start wrap-break-word overflow-hidden">
            {address}
          </span>
        </div>
      </div>
    </div>
  );
}
