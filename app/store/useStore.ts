import { create } from 'zustand'

type art = {
  src: string
  alt: string
  selected: boolean
  price: number
  title: string
  artist: string
}

type artStore = {
  art: art[]
  setArt: (art: art[]) => void
}

export const useArtStore = create<artStore>((set) => ({
  art: [
    {
      src: '/art/astro-surf.jpg',
      alt: 'Image of a man surfing in space.',
      selected: true,
      price: 100,
      title: 'Astro Surfer',
      artist: 'Katsushika Hokusai-Net',
    },
    {
      src: '/art/frog.jpg',
      alt: 'Image of a frog smoking a cigar.',
      selected: false,
      price: 200,
      title: 'Frog with Cigar',
      artist: 'Pablo Picassobot',
    },
    {
      src: '/art/solar-system.jpg',
      alt: 'Image of a abstract solar system.',
      selected: false,
      price: 300,
      title: 'Solar System',
      artist: 'Claude Monet-ization',
    },
    {
      src: '/art/dragon.jpg',
      alt: 'Image of a sculpture of a dragon eating the world',
      selected: false,
      price: 400,
      title: 'World Eater',
      artist: 'Leonardo Da Vinci-Code',
    },
    {
      src: '/art/night-sky.jpg',
      alt: 'Image of a starry night.',
      selected: false,
      price: 500,
      title: 'Night Sky',
      artist: 'Vincent van Bot',
    },
    {
      src: '/art/detectives.jpg',
      alt: 'Image of a dog and cat detective duo',
      selected: false,
      price: 600,
      title: 'Detectives in the Night',
      artist: 'Salvador DALL-E',
    },
  ],
  setArt: (art) => set({ art }),
}))
