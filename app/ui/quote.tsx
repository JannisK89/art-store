'use client'

import { useState, useEffect } from 'react'

const quotes = [
  {
    text: '"Browser automation tools are the digital artisans of the web, crafting seamless user experiences and transforming the chaos of manual testing into a symphony of efficiency and precision."',
    author: 'ChatGTP',
  },
  {
    text: '"In the symphony of software development, test automation plays the role of a virtuoso conductor, orchestrating precision, harmony, and efficiency."',
    author: 'Copilot',
  },
  {
    text: '"Test automation isn\'t just about efficiency, it\'s about weaving a digital spell that conjures flawless software"',
    author: 'Gemini',
  },
]
export default function Quote() {
  const [quote, setQuote] = useState(quotes[0])
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    setQuote(randomQuote)
  }, [])

  return (
    <p className="w-4/5 text-lg italic text-center mb-12">
      {quote.text}
      <span className="font-bold not-italic"> - {quote.author}</span>
    </p>
  )
}
