import type { Metadata } from 'next'
import './globals.css'
import { Eczar } from 'next/font/google'
import { Taviraj } from 'next/font/google'
import Navbar from './ui/navbar/navbar'

const eczar = Eczar({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-eczar',
})
const taviraj = Taviraj({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-taviraj',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Art Store ',
  description: 'Test Automation Training Art Store',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={
          eczar.variable + ' ' + taviraj.variable + ' antialiased bg-slate-50'
        }
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
