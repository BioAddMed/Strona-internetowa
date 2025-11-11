// src/components/ListaProjektow.tsx
export default function ListaProjektow({
  items,
  selectedProject,
  onSelect
}: {
  items: string[]
  selectedProject: string
  onSelect: (name: string) => void
}) {
  return (
    <aside className="w-full md:w-72 shrink-0">
      <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-200">Lista projektów</h2>
        </div>
        <ul className="divide-y divide-slate-100 dark:divide-slate-700">
          {items.map((name) => {
            const active = name === selectedProject
            return (
              <li key={name}>
                <button
                  onClick={() => onSelect(name)}
                  className={`w-full text-left px-5 py-3 transition-colors ${
                    active
                      ? 'bg-accent-50 text-slate-900 dark:bg-slate-700/50 dark:text-white'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-700/30 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}


