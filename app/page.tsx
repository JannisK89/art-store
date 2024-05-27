import Navbar from './ui/navbar/navbar'

export default function Home() {
  return (
    <>
      <Navbar difficulty="Easy" />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1> Hello World!</h1>
      </main>
    </>
  )
}
