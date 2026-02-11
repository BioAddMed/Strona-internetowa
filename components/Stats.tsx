// src/components/Stats.tsx
import { STATS } from '@/app/context/data'

const LIGHT_BACKGROUNDS = [
  'from-accent-50 via-white to-brand-50',
  'from-sky-50 via-white to-accent-50',
  'from-emerald-50 via-white to-white',
  'from-rose-50 via-white to-accent-50'
]

export default function Stats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STATS.map((stat, index) => (
        <div
          key={stat.label}
          className={`bg-gradient-to-br ${LIGHT_BACKGROUNDS[index % LIGHT_BACKGROUNDS.length]} dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl p-5 shadow-sm transition-colors`}
        >
          <div className="text-3xl font-bold text-brand-900 dark:text-white">{stat.value}</div>
          <div className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-200">{stat.label}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">{stat.helper}</div>
        </div>
      ))}
    </div>
  )
}
