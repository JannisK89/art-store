'use client'

import Image from 'next/image'
import PreviewImage from './preview-image'
import { useArtStore } from '../store/useStore'

export default function PreviewSelect() {
  const art = useArtStore((state) => state.art)
  const setArt = useArtStore((state) => state.setArt)

  const handleSelect = (src: number) => {
    const newArt = art.map((image, i) => {
      if (i === src) {
        return { ...image, selected: true }
      } else {
        return { ...image, selected: false }
      }
    })
    setArt(newArt)
  }

  return (
    <>
      <div className="md:flex gap-24 items-center mb-6 md:mb-14">
        <div className="md:flex flex-col gap-4">
          <h2 className="text-3xl md:text-6xl font-bold">
            Discover Unique Art
          </h2>
          <p className="md:max-w-96 md:text-xl mb-4 md:mb-0">
            Explore our curated collection of original paintings, drawings, and
            sculptures from talented AI around the world using state of the art
            browser automation technologies.
          </p>
        </div>
        {art
          .slice(0, 6)
          .filter((image) => image.selected)
          .map((image) => {
            return (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                height={500}
                width={500}
                priority={true}
                className="rounded-xl shadow"
                blurDataURL={image.src}
                placeholder="blur"
              />
            )
          })}
      </div>
      <div className="flex flex-wrap justify-around gap-3 md:gap-10 items-center align-center mt-1">
        {art.slice(0, 6).map((image) => {
          return (
            <PreviewImage
              key={image.src}
              src={image.src}
              alt={image.alt}
              selected={image.selected}
              onClick={() => handleSelect(art.indexOf(image))}
            />
          )
        })}
      </div>
    </>
  )
}
