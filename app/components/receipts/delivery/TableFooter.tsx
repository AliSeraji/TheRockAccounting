import { TableCell, TableFooter, TableRow } from '~/components/ui/table';
import { convertToPersianDigits } from '~/lib/utils';

interface DeliveryTableFooterProps {
  totalArea: number;
}

export const DeliveryTableFooter = ({
  totalArea,
}: DeliveryTableFooterProps): React.ReactNode => {
  return (
    <TableFooter>
      <TableRow className="bg-gray-100 font-bold">
        <TableCell
          colSpan={6}
          className="border-2 border-gray-500 p-1.5 text-left"
        >
          متراژ کل
        </TableCell>
        <TableCell className="border-2 border-gray-500 p-1.5 text-center">
          {convertToPersianDigits(totalArea.toString())}
        </TableCell>
      </TableRow>
    </TableFooter>
  );
};
