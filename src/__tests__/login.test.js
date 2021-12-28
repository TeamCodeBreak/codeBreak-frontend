import React from 'react';
import ReactDOM from 'react-dom';
import Login from '../components/login/Login';
import AuthProvider from '../context/auth.js';
import Theme from '../context/theme';

// import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <AuthProvider>
      <Theme>
        <Login />
      </Theme>
    </AuthProvider>,
    div
  );
});

// it('logs in a existing username and password', () => {});

// it('does not log in a non-existent username/password');

// it('creates a new username and password on signup');
