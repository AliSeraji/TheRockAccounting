import PersianCalendar from '~/components/PersianCalendar';
import type { Route } from './+types/home';
import { Link } from 'react-router';
import { dashboardItems } from '~/components/constants/HomeConst';
import { DashboardCard } from '~/components/DashoboardCard';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'The Rock accounting' },
    { name: 'THE ROCK', content: 'Welcome to The Rock' },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen" dir="rtl">
      <div className="w-full mx-auto px-6 py-8">
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
                <DashboardCard
                  key={index}
                  title={item.title}
                  subtitle={item.subtitle}
                  icon={item.icon}
                  color={item.color}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          {/* Sidebar with Calendar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <PersianCalendar />

              {/* Quick Stats */}
              <div className="mt-6 bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  آمار سریع
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">معاملات امروز</span>
                    <span className="font-semibold text-teal-600">۲۴</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">خریداران فعال</span>
                    <span className="font-semibold text-blue-600">۱۸۷</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">درآمد ماه</span>
                    <span className="font-semibold text-green-600">۲.۴M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
