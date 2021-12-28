import { render, screen } from '@testing-library/react';
import App from '../App';
import ThemeProvider from '../context/theme';
import AuthProvider from '../context/auth';
import '@testing-library/jest-dom/extend-expect';

test('renders learn react link', () => {
  render(
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  );
  const button = screen.getByTestId('enter');
  expect(button).toBeInTheDocument();
});
