import RubberDucky from '../rubber-ducky/RubberDucky';
import BreakReminder from '../break-reminder/BreakReminder';
import Login2 from '../login/Login2';
import Notes from '../notes/Notes.js';
import Food from '../food/Food.js'

// TODO: switch login and logout to two seaparate components
// TODO: cookie login is not working
function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: '3rem' }}><Notes />
      <Login2 />
      <BreakReminder />
      <Food />
      <RubberDucky />
    </div>
  )
}

export default Home;
