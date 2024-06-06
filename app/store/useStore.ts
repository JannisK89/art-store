import { create } from 'zustand'
import { Art } from '../types/art'

type artStore = {
  art: Art[]
  setArt: (art: Art[]) => void
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
    {
      src: '/art/dream.jpg',
      alt: 'Image of woman in a dream like landscape',
      selected: false,
      price: 12000,
      title: 'Morning Dream',
      artist: 'Frida Kahlo-bot',
    },
    {
      src: '/art/philosopher.jpg',
      alt: 'Image of a philosopher studing a book',
      selected: false,
      price: 20000,
      title: 'Knowledge Seeker',
      artist: 'Michelangelo A.I.',
    },
    {
      src: '/art/robot.jpg',
      alt: 'Image of a robot singing karaoke',
      selected: false,
      price: 9999,
      title: 'Song Of Resonance',
      artist: 'Android 18',
    },
    {
      src: '/art/forgotten.jpg',
      alt: 'Image of a woman in branches',
      selected: false,
      price: 2200,
      title: 'Forgotten Memories',
      artist: 'Unknown',
    },
    {
      src: '/art/reality.jpg',
      alt: 'Image of a starnge sculpture',
      selected: false,
      price: 8600,
      title: 'Reality Check',
      artist: 'Lady Ada Lovelace',
    },
    {
      src: '/art/wizard.jpg',
      alt: 'Image of a wizard casting a spell',
      selected: false,
      price: 34662,
      title: 'Wizard of the North',
      artist: '34th Century Mage',
    },
  ],
  setArt: (art) => set({ art }),
}))
