import { Art } from '@/app/types/art'
import Image from 'next/image'

export default function ProductCard({ src, alt, title, artist, price }: Art) {
  return (
    <div className="flex items-center shadow p-4 gap-4 hover:shadow-lg hover:scale-110 transition ease-in-out duration-300">
      <div className="flex flex-col">
        <Image
          src={src}
          alt={alt}
          height={225}
          width={225}
          className="border-black rounded-lg shadow mb-3 "
        />
        <span className="text-lg text-gray-800 font-medium self-center ">
          {title}
        </span>
        <span className="text-xs text-gray-600 font-medium self-center ">
          {artist}
        </span>
        <span className="text-xs font-thin self-end">${price}</span>
      </div>
    </div>
  )
}
