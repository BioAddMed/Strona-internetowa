export const NEWS_ITEMS = [
  { title: 'News 1', excerpt: 'Krótki opis wydarzenia, sukcesu lub ogłoszenia.' },
  { title: 'News 2', excerpt: 'Aktualizacja projektu oraz udział w wydarzeniu.' },
  { title: 'News 3', excerpt: 'Nabór do koła i spotkanie informacyjne.' },
  { title: 'News 4', excerpt: 'Warsztaty z druku 3D i elektroniki.' },
]

export const PROJECTS = [
  { title: 'Franek 2.0', tag: 'AI / Hardware', excerpt: 'Interaktywny model czaszki z oczami śledzącymi twarz — ML + Raspberry Pi.', coordinator: 'Jakub Gruszka', status: 'ongoing' },
  { title: 'Orteza', tag: 'Biomechanics', excerpt: 'Orteza stabilizująca kończynę górną — prototypy i testy biomechaniczne.', coordinator: 'Hubert Sowa', status: 'ongoing' },
  { title: 'Robołapa', tag: 'Robotics', excerpt: 'Drukowana dłoń sterowana sygnałem EMG.', coordinator: 'Gabriel Pankowski', status: 'finished' },
  { title: 'EduGut', tag: 'Medical Trainer', excerpt: 'Trenażer chirurgiczny do zespolenia jelita — druk 3D.', coordinator: 'Kamila Saferna', status: 'ongoing' },
  { title: 'AERO', tag: 'Wearables', excerpt: 'System monitorowania oddechu z biofeedbackiem.', coordinator: 'Mateusz Witkowski', status: 'ongoing' },
  { title: 'Wege Druk', tag: 'FoodTech', excerpt: 'Badania nad strukturą produktów z białek roślinnych.', coordinator: 'TBD', status: 'finished' }
]

export const DEPARTMENTS = [
  { name: 'Dział Promocji', desc: 'Komunikacja, social media, współprace.', coordinator: 'Mateusz Witkowski' },
  { name: 'Dział IT', desc: 'Elektronika, software, ML, integracje.', coordinator: 'Jakub Gruszka' },
  { name: 'Dział Modelowania', desc: 'Projektowanie CAD, druk 3D i post-processing.', coordinator: 'TBD' }
]

export const SPONSORS = [
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


