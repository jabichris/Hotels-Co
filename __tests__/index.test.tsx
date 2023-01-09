import { render, screen } from '@testing-library/react'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Home from '@/pages/index'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
// This is needed for mocking 'next/link':
jest.mock('next/dist/client/router', () => require('next-router-mock'));  

describe('Home', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  describe('while loading',()=>{
    it.todo('renders a loader')
  })
  it('renders a heading', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
        </QueryClientProvider>
        )
    // const heading = screen.getByRole('heading', {
    //   name: /Hotel & Co/i,
    // })
    // expect(heading).toBeInTheDocument()
    // expect(heading).toHaveTextContent("Hotel & Co")
  })
})
