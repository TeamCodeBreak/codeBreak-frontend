import { rest } from "msw";
import { setupServer } from 'msw/node';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {act} from 'react-dom/test-utils';

import Food from '../components/food/Food';

const server = setupServer(
  rest.post(`${process.env.REACT_APP_URL}/food`, (req, res, ctx) => {
    return res(
      ctx.json({
        data: [{
          name: 'Harvey Cafe',
          address: '4708 NW Bethany Blvd, Beaverton, OR 97229-9258',
      }],
      })
    )
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('Testing the Food Component', () => {
it('Should send response when called upon food api and render data in Food Component', async()=>{

  render(<Food/>)
  const button = screen.getByRole('button')
  act(() => {
   fireEvent.submit(button)
  })
  await waitFor(()=>{
    screen.getByTestId('data');
    screen.getByTestId('Harvey Cafe');
    screen.getByTestId('4708 NW Bethany Blvd, Beaverton, OR 97229-9258');
  })
  expect(screen.getByTestId('data')).toBeInTheDocument();
  expect(screen.getByTestId('Harvey Cafe')).toBeInTheDocument();
  expect(screen.getByTestId('4708 NW Bethany Blvd, Beaverton, OR 97229-9258')).toBeInTheDocument();
})
})
