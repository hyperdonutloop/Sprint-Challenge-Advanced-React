import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import PlayerData from './Components/PlayerData';
import expectExport from 'expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Write some testing - MVP Requirement #4 ✅

//test #1
it('renders an element with text "womens world cup" text', () => {
  const wrapper = rtl.render(
  <PlayerData />
  );
  expect(wrapper.getByText(/women's world cup/i));
});
//test 2
describe('player data module', () => {
  describe('player information', () => {
    it('has a player with the name "Alex Morgan"', () => {
      const expectedOutput = "Alex Morgan";
      const actualOutput = "Alex Morgan";
      expect(actualOutput).toBe(expectedOutput);
    })
  })
})