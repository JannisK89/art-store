import { commaSeparator } from '@/app/lib/comma-separator'
import { useCartStore } from '@/app/store/useStore'
import type { CartItem } from '@/app/types/art'
import Image from 'next/image'
import { IoIosTrash } from 'react-icons/io'

export default function CartItem({
  id,
  src,
  alt,
  price,
  title,
  artist,
  amount,
}: CartItem) {
  const cart = useCartStore((state) => state.cart)
  const setCart = useCartStore((state) => state.setCart)

  const clickHandler = () => {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <li className="flex justify-between gap-4 ">
      <div className="flex gap-4">
        <Image
          className="self-center rounded shadow border-black "
          src={src}
          alt={alt}
          height={115}
          width={115}
          placeholder="blur"
          blurDataURL={src}
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
      <button
        onClick={clickHandler}
        className="rounded-md text-red-500 shadow bg-slate-50 hover:bg-red-500 hover:text-slate-50 p-4 transition-colors ease-in-out duration-300"
      >
        <IoIosTrash />
      </button>
    </li>
  )
}
