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
      <div className="w-full justify-center  py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Dashboard Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                داشبورد اصلی
              </h2>
              <p className="text-gray-600">دسترسی سریع به تمام بخش‌های سیستم</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {dashboardItems.map((item, index) => (
                <Link key={index} to={item.to}>
                  <DashboardCard
                    title={item.title}
                    subtitle={item.subtitle}
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
