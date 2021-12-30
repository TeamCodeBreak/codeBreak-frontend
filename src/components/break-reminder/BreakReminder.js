import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Box } from '@mui/system';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  LinearProgress
} from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BreakReminderModal from '../break-modal/Modal';
import { ThemeContext } from '../../context/theme';
import './breakReminder.scss';
import { When } from 'react-if';

function BreakReminder() {
  const theme = useContext(ThemeContext);

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}` : secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}` : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter(counter => {
          if (counter <= 0) {
            handleOpen();
            stopTimer();
          }
          return counter - 1;
        });
      }, 1000)
    }
    // cleanup function to clear the interval when the effect stops running.
    return () => clearInterval(intervalId);
  }, [isActive, counter])

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond('00');
    setMinute('00');
  }

  // MODAL: state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleChange(e) {
    let userBreakInterval = e.target.value * 60;
    setCounter(userBreakInterval);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={theme.mode}>
      <div id="breakReminder" data-testid="breakReminder">
        <Box className="time">
          <h2 >Let's break in...</h2>
          <FormControl id='formControl' onSubmit={handleSubmit}>
            <InputLabel id="formInput">Take your next break in...</InputLabel>
            <OutlinedInput
              data-testid="breakInput"
              id="outlinedInput"
              type='number'
              min='0'
              placeholder="Minutes"
              name="breaktime"
              onChange={handleChange}>
            </OutlinedInput>
            <div id="timerDiv" data-testid="timerDisplay">
              <span className="minute">{minute}</span>
              <span>:</span>
              <span className="second">{second}</span>
            </div>
            <When condition={counter > 0}>
              <div id="progressBarDiv">
                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={counter} />
                </Box>
              </div>
            </When>
            <Stack spacing={2} direction="row">
              <Button variant="contained" data-testid="start/pauseButton" id="startTimer" onClick={() => setIsActive(!isActive)}>{isActive ? "Pause" : "Start"}</Button>
              <Button
                data-testid="resetButton"
                variant="contained" id="resetTimer" onClick={stopTimer}>Reset</Button>
            </Stack>
          </FormControl>
          <BreakReminderModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </Box>
      </div >
    </div >
  );
}

export default BreakReminder;
