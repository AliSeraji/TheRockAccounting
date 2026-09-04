import { memo, type ReactNode } from 'react';
import { TableRow, TableCell } from '~/components/ui/table';
import { convertToPersianDigits } from '~/lib/utils';
import type { Customer } from '~/store/customers/types';
import { useCustomersStore } from '~/store/customers/useCustomers';
import { roleColors } from '../constants';

interface CustomersTableRowProps {
  customer: Customer;
  isEven: boolean;
}

const CustomersTableRow = memo(function CustomersTableRow({
  customer,
  isEven,
}: CustomersTableRowProps): ReactNode {
  const isSelected = useCustomersStore(
    (state) => state.selectedCustomer?.id === customer.id
  );
  const setSelectedCustomer = useCustomersStore(
    (state) => state.setSelectedCustomer
  );

  const fullName = [customer.firstName, customer.lastName]
    .filter(Boolean)
    .join(' ');

  return (
    <TableRow
      onClick={() => setSelectedCustomer(customer)}
      className={`border-b border-slate-100 hover:bg-teal-50 transition-colors cursor-pointer ${
        isSelected
          ? 'bg-teal-50 ring-1 ring-inset ring-teal-300'
          : isEven
            ? 'bg-white'
            : 'bg-slate-50/50'
      }`}
    >
      <TableCell className="px-4 py-3 text-slate-700 font-mono text-xs whitespace-nowrap">
        {convertToPersianDigits(customer.code) || '—'}
      </TableCell>
      <TableCell className="px-4 py-3 whitespace-nowrap">
        <div className="font-medium text-slate-800">
          {customer.businessName || '—'}
        </div>
        {fullName && <div className="text-xs text-slate-400">{fullName}</div>}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600 whitespace-nowrap">
        {customer.personType}
      </TableCell>
      <TableCell className="px-4 py-3">
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
            roleColors[customer.accountRole] ?? 'bg-slate-100 text-slate-600'
          }`}
        >
          {customer.accountRole}
        </span>
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600 whitespace-nowrap">
        {customer.mobile ? convertToPersianDigits(customer.mobile) : '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600 whitespace-nowrap">
        {customer.city || '—'}
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-600 whitespace-nowrap">
        {customer.saleRate}
      </TableCell>
      <TableCell className="px-4 py-3">
        <span
          className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium whitespace-nowrap ${
            customer.isActive
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-slate-200 text-slate-500'
          }`}
        >
          {customer.isActive ? 'فعال' : 'غیرفعال'}
        </span>
      </TableCell>
      <TableCell className="px-4 py-3 text-slate-400 text-xs whitespace-nowrap">
        {customer.date || '—'}
      </TableCell>
    </TableRow>
  );
});

export default CustomersTableRow;
