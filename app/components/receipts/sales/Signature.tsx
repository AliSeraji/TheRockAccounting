import type React from 'react';

interface SalesSignatureProps {
  /** Already gated by the settings toggles — null means "do not print". */
  signature?: string | null;
  seal?: string | null;
}

export default function SalesSignature({
  signature,
  seal,
}: SalesSignatureProps): React.ReactNode {
  const hasStamp = Boolean(signature || seal);
  return (
    <div className="flex justify-between mt-8 pt-4">
      <div className="text-center">
        {hasStamp && (
          <div className="relative flex flex-row h-14 w-32">
            <span className="absolute bottom-0 -translate-x-3/5 text-black text-2xs">
              امضاء فروشنده
            </span>
            {seal && (
              <img
                src={seal}
                alt="مهر"
                className="absolute inset-0 max-h-14 max-w-32 opacity-90 m-auto"
              />
            )}
            {signature && (
              <img
                src={signature}
                alt="امضاء"
                className="absolute inset-0 z-10 max-h-14 max-w-32 m-auto"
              />
            )}
          </div>
        )}
        <div className="w-32 border-b-2 border-gray-400 mb-2"></div>
      </div>
      <div className="text-center">
        {hasStamp && (
          <div className="relative flex flex-row h-14 w-32">
            <span className="absolute bottom-0 -translate-x-4/5  text-black text-2xs">
              امضاء خریدار
            </span>
          </div>
        )}
        <div className="w-32 border-b-2 border-gray-400 mb-2"></div>
      </div>
    </div>
  );
}
