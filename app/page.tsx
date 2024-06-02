import Navbar from './ui/navbar/navbar'
import PreviewSelect from './ui/preview-select'
import Quote from './ui/quote'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-12">
        <PreviewSelect />

        <hr className="w-2/5 border-2 border-black mt-8 md:mt-20  mb-8 md:mb-16" />
        <h2 className="text-2xl md:text-5xl font-bold mb-6 md:mb-10">
          The Art Of Automation
        </h2>
        {<Quote />}
      </main>
    </>
  )
}
