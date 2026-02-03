import { deliveryTableItems } from '~/components/invoice/common';
import { TableHead, TableHeader, TableRow } from '~/components/ui/table';

interface DeliveryTableHeaderProps {
  items?: typeof deliveryTableItems;
}

export const DeliveryTableHeader = ({
  items = deliveryTableItems,
}: DeliveryTableHeaderProps): React.ReactNode => {
  return (
    <TableHeader>
      <TableRow className="bg-gray-200">
        {items.map((item) => (
          <TableHead
            key={item.label}
            className={`border-2 border-gray-500 p-1.5 ${item.width} text-center`}
          >
            {item.label}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};
