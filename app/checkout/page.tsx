'use client'

import { commaSeparator } from '../lib/comma-separator'
import { useCartStore } from '../store/useStore'
import Payment from '../ui/checkout/payment'

export default function Cart() {
  const cart = useCartStore((state) => state.cart)
  let total = cart.reduce((acc, item) => acc + item.price * item.amount, 0)
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-10">Checkout</h1>
      <div className="flex gap-2 mt-2 text-lg">
        <span className="font-semibold">Total: </span>
        <span> ${commaSeparator(total)}</span>
      </div>
      <Payment />
    </main>
  )
}
