import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from 'rock-fact';

const roleColors: Record<string, string> = {
  مشتری: 'bg-teal-100 text-teal-800',
  تامین‌کننده: 'bg-amber-100 text-amber-800',
  'مشتری و تامین‌کننده': 'bg-indigo-100 text-indigo-800',
  بازاریاب: 'bg-purple-100 text-purple-800',
};

const customers = [
  { code: '۱۰۰۲', business: 'سنگ‌بری آریا', name: 'محمد رضایی', type: 'حقوقی', role: 'مشتری', mobile: '۰۹۱۲۳۴۵۶۷۸۹', city: 'اصفهان', rate: 'قیمت همکار', active: true, date: '۱۴۰۴/۰۶/۲۲' },
  { code: '۱۰۰۷', business: 'معدن سنگ کوهستان', name: 'علی کریمی', type: 'حقوقی', role: 'تامین‌کننده', mobile: '۰۹۱۳۲۲۴۵۵۱۰', city: 'محلات', rate: 'قیمت عمده', active: true, date: '۱۴۰۴/۰۶/۱۸' },
  { code: '۱۰۱۳', business: '', name: 'زهرا احمدی', type: 'حقیقی', role: 'مشتری و تامین‌کننده', mobile: '۰۹۳۵۶۷۸۱۲۳۴', city: 'شیراز', rate: 'قیمت مصرف‌کننده', active: false, date: '۱۴۰۴/۰۵/۳۰' },
  { code: '۱۰۲۱', business: 'دکوراسیون نگین', name: 'حسین مرادی', type: 'حقوقی', role: 'بازاریاب', mobile: '', city: 'تهران', rate: 'قیمت ویژه', active: true, date: '۱۴۰۴/۰۵/۱۲' },
];

const columns = ['کد', 'نام / کسب و کار', 'نوع شخص', 'حساب شخص', 'موبایل', 'شهر', 'نرخ فروش', 'وضعیت', 'زمان ثبت/ویرایش'];

const invoiceItems = [
  { row: '۱', stone: 'تراورتن کرم', thickness: '۲', area: '۱۲٫۵', price: '۳٬۸۰۰٬۰۰۰', total: '۴۷٬۵۰۰٬۰۰۰' },
  { row: '۲', stone: 'مرمریت دهبید', thickness: '۳', area: '۸', price: '۵٬۲۰۰٬۰۰۰', total: '۴۱٬۶۰۰٬۰۰۰' },
  { row: '۳', stone: 'گرانیت نطنز', thickness: '۲', area: '۲۰', price: '۲٬۹۰۰٬۰۰۰', total: '۵۸٬۰۰۰٬۰۰۰' },
];

export const CustomerList = () => (
  <div dir="rtl">
    <Table className="w-full text-sm">
      <TableHeader>
        <TableRow className="bg-slate-50 border-b border-slate-200 text-slate-600">
          {columns.map((col) => (
            <TableHead key={col} className="text-right px-2 py-3 font-medium whitespace-nowrap">
              {col}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {customers.map((c, idx) => (
          <TableRow
            key={c.code}
            className={`border-b border-slate-100 hover:bg-teal-50 transition-colors cursor-pointer ${
              idx === 0 ? 'bg-teal-50 ring-1 ring-inset ring-teal-300' : idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
            }`}
          >
            <TableCell className="px-2 py-3 text-slate-700 font-mono text-xs whitespace-nowrap">{c.code}</TableCell>
            <TableCell className="px-2 py-3 whitespace-nowrap">
              <div className="font-medium text-slate-800">{c.business || '—'}</div>
              <div className="text-xs text-slate-400">{c.name}</div>
            </TableCell>
            <TableCell className="px-2 py-3 text-slate-600 whitespace-nowrap">{c.type}</TableCell>
            <TableCell className="px-2 py-3">
              <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${roleColors[c.role]}`}>
                {c.role}
              </span>
            </TableCell>
            <TableCell className="px-2 py-3 text-slate-600 whitespace-nowrap">{c.mobile || '—'}</TableCell>
            <TableCell className="px-2 py-3 text-slate-600 whitespace-nowrap">{c.city}</TableCell>
            <TableCell className="px-2 py-3 text-slate-600 whitespace-nowrap">{c.rate}</TableCell>
            <TableCell className="px-2 py-3">
              <span
                className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
                  c.active ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-500'
                }`}
              >
                {c.active ? 'فعال' : 'غیرفعال'}
              </span>
            </TableCell>
            <TableCell className="px-2 py-3 text-slate-400 text-xs whitespace-nowrap">{c.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export const InvoiceItemsWithTotal = () => (
  <div dir="rtl">
    <Table className="w-full text-sm">
      <TableCaption>اقلام فاکتور شماره ۱۴۰۴-۰۱۲۷</TableCaption>
      <TableHeader>
        <TableRow className="bg-slate-50 text-slate-600">
          <TableHead className="text-right">ردیف</TableHead>
          <TableHead className="text-right">نوع سنگ</TableHead>
          <TableHead className="text-right">ضخامت (سانتی‌متر)</TableHead>
          <TableHead className="text-right">متراژ (مترمربع)</TableHead>
          <TableHead className="text-right">فی (ریال)</TableHead>
          <TableHead className="text-right">مبلغ (ریال)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoiceItems.map((item) => (
          <TableRow key={item.row}>
            <TableCell className="text-slate-500">{item.row}</TableCell>
            <TableCell className="font-medium text-slate-800">{item.stone}</TableCell>
            <TableCell>{item.thickness}</TableCell>
            <TableCell>{item.area}</TableCell>
            <TableCell>{item.price}</TableCell>
            <TableCell className="font-medium">{item.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3} className="font-semibold">جمع کل</TableCell>
          <TableCell className="font-semibold">۴۰٫۵</TableCell>
          <TableCell />
          <TableCell className="font-semibold">۱۴۷٬۱۰۰٬۰۰۰</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </div>
);
