import { render, screen, fireEvent, cleanup, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AuthProvider, { AuthContext } from '../context/auth';
import { useContext } from 'react';
import Login from '../components/login/Login';
import ThemeProvider from '../context/theme';
//use our mock service worker that mocks the auth api server
import { server } from './mock/mockServer';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Testing the Auth Context Provider', () => {

  let Test = () => (
    <AuthContext.Consumer>
    {context => (
      <>
        <p data-testid="user">{context.user?.username}</p>
        <p data-testid="isLoggedIn">{JSON.stringify(context.isLoggedIn)}</p>
        <Login data-testid="login"></Login>
        {/* <button data-testid="login" onClick={() => auth.login('test', 'test')}>Login</button> */}
        <button data-testid="logout" onClick={() => context.logout()}>Logout</button>
      </>
      )}
    </AuthContext.Consumer>
  )

  beforeEach(async () => {
    render(
      <AuthProvider>
        <ThemeProvider>
          <Test />
        </ThemeProvider>
      </AuthProvider>
    );
  });

  afterEach(() => {
    try {
      let button = screen.getByTestId('logout');
      fireEvent.click(button);
    } catch (err) {
      //catch block to handle race conditions
    }
  });

  afterEach(cleanup);

  it('Context contains properties for User and isLoggedIn', () => {

    expect(screen.getByTestId('user')).toHaveTextContent('');
    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('false');
  });

  it('Should be able to log in a user with valid username and password', async () => {
    let passwordField = screen.getByTestId('password-field');
    let usernameField = screen.getByTestId('username-field');

    fireEvent.change(passwordField, {
      target: {
        value: "test"
      }
    });

    fireEvent.change(usernameField, {
      target: {
        value: "test"
      }
    });

    let button = screen.getByTestId('login');
   
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId('user')).toHaveTextContent('test');
    });

  });

  it('Should be able to logout a User', async () => {
    let passwordField = screen.getByTestId('password-field');
    let usernameField = screen.getByTestId('username-field');

    fireEvent.change(passwordField, {
      target: {
        value: "test"
      }
    });

    fireEvent.change(usernameField, {
      target: {
        value: "test"
      }
    });
   
    let button = screen.getByTestId('login');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId('user')).toHaveTextContent('test');
      expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('true');
    });

    button = screen.getByTestId('logout');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId('user')).toHaveTextContent('');
      expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('false');
    });
  });

});
