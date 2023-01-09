import { render } from '@testing-library/react';
import Home from '@/pages/index';
import Header from '@/components/Header';
import MediumCard from '@/components/MediumCard'
import mockRouter from 'next-router-mock';
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

jest.mock('next/router', () => require('next-router-mock'));
// This is needed for mocking 'next/link':
jest.mock('next/dist/client/router', () => require('next-router-mock'));
const mockedData={"location":"Rudolphborough","title":"Accounts","description":"The Football Is Good For Training And Recreational Purposes","star":54,"img":"https://loremflickr.com/640/480/nature","price":"78.00","id":"1"}
describe('next-router-mock', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
  it('renders homepage unchanged', () => {
    const queryClient = new QueryClient();

    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>

    )
    expect(container).toMatchSnapshot()
  }
  )
  it('renders Header unchanged', () => {
    const { container } = render(
      <Header />
    )
    expect(container).toMatchSnapshot()
  })
  it('renders MediumCard unchanged', () => {
    const { container } = render(
      <MediumCard key={'Accounts'} data={mockedData}/>
    )
    expect(container).toMatchSnapshot()
  })
})