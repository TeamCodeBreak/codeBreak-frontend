import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import Button from '@mui/material/Button';
import SignUp from './components/sign-up/SignUp.js';
import Login from './components/login/Login';
import Container from '@mui/material/Container';
import Home from './components/home/Home';
import { AuthContext } from './context/auth';
import AboutUs from './components/about-us/AboutUs';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import lightLogo from './assets/codebrLogoLightHome.png';
import darkLogo from './assets/codebrLogoDarkHome.png';
import React, { useContext } from 'react';
import { ThemeContext } from './context/theme';

function App() {
  let auth = useContext(AuthContext);
  const theme = useContext(ThemeContext);

  const [showSignup, setShowSignup] = React.useState(false);
  const [enterSite, setEnter] = React.useState(false);

  return (
    <div className={theme.mode}>
      <Router>
        <Header
          showSignup={showSignup}
          setShowSignup={setShowSignup}
          setEnter={setEnter}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              auth.isLoggedIn ? (
                <Home
                  id="home"
                  showSignup={showSignup}
                  setShowSignup={setShowSignup}
                />
              ) : enterSite ? (
                <>
                  <Login
                    showSignup={showSignup}
                    setShowSignup={setShowSignup}
                  />
                  <SignUp showSignup={showSignup} />
                </>
              ) : (
                <Container id="loginPage">
                  {theme.mode === 'light' ? (
                    <img src={darkLogo} alt="logo" />
                  ) : (
                    <img src={lightLogo} alt="logo" />
                  )}
                  <Button
                    variant="contained"
                    id="homeButton"
                    onClick={() => setEnter(true)}
                    data-testid="enter"
                  >
                    enter
                  </Button>
                </Container>
              )
            }
          />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
