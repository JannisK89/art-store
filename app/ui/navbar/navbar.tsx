'use client'

import Link from 'next/link'
import NavbarIcon from './navbar-icon'
import MenuIcon from './menu-icon'
import { useState } from 'react'
import clsx from 'clsx'

type Link = {
  text: string
  url: string
}

type AppProps = {
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

const links: Link[] = [
  { text: 'Home', url: '/' },
  { text: 'Challenges', url: '/' },
  { text: 'About', url: '/' },
]

const printNav = () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-10 font-medium md:font-medium text-xl md:text-base">
        {links.map((link) => (
          <li className=" hover:underline hover:text-gray-500" key={link.text}>
            <Link href={link.url}> {link.text} </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Navbar({ difficulty }: AppProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const expandMenu = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <header className="w-full py-2 border-black shadow">
      <div className="container px-8 md:px-8 flex items-center justify-between h-16">
        <Link className="flex items-center gap-2" href="#">
          <NavbarIcon />
          <span className="font-medium  text-2xl ">Art Store</span>
        </Link>
        <div className="hidden md:block">{printNav()}</div>
        <div className="hidden md:block">
          Difficulty:{' '}
          <span className="text-yellow-500 ml-1"> {difficulty}</span>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden relative">
          <button onClick={expandMenu}>
            <MenuIcon isExpanded={isExpanded} />
          </button>
          <div
            className={clsx(
              !isExpanded && 'hidden',
              'absolute bg-neutral-50 p-8 -right-8 border shadow rounded-md'
            )}
          >
            {printNav()}
          </div>
        </div>
      </div>
    </header>
  )
}
