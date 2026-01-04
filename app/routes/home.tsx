import PersianCalendar from '~/components/PersianCalendar';
import type { Route } from './+types/home';
import { dashboardItems } from '~/components/constants/HomeConst';
import { DashboardCard } from '~/components/DashoboardCard';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Rock accounting' },
    { name: 'THE ROCK', content: 'Welcome to The Rock' },
  ];
}

export default function Home() {
  return (
    <div className="h-full" dir="rtl">
      <div className="w-full justify-center py-8">
        <div className="grid grid-cols-1 flex-col-reverse lg:grid-cols-4 gap-8 lg:px-0 mx-3 md:px-6">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 mt-12">
                داشبورد اصلی
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {dashboardItems.map((item, index) => (
                <Link key={index} to={item.to}>
                  <DashboardCard
                    title={item.title}
                    icon={item.icon}
                    color={item.color}
                    description={item.description}
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="sticky top-24">
              <PersianCalendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
