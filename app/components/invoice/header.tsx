import { ArrowRight, FileText, Printer } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../ui/button';

export default function InvoiceHeader() {
  return (
    <header className="w-full p-0 bg-white/90 backdrop-blur-md border-b border-slate-200 fixed left-0 right-0 top-18 shadow-sm h-18 z-40">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ArrowRight className="w-5 h-5 text-slate-700" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                صدور فاکتور
              </h1>
              <p className="text-sm text-slate-500">ایجاد و مدیریت فاکتورها</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button className="text-gray-300 gap-2 bg-linear-to-r from-slate-700 to-slate-900 hover:from-slate-800 hover:to-slate-950 hover:cursor-pointer">
              <FileText className="w-4 h-4" />
              ذخیره
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
