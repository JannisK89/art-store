import { commaSeparator } from '@/app/lib/comma-separator'
import Image from 'next/image'
import { IoIosTrash } from 'react-icons/io'

type CartItem = {
  src: string
  alt: string
  amount: number
  price: number
  title: string
  artist: string
}

export default function CartItem({
  src,
  alt,
  price,
  title,
  artist,
  amount,
}: CartItem) {
  return (
    <li className="flex justify-between gap-4 ">
      <div className="flex gap-4">
        <Image
          className="rounded shadow border-black "
          src={src}
          alt={alt}
          height={105}
          width={105}
        />
        <div className="flex flex-col content-start">
          <span className="font-bold"> {title} </span>
          <span className="font-thin text-sm"> Artist: {artist} </span>
          <span className="font-thin text-sm">
            Price: ${commaSeparator(price)}
          </span>
          <span className="font-thin text-sm"> Quantity: {amount} </span>
          <span className="font-thin">
            Total: ${commaSeparator(amount * price)}
          </span>
        </div>
      </div>
      <button className="rounded-md text-red-500 shadow bg-slate-50 hover:bg-red-500 hover:text-slate-50 p-4 transition-colors ease-in-out duration-300">
        <IoIosTrash />
      </button>
    </li>
  )
}
