'use client'

import Image from 'next/image'
import { navigate } from '../actions/actions'
import { useEffect } from 'react'

export default function Confirmation() {
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 7000)
  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center p-12">
      <h1 className=" mt-2 text-4xl">Thank you for using Art Store!</h1>
      <p className="md:w-1/2 text-lg mt-2">
        Your order has been confirmed and will be delivered once our AI achieves
        sentience.
      </p>
      <p className="text-lg md:w-1/2 mt-2">
        Please be prepared for an array of futuristic payment methods that may
        include, but are not limited to, mind-melding transactions,
        interdimensional banking, or telepathic transfers.
      </p>
      <Image
        src="https://c.tenor.com/TMrEyOZ2PwIAAAAC/tenor.gif"
        alt="Bender from Futurama dancing"
        width={300}
        height={300}
        className="rounded-xl shadow mt-4"
      />
    </main>
  )
}
