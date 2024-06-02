import { create } from 'zustand'

type art = {
  src: string
  alt: string
  selected: boolean
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
    },
    {
      src: '/art/frog.jpg',
      alt: 'Image of a frog smoking a cigar.',
      selected: false,
    },
    {
      src: '/art/solar-system.jpg',
      alt: 'Image of a abstract solar system.',
      selected: false,
    },
    {
      src: '/art/dragon.jpg',
      alt: 'Image of a sculpture of a dragon eating the world',
      selected: false,
    },
    {
      src: '/art/night-sky.jpg',
      alt: 'Image of a starry night.',
      selected: false,
    },
    {
      src: '/art/detectives.jpg',
      alt: 'Image of a dog and cat detective duo',
      selected: false,
    },
  ],
  setArt: (art) => set({ art }),
}))
