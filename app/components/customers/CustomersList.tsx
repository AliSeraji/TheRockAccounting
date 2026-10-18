import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Plus, UsersRound } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { convertToEnDigits, convertToPersianDigits } from '~/lib/utils';
import { useCustomersStore } from '~/store/customers/useCustomers';
import DataTable from '../data-table/DataTable';
import { customerColumns } from './columns';
import { ACCOUNT_ROLE_OPTIONS } from './constants';

const PAGE_SIZE = 20;

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
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <div className="flex flex-col md:flex-row w-full items-stretch md:items-center justify-between gap-3">
          <CardTitle className="w-full text-slate-800 font-semibold text-lg">
            لیست اشخاص
            <span className="mr-2 text-sm font-normal text-slate-400">
              ({convertToPersianDigits(filtered.length)} از{' '}
              {convertToPersianDigits(customers.length)} شخص)
            </span>
          </CardTitle>

          <div className="flex flex-row justify-end w-full gap-2">
            <Button
              onClick={openNewCustomer}
              className="gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              شخص جدید
            </Button>
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو نام، کد یا موبایل..."
              className="min-w-0 flex-1 md:flex-none md:w-48 border-slate-200 rounded-lg text-sm"
            />
            <Select
              value={filterRole || 'all'}
              onValueChange={(v) => setFilterRole(v === 'all' ? '' : v)}
            >
              <SelectTrigger
                dir="rtl"
                className="flex flex-row max-w-45 border border-slate-200 rounded-lg text-sm px-3 py-1.5 bg-white text-slate-700 hover:cursor-pointer focus:ring-0 focus:ring-offset-0 focus:border-slate-400 focus:border-2"
              >
                <SelectValue placeholder="همه نقش‌ها" />
              </SelectTrigger>
              <SelectContent dir="rtl">
                <SelectGroup>
                  <SelectItem value="all" className="hover:cursor-pointer">
                    همه نقش‌ها
                  </SelectItem>
                  {ACCOUNT_ROLE_OPTIONS.map((role) => (
                    <SelectItem
                      key={role}
                      value={role}
                      className="hover:cursor-pointer"
                    >
                      {role}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>

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
