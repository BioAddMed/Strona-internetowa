import Link from 'next/link'
import Sponsors from '@/components/Sponsors'

export default function SponsorsPage() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Nasi Partnerzy
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Współpracujemy z firmami wspierającymi rozwój KN BioAddMed i innowacyjne projekty medyczne.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/sponsor-offer"
            className="inline-flex items-center rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/30 ring-2 ring-brand-300/60 transition-all hover:bg-brand-700 hover:shadow-xl hover:shadow-brand-600/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-300"
          >
            Zostań sponsorem
          </Link>
        </div>
      </header>
      <Sponsors />
    </div>
  )
}
