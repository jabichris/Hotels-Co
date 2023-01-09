import { render } from '@testing-library/react'
import Home from '@/pages/index'
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));
// This is needed for mocking 'next/link':
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('next-router-mock', () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });
it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})
})