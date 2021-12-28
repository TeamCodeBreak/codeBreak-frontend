import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import BreakReminder from '../components/break-reminder/BreakReminder'
import ThemeProvider from '../context/theme';
import React from 'react';
import ReactDOM from 'react-dom';

afterEach(cleanup);

describe('Testing Break Reminder Component', () => {

  it('Should properly render the break reminder component', async () => {
    const div = document.createElement('div');
    ReactDOM.render(<ThemeProvider><BreakReminder></BreakReminder></ThemeProvider>, div)
  });

  it('Displays countdown starting at 00:00', async () => {
    const {getByTestId} = render(<ThemeProvider><BreakReminder></BreakReminder></ThemeProvider>)

    expect(getByTestId('timerDisplay')).toHaveTextContent('00:00');
  });

  it('Displays countdown starting at number in minutes user inputted', () => {
     act( async () => {
      const {getByTestId} = render(<ThemeProvider><BreakReminder></BreakReminder></ThemeProvider>)
      const timerDisplay = getByTestId('timerDisplay');
      const userInput = getByTestId('breakInput');
      const breakInput = '7';
      await fireEvent.change(userInput, {target: {value: breakInput}})
      expect(timerDisplay.innerHTML).toBe('07:00');
    })
  });

  it('Should start countdown when start button is clicked', () => {
    act( async () => {
      const {getByTestId} = render(<ThemeProvider><BreakReminder></BreakReminder></ThemeProvider>)
      const startButton = getByTestId('start/pauseButton');
      await fireEvent.click(startButton)
      expect(startButton.onclick).toHaveBeenCalled();
    })
  });

  it('Should reset countdown to 0 when reset button is clicked', () => {
     act( async () => {
      const {getByTestId} = render(<ThemeProvider><BreakReminder></BreakReminder></ThemeProvider>)
      const timerDisplay = getByTestId('timerDisplay');

      // set timer to 7 minutes
      const userInput = getByTestId('breakInput');
      const breakInput = '7';
      await fireEvent.change(userInput, {target: {value: breakInput}})
      expect(timerDisplay.innerHTML).toBe('07:00');
      
      // check that reset button sets timer back to 0
      const resetButton = getByTestId('resetButton');
      await fireEvent.click(resetButton)
      expect(timerDisplay.innerHTML).toBe('00:00');
    })
  });

  it('Should pause countdown when pause button is clicked', () => {
    act( async () => {
      const {getByTestId} = render(<ThemeProvider><BreakReminder></BreakReminder></ThemeProvider>)
      const pauseButton = getByTestId('start/pauseButton');
      await fireEvent.click(pauseButton)
      expect(pauseButton.onclick).toHaveBeenCalled();
    })
  });
});

