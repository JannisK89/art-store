'use client'

import Image from 'next/image'
import { useArtStore } from '../../../store/useStore'
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im'

export default function Product({ params }: { params: { slug: string } }) {
  const art = useArtStore((state) => state.art)
  const selectedArt = art[parseInt(params.slug) - 1]
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {selectedArt ? (
        <div className="flex shadow rounded-lg bg-white p-12 gap-4 ">
          <div className="flex flex-col gap-4 text-gray-800">
            <span className="text-5xl  font-medium ">{selectedArt.title}</span>
            <span className="text-2xl font-medium ">
              By: {selectedArt.artist}
            </span>
            <div className="flex flex-col items-center gap-3">
              <Image
                src={selectedArt.src}
                alt={selectedArt.alt}
                height={400}
                width={400}
                className="rounded-xl shadow"
              />
              <span className="text-2xl font-thin self-end">
                ${selectedArt.price}
              </span>
              <div className="flex">
                <button className="rounded-lg shadow bg-slate-100 p-3">
                  <ImArrowLeft2 />
                </button>
                <span className="font-thin shadow py-3 px-12">1</span>
                <button className="rounded-lg shadow bg-slate-100 p-3">
                  <ImArrowRight2 />
                </button>
              </div>
              <button className="text-xl shadow rounded-lg py-4 px-24 font-thin bg-sky-500">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1>Art not found</h1>
      )}
    </main>
  )
}
