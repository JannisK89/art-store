'use client'

type AppProps = { quoteText: string; quoteAuthor: string }

export default function Quote({ quoteText, quoteAuthor }: AppProps) {
  return (
    <p
      suppressHydrationWarning={true}
      className="w-4/5 text-lg italic text-center mb-12"
    >
      {quoteText}
      <span suppressHydrationWarning={true} className="font-bold not-italic">
        {' '}
        - {quoteAuthor}
      </span>
    </p>
  )
}
