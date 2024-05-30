import Navbar from './ui/navbar/navbar'
import PreviewSelect from './ui/preview-select'
import Quote from './ui/quote'

const quotes = [
  {
    text: '"Browser automation tools are the digital artisans of the web, crafting seamless user experiences and transforming the chaos of manual testing into a symphony of efficiency and precision."',
    quoteAuthor: 'ChatGTP',
  },
  {
    text: '"In the symphony of software development, test automation plays the role of a virtuoso conductor, orchestrating precision, harmony, and efficiency."',
    quoteAuthor: 'Copilot',
  },
  {
    text: '"Test automation isn\'t just about efficiency, it\'s about weaving a digital spell that conjures flawless software"',
    quoteAuthor: 'Gemini',
  },
]

export default function Home() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center p-12">
        <PreviewSelect />

        <hr className="w-2/5 border-2 border-black mt-24 mb-16" />
        <h2 className="text-3xl md:text-5xl font-bold mb-10">
          The Art Of Automation
        </h2>
        {
          <Quote
            quoteText={randomQuote.text}
            quoteAuthor={randomQuote.quoteAuthor}
          />
        }
      </main>
    </>
  )
}
