export type Art = {
  id: number
  src: string
  alt: string
  selected: boolean
  price: number
  title: string
  artist: string
}

type selectedArtFields = Pick<
  Art,
  'id' | 'src' | 'alt' | 'price' | 'title' | 'artist'
>

export type CartItem = selectedArtFields & { amount: number }
