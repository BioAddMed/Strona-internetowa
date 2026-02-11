// src/components/Management.tsx
import { MANAGEMENT, COORDINATORS, type Member } from '@/app/context/data'

function Card({ name, role, imageUrl }: Member) {
  return (
    <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center shadow-sm transition-colors">
      <div className="mx-auto w-20 h-20 rounded-full bg-accent-50 dark:bg-slate-700 mb-4 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-20 h-20 rounded-full object-cover" />
        ) : (
          <span className="text-xl text-accent-600 dark:text-accent-400">{name.split(' ').map(n=>n[0]).join('')}</span>
        )}
      </div>
      <div className="font-medium text-slate-900 dark:text-white">{name}</div>
      <div className="text-sm text-slate-600 dark:text-slate-300">{role}</div>
    </div>
  )
}

export default function Management() {
  return (
    <div className="space-y-10">
      <section aria-labelledby="board-title">
        <h2 id="board-title" className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Zarząd</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {MANAGEMENT.map(m => <Card key={m.name} {...m} />)}
        </div>
      </section>

      <section aria-labelledby="coord-title">
        <h2 id="coord-title" className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Koordynatorzy działów</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {COORDINATORS.map(m => <Card key={m.name} {...m} />)}
        </div>
      </section>
    </div>
  )
}


