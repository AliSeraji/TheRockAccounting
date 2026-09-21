import type React from 'react';

export default function SalesSignature(): React.ReactNode {
  return (
    <div className="flex justify-between mt-8 pt-4">
      <div className="text-center">
        <span className="text-black text-2xs">امضاء فروشنده</span>
        <div className="w-32 border-b-2 border-gray-400 mb-2"></div>
      </div>
      <div className="text-center">
        <span className="text-black text-2xs">امضاء خریدار</span>
        <div className="w-32 border-b-2 border-gray-400 mb-2"></div>
      </div>
    </div>
  );
}
