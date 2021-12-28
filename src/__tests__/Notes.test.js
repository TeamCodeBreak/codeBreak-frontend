import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import { act } from 'react-dom/test-utils';
import ThemeProvider from '../context/theme';
import AuthProvider from '../context/auth';

import Notes from '../components/notes/Notes';

const server = setupServer(
  rest.get(`${process.env.REACT_APP_URL}/notes`, (req, res, ctx) => {
    let response = [
      {
        notes: 'Harvey Cafe',
        id: 1,
        user: 'harvey',
      },
      {
        notes: 'Roop Cafe',
        id: 2,
        user: 'harvey',
      },
    ];

    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Testing the Notes Component', () => {
  it('Should update a note', async () => {
    render(
      <AuthProvider>
        <ThemeProvider>
          <Notes />
        </ThemeProvider>
      </AuthProvider>
    );

    await waitFor(() => {
      screen.getByTestId('notes');
      screen.getAllByTestId('Harvey Cafe');
    });
    expect(screen.getByTestId('notes')).toBeInTheDocument();
    expect(screen.getByTestId('Harvey Cafe')).toBeInTheDocument();
  });
});
