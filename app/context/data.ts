// ====================================
// TypeScript Interfaces for Type Safety
// ====================================

export interface NewsItem {
  title: string
  excerpt: string
}

export interface Project {
  title: string
  tag: string
  excerpt: string
  coordinator: string
  status: 'ongoing' | 'finished'
}

export interface Department {
  name: string
  desc: string
  coordinator: string
}

export interface Sponsor {
  name: string
  description: string
  website: string[]
  email: string | null
}

export interface Member {
  name: string
  role: string
  imageUrl?: string
}

export interface Stat {
  value: string
  label: string
  helper: string
}

export interface HeroContent {
  title: string
  subtitle: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
  heroImage: {
    src: string
    alt: string
  }
  stats: {
    members: string
    projects: string
    partnerships: string
  }
}

export interface CTAContent {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
}

export interface ProjectDetail {
  id: string
  title: string
  coordinator: string
  description: string
  imageFolder: string
}

// ====================================
// Content Data
// ====================================

export const HERO: HeroContent = {
  title: 'KN BioAddMed',
  subtitle: 'Łączymy inżynierię z medycyną — projekty drukowane w 3D, prototypy medyczne, biofeedback i systemy wbudowane.',
  primaryCta: {
    text: 'Zobacz projekty',
    href: '/projects'
  },
  secondaryCta: {
    text: 'Kontakt',
    href: '/contact'
  },
  heroImage: {
    src: '/images/bioaddmed_team.jpg',
    alt: 'Zespół KN BioAddMed'
  },
  stats: {
    members: '49',
    projects: '9',
    partnerships: '8'
  }
}

export const CTA: CTAContent = {
  title: 'Chcesz dołączyć do KN BioAddMed?',
  description: 'Napisz do nas lub przyjdź na spotkanie — rekrutacja otwarta cały rok.',
  primaryButton: {
    text: 'Napisz do nas',
    href: '#contact'
  },
  secondaryButton: {
    text: 'Kalendarz spotkań',
    href: '#'
  }
}

export const STATS: Stat[] = [
  { value: '50', label: 'Członków koła', helper: 'Aktywni w kilku działach' },
  { value: '7', label: 'Aktywnych projektów', helper: 'Od prototypów po wdrożenia' },
  { value: '12', label: 'Warsztatów rocznie', helper: 'Druk 3D, elektronika, medtech' },
  { value: '8', label: 'Partnerów', helper: 'Firmy i instytucje wspierające' }
]

export const MANAGEMENT: Member[] = [
  { name: 'Kamila Saferna', role: 'Przewodniczący', imageUrl: '/images/management/kamila_saferna.jpeg' },
  { name: 'Gabriel Pankowski', role: 'Wiceprzewodniczący', imageUrl: '/images/management/gabriel_pankowski.jpg' },
  { name: 'Hubert Sowa', role: 'Wiceprzewodniczący', imageUrl: '/images/management/hubert_sowa.jpg' }
]

export const COORDINATORS: Member[] = [
  { name: 'Mateusz Witkowski', role: 'Koordynator Działu Promocji' },
  { name: 'Jakub Gruszka', role: 'Koordynator Działu IT' }
]

export const TEAM: Member[] = [
  { name: 'Filip Fedoniuk', role: 'Zarząd' },
  { name: 'Gabriel Pankowski', role: 'Zarząd' },
  { name: 'Kamila Saferna', role: 'Zarząd' },
  { name: 'Dominika Porzybót', role: 'Koordynator Finansów' },
  { name: 'Mateusz Witkowski', role: 'Koordynator Promocji' },
  { name: 'Michał Szymczak', role: 'Koordynator IT' }
]

export const NEWS_ITEMS: NewsItem[] = [
  { title: 'News 1', excerpt: 'Krótki opis wydarzenia, sukcesu lub ogłoszenia.' },
  { title: 'News 2', excerpt: 'Aktualizacja projektu oraz udział w wydarzeniu.' },
  { title: 'News 3', excerpt: 'Nabór do koła i spotkanie informacyjne.' },
  { title: 'News 4', excerpt: 'Warsztaty z druku 3D i elektroniki.' },
]

export const PROJECTS: Project[] = [
  { title: 'Franek 2.0', tag: 'AI / Hardware', excerpt: 'Interaktywny model czaszki z oczami śledzącymi twarz — ML + Raspberry Pi.', coordinator: 'Jakub Gruszka', status: 'ongoing' },
  { title: 'Orteza', tag: 'Biomechanics', excerpt: 'Orteza stabilizująca kończynę górną — prototypy i testy biomechaniczne.', coordinator: 'Hubert Sowa', status: 'ongoing' },
  { title: 'Robołapa', tag: 'Robotics', excerpt: 'Drukowana dłoń sterowana sygnałem EMG.', coordinator: 'Gabriel Pankowski', status: 'finished' },
  { title: 'EduGut', tag: 'Medical Trainer', excerpt: 'Trenażer chirurgiczny do zespolenia jelita — druk 3D.', coordinator: 'Kamila Saferna', status: 'ongoing' },
  { title: 'AERO', tag: 'Wearables', excerpt: 'System monitorowania oddechu z biofeedbackiem.', coordinator: 'Mateusz Witkowski', status: 'ongoing' },
  { title: 'Wege Druk', tag: 'FoodTech', excerpt: 'Badania nad strukturą produktów z białek roślinnych.', coordinator: 'TBD', status: 'finished' }
]

export const DEPARTMENTS: Department[] = [
  { name: 'Dział Promocji', desc: 'Komunikacja, social media, współprace.', coordinator: 'Mateusz Witkowski' },
  { name: 'Dział IT', desc: 'Elektronika, software, ML, integracje.', coordinator: 'Jakub Gruszka' },
  { name: 'Dział Modelowania', desc: 'Projektowanie CAD, druk 3D i post-processing.', coordinator: 'TBD' }
]

export const SPONSORS: Sponsor[] = [
  {
    name: 'ChitoMed',
    description: 'Produkty medyczne na bazie chitozanu, które wspomagają gojenie ran i minimalizują ryzyko infekcji.',
    website: ['https://cyberbone.eu/', 'https://www.linkedin.com/company/novaoss/'],
    email: 'office@chitomed.com'
  },
  {
    name: '3Dconnexion',
    description: 'Program wspierania grup studenckich. Myszki 3D SpaceMouse i myszy CadMouse, które ułatwiają pracę z programami CAD.',
    website: ['https://3dconnexion.com/pl/'],
    email: null
  },
  {
    name: '3D Center Polska',
    description: 'Rozwiązania druku 3D dla przemysłu i medycyny.',
    website: ['https://3dcenterpolska.pl/'],
    email: 'contact@3dcenter.com.pl'
  },
  {
    name: 'DPIN',
    description: 'Warsztaty, szkolenia, druki 3D.',
    website: ['https://dpin.pl/centrum-druku-3d/'],
    email: 'sekretariat@dpin.pl'
  }
]

export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    id: 'franek',
    title: 'Franek',
    coordinator: 'Jakub Gruszka',
    description: '',
    imageFolder: 'projekty/Franek'
  },
  {
    id: 'franek2',
    title: 'Franek 2.0',
    coordinator: 'Jakub Gruszka',
    description: 'Franek 2.0 to projekt, który zakłada rozbudowę istniejącego modelu anatomicznego czaszki o interaktywne elementy elektroniczne. Aktualnie system obejmuje oczy wyposażone w kamerę, które wykorzystują techniki uczenia maszynowego do wykrywania oraz śledzenia twarzy osób w polu widzenia. Projekt opiera się na wykorzystaniu Raspberry Pi do przetwarzania obrazu oraz integracji nowoczesnych technologii informatycznych z modelami anatomicznymi.',
    imageFolder: 'projekty/Franek20'
  },
  {
    id: 'orteza',
    title: 'Orteza',
    coordinator: 'Hubert Sowa',
    description: 'Orteza - projekt realizowany we współpracy z kołem naukowym Rapid Poopers specjalizującym się w druku oraz technologii przyrostowej. W ramach projektu realizowany jest model ortezy dla pacjentki powypadkowej mający zapewnić stabilizację części wolnej kończyny górnej obejmującej ramię, przedramię, nadgarstek oraz dłoń.',
    imageFolder: 'projekty/Orteza'
  },
  {
    id: 'edugut',
    title: 'EduGut',
    coordinator: 'Kamila Saferna',
    description: 'Projekt „Edugut" jest realizowany we współpracy z KN „NEXUM" na Wydziale Medycznym. Celem projektu jest zaprojektowanie i wykonanie modelu treningowego do zespolenia jelita cienkiego, który jak najlepiej odzwierciedla budowę anatomiczną jelita grubego oraz jego właściwości mechaniczne. Kluczowym aspektem jest wydajność i opłacalność techniki wykonania, dlatego w procesie tym wykorzystujemy druk 3D.',
    imageFolder: 'projekty/Edugut'
  },
  {
    id: 'bioploter',
    title: 'Bioploter',
    coordinator: 'Kamila Saferna',
    description: 'Celem projektu Bioplaster/druk tkanek jest analizowanie dostępnych biomaterialow, znalezienie i wdrożenie innowacyjnych aplikacji technologii przyrostowych (w tym zbudowanie bioplotera) do produkcji funkcjonalnych tkanek t.j. wypełnienia kostne czy włókna mięśniowe. Aktualnie we współpracy z KN Rapid Troopers pod opieką Pani Profesor Ziółkowskiej-Szymczyk oraz Dr. Wallisa analizujemy dostępną literaturę naukową dotyczącą używanych biomateriałów i urządzeń, poszukując problemów, które obecnie naukowcy napotykają w drodze do osiągnięcia w/w celu i próbujemy znaleźć ich rozwiązania.',
    imageFolder: 'projekty/Bioploter'
  },
  {
    id: 'aeros',
    title: 'AERO',
    coordinator: 'Mateusz Witkowski',
    description: 'AERO to system monitorowania oddechu z funkcją biofeedback. Projekt łączy technologie wearables z analizą danych medycznych w czasie rzeczywistym.',
    imageFolder: 'projekty/Aeros'
  },
  {
    id: 'kampus3d',
    title: 'Kampus 3D',
    coordinator: 'Mateusz Witkowski',
    description: 'Kampus3D to projekt, w ramach którego tworzymy trójwymiarową mapę głównego kampusu Politechniki Wrocławskiej przy użyciu technologii druku 3D. Każdy budynek jest odwzorowywany na podstawie zdjęć i map 3D, a następnie drukowany i umieszczany na specjalnie przygotowanej makiecie. Po ukończeniu projektu makieta będzie wykorzystywana jako element promocyjny Koła Naukowego oraz Politechniki Wrocławskiej, prezentując kampus w innowacyjny i nowoczesny sposób.',
    imageFolder: 'projekty/Kampus3D'
  },
  {
    id: 'bioreaktor',
    title: 'Bioreaktor',
    coordinator: 'Gabriel Pankowski',
    description: '„Bioreaktor" to projekt współrealizowany z kołem naukowym z Uniwersytetu Przyrodniczego we Wrocławiu „Biosus". Nasze koło zajmuje się w nim projektowaniem za pomocą programu Inventor/ Autocad/ Fusion360 i drukowaniem elementów wchodzących w skład statywu, mechanizmu działania i zabezpieczeń do urządzenia, które umożliwić ma nieustanny przepływ płynów i prowadzenie procesów mikrobiologicznych, enzymatycznych i hodowli komórek.',
    imageFolder: 'projekty/Bioreaktor'
  }
]


