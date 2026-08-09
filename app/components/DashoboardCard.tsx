import type { LucideIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

interface DashboardCardProps {
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

export const DashboardCard = ({
  title,
  icon: Icon,
  color,
  description,
}: DashboardCardProps) => {
  return (
    <div className="h-46 w-full lg:h-full lg:max-w-74 relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div
        className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-linear-to-br',
          color
        )}
      />

      <div className="relative p-6">
        <div
          className={cn(
            'w-10 h-10 lg:w-14 lg:h-14 rounded-xl mb-4 flex items-center justify-center bg-linear-to-br text-white shadow-lg group-hover:scale-110 transition-transform duration-300',
            color
          )}
        >
          <Icon className="w-5 h-5 lg:w-7 lg:h-7" />
        </div>

        <h3 className="text-sm lg:text-lg font-semibold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors">
          {title}
        </h3>

        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
          {description}
        </p>

        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-linear-to-br from-teal-400 to-blue-400 rounded-full"></div>
        </div>
      </div>

      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          color
        )}
      />
    </div>
  );
};
