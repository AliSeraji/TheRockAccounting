import { cn, convertToPersianDigits } from '~/lib/utils';
import type { Customer } from '~/store/customers/types';
import { EMPTY } from '../data-table/constants';
import type { DataTableColumn } from '../data-table/types';
import { roleColors } from './constants';

const badgeClass =
  'flex flex-row items-center px-3 py-0.5 rounded-full text-xs font-vazirmatn whitespace-nowrap';

export const customerColumns: DataTableColumn<Customer>[] = [
  {
    key: 'code',
    label: 'کد',
    width: 'w-[8%]',
    className:
      'text-slate-700 font-vazirmatn text-sm whitespace-nowrap items-center',
    mobile: 'code',
    render: (customer) => convertToPersianDigits(customer.code) || EMPTY,
  },
  {
    key: 'name',
    label: 'نام / کسب و کار',
    width: 'w-[18%]',
    className: 'font-medium text-slate-800',
    mobile: 'title',
    render: (customer) => {
      const fullName = [customer.firstName, customer.lastName]
        .filter(Boolean)
        .join(' ');
      return (
        <span className="flex flex-col items-center">
          <span>{customer.businessName || EMPTY}</span>
          {fullName && (
            <span className="text-xs font-normal text-slate-400">
              {fullName}
            </span>
          )}
        </span>
      );
    },
  },
  {
    key: 'personType',
    label: 'نوع شخص',
    width: 'w-[9%]',
    className: 'whitespace-nowrap items-center',
    mobile: 'meta',
    render: (customer) => customer.personType,
  },
  {
    key: 'role',
    label: 'حساب شخص',
    width: 'w-[13%]',
    mobile: 'badge',
    render: (customer) => (
      <span
        className={cn(
          badgeClass,
          roleColors[customer.accountRole] ?? 'bg-slate-100 text-slate-600'
        )}
      >
        {customer.accountRole}
      </span>
    ),
  },
  {
    key: 'mobile',
    label: 'موبایل',
    width: 'w-[11%]',
    className: 'whitespace-nowrap items-center',
    render: (customer) =>
      customer.mobile ? convertToPersianDigits(customer.mobile) : EMPTY,
  },
  {
    key: 'city',
    label: 'شهر',
    width: 'w-[8%]',
    className: 'whitespace-nowrap items-center',
    mobile: 'meta',
    render: (customer) => customer.city || EMPTY,
  },
  {
    key: 'saleRate',
    label: 'نرخ فروش',
    width: 'w-[10%]',
    className: 'whitespace-nowrap items-center',
    render: (customer) => customer.saleRate,
  },
  {
    key: 'status',
    label: 'وضعیت',
    width: 'w-[7%]',
    mobile: 'badge',
    render: (customer) => (
      <span
        className={cn(
          badgeClass,
          customer.isActive
            ? 'bg-emerald-100 text-emerald-800'
            : 'bg-slate-200 text-slate-500'
        )}
      >
        {customer.isActive ? 'فعال' : 'غیرفعال'}
      </span>
    ),
  },
  {
    key: 'date',
    label: 'زمان ثبت/ویرایش',
    width: 'w-[11%]',
    className: 'text-slate-400 text-xs whitespace-nowrap items-center',
    render: (customer) => customer.date || EMPTY,
  },
];
