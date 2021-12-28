import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
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
  }),
  rest.post(`${process.env.REACT_APP_URL}/notes`, (req, res, ctx) => {
    let response = [
      {
        notes: 'Roop Cafe',
        id: 3,
        user: 'harvey',
      },
    ];

    return res(ctx.json(response));
  }),
  rest.put(`${process.env.REACT_APP_URL}/notes`, (req, res, ctx) => {
    let response = [
      {
        notes: 'Roop Cafe 2',
        id: 3,
        user: 'harvey',
      },
    ];

    return res(ctx.json(response));
  }),
  rest.delete(`${process.env.REACT_APP_URL}/notes`, (req, res, ctx) => {
    let response = [
      {
        notes: 'Roop Cafe 2',
        id: 3,
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
  it('Should perform a GET and render a note', async () => {
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
  it('Should perform a DELETE on a note', () => {
    act(async () => {
      render(
        <AuthProvider>
          <ThemeProvider>
            <Notes />
          </ThemeProvider>
        </AuthProvider>
      );
      const button = screen.getByTestId('delete-button');
      fireEvent.submit(button);
      expect(button.onclick).toHaveBeenCalled();
    });
  });
  it('Should POST a new note', () => {
    act(async () => {
      render(
        <AuthProvider>
          <ThemeProvider>
            <Notes />
          </ThemeProvider>
        </AuthProvider>
      );
      const input = screen.getByTestId('input');
      fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
      await waitFor(() => {
        screen.getByTestId('Roop Cafe');
      });
      expect(screen.getByTestId('Roop Cafe')).toBeInTheDocument();
    });
  });
});
