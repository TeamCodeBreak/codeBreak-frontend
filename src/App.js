import './App.scss';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import SignUp from './components/sign-up/Sign-Up.js';
import Login from './components/login/Login.js';
import RubberDucky from './components/rubber-ducky/RubberDucky';
import Notes from './components/notes/Notes.js';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap/scss/bootstrap";

function App() {
  return (
    <div className="App">
      <Header />
      <p>hello world</p>
      <Login />
      <SignUp />
      <Notes />
      <RubberDucky />
      <Footer />
    </div>
  );
}

export default App;
