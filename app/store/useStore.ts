import { create } from 'zustand'
import { Art } from '../types/art'
import { devtools, persist } from 'zustand/middleware'

type ArtStore = {
  art: Art[]
  setArt: (art: Art[]) => void
}

type selectedArtFields = Pick<
  Art,
  'id' | 'src' | 'alt' | 'price' | 'title' | 'artist'
>

type CartItem = selectedArtFields & { amount: number }

type CartStore = {
  cart: CartItem[]
  setCart: (art: CartItem[]) => void
}

export const useCartStore = create<CartStore>()(
  devtools(
    persist(
      (set) => ({
        cart: [],
        setCart: (cart: CartItem[]) => set({ cart }),
      }),
      {
        name: 'cart-store',
      }
    )
  )
)

export const useArtStore = create<ArtStore>((set) => ({
  art: [
    {
      id: 1,
      src: '/art/astro-surf.jpg',
      alt: 'Image of a man surfing in space.',
      selected: true,
      price: 500,
      title: 'Astro Surfer',
      artist: 'Katsushika Hokusai-Net',
    },
    {
      id: 2,
      src: '/art/frog.jpg',
      alt: 'Image of a frog smoking a cigar.',
      selected: false,
      price: 1337,
      title: 'Frog with Cigar',
      artist: 'Pablo Picassobot',
    },
    {
      id: 3,
      src: '/art/solar-system.jpg',
      alt: 'Image of a abstract solar system.',
      selected: false,
      price: 1000,
      title: 'Solar System',
      artist: 'Claude Monet-ization',
    },
    {
      id: 4,
      src: '/art/nightmare.jpg',
      alt: 'Image of a cosmic horror',
      selected: false,
      price: 4000,
      title: 'The Nightmare Beyond',
      artist: 'Leonardo Da Vinci-Code',
    },
    {
      id: 5,
      src: '/art/night-sky.jpg',
      alt: 'Image of a starry night.',
      selected: false,
      price: 500,
      title: 'Night Sky',
      artist: 'Vincent van Bot',
    },
    {
      id: 6,
      src: '/art/detectives.jpg',
      alt: 'Image of a dog and cat detective duo',
      selected: false,
      price: 600,
      title: 'Detectives in the Night',
      artist: 'Salvador DALL-E',
    },
    {
      id: 7,
      src: '/art/dream.jpg',
      alt: 'Image of woman in a dream like landscape',
      selected: false,
      price: 12000,
      title: 'Morning Dream',
      artist: 'Frida Kahlo-bot',
    },
    {
      id: 8,
      src: '/art/philosopher.jpg',
      alt: 'Image of a philosopher studing a book',
      selected: false,
      price: 20000,
      title: 'Knowledge Seeker',
      artist: 'Michelangelo A.I.',
    },
    {
      id: 9,
      src: '/art/robot.jpg',
      alt: 'Image of a robot singing karaoke',
      selected: false,
      price: 9999,
      title: 'Song Of Resonance',
      artist: 'Android 18',
    },
    {
      id: 10,
      src: '/art/forgotten.jpg',
      alt: 'Image of a woman in branches',
      selected: false,
      price: 2200,
      title: 'Forgotten Memories',
      artist: 'Unknown',
    },
    {
      id: 11,
      src: '/art/reality.jpg',
      alt: 'Image of a strange sculpture',
      selected: false,
      price: 8600,
      title: 'Reality Check',
      artist: 'Lady Ada Lovelace',
    },
    {
      id: 12,
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
