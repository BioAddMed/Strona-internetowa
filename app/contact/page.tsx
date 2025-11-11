// src/app/contact/page.tsx
import Image from 'next/image'

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <header className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          Kontakt
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          Skontaktuj się z nami — odpowiemy jak najszybciej.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">E-mail</h2>
            <p className="text-slate-600 dark:text-slate-300">
              <a className="text-brand-600 dark:text-brand-400 hover:underline" href="mailto:bioaddmed@pwr.edu.pl">
                bioaddmed@pwr.edu.pl
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Adres</h2>
            <p className="text-slate-600 dark:text-slate-300">
              Politechnika Wrocławska, Wrocław
            </p>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
          <Image
            src="/Kontakt.png"
            alt="Kontakt"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
            priority={false}
          />
        </div>
      </div>
    </div>
  )
}


