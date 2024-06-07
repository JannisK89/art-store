'use client'

import { useCartStore } from '../store/useStore'

export default function Cart() {
  const cart = useCartStore((state) => state.cart)
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-10">Cart</h1>
      <div className="flex flex-col">
        {cart.map((item) => (
          <div key={item.id} className="flex flex-col">
            <p>Item: {item.title}</p>
            <p>Amount: {item.amount}</p>
            <p className="mb-10">Price: ${item.amount * item.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
