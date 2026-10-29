import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Card, CardContent } from '../ui/card';
import { UsersRound } from 'lucide-react';
import { convertToEnDigits } from '~/lib/utils';
import { useCustomersStore } from '~/store/customers/useCustomers';
import DataTable from '../data-table/DataTable';
import ListHeader from '../data-table/ListHeader';
import { customerColumns } from './columns';
import { ACCOUNT_ROLE_OPTIONS } from './constants';

const PAGE_SIZE = 20;

const ROLE_FILTER_OPTIONS = [
  { value: 'all', label: 'همه نقش‌ها' },
  ...ACCOUNT_ROLE_OPTIONS.map((role) => ({ value: role, label: role })),
];

export default function CustomersList(): ReactNode {
  const customers = useCustomersStore((state) => state.customers);
  const selectedId = useCustomersStore((state) => state.selectedCustomer.id);
  const openCustomer = useCustomersStore((state) => state.openCustomer);
  const openNewCustomer = useCustomersStore((state) => state.openNewCustomer);
  const [search, setSearch] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    const term = convertToEnDigits(search).trim().toLowerCase();

    return customers.filter((customer) => {
      const haystack = [
        customer.businessName,
        customer.firstName,
        customer.lastName,
        customer.code,
        customer.mobile,
        customer.city,
      ]
        .join(' ')
        .toLowerCase();

      const matchSearch = !term || haystack.includes(term);
      const matchRole = !filterRole || customer.accountRole === filterRole;
      return matchSearch && matchRole;
    });
  }, [customers, search, filterRole]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = useMemo(
    () =>
      filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE),
    [filtered, currentPage]
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filterRole]);

  return (
    <Card className="w-full border-slate-200 bg-white/90 backdrop-blur mb-6">
      <ListHeader
        title="لیست اشخاص"
        noun="شخص"
        shown={filtered.length}
        total={customers.length}
        search={search}
        onSearchChange={setSearch}
        searchPlaceholder="جستجو نام، کد یا موبایل..."
        filters={[
          {
            key: 'role',
            label: 'نقش',
            value: filterRole || 'all',
            options: ROLE_FILTER_OPTIONS,
            onChange: (v) => setFilterRole(v === 'all' ? '' : v),
          },
        ]}
        addLabel="شخص جدید"
        onAdd={openNewCustomer}
      />

      <CardContent className="p-0">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-slate-400 gap-3">
            <UsersRound className="w-12 h-12 opacity-30" />
            <p className="text-sm">هیچ شخصی یافت نشد</p>
          </div>
        ) : (
          <DataTable
            columns={customerColumns}
            items={paginated}
            firstRowNumber={(currentPage - 1) * PAGE_SIZE + 1}
            selectedId={selectedId}
            onSelect={openCustomer}
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        )}
      </CardContent>
    </Card>
  );
}
