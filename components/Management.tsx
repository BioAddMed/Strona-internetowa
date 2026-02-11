// src/components/Management.tsx
import { MANAGEMENT, type Member } from '@/app/context/data'

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
  // Split management into president (first) and vice presidents (rest)
  const president = MANAGEMENT[0]
  const vicePresidents = MANAGEMENT.slice(1)

  return (
    <div className="space-y-8">
      <section aria-labelledby="board-title">
        {/* Pyramid layout */}
        <div className="flex flex-col items-center gap-6">
          {/* President at top */}
          <div className="w-full max-w-xs">
            <Card {...president} />
          </div>
          
          {/* Vice presidents below */}
          <div className="grid gap-6 sm:grid-cols-2 w-full max-w-2xl">
            {vicePresidents.map(m => <Card key={m.name} {...m} />)}
          </div>
        </div>
      </section>
    </div>
  )
}


