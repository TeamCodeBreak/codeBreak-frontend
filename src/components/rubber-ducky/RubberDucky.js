// TODO: onHover & onClick -> text box appears with "Wanna chat?" -> if yes, click text box, brings up emulated phone, allows you to talk with no interaction, give a brief description of rubber ducky, just talk out loud. if no, click away from duck or maybe an [X] button
// EXTREME-STRETCH: voice integration? record your voice and save it? have it playback words (closed caption style)

import React from 'react';
// import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';
import Image from 'react-bootstrap/Image';
import {
  OverlayTrigger,
  PopoverBody,
  PopoverHeader,
  Popover,
} from 'react-bootstrap';
import duckyImage from '../../img/simpleDuck.png';
import './rubber-ducky.scss';

function RubberDucky() {
  // TODO: user does not want duck on screen, option to hide the duck, which then renders a button on side of screen to being him back
  // handleHide();
  const [ducky, setDucky] = React.useState(0);
  return (
    <>
      <OverlayTrigger
        trigger={['hover', 'click']}
        key='overlayTrig'
        placement='top'
        id='overlayTrigger'
        overlay={
          <Popover id='popoverId'>
            <PopoverHeader as='h3' id='popoverHeader'>
              {'Hey Dev!'}
              <br></br>
              {'Spencer here.'}
              <br></br>
              <br></br>
              {'You can tell me anything!'}
            </PopoverHeader>
            <PopoverBody id='popoverBody'>
              <p>
                As your deskmate, I am here to entertain all of your thoughts,
                ideas and curiosities.
              </p>
              <p>
                My job is to lend a listening ear as you build and debug.
              </p>
              <p>
                CLICK ME to begin.
              </p>
            </PopoverBody>
          </Popover>
        }
      >
        <Image
          onClick={() => {
            ducky === 0 ? setDucky(1) : setDucky(0);
          }}
          src={duckyImage}
          id='rubberDucky'
          class='ducky'
          ducky={ducky}
        />
      </OverlayTrigger>
    </>
  );
}

export default RubberDucky;
