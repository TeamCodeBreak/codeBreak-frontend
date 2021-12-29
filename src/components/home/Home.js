import RubberDucky from '../rubber-ducky/RubberDucky';
import BreakReminder from '../break-reminder/BreakReminder';
import Notes from '../notes/Notes.js';
import Food from '../food/Food.js';
import bannerDark from '../../assets/bannerDark.png'
import bannerLight from '../../assets/bannerLight.png'
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
        {theme.mode === 'light' ?
          <img id="banner" src={bannerLight} alt="banner" />
          : <img id="banner" src={bannerDark} alt="banner" />}
        <div className="home">
          <div id="break-hungry-cont">
            <div id="breakCont"><BreakReminder /></div>
              <div id="hungryCont">
              {hungry ?
                <div id="foodCont"><Food /></div>
                : <Button
                  id="hungryButton"
                  variant="contained"
                  onClick={() => setHungry(true)}>
                  Hungry?
                </Button>}
                </div>
          </div>
            <Notes />
        </div>
        <RubberDucky />
      </div>
    </div>
  );
}

export default Home;
