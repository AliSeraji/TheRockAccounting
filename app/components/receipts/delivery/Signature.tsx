import type React from 'react';

export const Signature = (): React.ReactNode => {
  return (
    <div className="flex justify-center mt-8 pt-4">
      <div className="text-center">
        <span className="text-black text-2xs">امضاء</span>
        <div className="w-32 border-b-2 border-gray-400 mb-2"></div>
      </div>
    </div>
  );
};
