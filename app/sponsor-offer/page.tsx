import Link from 'next/link'

export default function SponsorOfferPage() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Oferta partnerska
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Wspieraj rozwój innowacyjnych projektów biomedycznych i wspólnie z nami buduj przyszłość technologii medycznych.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Skontaktuj się z nami
          </Link>
          <a
            href="mailto:bioaddmed@pwr.edu.pl"
            className="inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            bioaddmed@pwr.edu.pl
          </a>
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Dlaczego warto?</h2>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
            <li>• Realny wpływ na rozwój innowacyjnych technologii medycznych.</li>
            <li>• Widoczność marki wśród studentów, naukowców i partnerów uczelni.</li>
            <li>• Dostęp do młodych talentów i projektów badawczo-rozwojowych.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-white dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Formy współpracy</h2>
          <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
            <li>• Wsparcie finansowe projektów i prototypów.</li>
            <li>• Współpraca merytoryczna i konsultacje eksperckie.</li>
            <li>• Udostępnienie sprzętu, materiałów lub oprogramowania.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 dark:border-slate-700 p-6 bg-slate-50 dark:bg-slate-900">
        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Jak zostać sponsorem?</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Opowiedz nam o swoich celach, a przygotujemy dopasowaną propozycję współpracy i ekspozycji marki. Możemy też przygotować spersonalizowany pakiet świadczeń.
        </p>
        <div className="mt-4">
          <Link href="/sponsors" className="text-brand-600 dark:text-brand-400 hover:underline">
            Zobacz naszych partnerów
          </Link>
        </div>
      </section>
    </div>
  )
}
