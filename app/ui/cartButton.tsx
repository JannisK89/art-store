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
      className="text-2xl flex align-middle transition hover:scale-125 ease-in-out"
    >
      <IoIosCart
        className={clsx(
          cart.length > 0 ? 'text-green-500' : 'text-gray-800',
          'transition-colors ease-in-out duration-1000'
        )}
      />
      <span className="font-thin text-xs self-end">{cart.length}</span>
    </Link>
  )
}
