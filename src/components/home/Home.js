import RubberDucky from '../rubber-ducky/RubberDucky';
import BreakReminder from '../break-reminder/BreakReminder';
import Notes from '../notes/Notes.js';
import Food from '../food/Food.js';
import './home.scss';

// TODO: cookie login is not working
function Home(props) {
  return (
    <div className="home">
      <Notes />
      <BreakReminder />
      <Food />
      <RubberDucky />
    </div>
  );
}

export default Home;
