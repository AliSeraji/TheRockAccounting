export default function SalesSignature(): React.ReactNode {
  return (
    <div className="flex justify-between mt-12 pt-4">
      <div className="text-center">
        <div className="w-32 border-b-2 border-gray-400 mb-2"></div>
        <span className="text-black text-xs">امضاء فروشنده</span>
      </div>
      <div className="text-center">
        <div className="w-32 border-b-2 border-gray-400 mb-2"></div>
        <span className="text-black text-xs">امضاء خریدار</span>
      </div>
    </div>
  );
}
