// src/app/departments/page.tsx
import Departments from '@/components/Departments'

export default function DepartmentsPage() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Działy
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Poznaj zespoły, które współtworzą KN BioAddMed.
        </p>
      </header>
      <Departments />
    </div>
  )
}


