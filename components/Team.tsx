// src/components/Team.tsx
import { TEAM } from '@/app/context/data'

export default function Team() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      {TEAM.map(p => (
        <div key={p.name} className="bg-white rounded-2xl p-6 text-center shadow">
          <div className="mx-auto w-20 h-20 rounded-full bg-neutral-100 mb-4 flex items-center justify-center">
            {/* Tu można wstawić avatar: public/images/team/<slug>.jpg */}
            <span className="text-xl text-slate-400">{p.name.split(' ').map(n=>n[0]).join('')}</span>
          </div>
          <div className="font-medium">{p.name}</div>
          <div className="text-sm text-slate-500">{p.role}</div>
        </div>
      ))}
    </div>
  )
}
