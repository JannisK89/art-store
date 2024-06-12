'use client'

import Link from 'next/link'
import MenuIcon from './menu-icon'
import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { ImGithub, ImLinkedin } from 'react-icons/im'
import CartButton from '../cartButton'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type Link = {
  text: string
  url: string
}

const links: Link[] = [
  { text: 'Home', url: '/' },
  { text: 'Shop', url: '/shop' },
  { text: 'About', url: '/about' },
]

const printNav = () => {
  return (
    <nav>
      <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-10 md:mr-20 font-medium md:font-medium text-xl md:text-base">
        {links.map((link) => (
          <li
            className="hover:scale-125 transition ease-in-out hover:text-sky-500"
            key={link.text}
          >
            <Link href={link.url}> {link.text} </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathName = usePathname()

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      isExpanded
    ) {
      setIsExpanded(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  useEffect(() => {
    setIsExpanded(false)
  }, [pathName])

  const expandMenu = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <header className="w-full py-2 border-black shadow ">
      <div className="container px-8 flex items-center justify-between h-16">
        <Link
          className="flex items-center gap-2 hover:scale-125 hover:text-sky-500 transition ease-in-out"
          href="/"
        >
          <Image
            src="/art/ml.png"
            alt="Art Store Logo"
            width={50}
            height={50}
          />
          <span className="font-medium  text-2xl">Art Store</span>
        </Link>
        <div className="hidden md:block">{printNav()}</div>
        <div className="md:flex gap-5 mr-4 ">
          <CartButton />
          <Link
            className="hidden md:block"
            href="https://github.com/JannisK89"
            target="_blank"
          >
            <ImGithub className="text-2xl transition hover:text-sky-500 hover:scale-125 ease-in-out" />
          </Link>
          <Link
            className="hidden md:block"
            href="https://www.linkedin.com/in/jannis-karanikis-58248a179"
            target="_blank"
          >
            <ImLinkedin className="text-2xl transition hover:text-sky-500 hover:scale-125 ease-in-out" />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div ref={menuRef} className="md:hidden relative">
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
