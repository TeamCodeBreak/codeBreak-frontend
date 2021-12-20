import React from 'react';
import ReactDOM from 'react-dom';
import AuthProvider from './context/auth.js';
import App from './App';
import './index.scss';
// import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
