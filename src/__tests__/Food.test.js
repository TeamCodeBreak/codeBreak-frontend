import { rest } from "msw";
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Food from '../components/food/Food';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(
      ctx.json({
        results: [{name: 'Waffle Window'}],
        // address: '4708 NW Bethany Blvd, Beaverton, OR 97229-9258',
      })
    )
  })
);

beforeAll(()=>{
  server.listen
})

describe('Testing the Food Component', () => {
it('Should send response when called upon food api', async()=>{

  render(<Food/>)

  await waitFor(()=>{
    screen.getByTestId('results');
    // screen.getByTestId('address')
  })
  expect(screen.getByTestId('results')).toBeInTheDocument();
  // expect(screen.getByTestId('Waffle Window')).toBeInTheDocument();


})

})
