'use client'

import Navbar from './ui/navbar/navbar'
import PreviewSelect from './ui/preview-select'

export default function Home() {
  return (
    <>
      <Navbar difficulty="Easy" />
      <main className="flex min-h-screen flex-col items-center p-12">
        <PreviewSelect />
      </main>
    </>
  )
}
