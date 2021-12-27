import { rest } from "msw";
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Food from '../components/food/Food';

const server = setupServer(
  rest.get('*', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'Waffle Window',
        address: '4708 NW Bethany Blvd, Beaverton, OR 97229-9258',
      })
    )
  })
);

beforeAll(()=>{
  server.listen
})

describe('Testing the Food Component', () => {
it('Should send response when called upon food api', async()=>{

  await waitFor(()=>{
    screen.getByTestId('name');
    scree.getByTestId('address')
  })
  expect(screen.getByTestId('Waffle Window')).toBeInTheDocument();
})


it('Should render data came from food api')


})
