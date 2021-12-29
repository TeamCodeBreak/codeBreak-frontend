import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './context/auth.js';
import './index.scss';
import App from './App';
import Theme from './context/theme'
import './App.scss';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Theme>
      <App />
      </Theme>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
