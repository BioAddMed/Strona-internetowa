import Management from "@/components/Management";

export default function ManagementPage() {
    return (
      <div className="space-y-10">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Zarząd
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Skład zarządu KN BioAddMed.
          </p>
        </header>
        <Management />
      </div>
    )
  }