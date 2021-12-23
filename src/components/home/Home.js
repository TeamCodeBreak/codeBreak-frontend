import RubberDucky from '../rubber-ducky/RubberDucky';
import BreakReminder from '../break-reminder/BreakReminder';
import Logout from '../logout/Logout';
import Notes from '../notes/Notes.js';
import Food from '../food/Food.js';
import './home.scss';

// TODO: cookie login is not working
function Home(props) {
  return (

    <div className="home">

  
      <Notes />
      <Logout showSignup={props.showSignup} setShowSignup={props.setShowSignup} />

      <BreakReminder />
      <Food />
      <RubberDucky />
    </div>
  );
}

export default Home;
