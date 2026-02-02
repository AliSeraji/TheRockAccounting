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
    <div className="border-2 border-gray-400 rounded-lg p-3 mb-4 bg-gray-50 text-sm">
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <span className="text-gray-600 whitespace-nowrap">
            نام شرکت/خانم/آقای:
          </span>
          <span className="font-semibold flex-1 pb-1">{buyer || ''}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-600">پروژه:</span>
          <span className="font-semibold flex-1  pb-1">{project || ''}</span>
        </div>
        <div className="flex items-center gap-2 col-span-2">
          <span className="text-gray-600">آدرس:</span>
          <span className="font-semibold flex-1  pb-1">{address || ''}</span>
        </div>
      </div>
    </div>
  );
}
