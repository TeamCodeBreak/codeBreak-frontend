import './App.scss';
import Header from './components/header/Header.js';
import Footer from './components/footer/Footer.js';
import SignUp from './components/sign-up/Sign-Up.js';
import Login from './components/login/Login.js';
import Notes from './components/notes/Notes.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <p>hello world</p>
      <Login />
      <SignUp />
      <Notes />
      <Footer />
    </div>
  );
}

export default App;
