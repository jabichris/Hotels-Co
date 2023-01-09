import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
// This is needed for mocking 'next/link':
jest.mock('next/dist/client/router', () => require('next-router-mock'));  

describe('Home', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  it('renders a heading', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: /Hotel & Co/i,
    })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("Hotel & Co")
  })
})
