const projectStatusById = {
  franek: 'finished',
  franek2: 'finished',
  orteza: 'ongoing',
  edugut: 'ongoing',
  bioploter: 'finished',
  aeros: 'ongoing',
  kampus3d: 'finished',
  bioreaktor: 'ongoing',
  robolapa: 'finished',
  wegedruk: 'finished',
  robothand: 'finished',
  vegeprint: 'finished'
} as const

export const dataTranslations = {
  pl: {
    projects: [
      { 
        title: 'Franek 2.0', 
        tag: 'AI / Hardware', 
        excerpt: 'Interaktywny model czaszki z oczami śledzącymi twarz — ML + Raspberry Pi.', 
        coordinator: 'Michał Szymczak', 
        status: projectStatusById.franek2
      },
      { 
        title: 'Orteza', 
        tag: 'Biomechanics', 
        excerpt: 'Orteza stabilizująca kończynę górną — prototypy i testy biomechaniczne.', 
        coordinator: 'Sonia Klar', 
        status: projectStatusById.orteza
      },
      { 
        title: 'Robołapa', 
        tag: 'Robotics', 
        excerpt: 'Drukowana dłoń sterowana sygnałem EMG.', 
        coordinator: '', 
        status: projectStatusById.robolapa
      },
      { 
        title: 'EduGut', 
        tag: 'Medical Trainer', 
        excerpt: 'Trenażer chirurgiczny do zespolenia jelita — druk 3D.', 
        coordinator: 'Kasia Majka', 
        status: projectStatusById.edugut
      },
      { 
        title: 'AERO', 
        tag: 'Wearables', 
        excerpt: 'System monitorowania oddechu z biofeedbackiem.', 
        coordinator: 'Nikodem Jacheć', 
        status: projectStatusById.aeros
      },
      { 
        title: 'Wege Druk', 
        tag: 'FoodTech', 
        excerpt: 'Badania nad strukturą produktów z białek roślinnych.', 
        coordinator: '', 
        status: projectStatusById.wegedruk
      }
    ],
    projectDetails: [
      {
        id: 'franek',
        title: 'Franek',
        coordinator: 'Marta Cieślak',
        description: '',
        imageFolder: 'projekty/Franek',
        status: projectStatusById.franek
      },
      {
        id: 'franek2',
        title: 'Franek 2.0',
        coordinator: 'Michał Szymczak',
        description: 'Franek 2.0 to projekt, który zakłada rozbudowę istniejącego modelu anatomicznego czaszki o interaktywne elementy elektroniczne. Aktualnie system obejmuje oczy wyposażone w kamerę, które wykorzystują techniki uczenia maszynowego do wykrywania oraz śledzenia twarzy osób w polu widzenia. Projekt opiera się na wykorzystaniu Raspberry Pi do przetwarzania obrazu oraz integracji nowoczesnych technologii informatycznych z modelami anatomicznymi.',
        imageFolder: 'projekty/Franek20',
        status: projectStatusById.franek2
      },
      {
        id: 'orteza',
        title: 'Orteza',
        coordinator: 'Sonia Klar',
        description: 'Orteza - projekt realizowany we współpracy z kołem naukowym Rapid Poopers specjalizującym się w druku oraz technologii przyrostowej. W ramach projektu realizowany jest model ortezy dla pacjentki powypadkowej mający zapewnić stabilizację części wolnej kończyny górnej obejmującej ramię, przedramię, nadgarstek oraz dłoń.',
        imageFolder: 'projekty/Orteza',
        status: projectStatusById.orteza
      },
      {
        id: 'edugut',
        title: 'EduGut',
        coordinator: 'Kasia Majka',
        description: 'Projekt „Edugut" jest realizowany we współpracy z KN „NEXUM" na Wydziale Medycznym. Celem projektu jest zaprojektowanie i wykonanie modelu treningowego do zespolenia jelita cienkiego, który jak najlepiej odzwierciedla budowę anatomiczną jelita grubego oraz jego właściwości mechaniczne. Kluczowym aspektem jest wydajność i opłacalność techniki wykonania, dlatego w procesie tym wykorzystujemy druk 3D.',
        imageFolder: 'projekty/Edugut',
        status: projectStatusById.edugut
      },
      {
        id: 'bioploter',
        title: 'Bioploter',
        coordinator: '',
        description: 'Celem projektu Bioplaster/druk tkanek jest analizowanie dostępnych biomateriałów, znalezienie i wdrożenie innowacyjnych aplikacji technologii przyrostowych (w tym zbudowanie bioplotera) do produkcji funkcjonalnych tkanek t.j. wypełnienia kostne czy włókna mięśniowe. Aktualnie we współpracy z KN Rapid Troopers pod opieką Pani Profesor Ziółkowskiej-Szymczyk oraz Dr. Wallisa analizujemy dostępną literaturę naukową dotyczącą używanych biomateriałów i urządzeń, poszukując problemów, które obecnie naukowcy napotykają w drodze do osiągnięcia w/w celu i próbujemy znaleźć ich rozwiązania.',
        imageFolder: 'projekty/Bioploter',
        status: projectStatusById.bioploter
      },
      {
        id: 'aeros',
        title: 'AERO',
        coordinator: 'Nikodem Jacheć',
        description: 'AERO to system monitorowania oddechu z funkcją biofeedback. Projekt łączy technologie wearables z analizą danych medycznych w czasie rzeczywistym.',
        imageFolder: 'projekty/Aeros',
        status: projectStatusById.aeros
      },
      {
        id: 'kampus3d',
        title: 'Kampus 3D',
        coordinator: 'Jakub Gruszka',
        description: 'Kampus3D to projekt, w ramach którego tworzymy trójwymiarową mapę głównego kampusu Politechniki Wrocławskiej przy użyciu technologii druku 3D. Każdy budynek jest odwzorowywany na podstawie zdjęć i map 3D, a następnie drukowany i umieszczany na specjalnie przygotowanej makiecie. Po ukończeniu projektu makieta będzie wykorzystywana jako element promocyjny Koła Naukowego oraz Politechniki Wrocławskiej, prezentując kampus w innowacyjny i nowoczesny sposób.',
        imageFolder: 'projekty/Kampus3D',
        status: projectStatusById.kampus3d
      },
      {
        id: 'bioreaktor',
        title: 'Bioreaktor',
        coordinator: '',
        description: '„Bioreaktor" to projekt współrealizowany z kołem naukowym z Uniwersytetu Przyrodniczego we Wrocławiu „Biosus". Nasze koło zajmuje się w nim projektowaniem za pomocą programu Inventor/ Autocad/ Fusion360 i drukowaniem elementów wchodzących w skład statywu, mechanizmu działania i zabezpieczeń do urządzenia, które umożliwić ma nieustanny przepływ płynów i prowadzenie procesów mikrobiologicznych, enzymatycznych i hodowli komórek.',
        imageFolder: 'projekty/Bioreaktor',
        status: projectStatusById.bioreaktor
      }
    ],
    departments: [
      { 
        name: 'Dział Promocji', 
        desc: 'Komunikacja, social media, współprace.', 
        coordinator: 'Mateusz Witkowski' 
      },
      { 
        name: 'Dział IT', 
        desc: 'Elektronika, software, ML, integracje.', 
        coordinator: 'Jakub Gruszka' 
      },
      { 
        name: 'Dział Modelowania', 
        desc: 'Projektowanie CAD, druk 3D i post-processing.', 
        coordinator: '' 
      }
    ],
    sponsors: [
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
    ],
    management: [
      { name: 'Kamila Saferna', role: 'Przewodniczący', imageUrl: '/images/management/kamila_saferna.jpeg' },
      { name: 'Gabriel Pankowski', role: 'Wiceprzewodniczący', imageUrl: '/images/management/gabriel_pankowski.jpg' },
      { name: 'Hubert Sowa', role: 'Wiceprzewodniczący', imageUrl: '/images/management/hubert_sowa.jpg' }
    ],
    coordinators: [
      { name: 'Mateusz Witkowski', role: 'Koordynator Działu Promocji' },
      { name: 'Jakub Gruszka', role: 'Koordynator Działu IT' }
    ],
    team: [
      { name: 'Filip Fedoniuk', role: 'Zarząd' },
      { name: 'Gabriel Pankowski', role: 'Zarząd' },
      { name: 'Kamila Saferna', role: 'Zarząd' },
      { name: 'Dominika Porzybót', role: 'Koordynator Finansów' },
      { name: 'Mateusz Witkowski', role: 'Koordynator Promocji' },
      { name: 'Michał Szymczak', role: 'Koordynator IT' }
    ]
  },
  en: {
    projects: [
      { 
        title: 'Franek 2.0', 
        tag: 'AI / Hardware', 
        excerpt: 'Interactive skull model with face-tracking eyes — ML + Raspberry Pi.', 
        coordinator: 'Michał Szymczak', 
        status: projectStatusById.franek2
      },
      { 
        title: 'Orthosis', 
        tag: 'Biomechanics', 
        excerpt: 'Upper limb stabilizing orthosis — prototypes and biomechanical tests.', 
        coordinator: 'Sonia Klar', 
        status: projectStatusById.orteza
      },
      { 
        title: 'Robot Hand', 
        tag: 'Robotics', 
        excerpt: 'Printed hand controlled by EMG signal.', 
        coordinator: '', 
        status: projectStatusById.robothand
      },
      { 
        title: 'EduGut', 
        tag: 'Medical Trainer', 
        excerpt: 'Surgical trainer for intestinal anastomosis — 3D printing.', 
        coordinator: 'Kasia Majka', 
        status: projectStatusById.edugut
      },
      { 
        title: 'AERO', 
        tag: 'Wearables', 
        excerpt: 'Breathing monitoring system with biofeedback.', 
        coordinator: 'Nikodem Jacheć', 
        status: projectStatusById.aeros
      },
      { 
        title: 'Vege Print', 
        tag: 'FoodTech', 
        excerpt: 'Research on the structure of plant protein products.', 
        coordinator: 'TBD', 
        status: projectStatusById.vegeprint
      }
    ],
    projectDetails: [
      {
        id: 'franek',
        title: 'Franek',
        coordinator: 'Marta Cieślak',
        description: '',
        imageFolder: 'projekty/Franek',
        status: projectStatusById.franek
      },
      {
        id: 'franek2',
        title: 'Franek 2.0',
        coordinator: 'Michał Szymczak',
        description: 'Franek 2.0 is a project that involves expanding an existing anatomical skull model with interactive electronic elements. Currently, the system includes eyes equipped with a camera that use machine learning techniques to detect and track faces of people in the field of view. The project is based on using Raspberry Pi for image processing and integration of modern information technologies with anatomical models.',
        imageFolder: 'projekty/Franek20',
        status: projectStatusById.franek2
      },
      {
        id: 'orteza',
        title: 'Orthosis',
        coordinator: 'Sonia Klar',
        description: 'Orthosis - a project carried out in cooperation with the Rapid Poopers scientific club specializing in 3D printing and additive technology. As part of the project, an orthosis model is being developed for a post-accident patient to provide stabilization of the upper limb free part including the arm, forearm, wrist and hand.',
        imageFolder: 'projekty/Orteza',
        status: projectStatusById.orteza
      },
      {
        id: 'edugut',
        title: 'EduGut',
        coordinator: 'Kasia Majka',
        description: 'The "Edugut" project is carried out in cooperation with the "NEXUM" scientific club at the Faculty of Medicine. The goal of the project is to design and create a training model for small intestine anastomosis that best reflects the anatomical structure of the large intestine and its mechanical properties. A key aspect is the efficiency and profitability of the production technique, which is why we use 3D printing in this process.',
        imageFolder: 'projekty/Edugut',
        status: projectStatusById.edugut
      },
      {
        id: 'bioploter',
        title: 'Bioploter',
        coordinator: '',
        description: 'The goal of the Bioplaster/tissue printing project is to analyze available biomaterials, find and implement innovative applications of additive technologies (including building a bioplotter) for the production of functional tissues such as bone fillings or muscle fibers. Currently, in cooperation with the Rapid Troopers scientific club under the supervision of Professor Ziółkowska-Szymczyk and Dr. Wallis, we are analyzing available scientific literature on biomaterials and devices used, looking for problems that scientists currently encounter on the way to achieving the above goal and trying to find solutions.',
        imageFolder: 'projekty/Bioploter',
        status: projectStatusById.bioploter
      },
      {
        id: 'aeros',
        title: 'AERO',
        coordinator: 'Nikodem Jacheć',
        description: 'AERO is a breathing monitoring system with biofeedback functionality. The project combines wearable technologies with real-time medical data analysis.',
        imageFolder: 'projekty/Aeros',
        status: projectStatusById.aeros
      },
      {
        id: 'kampus3d',
        title: 'Campus 3D',
        coordinator: 'Jakub Gruszka',
        description: 'Campus3D is a project in which we create a three-dimensional map of the main campus of Wrocław University of Science and Technology using 3D printing technology. Each building is reproduced based on photos and 3D maps, then printed and placed on a specially prepared model. After the project is completed, the model will be used as a promotional element of the Scientific Club and Wrocław University of Science and Technology, presenting the campus in an innovative and modern way.',
        imageFolder: 'projekty/Kampus3D',
        status: projectStatusById.kampus3d
      },
      {
        id: 'bioreaktor',
        title: 'Bioreactor',
        coordinator: '',
        description: '"Bioreactor" is a project co-implemented with the "Biosus" scientific club from the University of Life Sciences in Wrocław. Our club is involved in designing using Inventor/Autocad/Fusion360 and printing elements that are part of the stand, operating mechanism and safety features for a device that will enable continuous fluid flow and conducting microbiological, enzymatic and cell culture processes.',
        imageFolder: 'projekty/Bioreaktor',
        status: projectStatusById.bioreaktor
      }
    ],
    departments: [
      { 
        name: 'Promotion Department', 
        desc: 'Communication, social media, collaborations.', 
        coordinator: 'Mateusz Witkowski' 
      },
      { 
        name: 'IT Department', 
        desc: 'Electronics, software, ML, integrations.', 
        coordinator: 'Jakub Gruszka' 
      },
      { 
        name: 'Modeling Department', 
        desc: 'CAD design, 3D printing, and post-processing.', 
        coordinator: 'TBD' 
      }
    ],
    sponsors: [
      {
        name: 'ChitoMed',
        description: 'Medical products based on chitosan that support wound healing and minimize the risk of infection.',
        website: ['https://cyberbone.eu/', 'https://www.linkedin.com/company/novaoss/'],
        email: 'office@chitomed.com'
      },
      {
        name: '3Dconnexion',
        description: 'Student group support program. SpaceMouse 3D mice and CadMouse mice that facilitate work with CAD programs.',
        website: ['https://3dconnexion.com/pl/'],
        email: null
      },
      {
        name: '3D Center Poland',
        description: '3D printing solutions for industry and medicine.',
        website: ['https://3dcenterpolska.pl/'],
        email: 'contact@3dcenter.com.pl'
      },
      {
        name: 'DPIN',
        description: 'Workshops, training, 3D prints.',
        website: ['https://dpin.pl/centrum-druku-3d/'],
        email: 'sekretariat@dpin.pl'
      }
    ],
    management: [
      { name: 'Kamila Saferna', role: 'President', imageUrl: '/images/management/kamila_saferna.jpeg' },
      { name: 'Gabriel Pankowski', role: 'Vice President', imageUrl: '/images/management/gabriel_pankowski.jpg' },
      { name: 'Hubert Sowa', role: 'Vice President', imageUrl: '/images/management/hubert_sowa.jpg' }
    ],
    coordinators: [
      { name: 'Mateusz Witkowski', role: 'Promotion Department Coordinator' },
      { name: 'Jakub Gruszka', role: 'IT Department Coordinator' }
    ],
    team: [
      { name: 'Filip Fedoniuk', role: 'Management' },
      { name: 'Gabriel Pankowski', role: 'Management' },
      { name: 'Kamila Saferna', role: 'Management' },
      { name: 'Dominika Porzybót', role: 'Finance Coordinator' },
      { name: 'Mateusz Witkowski', role: 'Promotion Coordinator' },
      { name: 'Michał Szymczak', role: 'IT Coordinator' }
    ]
  }
}
