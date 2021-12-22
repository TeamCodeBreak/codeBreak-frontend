import * as React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticTimePicker from '@mui/lab/StaticTimePicker';
import Container from '@mui/material/Container';
import './breakReminder.scss';
import { useState, useEffect } from 'react';

export default function BreakReminder() {
  const [value, setValue] = React.useState(new Date());

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

        const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
        const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);
        
        setCounter(counter => {
          if (counter <= 0) {
            // TODO: have model pop up
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

  function handleChange (e) {
    let userBreakInterval = e.target.value * 60;
    setCounter(userBreakInterval);
  }

  function handleSubmit (e) {
    e.preventDefault();
  }

  return (
    <Container id="breakReminder">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticTimePicker
          displayStaticWrapperAs="mobile"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <div className="time">
      <form onSubmit={handleSubmit}>
          <input
            type='number'
            min='0'
            placeholder="set Break time in min"
            name="breaktime"
            onChange={handleChange}
          />
        </form>
        <span className="minute">{minute}</span>
        <span>:</span>
        <span className="second">{second}</span>
      </div>
      <div>
         <button onClick={() => setIsActive(!isActive)}>
           {isActive ? "Pause": "Start"}
          </button>
         <button onClick={stopTimer}>reset</button>
       </div>
    </Container>
  );
}
