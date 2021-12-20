import React from 'react';
// import { useEffect, useState, useContext } from 'react';
import SignUp from './components/sign-up/Sign-Up.jsx';
import Login from './components/login/Login.jsx';
// import Auth from './components/auth/Auth.jsx';
// import Form from './components/form/Form.js';
// import Theme from './context/theme.js';
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.scss';
// import Home from './components/home/Home.jsx';
// import AboutUs from './components/about-us/AboutUs.jsx';

// import axios from 'axios';

// const DATABASE_URL = process.send.REACT_APP_URL || 'localhost:3000'; // ------ which link?

function App() {

  // useEffect(() => {
  //   handleGet();
  // },

  // async function handleGet() {
  //   let response = await axios.get(`${DATABASE_URL}/ROUTE_FROM_SERVER`)
  //   // TODO: what do we need to GET?
  // },

  return (
    <div className='App'>
      <Header />
      <Login />
      <SignUp />
      <p>'ello, top of the mornin'</p>
      {/* <Auth capability="read"> // check with server to see capabilities in User model
        <Header /> // TODO: fill out what goes in Header
      </Auth>
      <Auth capability="read">
        <Auth capability="create">
          <form>
            // TODO: do we need a form here? Maybe not..or maybe not yet
          </form>
        </Auth>
      </Auth> */}
      <Footer />
    </div>
  );
}

export default App;
