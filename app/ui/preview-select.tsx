'use client'

import { useState } from 'react'
import Image from 'next/image'
import PreviewImage from './preview-image'

const initArt = [
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
]

export default function PreviewSelect() {
  const [art, setArt] =
    useState<{ src: string; alt: string; selected: boolean }[]>(initArt)

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
      <div className="flex flex-wrap justify-around gap-3 md:gap-10 items-center align-center mt-1">
        {art.map((image) => {
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
