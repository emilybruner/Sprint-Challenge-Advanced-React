import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { PlayerCard } from './components/PlayerCard';

test('renders without crashing', () => {
  render(<App />);
});

test('toggle loads dark mode', () => {
  const { getByTestId } = render(<App />);
  getByTestId("toggle-element");
});

test('Players are defined', () => {
  const players = <PlayerCard />;
  expect(players).toBeDefined();
  expect(players).not.toBeUndefined();
  expect(players).not.toBeFalsy;
});
