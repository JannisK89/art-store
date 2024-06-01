'use client'

import Link from 'next/link'
import NavbarIcon from './navbar-icon'
import MenuIcon from './menu-icon'
import { useState } from 'react'
import clsx from 'clsx'
import { ImGithub, ImLinkedin } from 'react-icons/im'

type Link = {
  text: string
  url: string
}

const links: Link[] = [
  { text: 'Home', url: '/' },
  { text: 'Store', url: '/' },
  { text: 'About', url: '/about' },
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

export default function Navbar() {
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
        <div className="hidden md:flex gap-3 mr-4">
          <Link href="https://github.com/JannisK89" target="_blank">
            <ImGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jannis-karanikis-58248a179"
            target="_blank"
          >
            <ImLinkedin />
          </Link>
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
