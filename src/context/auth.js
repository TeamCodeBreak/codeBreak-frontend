import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import axios from 'axios';
import jwt from 'jsonwebtoken';

export const AuthContext = React.createContext();


const SECRET = process.env.REACT_APP_SECRET || 'secretlol';
const DATABASE_URL = process.env.REACT_APP_URL;


function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);

  let state = {
    isLoggedIn,
    user,
    isAuthorized,
    login,
    token,
    logout,
    setLogInState,
    register,
  };

  function isAuthorized(capability) {
    // check user capabilities and return a boolean
    return user?.capabilities?.includes(capability);
  }

  async function login(username, password) {
    if (username === '' || password === '') {
      alert('please enter username and password');
    }

    try {
      let response = await axios.post(`${REACT_APP_URL}/signin`, {}, {
        auth: {
          username,
          password,
         }
      );
      const token = jwt.sign(response.data.user, SECRET);
      validateToken(token);
    } catch (e) {
      console.log('login error', e);
    }
  }

  function validateToken(token) {
    try {
      let user = jwt.verify(token, SECRET);
      setLogInState(true, token, user);
    } catch (e) {
      setLogInState(false, null, {});
      console.log('Error validating token:', e);
    }
  }

  function logout() {
    if (isLoggedIn) {
      setLogInState(false, null, {});
    }
  }

  function setLogInState(boolean, token, user) {
    cookie.save('auth', user?.token);
    setUser(user);
    setLoggedIn(boolean);
    setToken(token);
  }

  useEffect(() => {
    try {
      const qs = new URLSearchParams(window.location.search);
      const cookieToken = cookie.load('auth');
      const token = qs.get('token');
      cookie.save('auth', token || cookieToken || null);
      validateToken(token);
    } catch (e) {
      console.log('useEffect Context Auth error', e);
    }
  }, []);

  async function register(username, password) {
    if (username === '' || password === '') {
      alert('Please enter a username and password');
    }

    try {
      let res = await axios.post(`${REACT_APP_URL}/signup`, { username, password, role: 'admin' });
      const token = jwt.sign(res.data.user, SECRET);
      validateToken(token);
    } catch (err) {
      console.log('error signing in', err);
      return false;
    }
  }

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
