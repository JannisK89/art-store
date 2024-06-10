'use client'

import { commaSeparator } from '../lib/comma-separator'
import { useCartStore } from '../store/useStore'
import CheckoutItem from '../ui/checkout/checkout-item'
import Payment from '../ui/checkout/payment'

export default function Cart() {
  let total = 0
  const cart = useCartStore((state) => state.cart)
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-10">Checkout</h1>
      <ul className="flex flex-col gap-2">
        {cart.map((item) => {
          total += item.price * item.amount
          return <CheckoutItem key={item.id} {...item} />
        })}
      </ul>
      <div className="flex gap-2 mt-2 text-lg">
        <span className="font-semibold">Total: </span>
        <span> ${commaSeparator(total)}</span>
      </div>
      <Payment />
    </main>
  )
}
