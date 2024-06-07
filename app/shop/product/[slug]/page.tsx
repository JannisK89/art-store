'use client'

import Image from 'next/image'
import { useArtStore, useCartStore } from '../../../store/useStore'
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im'
import { useState } from 'react'
import clsx from 'clsx'

export default function Product({ params }: { params: { slug: string } }) {
  const [purchased, setPurchased] = useState(false)
  const [amount, setAmount] = useState(1)
  const art = useArtStore((state) => state.art[parseInt(params.slug) - 1])
  const cart = useCartStore((state) => state.cart)
  const setCart = useCartStore((state) => state.setCart)

  const purchaseClickHandler = () => {
    const newItem = { ...art, amount }
    const index = cart.findIndex((cartItem) => cartItem.id === newItem.id)
    if (index < 0) {
      setCart([...cart, newItem])
    } else {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === newItem.id
            ? { ...cartItem, amount: cartItem.amount + newItem.amount }
            : cartItem
        )
      )
    }
    setPurchased(true)
    setTimeout(() => {
      setPurchased(false)
    }, 4000)
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      {art ? (
        <div className="flex shadow rounded-lg bg-white p-12 gap-4 ">
          <div className="flex flex-col gap-4 text-gray-800">
            <span className="text-5xl  font-medium ">{art.title}</span>
            <span className="text-2xl font-medium ">By: {art.artist}</span>
            <div className="flex flex-col items-center gap-3">
              <Image
                src={art.src}
                alt={art.alt}
                height={400}
                width={400}
                className="rounded-xl shadow"
              />
              <span className="text-2xl font-thin self-end">${art.price}</span>
              <div className="flex">
                <button
                  className="rounded-lg shadow bg-slate-100 hover:bg-slate-200 p-3"
                  onClick={() => setAmount(amount > 1 ? amount - 1 : amount)}
                >
                  <ImArrowLeft2 />
                </button>
                <span className="font-thin shadow py-3 px-12">{amount}</span>
                <button
                  className="rounded-lg shadow bg-slate-100 hover:bg-slate-200 p-3"
                  onClick={() => setAmount(amount + 1)}
                >
                  <ImArrowRight2 />
                </button>
              </div>
              <button
                disabled={purchased}
                onClick={purchaseClickHandler}
                className={clsx(
                  'text-xl shadow  rounded-lg py-4 px-24 font-thin ease-in-out duration-1000 transition',
                  purchased ? 'bg-green-500' : 'bg-sky-500 hover:bg-sky-600'
                )}
              >
                {purchased ? 'Product added' : 'Add to cart '}
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
