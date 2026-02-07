export default function InfoBox({
  buyer,
  project,
  address,
}: {
  buyer?: string;
  project?: string;
  address?: string;
}): React.ReactNode {
  return (
    <div className="w-full border-2 border-gray-400 rounded-lg p-2 pb-1 mb-4 bg-gray-50 text-xs">
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <span className="text-gray-800 whitespace-nowrap">
            نام شرکت/خانم/آقای:
          </span>
          <span className="font-semibold flex-1 pb-1">{buyer || ''}</span>
        </div>
        <div className="flex gap-2">
          <span className="text-gray-800">پروژه:</span>
          <span className="font-semibold flex-1 pb-1">{project || ''}</span>
        </div>
        <div className="flex gap-1 col-span-2">
          <span className="text-gray-800">آدرس:</span>
          <span className="text-gray-800 flex-1 wrap-break-word overflow-hidden">
            {address || ''}
          </span>
        </div>
      </div>
    </div>
  );
}
