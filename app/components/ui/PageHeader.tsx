import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { Link } from 'react-router';

export default function PageHeader({
  lastPage,
  currentPage,
  link,
  icon,
}: {
  lastPage: string;
  currentPage: string;
  link: string;
  icon: ReactNode;
}): ReactNode {
  return (
    <header className="h-auto bg-white/75 backdrop-blur-md border border-white/60 fixed top-20 left-4 right-4 z-40 rounded-2xl shadow-lg shadow-slate-200/50">
      <div className="flex items-center justify-between px-3 py-2 md:px-4 md:py-3">
        <div className="flex items-center gap-2 md:gap-3">
          <Link
            to={link}
            className="p-1.5 md:p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-slate-600" />
          </Link>
          <div className="w-px h-5 md:h-6 bg-slate-200" />
          <div className="w-7 h-7 md:w-9 md:h-9 rounded-lg bg-gold-gradient flex items-center justify-center shadow-sm max-md:[&>svg]:size-4">
            {icon}
          </div>
          <div className="flex flex-col">
            <p className="text-xs md:text-sm font-bold bg-linear-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
              {currentPage}
            </p>
            <p className="text-[11px]/[13px] md:text-xs text-slate-400">
              {lastPage}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
