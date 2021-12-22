import './App.scss';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
// import SignUp from './components/sign-up/Sign-Up.js';
import SignUp2 from './components/sign-up/SignUp2.js';
// import Login from './components/login/Login.js';
import Login2 from './components/login/Login2';
import RubberDucky from './components/rubber-ducky/RubberDucky';
import BreakReminder from './components/break-reminder/BreakReminder.js';
import Notes from './components/notes/Notes.js';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/scss/bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <p>hello world</p>
      <SignUp2 />
      <Login2 />
      <Notes />
      <BreakReminder />
      <RubberDucky />
      <Footer />
    </div>
  );
}

export default App;
