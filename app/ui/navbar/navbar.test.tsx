import Navbar from '@/app/ui/navbar/navbar'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

describe('Page', () => {
  it('Renders navbar with difficulty displaying correctly', () => {
    render(<Navbar difficulty="Medium" />)

    const heading = screen.getByText('Art Store')
    const difficulty = screen.getByText('Medium')

    expect(heading).toBeInTheDocument()
    expect(difficulty).toBeInTheDocument()
  })
})
