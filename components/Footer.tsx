// src/components/Footer.tsx

export default function Footer() {
  return (
    <footer id="contact" className="mt-20 bg-white dark:bg-slate-800 border-t dark:border-slate-700 transition-colors">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-accent-500 flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <div>
              <div className="font-semibold text-slate-900 dark:text-white">KN BioAddMed</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Politechnika Wrocławska</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Budynek B-4 — Laboratoria<br />
            ul. Ignacego Łukasiewicza 5, 50-371 Wrocław
          </p>
        </div>

        <div>
          <h4 className="font-medium text-slate-900 dark:text-white">Szybkie linki</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
            <li><a href="/projects" className="hover:underline hover:text-accent-500 transition-colors">Projekty</a></li>
            <li><a href="/departments" className="hover:underline hover:text-accent-500 transition-colors">Działy</a></li>
            <li><a href="/management" className="hover:underline hover:text-accent-500 transition-colors">Zespół</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-slate-900 dark:text-white">Kontakt</h4>
          <a href="mailto:bioaddmed@gmail.com" className="mt-3 text-sm text-slate-600 dark:text-slate-400">@bioaddmed</a>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">kontakt@bioaddmed.example</p>
        </div>
      </div>

      <div className="border-t dark:border-slate-700 py-4 text-center text-xs text-slate-400 dark:text-slate-500">© {new Date().getFullYear()} KN BioAddMed Wszystkie prawa zastrzeżone.</div>
    </footer>
  )
}
