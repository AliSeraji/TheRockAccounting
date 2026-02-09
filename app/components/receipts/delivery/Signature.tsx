import type React from 'react';

export const Signature = (): React.ReactNode => {
  return (
    <div className="flex justify-center mt-6">
      <div className="text-center">
        <div className="w-40 border-b-2 border-gray-400 mb-2"></div>
        <span className="text-gray-600 text-xs">امضاء</span>
      </div>
    </div>
  );
};
