import type { ReactNode } from 'react';

export default function PageHeader({
  content,
}: {
  content: ReactNode;
}): ReactNode {
  return (
    <header className="w-full h-auto bg-white/50 backdrop-blur-md border-b border-slate-200 fixed left-0 right-0 top-18 z-40">
      {content}
    </header>
  );
}
