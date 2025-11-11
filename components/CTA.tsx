// src/components/CTA.tsx
export default function CTA() {
  return (
    <section className="bg-linear-to-r from-brand-50 to-white dark:from-brand-900 dark:to-slate-800 rounded-2xl p-8 transition-colors">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Chcesz dołączyć do KN BioAddMed?</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Napisz do nas lub przyjdź na spotkanie — rekrutacja otwarta cały rok.</p>
        </div>
        <div className="flex gap-3">
          <a href="#contact" className="px-5 py-3 rounded bg-accent-500 text-white hover:bg-accent-600 transition-colors">Napisz do nas</a>
          <a href="#" className="px-5 py-3 rounded border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Kalendarz spotkań</a>
        </div>
      </div>
    </section>
  )
}
