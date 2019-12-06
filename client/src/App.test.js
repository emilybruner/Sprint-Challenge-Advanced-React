import React from 'react';
import { render } from 'react-dom';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('Get homepage title', () => {
  const { getByText } = render(<App />);
  getByText(/Women's World Cup Players/i);
});