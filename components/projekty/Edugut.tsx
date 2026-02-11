"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Edugut() {
  const project = PROJECT_DETAILS.find(p => p.id === 'edugut')
  if (!project) return null
  
  return (
    <ProjectDetail project={project}>
      <h3 className="font-bold mt-4">Rezultat badawczy:</h3>
      <p>
        Stworzenie modelu treningowego do zespolenia jelita grubego oraz opracowanie wydajnej i opłacalnej techniki wykonania modelu z wykorzystaniem technologii przyrostowych.
      </p>
      <h3 className="font-bold mt-4">Planowany termin realizacji projektu:</h3>
      <p>
        Grudzień 2024 – Październik 2025, z przeznaczeniem semestru zimowego 2025/2026 na warsztaty chirurgiczne, testy oraz prezentację gotowego trenażera.
      </p>
      <h3 className="font-bold mt-4">Zasoby wymagane:</h3>
      <ul className="list-disc list-inside">
        <li>Silikon addycyjny Ecoflex 00-20 oraz 00-30 (czekamy na wniosek)</li>
        <li>Barwnik do silikonu</li>
        <li>Drukarka 3D do druku modelu i tworzenia formy</li>
        <li>Materiały do obróbki formy oraz modelu (papier ścierny, kubeczki do mieszania silikonu)</li>
      </ul>
    </ProjectDetail>
  )
}
