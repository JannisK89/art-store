import Image from 'next/image'
import Navbar from './ui/navbar/navbar'
import PreviewImage from './ui/preview-image'

const art = [
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
    src: '/art/lantern.jpg',
    alt: 'Image of a couple at a lantern festival.',
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
]

export default function Home() {
  return (
    <>
      <Navbar difficulty="Easy" />
      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <div className="md:flex gap-24 items-center mb-12">
          <div className="md:flex flex-col gap-4">
            <h2 className="text-3xl md:text-6xl font-bold">
              Discover Unique Art
            </h2>
            <p className="md:max-w-96 md:text-xl mb-4 md:mb-0">
              Explore our curated collection of original paintings, drawings,
              and sculptures from talented robots around the world.
            </p>
          </div>
          {art
            .filter((image) => image.selected)
            .map((image) => {
              return (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={image.alt}
                  height={500}
                  width={500}
                  className="rounded-xl shadow"
                />
              )
            })}
        </div>
        <div className="flex flex-wrap gap-10">
          {art.map((image) => {
            return (
              <PreviewImage
                key={image.src}
                src={image.src}
                alt={image.alt}
                selected={image.selected}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}
