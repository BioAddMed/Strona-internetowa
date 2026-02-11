"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Aeros() {
  const project = PROJECT_DETAILS.find(p => p.id === 'aeros')
  if (!project) return null
  
  return (
    <ProjectDetail project={project}>
      <div className="prose max-w-none mt-4 text-slate-700 dark:text-slate-300">
        <p>
          Projekt Inteligentnego Systemu Monitorowania i Korekcji Oddychania ma na celu stworzenie
          nowoczesnego urządzenia analizującego wzorce oddechowe w czasie rzeczywistym, wspomagającego
          profilaktykę chorób serca, astmy i napadów paniki.
        </p>

        <p>
          System wykorzystuje zaawansowane czujniki biomedyczne (przepływu powietrza, ciśnienia, CO₂,
          SpO₂, EKG) oraz algorytmy sztucznej inteligencji do precyzyjnej analizy i interpretacji danych.
          Dzięki funkcji biofeedbacku użytkownik otrzymuje natychmiastowe wskazówki dotyczące korekcji
          oddechu.
        </p>

        <p>
          Projekt realizowany jest w dwóch etapach: fazie stacjonarnej — testującej i walidującej
          algorytmy — oraz fazie mobilnej, która zapewni wygodne monitorowanie w codziennym życiu.
        </p>

        <p>
          Urządzenie ma potencjał wspierać terapię astmy, poprawiać wydolność oddechową i redukować stres,
          stając się praktycznym narzędziem dla medycyny i zastosowań sportowych.
        </p>
      </div>
    </ProjectDetail>
  )
}
