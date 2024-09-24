import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My To-Do List header', () => {
  render(<App />);
  const headerElement = screen.getByText(/My To-Do List/i);
  expect(headerElement).toBeInTheDocument();
});
