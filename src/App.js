import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import SignUp2 from './components/sign-up/SignUp2.js';
import Login2 from './components/login/Login2';
import Home from './components/home/Home'
import { AuthContext } from './context/auth';
import AboutUs from './components/about-us/AboutUs'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext } from 'react';
import { ThemeContext } from './context/theme';
// import "bootstrap/scss/bootstrap";



function App() {


  let auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  return (
   <div className={theme.mode}>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/'
          element={auth.isLoggedIn 
            ? <Home id="home" /> 
            : <> 
                <Login2 />
                <SignUp2/>
              </>
          }/>
          <Route path='/aboutus' element={<AboutUs />}/>
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
