import * as React from 'react';
// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import StaticTimePicker from '@mui/lab/StaticTimePicker';
// import Container from '@mui/material/Container';
import './breakReminder.scss';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import BreakReminderModal from '../break-modal/Modal';

export default function BreakReminder() {

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;
    console.log(isActive);
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
            // TODO: have model pop up
            handleOpen();
            // TODO: showModal default false
            // TODO: setShowModal to true
            console.log('timer stopped');
            stopTimer()
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
    setMinute('00')
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
    <div id="breakReminder">
      <Box className="time">
        <FormControl id='formControl' onSubmit={handleSubmit}>
          <InputLabel>Next Break in...</InputLabel>
          <OutlinedInput
            type='number'
            min='0'
            placeholder="Minutes"
            name="breaktime"
            onChange={handleChange}>
          </OutlinedInput>
          <div id="timerDiv">
            <span className="minute">{minute}</span>
            <span>:</span>
            <span className="second">{second}</span>
          </div>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => setIsActive(!isActive)}>{isActive ? "Pause" : "Start"}</Button>
            <Button variant="contained" onClick={stopTimer}>Reset</Button>
          </Stack>
        </FormControl>
        <BreakReminderModal open={open} handleOpen={handleOpen} handleClose={handleClose} />
      </Box>
    </div>
  );
}
