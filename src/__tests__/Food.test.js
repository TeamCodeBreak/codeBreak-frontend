import { rest } from "msw";
import { setupServer } from 'msw/node';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Food from '../components/food/Food';

const server = setupServer(

)
beforeAll(()=>{
  server.listen
})
