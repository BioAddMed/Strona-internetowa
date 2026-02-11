// src/components/Departments.tsx
import { DEPARTMENTS } from '@/app/context/data'

const LIGHT_BACKGROUNDS = [
  'from-accent-50 via-white to-white',
  'from-brand-50 via-white to-accent-50',
  'from-emerald-50 via-white to-white'
]

export default function Departments({ limit }: { limit?: number }) {
  const list = typeof limit === 'number' ? DEPARTMENTS.slice(0, limit) : DEPARTMENTS
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {list.map((d, index) => (
        <div
          key={d.name}
          className={`bg-gradient-to-br ${LIGHT_BACKGROUNDS[index % LIGHT_BACKGROUNDS.length]} dark:from-slate-900 dark:via-slate-900/90 dark:to-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl p-5 shadow-sm transition-colors`}
        >
          <h4 className="font-semibold text-slate-900 dark:text-white">{d.name}</h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{d.desc}</p>
          {d.coordinator && (
            <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-200">
              Koordynator: {d.coordinator}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
