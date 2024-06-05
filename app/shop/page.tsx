'use client'

import { useArtStore } from '../store/useStore'
import ProductCard from '../ui/shop/product-card'

export default function Shop() {
  const art = useArtStore((state) => state.art)
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-10">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {art.map((art) => (
          <ProductCard {...art} key={art.src} />
        ))}
      </div>
    </main>
  )
}
