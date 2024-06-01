import Navbar from './ui/navbar/navbar'
import PreviewSelect from './ui/preview-select'
import Quote from './ui/quote'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-12">
        <PreviewSelect />

        <hr className="w-2/5 border-2 border-black mt-24 mb-16" />
        <h2 className="text-2xl md:text-5xl font-bold mb-10">
          The Art Of Automation
        </h2>
        {<Quote />}
      </main>
    </>
  )
}
