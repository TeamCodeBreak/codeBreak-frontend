import RubberDucky from '../rubber-ducky/RubberDucky';
import BreakReminder from '../break-reminder/BreakReminder';
import Notes from '../notes/Notes.js';
import Food from '../food/Food.js';
import banner from '../../assets/bannerDark.png'
import Button from '@mui/material/Button';
import { ThemeContext } from '../../context/theme';
import React, { useContext, useState } from 'react';
import './home.scss';

// TODO: cookie login is not working
function Home(props) {
  const theme = useContext(ThemeContext);
  const [hungry, setHungry] = useState(false);

  return (
    <div className={theme.mode}>
      <div id="homeCont">
        <img id="banner" src={banner} alt="banner" />
        <div className="home">
          {hungry ?
            <Food />
            : <Button
              id="hungryButton"
              variant="contained"
              onClick={() => setHungry(true)}>
              Hungry?
            </Button>}
          <BreakReminder />
        </div>
        <div id="notesCont">
          <Notes />
        </div>
        <RubberDucky />
      </div>
    </div>
  );
}

export default Home;
