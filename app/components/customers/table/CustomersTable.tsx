import type { ReactNode } from 'react';
import { Table, TableBody, TableFooter as TFoot } from '~/components/ui/table';
import type { Customer } from '~/store/customers/types';
import CustomersTableHeader from './TableHeader';
import CustomersTableRow from './TableRow';
import CustomersTableFooter from './TableFooter';

interface CustomersTableProps {
  customers: Customer[];
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function CustomersTable({
  customers,
  currentPage,
  totalPages,
  setCurrentPage,
}: CustomersTableProps): ReactNode {
  return (
    <Table className="w-full text-sm">
      <CustomersTableHeader />
      <TableBody>
        {customers.map((customer, idx) => (
          <CustomersTableRow
            key={customer.id}
            customer={customer}
            isEven={idx % 2 === 0}
          />
        ))}
      </TableBody>
      <TFoot>
        <CustomersTableFooter
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </TFoot>
    </Table>
  );
}
