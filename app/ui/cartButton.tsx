'use client'

import Link from 'next/link'
import { useCartStore } from '../store/useStore'
import { IoIosCart } from 'react-icons/io'
import clsx from 'clsx'

export default function CartButton() {
  const cart = useCartStore((state) => state.cart)
  return (
    <Link
      href={'/cart'}
      className="fixed bg-slate-200 rounded-3xl p-3 right-6 bottom-6 text-2xl md:text-6xl flex align-middle transition md:hover:bg-sky-500 md:hover:scale-125 ease-in-out"
    >
      <IoIosCart
        className={clsx(
          cart.length > 0 ? 'text-green-500' : 'text-gray-800',
          'transition-colors ease-in-out duration-1000'
        )}
      />
      <span className="font-thin text-base self-end">{cart.length}</span>
    </Link>
  )
}
