import type React from 'react';

export const Note = (): React.ReactNode => {
  return (
    <div className="mb-2 rounded-md border border-slate-200 px-3 py-2 text-2xs [-webkit-print-color-adjust:exact] [print-color-adjust:exact]">
      <p className="leading-relaxed text-slate-700">
        کالای مشروحه فوق بدون عیب و نقص تحویل اینجانب:
        ................................ راننده خودرو شماره ....................
        گردید که در آدرس فوق تحویل خریدار نمایم.
      </p>
    </div>
  );
};
