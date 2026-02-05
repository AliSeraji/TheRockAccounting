export default function SalesSignature(): React.ReactNode {
  return (
    <div className="flex justify-between mt-12 pt-8">
      <div className="text-center">
        <div className="w-32 border-b-2 border-gray-400 mb-2"></div>
        <span className="text-black">امضاء فروشنده</span>
      </div>
      <div className="text-center">
        <div className="w-32 border-b-2 border-gray-400 mb-2"></div>
        <span className="text-black">امضاء خریدار</span>
      </div>
    </div>
  );
}
