export interface InstagramPost {
  id: string
  image: string
  caption: string
  url: string
  date: string
}

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig-1',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=60',
    caption:
      'Kulisy pracy nad projektem Edugut. Dobieramy materiały i formy, które najlepiej imitują tkanki jelitowe.',
    url: 'https://www.instagram.com/p/Codummy1/',
    date: '2024-05-18'
  },
  {
    id: 'ig-2',
    image: 'https://images.unsplash.com/photo-1532186650018-5b9240e1faaa?auto=format&fit=crop&w=1200&q=60',
    caption:
      'Nasza drukarka 3D w akcji! Tak powstają elementy do robołapy oraz personalizowane ortezy.',
    url: 'https://www.instagram.com/p/Codummy2/',
    date: '2024-04-27'
  },
  {
    id: 'ig-3',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=60',
    caption:
      'Warsztaty z druku przyrostowego i elektroniki wearables prowadzone przez nasz zespół.',
    url: 'https://www.instagram.com/p/Codummy3/',
    date: '2024-03-12'
  }
]


