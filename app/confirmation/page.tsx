'use client'

import { navigate } from '../actions/actions'
import { useEffect } from 'react'

export default function Confirmation() {
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 7000)
  }, [])
  return (
    <main className="flex min-h-screen w-full justify-center p-12">
      <div className="flex flex-col items-center">
        <h1 className=" mt-2 text-4xl items-start">
          Thank you for using Art Store!
        </h1>
        <p className="md:w-1/2 text-lg mt-8">
          Your order has been confirmed and will be delivered once our AI
          achieves sentience.
        </p>
        <p className="text-lg md:w-1/2 mt-2">
          Please be prepared for an array of futuristic payment methods that may
          include, but are not limited to, mind-melding transactions,
          interdimensional banking, or telepathic transfers.
        </p>
      </div>
    </main>
  )
}
