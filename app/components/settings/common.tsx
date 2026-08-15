import * as React from 'react';
import { cn } from '~/lib/utils';
import {
  Building2,
  FileText,
  Hash,
  Database,
  Palette,
  ShieldAlert,
} from 'lucide-react';
import type { Accent, AccentMap, SettingsSectionDescriptor } from './types';
import { useId } from 'react';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

const ACCENTS: AccentMap = {
  teal: {
    from: '#2dd4bf',
    to: '#0d9488',
    ring: '#14b8a6',
    soft: '#f0fdfa',
    border: '#5eead4',
    label: 'سبز آبی',
  },
  blue: {
    from: '#60a5fa',
    to: '#2563eb',
    ring: '#3b82f6',
    soft: '#eff6ff',
    border: '#93c5fd',
    label: 'آبی',
  },
  emerald: {
    from: '#34d399',
    to: '#059669',
    ring: '#10b981',
    soft: '#ecfdf5',
    border: '#6ee7b7',
    label: 'زمردی',
  },
  amber: {
    from: '#fbbf24',
    to: '#d97706',
    ring: '#f59e0b',
    soft: '#fffbeb',
    border: '#fcd34d',
    label: 'کهربایی',
  },
  rose: {
    from: '#fb7185',
    to: '#e11d48',
    ring: '#f43f5e',
    soft: '#fff1f2',
    border: '#fda4af',
    label: 'گلی',
  },
  indigo: {
    from: '#818cf8',
    to: '#4f46e5',
    ring: '#6366f1',
    soft: '#eef2ff',
    border: '#a5b4fc',
    label: 'نیلی',
  },
};
// Used for the danger-zone gradient — kept separate so it isn't a selectable accent.
export const DANGER: { from: string; to: string } = {
  from: '#fb7185',
  to: '#e11d48',
};

export const ALERT: { from: string; to: string } = {
  from: '#fbbf24',
  to: '#d97706',
};
// Default accent for the settings module. Matches the dashboard's teal vibe.
export const ACCENT: Accent = ACCENTS.teal;

// ── Section list ────────────────────────────────────────────────────────────
export const SETTINGS_SECTIONS: SettingsSectionDescriptor[] = [
  {
    id: 'company',
    title: 'اطلاعات شرکت',
    desc: 'نام، لوگو و مشخصات هویتی',
    iconName: 'Building2',
  },
  {
    id: 'invoice',
    title: 'فاکتور و رسید',
    desc: 'تنظیمات پیش‌فرض چاپ و فاکتور',
    iconName: 'FileText',
  },
  {
    id: 'numbering',
    title: 'شماره‌گذاری و سال مالی',
    desc: 'قالب شماره فاکتور و دوره مالی',
    iconName: 'Hash',
  },
  {
    id: 'backup',
    title: 'پشتیبان‌گیری و داده',
    desc: 'ذخیره، بازیابی و انتقال داده‌ها',
    iconName: 'Database',
  },
  // {
  //   id: 'appearance',
  //   title: 'ظاهر برنامه',
  //   desc: 'فونت، تم و فشردگی نمایش',
  //   iconName: 'Palette',
  // },
  {
    id: 'danger',
    title: 'امنیت و حریم خصوصی',
    desc: 'بازنشانی و حذف اطلاعات',
    iconName: 'ShieldAlert',
  },
];

type IconComponent = React.FC<
  React.SVGProps<SVGSVGElement> & { className?: string }
>;

export const ICONS_BY_NAME: Record<string, IconComponent> = {
  Building2,
  FileText,
  Hash,
  Database,
  Palette,
  ShieldAlert,
};

interface SectionCardProps {
  title: string;
  subtitle?: string;
  icon: IconComponent;
  accent?: Accent;
  danger?: boolean;
  children: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({
  title,
  subtitle,
  icon: IconComp,
  accent = ACCENT,
  danger = false,
  children,
}) => {
  const gradient = danger ? DANGER : { from: accent.from, to: accent.to };
  return (
    <div
      className={cn(
        'rounded-2xl border bg-white/85 backdrop-blur-md overflow-hidden',
        'shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)]',
        danger ? 'border-rose-200/70' : 'border-slate-200/70'
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3 px-5 py-3.5 border-b',
          danger
            ? 'border-rose-200/70 bg-linear-to-l from-rose-50 to-rose-50/40'
            : 'border-slate-200/70 bg-linear-to-l from-slate-50 to-white'
        )}
      >
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-sm"
          style={{
            background: `linear-gradient(135deg, ${gradient.from}, ${gradient.to})`,
          }}
        >
          <IconComp className="w-4 h-4" />
        </div>
        <div className="flex-1">
          <h3
            className={cn(
              'text-sm font-bold',
              danger ? 'text-rose-900' : 'text-slate-800'
            )}
          >
            {title}
          </h3>
          {subtitle && (
            <p
              className={cn(
                'text-xs',
                danger ? 'text-rose-500' : 'text-slate-500'
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
};

interface ToggleProps {
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
  accent?: Accent;
}

const Toggle: React.FC<ToggleProps> = ({
  checked,
  onCheckedChange,
  accent = ACCENT,
}) => (
  <button
    type="button"
    onClick={() => onCheckedChange(!checked)}
    className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors shrink-0"
    style={{
      background: checked
        ? `linear-gradient(135deg, ${accent.from}, ${accent.to})`
        : '#e2e8f0',
    }}
    aria-pressed={checked}
  >
    <span
      className={cn(
        'inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform',
        checked ? '-translate-x-5' : '-translate-x-0.5'
      )}
    />
  </button>
);

interface SegmentedOption<T extends string> {
  value: T;
  label: string;
  icon?: IconComponent;
}
interface SegmentedProps<T extends string> {
  value: T;
  onValueChange: (next: T) => void;
  options: ReadonlyArray<SegmentedOption<T>>;
  accent?: Accent;
}

function Segmented<T extends string>({
  value,
  onValueChange,
  options,
  accent = ACCENT,
}: SegmentedProps<T>): React.ReactElement {
  return (
    <div className="inline-flex rounded-lg bg-slate-100/80 p-1 gap-1">
      {options.map((o) => {
        const active = value === o.value;
        const Icn = o.icon;
        return (
          <button
            key={o.value}
            type="button"
            onClick={() => onValueChange(o.value)}
            className={cn(
              'px-3 h-8 rounded-md text-xs font-medium transition flex items-center gap-1.5',
              active
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            )}
            style={
              active
                ? {
                    boxShadow: `0 1px 2px rgba(0,0,0,0.06), inset 0 0 0 1px ${accent.border}55`,
                  }
                : undefined
            }
          >
            {Icn && <Icn className="w-3.5 h-3.5" />}
            {o.label}
          </button>
        );
      })}
    </div>
  );
}

export interface ToggleRowProps {
  label: string;
  hint?: string;
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
}

export function ToggleRow({
  label,
  hint,
  checked,
  onCheckedChange,
}: ToggleRowProps): React.ReactNode {
  const id = useId();
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200/70 bg-white/60 p-3 hover:bg-white transition">
      <div className="flex-1">
        <Label
          htmlFor={id}
          className="text-xs lg:text-sm font-medium text-slate-800 cursor-pointer"
        >
          {label}
        </Label>
        {hint && <p className="text-xs text-slate-500 mt-0.5">{hint}</p>}
      </div>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={cn(
          'data-[state=checked]:bg-emerald-600 data-[state=unchecked]:bg-slate-300 cursor-pointer'
        )}
        dir="ltr"
      />
    </div>
  );
}
