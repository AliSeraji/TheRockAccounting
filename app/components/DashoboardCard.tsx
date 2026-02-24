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
    <div className="max-w-74 group relative overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div
        className={cn(
          'absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br',
          color
        )}
      />

      <div className="relative p-6">
        <div
          className={cn(
            'w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br text-white shadow-lg group-hover:scale-110 transition-transform duration-300',
            color
          )}
        >
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-gray-900 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>

        <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-2 h-2 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full"></div>
        </div>
      </div>

      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          color
        )}
      />
    </div>
  );
};
