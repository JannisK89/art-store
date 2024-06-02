import Link from 'next/link'
import { ImGithub } from 'react-icons/im'

export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col md:items-center p-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-10">
          About Art Store
        </h1>
        <p className="md:w-3/5 text-lg md:text-xl mb-6">
          Art Store is a unique digital art gallery crafted specifically for
          testers and automation engineers. It provides a dedicated space where
          professionals can freely practice, enhance, and hone their automation
          skills.
        </p>
        <p className="md:w-3/5 text-lg md:text-xl mb-6">
          This platform is designed to be easily self-hosted, allowing you to
          set it up on your own infrastructure with minimal effort. We encourage
          the community to contribute by offering suggestions for improvements
          or by submitting pull requests. Your ideas and contributions are
          invaluable in helping us create a more robust and versatile tool for
          automation testing.
        </p>
        <p className="md:w-3/5 text-lg md:text-xl mb-6">
          Join us in building a collaborative environment where learning and
          innovation thrive. Let’s make automation easier and more accessible
          for everyone.
        </p>
        <p className="md:w-3/5 text-lg md:text-xl mb-6">
          Feel free to explore, experiment, and elevate your automation
          capabilities with Art Store.
        </p>
        <Link href={'https://github.com/JannisK89/art-store'} target="_blank">
          <ImGithub className="text-5xl hover:text-blue-400" />
        </Link>
      </main>
    </>
  )
}
