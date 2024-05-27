import Link from 'next/link'
import NavbarIcon from './navbar-icon'

type Link = {
  text: string
  url: string
}

type AppProps = {
  difficulty: 'Easy' | 'Medium' | 'Hard'
}

export default function Navbar({ difficulty }: AppProps) {
  const links: Link[] = [
    { text: 'Home', url: '/' },
    { text: 'Challenges', url: '/' },
    { text: 'About', url: '/' },
  ]
  return (
    <header className="w-full text-gray-50 py-2  shadow">
      <div className="container px-4 md:px-8 flex items-center justify-between h-16">
        <Link className="flex items-center gap-2" href="#">
          <NavbarIcon />
          <span className="font-semibold text-xl ">Art Store</span>
        </Link>
        <nav>
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li
                className="font-medium hover:underline hover:text-gray-300"
                key={link.text}
              >
                <Link href={link.url}> {link.text} </Link>
              </li>
            ))}
          </ul>
        </nav>
        <h2 className="font-medium ">
          Difficulty:{' '}
          <span className="text-yellow-500 ml-1"> {difficulty}</span>
        </h2>
      </div>
    </header>
  )
}
